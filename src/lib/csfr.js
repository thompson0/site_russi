import { cookies } from "next/headers"
import crypto from "crypto"

const TOKEN_NAME = "csrf_token"

export function generateCsrfToken() {
  const token = crypto.randomBytes(32).toString("hex")
  const cookieStore = cookies()
  cookieStore.set(TOKEN_NAME, token, {
    httpOnly: false, 
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  })
  return token
}

export function validateCsrf(req) {
  const cookieStore = cookies()
  const cookieToken = cookieStore.get(TOKEN_NAME)?.value
  const headerToken = req.headers.get("x-csrf-token")
  if (!cookieToken || !headerToken || cookieToken !== headerToken) {
    return false
  }
  return true
}

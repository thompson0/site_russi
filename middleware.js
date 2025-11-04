import { NextResponse } from "next/server"

function generateToken() {
  const arr = new Uint8Array(32)
  crypto.getRandomValues(arr)
  return Array.from(arr, (b) => b.toString(16).padStart(2, "0")).join("")
}

export function middleware(req) {
  const { pathname } = req.nextUrl
  const res = NextResponse.next()

  if (!pathname.startsWith("/admin") && !pathname.startsWith("/user")) {
    return res
  }

  const token =
    req.cookies.get("token")?.value ||
    req.headers.get("authorization")?.replace("Bearer ", "")

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  const csrfCookie = req.cookies.get("csrf_token")
  if (!csrfCookie) {
    const csrfToken = generateToken()
    res.cookies.set("csrf_token", csrfToken, {
      httpOnly: false,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    })
  }

  return res
}

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
}

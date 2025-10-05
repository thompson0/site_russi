import { NextResponse } from "next/server";
import { verifyToken } from "../lib/jwt";

export function middleware(req) {
  const token = req.cookies.get("token")?.value || req.headers.get("authorization")?.replace("Bearer ", "");
  
  const url = req.nextUrl.pathname;

  if (url.startsWith("/admin") || url.startsWith("/user")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (url.startsWith("/admin") && decoded.role !== "admin") {
      return NextResponse.redirect(new URL("/user", req.url));
    }
  }

  return NextResponse.next();
}

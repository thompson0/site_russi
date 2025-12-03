import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const ROLE_ROUTES = {
  '/admin/usuarios': ['admin', 'supervisor'],
  '/admin/setores': ['admin'],
  '/admin/videos-internos': ['admin', 'supervisor'],
  '/admin/rh': ['admin'],
  '/admin': ['admin', 'supervisor', 'vendedor_interno', 'instalador'],
  '/user': ['admin', 'supervisor', 'vendedor_interno', 'instalador'],
  '/interno': ['admin', 'supervisor', 'vendedor_interno', 'instalador'],
};

async function verifyJWT(token) {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname === '/favicon.ico' ||
    pathname === '/login' ||
    pathname === '/' ||
    pathname.startsWith('/visitante') ||
    pathname.startsWith('/catalogo')
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const decoded = await verifyJWT(token);

  if (!decoded) {
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('token');
    return response;
  }

  const userRole = decoded.role || 'vendedor_interno';

  for (const [route, allowedRoles] of Object.entries(ROLE_ROUTES)) {
    if (pathname.startsWith(route)) {
      if (!allowedRoles.includes(userRole)) {
        if (userRole === 'instalador') {
          return NextResponse.redirect(new URL('/interno/treinamentos', request.url));
        } else if (userRole === 'vendedor_interno') {
          return NextResponse.redirect(new URL('/interno', request.url));
        }
        return NextResponse.redirect(new URL('/login', request.url));
      }
      break;
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-user-id', String(decoded.id));
  requestHeaders.set('x-user-role', userRole);
  requestHeaders.set('x-user-setor', decoded.setor_id ? String(decoded.setor_id) : '');

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)',
  ],
};

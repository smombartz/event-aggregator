import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Protected routes that require authentication
  const protectedRoutes = ['/dashboard'];
  
  // Public routes that should redirect to dashboard if authenticated
  const publicRoutes = ['/login'];
  
  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );
  
  // Check if the current path is a public route
  const isPublicRoute = publicRoutes.some(route => 
    pathname.startsWith(route)
  );
  
  // Get authentication status from cookies (we'll need to set this in the auth provider)
  const hasAuthToken = request.cookies.get('auth-token');
  
  // Redirect unauthenticated users from protected routes to login
  if (isProtectedRoute && !hasAuthToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // Redirect authenticated users from public routes to dashboard
  if (isPublicRoute && hasAuthToken) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
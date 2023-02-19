// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
	const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

	// Si no hay session redireccionamos a '/auth/login
	if (!session) {
		const url = req.nextUrl.clone();
		url.pathname = '/auth/login';
		return NextResponse.redirect(url);
	}

	return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: '/'
};

/**
 * See "Matching Paths"
 * 
 * 1. * is zero or more.
 * 2. ? is zero or one.
 * 3. + one or more.
 * 
matcher: [
	'/api/entries/:path*', // SI /api/entries, SI /api/entries/6357fcf9dc98064a1b0709ee
	'/api/entries/:path?', // SI /api/entries, SI /api/entries/6357fcf9dc98064a1b0709ee
	'/api/entries/:path+' // NO /api/entries, SI /api/entries/6357fcf9dc98064a1b0709ee
];
 */

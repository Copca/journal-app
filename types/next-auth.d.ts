import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
	// 	/** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
	interface JWT {
		accessToken: string;
		usuario: {
			id: number;
			email: string;
			nombre: string;
		};
	}
}

// Extendemos la propiedad session.accessToken al callback session
declare module 'next-auth' {
	interface User {
		id: number;
		email: string;
		nombre: string;
	}

	interface Session {
		accessToken: string;
		usuario: {
			id: number;
			email: string;
			nombre: string;
		};
	}
}

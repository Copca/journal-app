import NextAuth, { User } from 'next-auth';
import type { NextAuthOptions } from 'next-auth';

import Credentials from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

import { dbUsuarios } from '@/database';

export const authOptions: NextAuthOptions = {
	// Configure one or more authentication providers
	providers: [
		Credentials({
			name: 'Custom Login',
			credentials: {
				email: {
					label: 'Correo:',
					type: 'email',
					placeholder: 'correo@correo.com'
				},
				password: {
					label: 'Contraseña:',
					type: 'password',
					placeholder: 'Contraseña'
				}
			},
			async authorize(credenttials) {
				// autorizacion inorrecta -> return null
				// autorizacion correcta -> return {id, email, nombre}
				return await dbUsuarios.checkEmailPassword(
					credenttials?.email!,
					credenttials?.password!
				);
			}
		}),
		GithubProvider({
			clientId: process.env.GITHUB_ID || '',
			clientSecret: process.env.GITHUB_SECRET || ''
		})
	],
	callbacks: {
		async jwt({ token, account, user }) {
			if (account) {
				token.accesToken = account.access_token;

				switch (account?.type) {
					case 'credentials':
						token.usuario = user as User; // user contiene la informacion retornada en credentials
						break;

					case 'oauth':
						// Busca o guarda en DB el usuario logeado con un Provider (gitHub)
						token.usuario = await dbUsuarios.oAuthLoginRegistro(
							user?.email || '',
							user?.name || ''
						);
						break;
				}
			}

			// En esta parte el token ya contiene datos del usuario {_id, email, role, name }
			return token;
		},

		async session({ session, token, user }) {
			// Cabiamos la información por default de session.user por token.user = {_id, email, role, name }
			session.accessToken = token.accessToken;
			session.usuario = token.usuario;

			return session; // Información accesible desde el FronEnd
		}
	},
	// Custom Pages
	pages: {
		signIn: '/auth/login',
		newUser: '/auth/register'
	},
	session: {
		strategy: 'jwt',
		maxAge: 2592000, // 2592000seg = 30 días duración se la sesión
		updateAge: 86400 // 86400seg = 24 hrs cada cuanto se actualiza la sesión
	}
};
export default NextAuth(authOptions);

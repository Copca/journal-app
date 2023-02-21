/**
 * Manejamos el redireccionamiento con SSR getServerSideProps
 */

import { GetServerSideProps } from 'next';
import { NextPage } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';

import { LayoutAuth } from '@/components/layouts';
import { FormLogin } from '@/components/ui';

const LoginPage: NextPage = () => {
	return (
		<LayoutAuth>
			<div className='bg-white rounded p-8 w-full max-w-lg mx-auto'>
				<h1 className='text-xl font-bold mb-4'>Login</h1>

				<FormLogin />
			</div>
		</LayoutAuth>
	);
};

export default LoginPage;

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request tim
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	const session = await getServerSession(req, res, authOptions);

	// Si tenemos session redireccionamos a '/''
	if (session) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		};
	}

	return {
		props: {}
	};
};

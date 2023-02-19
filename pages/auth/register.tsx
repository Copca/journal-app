/**
 * Manejamos el redireccionamiento con SSR getServerSideProps
 */

import { GetServerSideProps, NextPage } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';

import { LayoutAdmin } from '@/components/layouts';
import { FormRegistrarUsuario } from '@/components/ui';

const RegistroPage: NextPage = () => {
	return (
		<LayoutAdmin>
			<div className='bg-white rounded p-8 w-full max-w-lg mx-auto'>
				<h1 className='text-xl font-bold mb-4'>Crear Cuenta</h1>

				<FormRegistrarUsuario />
			</div>
		</LayoutAdmin>
	);
};

export default RegistroPage;

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

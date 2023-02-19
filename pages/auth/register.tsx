import { NextPage } from 'next';
import Link from 'next/link';

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

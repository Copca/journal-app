/**
 * Manejamos la protección de ruta on el middleware, se podría hacer con SSR (getServerSideProps) como en la página de registro, pero se tendria que hacer lo mismo en cada una de las rutas
 */

import { NextPage } from 'next';
import { useSession } from 'next-auth/react';

import { LayoutJournal } from '@/components/layouts';
import { NotaView } from '@/components/views';
import { Boton } from '@/components/ui';

const HomePage: NextPage = () => {
	// const session = useSession();
	// console.log(session);

	return (
		<LayoutJournal>
			<div className='container p-4 h-full'>
				{/* < NadaSeleccionadoView/> */}
				<NotaView />

				<Boton />
			</div>
		</LayoutJournal>
	);
};

export default HomePage;

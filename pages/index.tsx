/**
 * Manejamos la protección de ruta on el middleware, se podría hacer con SSR (getServerSideProps) como en la página de registro, pero se tendria que hacer lo mismo en cada una de las rutas
 */

import { NextPage } from 'next';

import { useAppSelector } from '../hooks/react-hook';

import { LayoutJournal } from '@/components/layouts';
import { NadaSeleccionadoView, NotaView } from '@/components/views';
import { Boton } from '@/components/ui';

const HomePage: NextPage = () => {
	const { isActiveForm } = useAppSelector((state) => state.journal);

	return (
		<LayoutJournal>
			<div className='container p-4 h-full'>
				{isActiveForm ? <NotaView /> : <NadaSeleccionadoView />}

				<Boton />
			</div>
		</LayoutJournal>
	);
};

export default HomePage;

import { FiStar } from 'react-icons/fi';

export const NadaSeleccionadoView = () => {
	return (
		<div className='h-full p-8'>
			<div className='bg-great-blue-800 text-white rounded-lg flex items-center justify-center h-full'>
				<div className=' text-center'>
					<p className='text-2xl font-bold mb-4'>Nada Seleccionado aún</p>
					<FiStar className='text-8xl mx-auto' />
				</div>
			</div>
		</div>
	);
};

import { IoIosSave } from 'react-icons/io';

export const NotaView = () => {
	return (
		<>
			<div className='flex justify-between mb-8'>
				<p className='text-2xl'>15 de Febrero, 2023</p>
				<button
					type='button'
					data-mdb-ripple='true'
					data-mdb-ripple-color='light'
					className='text-great-blue-800 hover:text-great-blue-600 font-bold uppercase text-sm flex gap-1 items-center'
				>
					<IoIosSave className='text-xl' />
					Guardar
				</button>
			</div>

			<form action='' className='w-3/4 mx-auto mb-8'>
				<div className='bg-slate-200 rounded-md pt-4 mb-4 w-full'>
					<div className='relative border-b-2 rounded flex justify-center'>
						<input
							type='text'
							placeholder=' '
							className='w-full z-10 bg-transparent border border-transparent focus:border-transparent outline-none py-1 px-3 peer'
						/>
						<div className='border-animated'></div>
						<label className='label-float2'>Título</label>
					</div>
				</div>

				<div className='bg-slate-200 rounded-md pt-4 w-full h-32'>
					<div className='relative border-b-2 rounded flex justify-center'>
						<textarea
							placeholder=' '
							rows={4}
							className='w-full z-10 bg-transparent border border-transparent focus:border-transparent outline-none py-1 px-3 peer'
						></textarea>
						<div className='border-animated'></div>
						<label className='label-float2'>Descripción</label>
					</div>
				</div>
			</form>

			<div>Galería de Imagenes</div>
		</>
	);
};

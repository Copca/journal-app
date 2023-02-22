import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IoIosSave } from 'react-icons/io';

import { useAppDispatch } from '@/hooks/react-hook';
import { useAppSelector } from '@/hooks/react-hook';
import { startNuevaNota } from '@/store/journal';

import { notaSchema } from '@/schema';

import { ErrorLabel } from './ErrorLabel';

type FormData = yup.InferType<typeof notaSchema>;

export const FormNota = () => {
	const dispatch = useAppDispatch();
	const { isSaving } = useAppSelector((state) => state.journal);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>({
		resolver: yupResolver(notaSchema)
		// defaultValues: cliente
	});

	const onSubmitNota = ({ titulo, contenido }: FormData) => {
		dispatch(startNuevaNota(titulo, contenido));
	};

	return (
		<form onSubmit={handleSubmit(onSubmitNota)} className='w-3/4 mx-auto mb-8'>
			<div className='flex justify-between mb-8'>
				<p className='text-2xl'>15 de Febrero, 2023</p>
				<button
					type='submit'
					data-mdb-ripple='true'
					data-mdb-ripple-color='light'
					className='text-great-blue-800 hover:text-great-blue-600 font-bold uppercase text-sm flex gap-1 items-center disabled:cursor-not-allowed disabled:opacity-50'
					disabled={isSaving}
				>
					<IoIosSave className='text-xl' />
					Guardar
				</button>
			</div>

			<div className='bg-slate-200 rounded-md pt-4 mb-4 w-full'>
				<div className='relative border-b-2 rounded flex justify-center'>
					<input
						type='text'
						placeholder=' '
						className='w-full z-10 bg-transparent border border-transparent focus:border-transparent outline-none py-1 px-3 peer'
						{...register('titulo')}
					/>
					<div className='border-animated'></div>
					<label className='label-float2'>Título</label>
				</div>
			</div>
			{errors.titulo && <ErrorLabel>{errors.titulo.message}</ErrorLabel>}

			<div className='bg-slate-200 rounded-md pt-4 w-full h-32'>
				<div className='relative border-b-2 rounded flex justify-center'>
					<textarea
						placeholder=' '
						rows={4}
						className='w-full z-10 bg-transparent border border-transparent focus:border-transparent outline-none py-1 px-3 peer'
						{...register('contenido')}
					></textarea>
					<div className='border-animated'></div>
					<label className='label-float2'>Descripción</label>
				</div>
			</div>
			{errors.contenido && <ErrorLabel>{errors.contenido.message}</ErrorLabel>}
		</form>
	);
};

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { usuarioSchema } from '@/schema';
import { ErrorLabel } from './ErrorLabel';

type FormData = yup.InferType<typeof usuarioSchema>;

export const FormRegistrarUsuario = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>({
		resolver: yupResolver(usuarioSchema)
		// defaultValues: cliente
	});

	const onSubmitForm = (data: FormData) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmitForm)}>
			<div className='relative mb-8'>
				<input
					type='text'
					id='nombre'
					placeholder=' '
					className='w-full bg-slate-100 border focus:border-great-blue-500 rounded-md outline-none py-2 px-3 peer'
					{...register('nombre')}
				/>
				<label htmlFor='nombre' className='label-float'>
					Nombre
				</label>

				{errors.nombre && <ErrorLabel>{errors.nombre.message}</ErrorLabel>}

				{/* {errors.nombre && <InputError message={errors.nombre.message} />} */}
				{/* <p className='mt-1 ml-2 peer-invalid:visible text-pink-600 text-xs'>
							Error
						</p> */}
			</div>

			<div className='relative mb-8'>
				<input
					type='email'
					id='email'
					placeholder=' '
					className='w-full bg-slate-100 border focus:border-great-blue-500 rounded-md outline-none py-2 px-3 peer'
					{...register('email')}
				/>
				<label htmlFor='email' className='label-float'>
					Correo
				</label>
				{errors.email && <ErrorLabel>{errors.email.message}</ErrorLabel>}
			</div>

			<div className='relative mb-8'>
				<input
					type='password'
					id='password'
					placeholder=' '
					className='w-full bg-slate-100 border focus:border-great-blue-500 rounded-md outline-none py-2 px-3 peer'
					{...register('password')}
				/>
				<label htmlFor='password' className='label-float'>
					Password
				</label>
				{errors.password && <ErrorLabel>{errors.password.message}</ErrorLabel>}
			</div>

			<div className='flex justify-center gap-4 mb-4'>
				<button
					type='submit'
					data-mdb-ripple='true'
					data-mdb-ripple-color='light'
					className='btn bg-great-blue-900 hover:bg-great-blue-800 w-full'
				>
					Crear Cuenta
				</button>

				<button
					type='button'
					data-mdb-ripple='true'
					data-mdb-ripple-color='light'
					className='btn bg-great-blue-900 hover:bg-great-blue-800 w-full'
				>
					GitHub
				</button>
			</div>

			<div className='flex justify-end'>
				<Link
					href={'/auth/login'}
					className='underline text-slate-500 hover:text-slate-700'
				>
					Login
				</Link>
			</div>
		</form>
	);
};

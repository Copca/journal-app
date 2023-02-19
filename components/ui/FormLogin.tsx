import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { loginSchema } from '@/schema';
import { ErrorLabel } from './ErrorLabel';

type FormData = yup.InferType<typeof loginSchema>;

export const FormLogin = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>({
		resolver: yupResolver(loginSchema)
		// defaultValues: cliente
	});

	const onSubmitLogin = async ({ email, password }: FormData) => {
		console.log({ email, password });
		// await signIn('credentials', { email, password });
	};

	return (
		<form onSubmit={handleSubmit(onSubmitLogin)}>
			<div className='relative mb-8'>
				<input
					type='email'
					id='email'
					placeholder=' '
					className='w-full bg-slate-100 border focus:border-great-blue-500 rounded-md outline-none py-2 px-3 peer'
					{...register('email')}
				/>
				<label htmlFor='email' className='label-float'>
					Nombre
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
					Iniciar Sesión
				</button>

				<button
					type='button'
					data-mdb-ripple='true'
					data-mdb-ripple-color='light'
					className='btn bg-great-blue-900 hover:bg-great-blue-800 w-full'
					onClick={() => signIn('github')}
				>
					GitHub
				</button>
			</div>

			<div className='flex justify-end'>
				<Link
					href={'/auth/register'}
					className='underline text-slate-500 hover:text-slate-700'
				>
					Crear Cuenta
				</Link>
			</div>
		</form>
	);
};

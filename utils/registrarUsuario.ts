import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import axios from 'axios';

import { journalApi } from '@/api/jounalApi';
import { IUsuarioRespApi } from '@/interfaces';

export const registrarUsuario = async (
	nombre: string,
	email: string,
	password: string
) => {
	try {
		await journalApi.post<IUsuarioRespApi>('/usuarios/registro', {
			nombre,
			email,
			password
		});

		toast.success('Cuenta creada correctamente');

		setTimeout(async () => {
			await signIn('credentials', { email, password });
		}, 3000);
	} catch (error) {
		if (axios.isAxiosError(error)) {
			toast.error(error.response?.data.message);
		}
	}
};

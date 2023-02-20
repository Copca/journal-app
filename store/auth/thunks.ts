import { AppDispatch, RootState } from '../store';
import axios from 'axios';
import { toast } from 'react-toastify';

import { journalApi } from '@/api/jounalApi';
import { IUsuarioRespApi } from '../../interfaces/usuario';

import { signIn } from 'next-auth/react';

import { setError } from './authSlice';

export const startCrearCuenta = (nombre: string, email: string, password: string) => {
	return async (dispatch: AppDispatch) => {
		try {
			const { data } = await journalApi.post<IUsuarioRespApi>(
				'/usuarios/registro',
				{
					nombre,
					email,
					password
				}
			);

			toast.success('Cuenta creada correctamente');

			await signIn('credentials', { email, password });
		} catch (error) {
			if (axios.isAxiosError(error)) {
				dispatch(setError(error.response?.data.message));
				toast.error(error.response?.data.message);
			}
		}
		// try {
		// } catch (error) {}

		// dispatch(startLoadingPokemons());
		// const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page}`);
		// const payload = { pokemons: data.results, page: page + 1 };
		// dispatch(setPokemons(payload));
	};
};

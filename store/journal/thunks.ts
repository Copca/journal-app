import axios from 'axios';
import { journalApi } from '@/api/jounalApi';
import { AppDispatch, RootState } from '../store';

import { INota } from '@/interfaces';
import { setIsSaving, setNuevaNota } from './journalSlice';

export const startNuevaNota = (titulo: string, contenido: string) => {
	return async (dispatch: AppDispatch, getState: () => RootState) => {
		const { id } = getState().auth.usuario!;
		const nuevaNota: INota = {
			titulo,
			contenido,
			fecha: Date.now().toString(),
			usuarioId: id!
		};

		dispatch(setIsSaving(true));

		try {
			const { data } = await journalApi.post('/notas', nuevaNota);
			dispatch(setNuevaNota(data));
		} catch (error) {
			console.log(error);
			if (axios.isAxiosError(error)) {
				console.log(error.response?.data);
			}
		} finally {
			dispatch(setIsSaving(false));
		}

		// TODO: peticion http para insertar nota
	};
};

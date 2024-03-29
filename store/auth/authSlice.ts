import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IUsuario, IUsuarioRespApi } from '@/interfaces';

export interface IAuthState {
	isLoggIn: boolean;
	usuario?: IUsuario;
}

const initialState: IAuthState = {
	isLoggIn: false
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (status, action) => {
			status.isLoggIn = true;
			status.usuario = action.payload;
		}
	}
});

export const { login } = authSlice.actions;

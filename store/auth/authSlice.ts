import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IUsuario, IUsuarioRespApi } from '@/interfaces';

export interface IAuthState {
	isLoggIn: boolean;
	usuario?: IUsuario;
	errorMessage: string;
}

const initialState: IAuthState = {
	isLoggIn: false,
	errorMessage: ''
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: () => {},
		setError: (state, action: PayloadAction<string>) => {
			state.errorMessage = action.payload;
		}

		//restar: (state) => {
		//    state.counter -= 1;
		//},
		//sumarBy: (state, action: PayloadAction<number>) => {
		//    state.counter += action.payload;
		//}
	}
});

export const { login, setError } = authSlice.actions;

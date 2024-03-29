import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { INota } from '@/interfaces/notas';

export interface IJournalState {
	isSaving: boolean;
	mensaje: string;
	isActiveForm: boolean;
	notas: INota[];
}

const initialState: IJournalState = {
	isSaving: false,
	mensaje: '',
	isActiveForm: false,
	notas: []
};

export const journalSlice = createSlice({
	name: 'journal',
	initialState,
	reducers: {
		setNotasDB: (state, action: PayloadAction<INota[]>) => {
			state.notas = action.payload;
		},
		setNotasUsuario: (state, action: PayloadAction<INota[]>) => {
			state.notas = action.payload;
		},
		setActivarForm: (state) => {
			state.isActiveForm = true;
		},
		setIsSaving: (state, action: PayloadAction<boolean>) => {
			state.isSaving = action.payload;
		},
		setNuevaNota: (state, action: PayloadAction<INota>) => {
			state.notas = [...state.notas, action.payload];
			state.isActiveForm = false;
		}
		// setGuardarNota: (state) => {},
		// setActualizarNota: (state) => {},
		// borrarNotaID: (state) => {}

		//restar: (state) => {
		//    state.counter -= 1;
		//},
		//sumarBy: (state, action: PayloadAction<number>) => {
		//    state.counter += action.payload;
		//}
	}
});

export const {
	setNotasDB,
	setNotasUsuario,
	setActivarForm,
	setIsSaving,
	setNuevaNota
	// setGuardarNota,
	// setActualizarNota,
	// borrarNotaID
} = journalSlice.actions;

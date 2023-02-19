import * as yup from 'yup';

export const usuarioSchema = yup
	.object({
		nombre: yup.string().required('El nombre es obligatorio'),
		email: yup
			.string()
			.required('El correo es obligatorio')
			.email('Introduzca una cuenta de correo valida'),
		password: yup
			.string()
			.required('El password es obligatorio')
			.length(6, 'Debe tener al menos 6 caracteres')
	})
	.required();

export const loginSchema = yup.object({
	email: yup
		.string()
		.required('El correo es obligatorio')
		.email('Introduzca una cuenta de correo valida'),
	password: yup.string().required('El password es obligatorio')
});

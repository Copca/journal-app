import * as yup from 'yup';

export const notaSchema = yup
	.object({
		titulo: yup.string().required('El titulo de la nota es obligatorio'),
		contenido: yup.string().required('El contenido es obligatorio')
	})
	.required();

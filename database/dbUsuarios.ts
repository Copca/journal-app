import { prisma } from './prisma';
import bcrypt from 'bcryptjs';

export const checkEmailPassword = async (email: string, password: string) => {
	const usuario = await prisma.usuario.findFirst({
		where: { email }
	});

	if (!usuario) return null;
	if (!bcrypt.compareSync(password, usuario.password)) return null;

	const { id, nombre } = usuario;

	return { id, email, nombre };
};

// Esta función busca en la base de datos el email si no lo guarda(nuevo usuario)
export const oAuthLoginRegistro = async (oAuthEmail: string, oAuthName: string) => {
	console.log({ oAuthEmail, oAuthName });
	const usuario = await prisma.usuario.findUnique({
		where: { email: oAuthEmail }
	});

	if (usuario) {
		const { id, email, nombre } = usuario;

		return { id, email, nombre };
	}

	const nuevoUsuario = await prisma.usuario.create({
		data: { email: oAuthEmail, nombre: oAuthName, password: '@' }
	});
	const { id, nombre, email } = nuevoUsuario;

	return { id, nombre, email };
};

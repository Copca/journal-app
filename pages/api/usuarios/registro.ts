import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

import { Prisma } from '@prisma/client';
import { prisma } from '@/database';

import { usuarioSchema } from '@/schema';
import { IUsuario } from '@/interfaces';

type Data = { message: string } | IUsuario;

export default function nandler(req: NextApiRequest, res: NextApiResponse<Data>) {
	switch (req.method) {
		case 'POST':
			return nuevoUsuario(req, res);

		default:
			return res.status(400).json({ message: 'Bad Request' });
	}
}

// POST /api/usuarios/registro
const nuevoUsuario = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { nombre, email = '', password } = req.body;

	try {
		await usuarioSchema.validate(req.body, { abortEarly: false });

		const usuario = await prisma.usuario.findUnique({
			where: { email }
		});

		if (usuario) {
			const { message } = new Error('Este usuario ya esta registrado');
			return res.status(400).json({ message });
		}

		const passwordHash = await bcrypt.hash(password, 10);
		const nuevoUsuario = await prisma.usuario.create({
			data: {
				nombre,
				email: email.toLocaleLowerCase(),
				password: passwordHash
			},
			select: { id: true, nombre: true, email: true }
		});

		return res.status(200).json(nuevoUsuario);
	} catch (error: any) {
		console.log(error);

		if (error.name === 'ValidationError') {
			return res.status(400).json({ message: error.errors });
		}

		return res.status(500).json({ message: 'Revise logs del servidor' });
	}
};

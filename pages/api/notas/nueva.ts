import type { NextApiRequest, NextApiResponse } from 'next';

import { Nota, Usuario } from '@prisma/client';
import { prisma } from '@/database';

import { notaSchema } from '@/schema';

type Data = { message: string } | Nota;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	switch (req.method) {
		case 'POST':
			return guardarNota(req, res);

		default:
			return res.status(400).json({ message: 'Bad Request' });
	}
}

// POST /api/notas/nueva
const guardarNota = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { titulo, contenido, fecha, usuarioId } = req.body;

	try {
		await notaSchema.validate(req.body, { abortEarly: false });

		const nota = await prisma.nota.create({
			data: { titulo, contenido, fecha, usuarioId }
		});

		return res.status(200).json(nota);
		// return res.status(200).json({ message: 'creando notanp' });
	} catch (error: any) {
		console.log(error);

		if (error.name === 'ValidationError') {
			return res.status(400).json({ message: error.errors });
		}

		return res.status(500).json({ message: 'Revise logs del servidor' });
	}
};

import type { NextApiRequest, NextApiResponse } from 'next';

import { Nota, Usuario } from '@prisma/client';
import { prisma } from '@/database';

type Data = { message: string } | Nota | Nota[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	switch (req.method) {
		case 'POST':
			return cargarNotas(req, res);

		default:
			return res.status(400).json({ message: 'Bad Request' });
	}
}

// POST /api/notas
const cargarNotas = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { usuarioId = '' } = req.body;

	try {
		const notasUsuario = await prisma.nota.findMany({
			where: {
				usuarioId
			}
		});

		return res.status(200).json(notasUsuario);
	} catch (error) {
		console.log({ error });
		return res.status(500).json({ message: 'Revise logs del servidor' });
	}
};

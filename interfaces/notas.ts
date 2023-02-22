export interface INota {
	id?: string;
	titulo: string;
	contenido: string;
	fecha: string;
	imageUrl?: string[];
	usuarioId: number;
}

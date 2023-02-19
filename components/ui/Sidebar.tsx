import { Tarea } from './Tarea';

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

export const Sidebar = () => {
	return (
		<ul>
			{meses.map((mes, index) => (
				<Tarea key={index} tarea={mes} />
			))}
		</ul>
	);
};

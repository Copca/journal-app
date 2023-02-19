import { FC } from 'react';
import { TfiBookmark } from 'react-icons/tfi';

interface Props {
	tarea: string;
}

export const Tarea: FC<Props> = ({ tarea }) => {
	return (
		<button
			type='button'
			data-mdb-ripple='true'
			data-mdb-ripple-color='dark'
			className='mb-4 cursor-pointer'
		>
			<div className='flex items-center'>
				<TfiBookmark className='w-1/3 text-amber-600' />
				<div>
					<h5>{tarea}</h5>
					<p className='text-slate-600 text-sm'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
			</div>
		</button>
	);
};

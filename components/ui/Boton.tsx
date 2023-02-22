import { useAppDispatch } from '@/hooks/react-hook';
import { setActivarForm } from '@/store/journal';

import { AiFillPlusCircle } from 'react-icons/ai';

export const Boton = () => {
	const dispatch = useAppDispatch();

	return (
		<div className='absolute bottom-8 right-8 bg-white rounded-full'>
			<button
				type='button'
				data-mdb-ripple='true'
				data-mdb-ripple-color='light'
				onClick={() => dispatch(setActivarForm())}
			>
				<AiFillPlusCircle className='text-9xl text-sky-500 hover:text-sky-700' />
			</button>
		</div>
	);
};

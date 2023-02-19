import { AiFillPlusCircle } from 'react-icons/ai';

export const Boton = () => {
	return (
		<button
			type='button'
			data-mdb-ripple='true'
			data-mdb-ripple-color='light'
			className='absolute bottom-8 right-8 shadow-md shadow-black rounded-full'
		>
			<AiFillPlusCircle className='text-9xl text-sky-500' />
		</button>
	);
};

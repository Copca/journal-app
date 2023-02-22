import { signOut } from 'next-auth/react';

import { useAppSelector } from '@/hooks/react-hook';

import { ImExit } from 'react-icons/im';

export const Navbar = () => {
	const { usuario } = useAppSelector((state) => state.auth);

	return (
		<div className='flex'>
			<div className='md:w-1/4 lg:w-1/5 p-4'>
				<h3 className='text-center font-bold'>{usuario?.nombre}</h3>
			</div>

			<nav className='md:w-3/4 lg:w-4/5 flex justify-between bg-great-blue-800 text-white font-bold py-4 px-8'>
				<h1>JournalApp</h1>

				<button type='button' onClick={() => signOut()}>
					<ImExit className='text-red-500 text-lg hover:text-red-600' />
				</button>
			</nav>
		</div>
	);
};

export default Navbar;

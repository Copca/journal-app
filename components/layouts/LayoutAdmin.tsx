import { FC, PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

export const LayoutAdmin: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<div className='flex items-center justify-center bg-great-blue-900 min-h-screen'>
				<main className='container'>{children}</main>
			</div>

			<ToastContainer />
		</>
	);
};

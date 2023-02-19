import { FC, PropsWithChildren } from 'react';

import { Navbar, Sidebar } from '../ui';

export const LayoutJournal: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='flex flex-col bg-slate-50 min-h-screen'>
			<Navbar />

			<div className='flex-1 flex border'>
				<aside className='md:w-1/4 lg:w-1/5 border bg-slate-100 p-4'>
					<Sidebar />
				</aside>

				<main className='md:w-3/4 lg:w-4/5'>{children}</main>
			</div>
		</div>
	);
};

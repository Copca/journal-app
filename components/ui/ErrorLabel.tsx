import { FC, PropsWithChildren } from 'react';

export const ErrorLabel: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='ml-2 peer-invalid:visible text-pink-600 text-xs'>{children}</div>
	);
};

import { useEffect, useState } from 'react';

import { useAppDispatch } from './react-hook';
import { useSession } from 'next-auth/react';

import { login } from '@/store/auth';
import { startCargarNotas } from '@/store/journal';

export const useCheckAuth = () => {
	const dispatch = useAppDispatch();
	const { data, status } = useSession();
	const [isLoading, setIsLoading] = useState(true);

	// Guardamos en el State la información del usuario
	useEffect(() => {
		if (status === 'authenticated' && isLoading) {
			dispatch(login(data.usuario));
			dispatch(startCargarNotas());

			setIsLoading(false);
		}
	}, [status, data, dispatch, isLoading]);

	return { usuario: data };
};

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';

import { store } from '@/store';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<SessionProvider>
				<Component {...pageProps} />
			</SessionProvider>
		</Provider>
	);
}

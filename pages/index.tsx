import { NextPage } from 'next';
// import { useSession } from 'next-auth/react';

import { LayoutJournal } from '@/components/layouts';
import { NotaView } from '@/components/views';
import { Boton } from '@/components/ui';

const HomePage: NextPage = () => {
	// const session = useSession();

	// console.log(session.data?.usuario);

	return (
		<LayoutJournal>
			<div className='container p-4 h-full'>
				{/* < NadaSeleccionadoView/> */}
				<NotaView />

				<Boton />
			</div>
		</LayoutJournal>
	);
};

export default HomePage;

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
// 	const session = await getServerSession(req, res, authOptions);

// 	if (!session) {
// 		return {
// 			redirect: {
// 				destination: '/auth/login',
// 				permanent: false
// 			}
// 		};
// 	}

// 	const usuario = session;

// 	return {
// 		props: { usuario }
// 	};
// };

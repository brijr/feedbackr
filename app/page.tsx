import { Inter } from 'next/font/google';
import Form from '../components/form';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className="p-6 flex justify-center items-center w-screen h-screen">
			<Form />
		</main>
	);
}

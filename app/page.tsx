import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className="flex p-6">
			<h1 className="text-6xl text-green-700">Welcome to Feedbackr</h1>
			<div>
				<h2 className="text-2xl">
					The future of in-person feedback. Make more sales, keep more customers, and gather
					valuable feedback.
				</h2>
				<button className="py-2 px-4 rounded-lg mt-4 bg-green-700 text-white">Coming Soon</button>
			</div>
		</main>
	);
}

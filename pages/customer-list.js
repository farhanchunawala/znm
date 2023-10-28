import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/customer-list.module.scss'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
		<Head>
			<title>Customer list</title>
		</Head>
		<main className={`${styles.main}`}>
			
		</main>
		</>
	)
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/customer-list.module.scss'
const inter = Inter({ subsets: ['latin'] })

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export default function Home({users}) {
	return (
		<>
		<Head>
			<title>Customer list</title>
		</Head>
		<main className={`${styles.main}`}>
			
			{/* <ul>
				{users.map(user => (
					<li key={user.id}>{user.surname}</li>
				))}
			</ul> */}
		</main>
		</>
	)
}

export async function getStaticProps() {
	let users = await prisma.user.findMany()
	
	// Convert bigint values to string
	users = users.map(user => {
		return {
			...user,
			mobile_no1: user.mobile_no1.toString(),
			mobile_no2: user.mobile_no2.toString(),
			mobile_no3: user.mobile_no3.toString()
		};
	});
	
	return {
		props: {
			users,
		},
	}
}
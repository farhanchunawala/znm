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
			<div className={`${styles.list}`}>
				<div className={`${styles.box}`}>
					<label className={`${styles.label}`}>No.</label>
					<label className={`${styles.label}`}>fatima</label>
					<label className={`${styles.label}`}>furqan</label>
					<label className={`${styles.label}`}>faizan</label>
					<label className={`${styles.label}`}>farhan</label>
					<label className={`${styles.label}`}>mummy</label>
					<label className={`${styles.label}`}>abbu</label>
					<label className={`${styles.label}`}>family</label>
				</div>
				<div className={`${styles.container}`}>
					<div className={`${styles.table}`}>
						<div className={`${styles.text}`}>
							01
							Furqan Chunawala
							7738245067
							Farhan Chunawala
							Faizan Chunawala
							kurta salwar
							100,000
							20%
						</div>
					</div> <br></br>
					<div className={`${styles.table}`}>
						1234567890
					</div> <br></br>
					<div className={`${styles.table}`}>
						1234567890
					</div> <br></br>
					<div className={`${styles.table}`}>
						1234567890
					</div> <br></br>
					<div className={`${styles.table}`}>
						1234567890
					</div> <br></br>
					<div className={`${styles.table}`}>
						1234567890
					</div> <br></br>
					<div className={`${styles.table}`}>
						1234567890
					</div> <br></br>
					<div className={`${styles.table}`}>
						1234567890
					</div> <br></br>
				</div>
			</div>	
		</main>
		</>
	)
}

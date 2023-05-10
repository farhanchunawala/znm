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
							<p>01</p>
							<p>Furqan Chunawala</p>
							<p>7738245067</p>
							<p>Farhan Chunawala</p>
							<p>Faizan Chunawala</p>
							<p>kurta salwar</p>
							<p>100,000</p>
							<p>20%</p>
						</div>
					</div> <br></br>
					<div className={`${styles.table}`}>
					    <div className={`${styles.text}`}>
							<p>01</p>
							<p>Furqan Chunawala</p>
							<p>7738245067</p>
							<p>Farhan Chunawala</p>
							<p>Faizan Chunawala</p>
							<p>kurta salwar</p>
							<p>100,000</p>
							<p>20%</p>
						</div>
					</div> <br></br>
					<div className={`${styles.table}`}>
						<div className={`${styles.text}`}>
							<p>01</p>
							<p>Furqan Chunawala</p>
							<p>7738245067</p>
							<p>Farhan Chunawala</p>
							<p>Faizan Chunawala</p>
							<p>kurta salwar</p>
							<p>100,000</p>
							<p>20%</p>
						</div>
					</div> <br></br>
					<div className={`${styles.table}`}>
						<div className={`${styles.text}`}>
							<p>01</p>
							<p>Furqan Chunawala</p>
							<p>7738245067</p>
							<p>Farhan Chunawala</p>
							<p>Faizan Chunawala</p>
							<p>kurta salwar</p>
							<p>100,000</p>
							<p>20%</p>
						</div>
					</div> <br></br>
					<div className={`${styles.table}`}>
						<div className={`${styles.text}`}>
							<p>01</p>
							<p>Furqan Chunawala</p>
							<p>7738245067</p>
							<p>Farhan Chunawala</p>
							<p>Faizan Chunawala</p>
							<p>kurta salwar</p>
							<p>100,000</p>
							<p>20%</p>
						</div>
					</div> <br></br>
					<div className={`${styles.table}`}>
						<div className={`${styles.text}`}>
							<p>01</p>
							<p>Furqan Chunawala</p>
							<p>7738245067</p>
							<p>Farhan Chunawala</p>
							<p>Faizan Chunawala</p>
							<p>kurta salwar</p>
							<p>100,000</p>
							<p>20%</p>
						</div>
					</div> <br></br>
					<div className={`${styles.table}`}>
						<div className={`${styles.text}`}>
							<p>01</p>
							<p>Furqan Chunawala</p>
							<p>7738245067</p>
							<p>Farhan Chunawala</p>
							<p>Faizan Chunawala</p>
							<p>kurta salwar</p>
							<p>100,000</p>
							<p>20%</p>
						</div>
					</div> <br></br>
					<div className={`${styles.table}`}>
						<div className={`${styles.text}`}>
							<p>01</p>
							<p>Furqan Chunawala</p>
							<p>7738245067</p>
							<p>Farhan Chunawala</p>
							<p>Faizan Chunawala</p>
							<p>kurta salwar</p>
							<p>100,000</p>
							<p>20%</p>
						</div>
					</div> <br></br>
				</div>
			</div>	
		</main>
		</>
	)
}

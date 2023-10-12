import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/customer-main.module.scss'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
		<Head></Head>
		<main className={`${styles.main}`}>
			<div className={`${styles.header}`}>
				<h3>Abdul Basit</h3>
				<div className={`${styles.brick} ${styles.meas}`}>Measurements</div>
			</div>
			<div className={`${styles.section}`}>
				<div className={`${styles.style_tab}`}>
					<div className={`${styles.frame}`}>
						<div className={`${styles.styles}`}>
							{/* {[...Array(5)].map((garb, index) => ( */}
								{/* <div className={`${styles.garb}`} key="index"></div> */}
								<div className={`${styles.brick}`}>Shirt x2</div>
								<div className={`${styles.brick}`}>Shirt x2</div>
								<div className={`${styles.brick}`}>Shirt x2</div>
								<div className={`${styles.brick}`}>Shirt x2</div>
								<div className={`${styles.brick}`}>Shirt x2</div>
								<div className={`${styles.brick}`}>Shirt x2</div>
							{/* ))} */}
							{/* <div className={`${styles.garb}`}></div> */}
						</div>
					</div>
					<div className={`${styles.frame}`}>
						<div className={`${styles.styles}`}>
							{/* {[...Array(5)].map((garb, index) => ( */}
								{/* <div className={`${styles.garb}`} key="index"></div> */}
								<div className={`${styles.style_card}`}>Shirt x2</div>
								{/* <div className={`${styles.style_card}`}>Shirt x2</div> */}
							{/* ))} */}
							{/* <div className={`${styles.garb}`}></div> */}
						</div>
					</div>
				</div>
				<div className={`${styles.measure_tab}`}></div>
			</div>
		</main>
		</>
	)
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/customer-list.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
		<Head>
			<title>Customer list</title>
		</Head>
		<main className={`${styles.homepage}`}>
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
			<form className={`${styles.input}`}>
				<label className={`${styles.field}`} htmlFor="input-field"></label>
				<input id="input-field" type="text" style={{ width: "90px", height: "40px" }} />
				<label className={`${styles.field}`} htmlFor="input-field"></label>
				<input id="input-field" type="text" style={{ width: "90px", height: "40px" }} />
				<label className={`${styles.field}`} htmlFor="input-field"></label>
				<input id="input-field" type="text" style={{ width: "90px", height: "40px" }} />
				<label className={`${styles.field}`} htmlFor="input-field"></label>
				<input id="input-field" type="text" style={{ width: "90px", height: "40px" }} />
				<label className={`${styles.field}`} htmlFor="input-field"></label>
				<input id="input-field" type="text" style={{ width: "90px", height: "40px" }} />
				<label className={`${styles.field}`} htmlFor="input-field"></label>
				<input id="input-field" type="text" style={{ width: "90px", height: "40px" }} />
				<label className={`${styles.field}`} htmlFor="input-field"></label>
				<input id="input-field" type="text" style={{ width: "90px", height: "40px" }} />
				<label className={`${styles.field}`} htmlFor="input-field"></label>
				<input id="input-field" type="text" style={{ width: "90px", height: "40px" }} />
			</form>
		</main>
		</>
	)
}

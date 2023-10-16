import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/products.module.scss'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
		<Head></Head>
		<main className={`${styles.main}`}>
			<Image className={`${styles.main_image}`} src="/product.png" alt="" width="205" height="286" />
			<div className={`${styles.notify}`}>
				<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
					<g clip-path="url(#clip0_437_1794)">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M1.24674 2.83404L8.58008 8.25204L15.9134 2.82871V2.66671C15.9134 2.4899 15.8432 2.32033 15.7182 2.1953C15.5931 2.07028 15.4236 2.00004 15.2467 2.00004H1.91341C1.7366 2.00004 1.56703 2.07028 1.44201 2.1953C1.31698 2.32033 1.24674 2.4899 1.24674 2.66671V2.83404ZM1.24674 3.66271V13.3334C1.24674 13.5102 1.31698 13.6798 1.44201 13.8048C1.56703 13.9298 1.7366 14 1.91341 14H15.2467C15.4236 14 15.5931 13.9298 15.7182 13.8048C15.8432 13.6798 15.9134 13.5102 15.9134 13.3334V3.65804L8.77808 8.93471C8.72074 8.97704 8.65135 8.99989 8.58008 8.99989C8.50881 8.99989 8.43941 8.97704 8.38208 8.93471L1.24674 3.66271ZM1.91341 1.33337H15.2467C15.6004 1.33337 15.9395 1.47385 16.1896 1.7239C16.4396 1.97395 16.5801 2.31309 16.5801 2.66671V13.3334C16.5801 13.687 16.4396 14.0261 16.1896 14.2762C15.9395 14.5262 15.6004 14.6667 15.2467 14.6667H1.91341C1.55979 14.6667 1.22065 14.5262 0.970602 14.2762C0.720554 14.0261 0.580078 13.687 0.580078 13.3334V2.66671C0.580078 2.31309 0.720554 1.97395 0.970602 1.7239C1.22065 1.47385 1.55979 1.33337 1.91341 1.33337Z" fill="white"/>
					</g>
					<defs>
						<clipPath id="clip0_437_1794">
						<rect width="16" height="16" fill="white" transform="translate(0.580078)"/>
						</clipPath>
					</defs>
				</svg>
				<p className={`${styles.txt}`}>NOTIFY ME</p>
			</div>
		</main>
		</>
	)
}

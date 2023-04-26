import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
		<Head>
			<title>Create Next App</title>
			<meta name="description" content="Generated by create next app" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
			{/* <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script> */}
			{/* <i  class="fas fa-bars"></i> */}
			</Head>
		<main id="styles.main" class="flex-container">
			{/* <h1 className={`${styles.heading}`}>HAZURE</h1> */}
			<h1 className={`${styles.heading}`}>ZOLL & METER</h1>
			<div className={`${styles.box}`}>
			<Image className={`${styles.img0}`} src="/img0.webp" alt="cloth" width="1150" height="550"/>
			</div>
			<h2 className={`${styles.menswear}`}>MEANSWEAR 23</h2>
			
			<div className={`${styles.box1}`}>
				
			<Image id="img1" className={`${styles.img1}`} src="/img1.webp" alt="cloth" width="250" height="400"/>
			<Image id="img2" className={`${styles.img2}`} src="/img2.webp" alt="cloth" width="250" height="400"/>
			<Image id="img3" className={`${styles.img3}`} src="/img3.webp" alt="cloth" width="250" height="400"/>
			<Image id="img4" className={`${styles.img4}`} src="/img4.webp" alt="cloth" width="250" height="400"/> <br></br>
			<Image id="img5" className={`${styles.img5}`} src="/img5.webp" alt="cloth" width="250" height="400"/>
			<Image id="img6" className={`${styles.img6}`} src="/img6.webp" alt="cloth" width="250" height="400"/>
			<Image id="img7" className={`${styles.img7}`} src="/img7.jpg"  alt="cloth" width="250" height="400"/>
			<Image id="img8" className={`${styles.img8}`} src="/img8.webp" alt="cloth" width="250" height="400"/>
				
			</div>
			
		</main>
		{/* <main className={`${styles.main} ${inter.className}`}>
			<div className={styles.description}>
			<p>
				Get started by editing&nbsp;
				<code className={styles.code}>pages/index.js</code>
			</p>
			<div>
				<a
				href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
				>
				By{' '}
				<Image
					src="/vercel.svg"
					alt="Vercel Logo"
					className={styles.vercelLogo}
					width={100}
					height={24}
					priority
				/>
				</a>
			</div>
			</div>

			<div className={styles.center}>
			<Image
				className={styles.logo}
				src="/next.svg"
				alt="Next.js Logo"
				width={180}
				height={37}
				priority
			/>
			</div>

			<div className={styles.grid}>
			<a
				href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				className={styles.card}
				target="_blank"
				rel="noopener noreferrer"
			>
				<h2>
				Docs <span>-&gt;</span>
				</h2>
				<p>
				Find in-depth information about Next.js features and&nbsp;API.
				</p>
			</a>

			<a
				href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				className={styles.card}
				target="_blank"
				rel="noopener noreferrer"
			>
				<h2>
				Learn <span>-&gt;</span>
				</h2>
				<p>
				Learn about Next.js in an interactive course with&nbsp;quizzes!
				</p>
			</a>

			<a
				href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				className={styles.card}
				target="_blank"
				rel="noopener noreferrer"
			>
				<h2>
				Templates <span>-&gt;</span>
				</h2>
				<p>
				Discover and deploy boilerplate example Next.js&nbsp;projects.
				</p>
			</a>

			<a
				href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				className={styles.card}
				target="_blank"
				rel="noopener noreferrer"
			>
				<h2>
				Deploy <span>-&gt;</span>
				</h2>
				<p>
				Instantly deploy your Next.js site to a shareable URL
				with&nbsp;Vercel.
				</p>
			</a>
			</div>
		</main> */}
		</>
	)
}

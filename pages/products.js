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
			<div className={`${styles.title}`}>
				<h1 className={`${styles.product_name}`}>Regular Fit polo Shirt</h1>
				<p className={`${styles.mrp}`}>MRP inclusive of all taxes</p>
                <p className={`${styles.price}`}>Rs. 1200.00</p>
			</div>
			<p className={`${styles.text}`}>sizes</p>
			<div className={`${styles.sizes}`}>
				<div className={`${styles.size}`}>XS</div>
				<div className={`${styles.size}`}>S</div>
				<div className={`${styles.size}`}>M</div>
				<div className={`${styles.size}`}>L</div>
				<div className={`${styles.size}`}>XL</div>
				<div className={`${styles.size}`}>XXL</div>
			</div>
			<div className={`${styles.notify}`}>
				<svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
					<path d="M9.35986 4V5.5H8.36086V4H4.36286V5.5H3.35986V4H2.35986V5.119C2.35986 5.985 2.20286 7.019 1.96286 8.488L1.83286 9.263C1.49286 11.241 1.44486 11.543 1.39286 12.135C1.38186 12.258 1.37486 12.366 1.37186 12.461C1.74386 12.535 2.15986 12.609 2.60586 12.679C3.89586 12.879 5.17986 13 6.35986 13C6.46986 13 6.57986 12.999 6.69386 12.996C7.66386 12.974 8.69786 12.863 9.85186 12.679C9.92086 12.669 10.7249 12.526 11.3469 12.427C11.3424 12.3289 11.3358 12.2308 11.3269 12.133C11.2759 11.54 11.2269 11.23 10.8879 9.258L10.7579 8.488C10.5179 7.018 10.3599 5.985 10.3599 5.118V4H9.35986V4ZM3.35986 3V2.256C3.35986 0.71 4.48286 0 6.35986 0C8.24486 0 9.35986 0.723 9.35986 2.288V3H11.3599V5.119C11.3599 8 13.0169 13.333 12.0519 13.333C11.6229 13.333 8.93686 14 6.35986 14C3.52586 14 0.663863 13.333 0.663863 13.333C-0.293137 13.333 1.35986 8 1.35986 5.12V3H3.35986ZM4.36286 3H8.35986V2.288C8.35986 1.393 7.75586 1 6.35986 1C4.96786 1 4.36186 1.388 4.36186 2.256V3H4.36286Z" fill="white"/>
				</svg>
				<p className={`${styles.txt}`}>Add</p>
				{/* <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
					<g clip-path="url(#clip0_437_1794)">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M1.24674 2.83404L8.58008 8.25204L15.9134 2.82871V2.66671C15.9134 2.4899 15.8432 2.32033 15.7182 2.1953C15.5931 2.07028 15.4236 2.00004 15.2467 2.00004H1.91341C1.7366 2.00004 1.56703 2.07028 1.44201 2.1953C1.31698 2.32033 1.24674 2.4899 1.24674 2.66671V2.83404ZM1.24674 3.66271V13.3334C1.24674 13.5102 1.31698 13.6798 1.44201 13.8048C1.56703 13.9298 1.7366 14 1.91341 14H15.2467C15.4236 14 15.5931 13.9298 15.7182 13.8048C15.8432 13.6798 15.9134 13.5102 15.9134 13.3334V3.65804L8.77808 8.93471C8.72074 8.97704 8.65135 8.99989 8.58008 8.99989C8.50881 8.99989 8.43941 8.97704 8.38208 8.93471L1.24674 3.66271ZM1.91341 1.33337H15.2467C15.6004 1.33337 15.9395 1.47385 16.1896 1.7239C16.4396 1.97395 16.5801 2.31309 16.5801 2.66671V13.3334C16.5801 13.687 16.4396 14.0261 16.1896 14.2762C15.9395 14.5262 15.6004 14.6667 15.2467 14.6667H1.91341C1.55979 14.6667 1.22065 14.5262 0.970602 14.2762C0.720554 14.0261 0.580078 13.687 0.580078 13.3334V2.66671C0.580078 2.31309 0.720554 1.97395 0.970602 1.7239C1.22065 1.47385 1.55979 1.33337 1.91341 1.33337Z" fill="white"/>
					</g>
					<defs>
						<clipPath id="clip0_437_1794">
						<rect width="16" height="16" fill="white" transform="translate(0.580078)"/>
						</clipPath>
					</defs>
				</svg>
				<p className={`${styles.txt}`}>NOTIFY ME</p> */}
			</div>
			<div className={`${styles.dnf}`}>
				<div className={`${styles.collapse}`}>
					<p className={`${styles.txt_dnf}`}>Description & Fit</p>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
						<path d="M7.99992 12.4499C7.93054 12.45 7.8619 12.4356 7.79837 12.4078C7.73485 12.3799 7.67782 12.3391 7.63092 12.2879L2.13092 6.28793C2.04127 6.19006 1.99418 6.0606 1.99999 5.92801C2.00581 5.79542 2.06405 5.67057 2.16192 5.58093C2.25978 5.49129 2.38925 5.44419 2.52184 5.45C2.65443 5.45582 2.77927 5.51406 2.86892 5.61193L7.99992 11.2099L13.1309 5.61193C13.2206 5.51406 13.3454 5.45582 13.478 5.45C13.6106 5.44419 13.7401 5.49129 13.8379 5.58093C13.9358 5.67057 13.994 5.79542 13.9998 5.92801C14.0057 6.0606 13.9586 6.19006 13.8689 6.28793L8.36892 12.2879C8.32202 12.3391 8.26499 12.3799 8.20146 12.4078C8.13793 12.4356 8.0693 12.45 7.99992 12.4499Z" fill="#222222"/>
					</svg>
				</div>
				<div className={`${styles.description}`}>
					<p>Polo shirt in soft, fine-knit cotton. Regular fit with a collar, button placket and long sleeves. Fine ribbing at the cuffs and hem.</p>
				</div>
			</div>
		</main>
		</>
	)
}

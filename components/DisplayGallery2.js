import React from 'react'
import styles from '../styles/DisplayGallery.module.css'
import Image from 'next/image'
import Link from 'next/link'
 
const Navbar = () => {
    return (
		<>
			<h2 className={`${styles.content2} ${styles.text}`}>MARASIM</h2>
			<div className={`${styles.section2} ${styles.row}`}>
			    <div className={`${styles.col}`}><Image id="mrsm1" className={`${styles.img}`} src="/mrsm1.webp" alt="cloth" width="250" height="400"/>
				    <p className={`${styles.imgtext}`}>Sartan</p> 
				</div>
				<div className={`${styles.col}`}><Image id="mrsm2" className={`${styles.img}`} src="/mrsm2.webp" alt="cloth" width="250" height="400"/>
				    <p className={`${styles.imgtext}`}>Hooth</p> 
				</div>
				<div className={`${styles.col}`}><Image id="mrsm3" className={`${styles.img}`} src="/mrsm3.webp" alt="cloth" width="250" height="400"/>
				    <p className={`${styles.imgtext}`}>Yakoot</p> 
				</div>
				<div className={`${styles.col}`}><Image id="mrsm4" className={`${styles.img}`} src="/mrsm4.webp" alt="cloth" width="250" height="400"/>
				    <p className={`${styles.imgtext}`}>Akrab</p> 
				</div>  
				<button className={`${styles.viewall}`} type="button" onclick="myFunction()"> VIEW ALL </button>  	
		    </div>
		</>
		)
}
 
export default Navbar
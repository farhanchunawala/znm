import React from 'react'
import styles from '../styles/DisplayGallery.module.css'
import Image from 'next/image'
import Link from 'next/link'
 
const Navbar = () => {
    return (
        <>
			<h2 className={`${styles.content} ${styles.text}`}>MENSWEAR 23</h2>
			<div className={`${styles.section1} ${styles.row}`}>
				<div className={`${styles.col}`}><Image id="img1" className={`${styles.img}`} src="/img1.webp" alt="cloth" width="250" height="400"/>
			        <p className={`${styles.imgtext}`}>Morning Mist</p>
				</div>
				<div className={`${styles.col}`}><Image id="img2" className={`${styles.img}`} src="/img2.webp" alt="cloth" width="250" height="400"/>
				    <p className={`${styles.imgtext}`}>pine Green</p>
				</div>
				<div className={`${styles.col}`}><Image id="img3" className={`${styles.img}`} src="/img3.webp" alt="cloth" width="250" height="400"/>
				    <p className={`${styles.imgtext}`}>Seafoam Green</p>
				</div>		
				<div className={`${styles.col}`}><Image id="img4" className={`${styles.img}`} src="/img4.webp" alt="cloth" width="250" height="400"/>
				   <p className={`${styles.imgtext}`}>Dusty Yale</p>
				</div>
				<div className={`${styles.col}`}><Image id="img5" className={`${styles.img}`} src="/img5.webp" alt="cloth" width="250" height="400"/>
				   <p className={`${styles.imgtext}`}>Sterling Palms</p>
				</div>
				<div className={`${styles.col}`}><Image id="img6" className={`${styles.img}`} src="/img6.webp" alt="cloth" width="250" height="400"/>
				   <p className={`${styles.imgtext}`}>Vintage Cobalt</p>
				</div>   
				<div className={`${styles.col}`}><Image id="img7" className={`${styles.img}`} src="/img7.jpg"  alt="cloth" width="250" height="400"/>
				   <p className={`${styles.imgtext}`}>Castlaton Shine</p>
				</div>
				<div className={`${styles.col}`}><Image id="img8" className={`${styles.img}`} src="/img8.webp" alt="cloth" width="250" height="400"/>
			       <p className={`${styles.imgtext}`}>Chanterelle beige</p>
				</div>
				<button className={`${styles.viewall}`} type="button" onclick="myFunction()"> VIEW ALL </button>
			</div>
		</>
    )
}
 
export default Navbar

import React from 'react'
import styles from '../styles/DisplayGallery.module.scss'
import Image from 'next/image'
import Link from 'next/link'
 
const Navbar = () => {
    return (
        <>
		    <div className={`${styles.main}`}>
				<h2>MENSWEAR 23</h2>
				<div className={`${styles.container}`}>
					<div className={`${styles.frame}`}>
						<Image id="img1" src="/img1.webp" alt="cloth" width="205" height="286"/>
							{/* <p className={`${styles.imgtext}`}>Morning Mist</p> */}
					</div>
					<div className={`${styles.frame}`}>
						<Image id="img2" src="/img2.webp" alt="cloth" width="205" height="286"/>
							{/* <p className={`${styles.imgtext}`}>pine Green</p> */}
					</div>
					<div className={`${styles.frame}`}>
						<Image id="img3" src="/img3.webp" alt="cloth" width="205" height="286"/>
							{/* <p className={`${styles.imgtext}`}>Seafoam Green</p> */}
					</div>		
					<div className={`${styles.frame}`}>
						<Image id="img4" src="/img4.webp" alt="cloth" width="205" height="286"/>
							{/* <p className={`${styles.imgtext}`}>Dusty Yale</p> */}
					</div>
					<div className={`${styles.frame}`}>
						<Image id="img5" src="/img5.webp" alt="cloth" width="205" height="286"/>
							{/* <p className={`${styles.imgtext}`}>Sterling Palms</p> */}
					</div>
					<div className={`${styles.frame}`}>
						<Image id="img6" src="/img6.webp" alt="cloth" width="205" height="286"/>
							{/* <p className={`${styles.imgtext}`}>Vintage Cobalt</p> */}
					</div>   
					<div className={`${styles.frame}`}>
						<Image id="img7" src="/img7.jpg"  alt="cloth" width="205" height="286"/>
							{/* <p className={`${styles.imgtext}`}>Castlaton Shine</p> */}
					</div>
					<div className={`${styles.frame}`}>
						<Image id="img8" src="/img8.webp" alt="cloth" width="205" height="286"/>
							{/* <p className={`${styles.imgtext}`}>Chanterelle beige</p> */}
					</div>
						{/* <button className={`${styles.viewall}`} type="button" > VIEW ALL </button> */}
				</div>
			</div>
		</>
    )
}
 
export default Navbar

import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
 
const Navbar = () => {
    return (
	<div className={`${styles.box}`}>
		<h1 className={`${styles.heading} ${styles.text}`}>ZOLL & METER</h1>
        <nav className={styles.mainnav}>
            <ul>
                <Link id="homelink" className={`${styles.link}`} href='/'>Home</Link>
				<Link id="CLlink" className={`${styles.link}`} href='/customer-list'>Customer List</Link>
				<Link id="m23link" className={`${styles.link}`} href='/'>Luxury Unstitched</Link>
				<Link id="mrsmLlink" className={`${styles.link}`} href='/'>Kurtas</Link>
				<Link id="CLlink" className={`${styles.link}`} href='/'>Sherwani</Link>
				<Link id="CLlink" className={`${styles.link}`} href='/'>Prince Coat</Link>
				<Link id="CLlink" className={`${styles.link}`} href='/'>Waist Coat</Link>
				<Link id="CLlink" className={`${styles.link}`} href='/'>Glossary</Link>
				<Link id="CLlink" className={`${styles.link}`} href='/'>Accessories</Link>
				<Link id="CLlink" className={`${styles.link}`} href='/'>Contact Us</Link>
            </ul>
        </nav>
	</div>
    )
}

export default Navbar

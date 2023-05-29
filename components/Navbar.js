import React from 'react'
import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'
 
const Navbar = () => {
    return (
	<div className={`${styles.main}`}>
		<h1 className={`${styles.heading} ${styles.text}`}>ZOLL & METER</h1>
        <nav className={styles.mainnav}>
            <div className={`${styles.box}`}>
                <Link className={`${styles.link}`} href='/'>Home</Link>
				<Link className={`${styles.link}`} href='/customer-list'>Customer List</Link>
				<Link className={`${styles.link}`} href='../SideNav'>Luxury Unstitched</Link>
				<Link className={`${styles.link}`} href='/'>Kurtas</Link>
				<Link className={`${styles.link}`} href='/'>Sherwani</Link>
				<Link className={`${styles.link}`} href='/'>Prince Coat</Link>
				<Link className={`${styles.link}`} href='/'>Waist Coat</Link>
				<Link className={`${styles.link}`} href='/'>Glossary</Link>
				<Link className={`${styles.link}`} href='/'>Accessories</Link>
				<Link className={`${styles.link}`} href='/'>Contact Us</Link>
            </div>
        </nav>
	</div>
    )
}

export default Navbar

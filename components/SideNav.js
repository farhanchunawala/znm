import React from 'react'
import styles from '../styles/SideNav.module.scss'
import Link from 'next/link'
 
const SideNav = () => {
    return (
	<div className={`${styles.main}`}>
		<div className={`${styles.box}`}>
			<Link className={`${styles.link}`} href='/'>HOME</Link> <br></br>
			<Link className={`${styles.link}`} href='/customer-list'>CUSTOMER LIST</Link> <br></br>
			<Link className={`${styles.link}`} href='/SideNav'>LUXURY UNSTITCHED</Link> <br></br>
			<Link className={`${styles.link}`} href='/'>KURTAS</Link> <br></br>
			<Link className={`${styles.link}`} href='/'>SHERWANI</Link> <br></br>
			<Link className={`${styles.link}`} href='/'>PRINCE COAT</Link> <br></br>
			<Link className={`${styles.link}`} href='/'>WAIST COAT</Link> <br></br>
			<Link className={`${styles.link}`} href='/'>GLOSSARY</Link> <br></br>
			<Link className={`${styles.link}`} href='/'>ACCESSORIES</Link> <br></br>
			<Link className={`${styles.link}`} href='/'>CONTACT US</Link> <br></br>
			<div className={`${styles.form}`}>
				<input type="search" id="search" placeholder="SEARCH"/>
				<button type="button" onClick="myFunction()">SEARCH</button>
			</div>
		</div>
    </div>
	)
}

export default SideNav

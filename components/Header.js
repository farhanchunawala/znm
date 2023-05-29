import React from 'react'
import styles from '../styles/Header.module.scss'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import Link from 'next/link'
 
const Header = () => {
    return (
	<div className={`${styles.main}`}>
		<>
			<Navbar></Navbar>
			{/* <SideNav></SideNav> */}
		</>
	</div>
    )
}

export default Header

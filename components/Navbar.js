import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
 
const Navbar = () => {
    return (
        <nav className={styles.mainnav}>
            <ul>
                <Link href='/'>Home</Link>
            </ul>
        </nav>
    )
}

export default Navbar

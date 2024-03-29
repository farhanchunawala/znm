import React from 'react'
import styles from '../styles/Footer.module.scss'
import FooterMenu from '../components/FooterMenu'
import NewsLetter from '../components/NewsLetter'
import Link from 'next/link'
 
const Footer = () => {
    return (
	<div className={`${styles.main}`}>
		<NewsLetter></NewsLetter>
		<FooterMenu></FooterMenu>
	</div>
    )
}

export default Footer

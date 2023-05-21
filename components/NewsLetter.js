import React from 'react'
import styles from '../styles/NewsLetter.module.scss'
import Link from 'next/link'
 
const NewsLetter = () => {
    return (
	<div className={`${styles.main}`}>
		<div className={`${styles.box}`}>
			<h2>Sign up to our Whatsapp</h2>
			<input type="tel" maxlength="10" id="number" placeholder="Enter phone number" min="10" max="10"/>
			<button type="button" onclick="myFunction()">SUBSCRIBE</button>
		</div>
	</div>
    )
}

export default NewsLetter

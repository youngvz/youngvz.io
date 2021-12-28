import { useState } from 'react';
import styles from '../styles/Contact.module.scss'
 
export default function Contact(){
    return (
    <div className={styles.connectWrapper} id="connect">
        <div className={styles.description}>
            <p className={styles.title}>Connect With Me ♨♨♨</p>
            <p className={styles.subtitle}>Want to get in touch? Feel free to connect with me on social media. </p>
            <p className={styles.subtitle}>If you would like to collaborate, please send all inquiries to:</p>
            <a href = "mailto: viraj@cloudartisans.io" target="_blank" rel="noopener noreferrer" className={styles.emailLink}> <p>viraj at cloudartisans dot io</p> </a> 
        </div>
    </div> 
    )
}
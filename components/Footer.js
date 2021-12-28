import { useState } from 'react';
import styles from '../styles/Footer.module.scss'
 
export default function Footer(){
    return (
        <div className={styles.footerWrapper}>
            <a href="https://github1s.com/youngvz/youngvz.io" target="_blank" rel="noopener noreferrer"><p>Made with NextJs 💜</p></a>
        </div>
    )
}
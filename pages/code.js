

import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LandingCode from '../components/LandingCode';
import Posts from '../components/Posts';

import styles from '../styles/code.module.scss'

export default function Code(){
    return (
        <div className={styles.pageWrapper}> 

            <LandingCode></LandingCode>

            <div className={styles.checkerboardWrapper}>
                <img src="/static/assets/images/checker_board.jpg"/>
            </div>

            <Posts/>

            <div className={styles.mountainWrapper}>
                <img src="/static/assets/images/retro_mountains.png"/>
            </div>

            <Contact/>
            <Footer/>
        </div>
    )
}
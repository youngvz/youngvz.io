import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Posts from '../components/Posts';

import styles from '../styles/Home.module.scss'
 
export default function Home(){
    
    return (
        <div className={styles.pageWrapper}>
            <Header/>
            <About/>

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
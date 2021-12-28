

import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LandingCode from '../components/LandingCode';
import Posts from '../components/Posts';

import Head from 'next/head';

import styles from '../styles/code.module.scss'

export default function Code(){
    return (
        <div className={styles.pageWrapper}>
            <Head>
                <title>Code</title>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👾</text></svg>"/>

                <meta name="title" content="Code" key="title"/>
                <meta name="description" content="Code by youngvz"key="title" />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://youngvz.io/code"/>
                <meta property="og:title" content="Code" key="title"/>
                <meta property="og:description" content="Code by youngvz."/>
                <meta property="og:image" content="https://youngvz.io/static/assets/images/matrix_bg.jpg"/>

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://youngvz.io/code"/>
                <meta property="twitter:title" content="Code"/>
                <meta property="twitter:description" content="Code by youngvz."/>
                <meta property="twitter:image" content="https://youngvz.io/static/assets/images/matrix_bg.jpg"/>
            </Head>
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
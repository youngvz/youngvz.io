

import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LandingCode from '../components/LandingCode';
import Posts from '../components/Posts';

import Head from 'next/head';
import { useState, useEffect } from 'react';

import styles from '../styles/Code.module.scss'

export default function Code(){
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
        if (!isHidden){
            startMatrix();
            setTimeout(()=> {
                setIsHidden(true)
            }, 5500);
        }
    }, []);

    const startMatrix = () => {
        // Initialising the canvas
        var canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d');

        var audio = document.getElementById('matrix');
        audio.play();

        // Setting the width and height of the canvas
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Setting up the letters
        var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
        letters = letters.split('');

        // Setting up the columns
        var fontSize = 10,
        columns = canvas.width / fontSize;

        // Setting up the drops
        var drops = [];
        for (var i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        // Setting up the draw function
        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, .1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < drops.length; i++) {
                var text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillStyle = '#0f0';
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                drops[i]++;
                if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
                    drops[i] = 0;
                }
            }
        }

        // Loop the animation
        setInterval(draw, 20);
    }

    const metdataHead = <Head>
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
    </Head>;

    const canvas = isHidden ? null : <canvas></canvas>

    const page = isHidden ? <>
        <LandingCode/>
        <div className={styles.checkerboardWrapper}>
            <img src="/static/assets/images/checker_board.jpg"/>
        </div>

        <Posts/>

        <div className={styles.mountainWrapper}>
            <img src="/static/assets/images/retro_mountains.png"/>
        </div>

        <Contact/>
        <Footer/>
    </> : null;

    return (
        <div className={styles.pageWrapper}>
            {metdataHead}
            <audio hidden={true} id='matrix' src='/static/assets/audio/matrix.mp3'></audio>
            {canvas}
            {page}
        </div>
    )
}

import { useState, useEffect } from 'react';

import styles from '../styles/LandingCode.module.scss'

export default function LandingCode(){
    const serviceOfferings = [
        {
            'title': 'Cloud Architecture',
            'description': 'AWS is my preferred choice for creating enterprise-grade cloud solutions. I enjoy using Vercel, Netlify, and Firebase for personal use.',
        },
        { 
            'title': 'Mobile Development',
            'description': 'I love to build native mobile solutions for both iOS and Android. I am fluent in Swift and I love following the language as it grows. I love the new SwiftUI and async/await features in OS 15.',
        },
        {
            'title': 'Web Development',
            'description': 'My web framework of choice is ReactJs. I love the modular and modern nature of the library. This website was built using NextJS and is hosted on Vercel.',
        }
    ]

    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
        if (!isHidden){
            startMatrix();
            setTimeout(()=> {
                setIsHidden(true)
            }, 5000);
        }
    }, []);

    const startMatrix = () => {
        // Initialising the canvas
        var canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d');

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

    const canvas = isHidden ? null : <canvas></canvas>

    return (
        <div className={styles.landingCodeWrapper}>
            {canvas}
            <div className={styles.landingWrapper}>
                <div className={styles.layerWrapper}>
                    <p className={styles.title}>【code】</p>
                    {/* <img className={styles.octocat} src="/static/assets/images/octocat.png"/> */}
                    <p className={styles.subtitle}>マトリックス</p>
                    <a href='https://github.com/youngvz' target="_blank">
                        <button className={styles.learnMore}>Visit GitHub 👾</button>
                    </a>
                </div>
            </div>
            
            <div className={styles.aboutWrapper} id="about">
                <div className={styles.linkWrapper}>
                    <a href="/" rel="noopener noreferrer">
                        <img className="logo" src="/static/assets/icons/vaporwave.png"/>
                    </a>
                    <a href="https://youngvz.medium.com/" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src="/static/assets/icons/medium_logo.png"/>
                    </a>
                    <a href="https://linkedin.com/in/virajashah/" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src="/static/assets/icons/linkedin_logo.png"/>
                    </a>
                    <a href="https://instagram.com/young_vz" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src="/static/assets/icons/instagram_logo.png"/>
                    </a>
                </div>
                <div className={styles.description}>
                    <p className={styles.title}>👋 Hello World.</p>
                    <p className={styles.subtitle}>Coding has always been a passion of mine. My favorite language to program with is <a className={styles.swift} href='https://github.com/youngvz?tab=repositories&q=&type=&language=swift&sort='>Swift</a> but I love how <a className={styles.matrix} href="https://github1s.com/youngvz/youngvz.io"> versatile</a> Javascript is. My favorite platform to develop on is iOS. </p>
                    <p className={styles.subtitle}>Please browse my <a className={styles.matrix} href="https://github.com/youngvz">GitHub</a> repositories to see my open source contributions and the latest projects I am working on. </p>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.infoContainer} id="aws">
                        <img className={styles.infoLogo} src="/static/assets/icons/aws_black.png"></img>
                        <div className={styles.infoTextContainer}>
                            <h1 className={styles.infoTitle}>{serviceOfferings[0].title}</h1>
                            <p className={styles.infoSubtitle}>{serviceOfferings[0].description}</p>
                        </div>
                    </div>
                    
                    <div className={styles.infoContainer} id="mobile">
                        <img className={styles.infoLogo} src="/static/assets/icons/ios_black.png"></img>

                        <div className={styles.infoTextContainer}>
                            <h1 className={styles.infoTitle}>{serviceOfferings[1].title}</h1>
                            <p className={styles.infoSubtitle}>{serviceOfferings[1].description}</p>
                        </div>
                    </div>


                    <div className={styles.infoContainer} id="web">
                        <img className={styles.infoLogo} src="/static/assets/icons/react_black.png"></img>
                        <div className={styles.infoTextContainer}>
                            <h1 className={styles.infoTitle}>{serviceOfferings[2].title}</h1>
                            <p className={styles.infoSubtitle}>{serviceOfferings[2].description}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
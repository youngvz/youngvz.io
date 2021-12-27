import { useState } from 'react';
import styles from '../styles/root.module.scss'
 
export default function RootComponent(){
    const [isHidden, setIsHidden] = useState(true)
    const [text, setText] = useState('Lift off 🚀')

    const toggleAudio = () => {
    var audio = document.getElementById('a1');

    if (audio.duration > 0 && !audio.paused){
        setText('Lift off 🚀')
        setIsHidden(true)
        audio.pause();
        } else {
        setText('🌊 Relax')
        setIsHidden(false)
        setTimeout(()=> {
            setIsHidden(true)
        }, 3800);
        audio.play();
        }
    }

    return (
        <div class={styles.pageWrapper}>
            <audio hidden={isHidden} class={styles.audio} controls loop id='a1' src='/static/assets/audio/HOME - Resonance.mp3'></audio>
            <section class={styles.sakuraBg}></section>
            <div class={styles.landingWrapper}>
                <div class={styles.layerWrapper}>
                    <p class={styles.title}>【𝕧𝕚𝕣𝕒𝕛 𝕤𝕙𝕒𝕙】</p>
                    <img class={styles.roman} src="/static/assets/images/roman.png"/>
                    <p class={styles.subtitle}>ヴェイパーウェイヴ</p>
                    <button class={styles.learnMore} onClick={toggleAudio}>{text}</button>
                </div>
            </div>

            <div class={styles.aboutWrapper} id="about">
                <div class={styles.linkWrapper}>
                    <a href="https://github.com/youngvz" target="_blank" rel="noopener noreferrer">
                        <img class="logo" src="/static/assets/icons/github_logo.png"/>
                    </a>
                    <a href="https://youngvz.medium.com/" target="_blank" rel="noopener noreferrer">
                        <img class="logo" src="/static/assets/icons/medium_logo.png"/>
                    </a>
                    <a href="https://linkedin.com/in/virajashah/" target="_blank" rel="noopener noreferrer">
                        <img class="logo" src="/static/assets/icons/linkedin_logo.png"/>
                    </a>
                    <a href="https://instagram.com/young_vz" target="_blank" rel="noopener noreferrer">
                        <img class="logo" src="/static/assets/icons/instagram_logo.png"/>
                    </a>
                </div>
                <div class={styles.description}>
                    <p class={styles.title}>Welcome to my playground. <br/>🌊🌊🌊</p>
                    <p class={styles.subtitle}>Enjoy curated samples of my code, art, and ramblings.</p>
                    <p class={styles.subtitle}>The purpose of this website is to share my ideas and expressions. The design was inspired by Vaporwave, an Internet cultural, social, and aesthetic medium. </p>

                </div>
                <div class={styles.spaceCatWrapper}>
                    <img class={styles.spaceCat} src="/static/assets/gifs/party-cat.gif"/>
                </div>
            </div>

            <div class={styles.checkerboardWrapper}>
                <img src="/static/assets/images/checker_board.jpg"/>
            </div>

            
            <div class={styles.cloudWrapper}>
                <div class={styles.signWrapper}>
                    <div class={styles.sign}><b>🌴 Ex<span>pl</span>o<span>r</span>e 🌴</b></div>
                </div>

                <div class={[styles.cloud, styles.large, styles.cloud1].join(" ")}>
                    <div></div><div></div><div></div><div></div>
                </div>
                <div class={[styles.cloud, styles.normal, styles.cloud2].join(" ")}>
                    <div></div><div></div><div></div><div></div>
                </div>
                <div class={[styles.cloud, styles.small, styles.cloud3].join(" ")}>
                    <div></div><div></div><div></div><div></div>
                </div>
                <div class={[styles.cloud, styles.tiny, styles.cloud4].join(" ")}>
                    <div></div><div></div><div></div><div></div>
                </div>
                <div class={[styles.cloud, styles.large, styles.cloud5].join(" ")}>
                    <div></div><div></div><div></div><div></div>
                </div>
                <div class={[styles.cloud, styles.normal, styles.cloud6].join(" ")}>
                    <div></div><div></div><div></div><div></div>
                </div>

                <div class={styles.postWrapper}>
                    <a href="https://youngvz.medium.com/an-intro-to-serverless-architecture-c0e356fbfd20" target="_blank" rel="noopener noreferrer">
                        <div class={styles.post}>
                            <img class={styles.thumbnail} src="/static/assets/images/serverless_thumbnail.jpeg"/>
                            <div class={styles.textContainer}>
                                <p class={styles.title}>An Intro to Serverless Architecture</p>
                                <p class={styles.subtitle}>What if I told you that you can deploy code without having to maintain any infrastructure?</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://youngvz.medium.com/top-3-things-to-know-before-building-an-app-in-2018-9df85e4fe26b" target="_blank" rel="noopener noreferrer">
                        <div class={styles.post}>
                            <img class={styles.thumbnail} src="/static/assets/images/mobile_dev_thumbail.jpeg"/>
                            <div class={styles.textContainer}>
                                <p class={styles.title}>Top 3 Things To Know Before Building an App</p>
                                <p class={styles.subtitle}>While apps are still very much profitable these days, a lot groundwork is necessary first.</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://medium.com/@Shapr/this-founder-says-shapr-kept-his-doors-open-77fa818152c7" target="_blank" rel="noopener noreferrer">
                        <div class={styles.post}>
                            <img class={styles.thumbnail} src="/static/assets/images/shapr_thumbnail.jpeg"/>
                            <div class={styles.textContainer}>
                                <p class={styles.title}>This Founder Says Shapr Kept His Doors Open</p>
                                <p class={styles.subtitle}>When Viraj Shah started his own business, his #1 fear was finding enough clients to keep his doors open.</p>                
                            </div>
                        </div>
                    </a>
                    
                    <a href="https://georgiastatesignal.com/three-panthers-find-entrepreneurial-niche/" target="_blank" rel="noopener noreferrer">
                        <div class={styles.post}>
                            <img class={styles.thumbnail} src="/static/assets/images/the_signal_thumbnail.png"/>
                            <div class={styles.textContainer}>
                                <p class={styles.title}>Three Panthers Find Their Entrepreneurial Niche</p>
                                <p class={styles.subtitle}>Matteo Santavicca, Viraj Shah & Solo Arnett found purpose in their jobs before graduating from GSU.</p>
                            </div>
                        </div>
                    </a>
                    
                </div>
            </div>


            <div class={styles.mountainWrapper}>
                <img src="/static/assets/images/retro_mountains.png"/>
            </div>

            <div class={styles.connectWrapper} id="connect">
                <div class={styles.description}>
                    <p class={styles.title}>Connect With Me ♨♨♨</p>
                    <p class={styles.subtitle}>Want to get in touch? Feel free to connect with me on social media. </p>
                    <p class={styles.subtitle}>If you would like to collaborate, please send all inquiries to:</p>
                    <a href = "mailto: viraj@cloudartisans.io" target="_blank" rel="noopener noreferrer" class={styles.emailLink}> <p>viraj at cloudartisans dot io</p> </a> 
                </div>
            </div> 

            <div class={styles.footerWrapper}>
                <a href="https://github1s.com/youngvz/next-youngvz" target="_blank" rel="noopener noreferrer"><p>Made with NextJs 💜</p></a>
            </div>
        </div>
    )
}
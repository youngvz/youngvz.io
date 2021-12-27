import { useState } from 'react';
import styles from '../styles/rootComponent.module.scss'
 
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
        <div className={styles.pageWrapper}>
            <audio hidden={isHidden} className={styles.audio} controls loop id='a1' src='/static/assets/audio/HOME - Resonance.mp3'></audio>
            <section className={styles.sakuraBg}></section>
            <div className={styles.landingWrapper}>
                <div className={styles.layerWrapper}>
                    <p className={styles.title}>【𝕧𝕚𝕣𝕒𝕛 𝕤𝕙𝕒𝕙】</p>
                    <img className={styles.roman} src="/static/assets/images/roman.png"/>
                    <p className={styles.subtitle}>ヴェイパーウェイヴ</p>
                    <button className={styles.learnMore} onClick={toggleAudio}>{text}</button>
                </div>
            </div>

            <div className={styles.aboutWrapper} id="about">
                <div className={styles.linkWrapper}>
                    <a href="https://github.com/youngvz" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src="/static/assets/icons/github_logo.png"/>
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
                    <p className={styles.title}>Welcome to my playground. <br/>🌊🌊🌊</p>
                    <p className={styles.subtitle}>Enjoy curated samples of my code, art, and thoughts.</p>
                    <p className={styles.subtitle}>The design of this website was inspired by Vaporwave, an Internet cultural and aesthetic medium.</p>

                </div>
                <div className={styles.spaceCatWrapper}>
                    <img className={styles.spaceCat} src="/static/assets/gifs/party-cat.gif"/>
                </div>
            </div>

            <div className={styles.checkerboardWrapper}>
                <img src="/static/assets/images/checker_board.jpg"/>
            </div>

            
            <div className={styles.cloudWrapper}>
                <div className={styles.signWrapper}>
                    <div className={styles.sign}><b>🌴 Ex<span>pl</span>o<span>r</span>e 🌴</b></div>
                </div>

                <div className={[styles.cloud, styles.large, styles.cloud1].join(" ")}>
                    <div></div><div></div><div></div><div></div>
                </div>
                <div className={[styles.cloud, styles.normal, styles.cloud2].join(" ")}>
                    <div></div><div></div><div></div><div></div>
                </div>
                <div className={[styles.cloud, styles.small, styles.cloud3].join(" ")}>
                    <div></div><div></div><div></div><div></div>
                </div>
                <div className={[styles.cloud, styles.tiny, styles.cloud4].join(" ")}>
                    <div></div><div></div><div></div><div></div>
                </div>
                <div className={[styles.cloud, styles.large, styles.cloud5].join(" ")}>
                    <div></div><div></div><div></div><div></div>
                </div>
                <div className={[styles.cloud, styles.normal, styles.cloud6].join(" ")}>
                    <div></div><div></div><div></div><div></div>
                </div>

                <div className={styles.postWrapper}>
                    <a href="https://youngvz.medium.com/an-intro-to-serverless-architecture-c0e356fbfd20" target="_blank" rel="noopener noreferrer">
                        <div className={styles.post}>
                            <img className={styles.thumbnail} src="/static/assets/images/serverless_thumbnail.jpeg"/>
                            <div className={styles.textContainer}>
                                <p className={styles.title}>An Intro to Serverless Architecture</p>
                                <p className={styles.subtitle}>What if I told you that you can deploy code without having to maintain any infrastructure?</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://youngvz.medium.com/top-3-things-to-know-before-building-an-app-in-2018-9df85e4fe26b" target="_blank" rel="noopener noreferrer">
                        <div className={styles.post}>
                            <img className={styles.thumbnail} src="/static/assets/images/mobile_dev_thumbail.jpeg"/>
                            <div className={styles.textContainer}>
                                <p className={styles.title}>Top 3 Things To Know Before Building an App</p>
                                <p className={styles.subtitle}>While apps are still very much profitable these days, a lot groundwork is necessary first.</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://medium.com/@Shapr/this-founder-says-shapr-kept-his-doors-open-77fa818152c7" target="_blank" rel="noopener noreferrer">
                        <div className={styles.post}>
                            <img className={styles.thumbnail} src="/static/assets/images/shapr_thumbnail.jpeg"/>
                            <div className={styles.textContainer}>
                                <p className={styles.title}>This Founder Says Shapr Kept His Doors Open</p>
                                <p className={styles.subtitle}>When Viraj Shah started his own business, his #1 fear was finding enough clients to keep his doors open.</p>                
                            </div>
                        </div>
                    </a>
                    
                    <a href="https://georgiastatesignal.com/three-panthers-find-entrepreneurial-niche/" target="_blank" rel="noopener noreferrer">
                        <div className={styles.post}>
                            <img className={styles.thumbnail} src="/static/assets/images/the_signal_thumbnail.png"/>
                            <div className={styles.textContainer}>
                                <p className={styles.title}>Three Panthers Find Their Entrepreneurial Niche</p>
                                <p className={styles.subtitle}>Matteo Santavicca, Viraj Shah & Solo Arnett found purpose in their jobs before graduating from GSU.</p>
                            </div>
                        </div>
                    </a>
                    
                </div>
            </div>


            <div className={styles.mountainWrapper}>
                <img src="/static/assets/images/retro_mountains.png"/>
            </div>

            <div className={styles.connectWrapper} id="connect">
                <div className={styles.description}>
                    <p className={styles.title}>Connect With Me ♨♨♨</p>
                    <p className={styles.subtitle}>Want to get in touch? Feel free to connect with me on social media. </p>
                    <p className={styles.subtitle}>If you would like to collaborate, please send all inquiries to:</p>
                    <a href = "mailto: viraj@cloudartisans.io" target="_blank" rel="noopener noreferrer" className={styles.emailLink}> <p>viraj at cloudartisans dot io</p> </a> 
                </div>
            </div> 

            <div className={styles.footerWrapper}>
                <a href="https://github1s.com/youngvz/next-youngvz" target="_blank" rel="noopener noreferrer"><p>Made with NextJs 💜</p></a>
            </div>
        </div>
    )
}
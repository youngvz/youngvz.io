import { useState } from 'react';
import styles from '../styles/Header.module.scss'

export default function Header(){
    const [isHidden, setIsHidden] = useState(true)
    const [text, setText] = useState('Lift off π')

    const toggleAudio = () => {
        var audio = document.getElementById('a1');

        if (audio.duration > 0 && !audio.paused){
            setText('Lift off π')
            setIsHidden(true)
            audio.pause();
        } else {
            setText('π Relax')
            setIsHidden(false)
            setTimeout(()=> {
                setIsHidden(true)
            }, 3800);
            audio.play();
        }
    }

    return (<div>
        <audio hidden={isHidden} className={styles.audio} controls loop id='a1' src='/static/assets/audio/HOME - Resonance.mp3'></audio>
            <section className={styles.sakuraBg}></section>
            <div className={styles.landingWrapper}>
                <div className={styles.layerWrapper}>
                    <p className={styles.title}>γπ§ππ£ππ π€πππγ</p>
                    <img className={styles.roman} src="/static/assets/images/roman.png"/>
                    <p className={styles.subtitle}>γ΄γ§γ€γγΌγ¦γ§γ€γ΄</p>
                    <button className={styles.learnMore} onClick={toggleAudio}>{text}</button>
                </div>
            </div>
    </div>)
}
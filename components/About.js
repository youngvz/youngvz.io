import styles from '../styles/About.module.scss'
 
export default function About(){
    return (
        <div className={styles.aboutWrapper} id="about">
            <div className={styles.linkWrapper}>
                <a href="/code" rel="noopener noreferrer">
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
    )
}
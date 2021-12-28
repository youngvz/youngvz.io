import styles from '../styles/Posts.module.scss'
 
export default function Posts(){
    return (
        <div className={styles.postsWrapper}>
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
    )
}
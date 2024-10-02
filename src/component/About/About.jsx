import styles from "./about.module.css";
import logo from './image/logo.png';
import cursor from './image/cursor.png'
import server from './image/server.png'
import git from './image/git.png'
import link from './image/link.png'

export const About = () => {
  return (
<section className={styles.container}>
    <h2 className={styles.title}>About</h2>
    <div className={StyleSheet.content}> <img className={styles.logo} src={logo} alt="logo" />
   
    <ul className={styles.items}>
    <li className={styles.item}><img className={styles.cursor} src={cursor} alt="logo" />
    <div className={styles.textItem}><h3>Frontend devloper</h3>
    <p>I`m junior frontend with **** experirnce</p>
    </div>
    </li>
    <li className={styles.item}><img className={styles.server} src={server} alt="logo" />
    <div><h3>backend devloper</h3>
    <p>I`m junior backend with **** experirnce</p>
    </div>
    </li>
    <li className={styles.item}>
    <p> <img src={git} className={styles.git} alt="git"/><a href="https://github.com/hadeel123-bna" className={styles.git}>visite my github</a></p>
    </li>
    <li className={styles.item}>
    <p ><img src={link} className={styles.link} /><a href="https://www.linkedin.com/feed/" className={styles.link}>visite my linkedin</a></p>
    </li>
    </ul>
    



    
    
    </div>
</section>  )
}

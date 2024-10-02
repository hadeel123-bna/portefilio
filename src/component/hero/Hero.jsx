// src/component/hero/Hero.jsx
import styles from "./hero.module.css";

import Icon from './image/icon.jpg';
export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello , I`m Hadil Ben Nacer</h1>
            <p className={styles.des}> I`m  beginner web developer with a passion for both front-end and back-end development. I`m excited to build interactive and dynamic web applications and am continuously learning new technologies to enhance my skills. I`m eager to contribute and grow in the web development field! </p>
        <a href="hadilbennaceur1234@gmail.com" className={styles.contact}>Contact Me</a>
        </div>
        
        <img className={styles.icon} src={Icon} alt="logo" />
    <div className={styles.blur}/>
    <div className={styles.button}/>

    </section>
  );
};


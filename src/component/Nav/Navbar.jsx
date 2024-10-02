import styles from "./navbar.module.css";
import logo from './image/logo.png';

export const Navbar = () => {
  return (
    <div className="Nav">
      <nav className={styles.navbar}>
        <img className={styles.logo} src={logo} alt="logo" />
        <a className={styles.title} href="/">portfolio</a>
        <div className={styles.menu}>

          <ul className={styles.list}>
            <li><a href="/about">About</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}


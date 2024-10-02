import styles from './App.module.css';
import { Navbar } from './component/Nav/Navbar';
import { Hero } from './component/hero/Hero'; // Assurez-vous que l'importation correspond au nom du composant
import { About } from './component/About/About';
import { Experience } from './component/experience/Experience';
import Contact from './component/Contact/Contact';
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;



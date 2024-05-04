import styleApp from './App.module.css';
import Header from '../header/header';
import StartScreen from '../startScreen/startScreen';
import SectionSkill from '../sectionSkill/skill';
import About from '../about/about';
import SectionPortfolio from '../portfolio/portfolio';
import SectionExperience from '../experience/experience';
import SectionContactMe from '../contact-me/contactMe';

function App() {
  return (
    <div className={styleApp.container}>
      <main className={styleApp.main}>
        <Header />
        <StartScreen />
        <About />
        {/* <SectionSkill />
        <SectionPortfolio />
        <SectionExperience />
        <SectionContactMe /> */}
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;

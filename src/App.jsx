import './App.css';
import Header from './components/header';
import HeroSection from './components/herosection';
import AboutMe from './components/AboutMe'
import Service from './components/Service/service';
import Projects from './components/projects/projects';
import Contact from './components/contact';
export function App() {
  
  return (
    <div className="App">
      <Header />
      <HeroSection  />
      <AboutMe  />
      <Service />
      <Projects  />
      <Contact />
    </div>
  );
  
}

export default App;
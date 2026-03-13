import Navigation from './components/Navigation.jsx';
import BackgroundGrid from './components/BackgroundGrid.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import ProductThinking from './sections/ProductThinking.jsx';
import DataDecision from './sections/DataDecision.jsx';
import Artwork from './sections/Artwork.jsx';
import Writing from './sections/Writing.jsx';
import Skills from './sections/Skills.jsx';
import Interests from './sections/Interests.jsx';
import Resume from './sections/Resume.jsx';
import Contact from './sections/Contact.jsx';

function App() {
  return (
    <div className="relative min-h-screen bg-ivory text-ink">
      <BackgroundGrid />
      <Navigation />
      <main className="space-y-12 pb-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <ProductThinking />
        <DataDecision />
        <Artwork />
        <Writing />
        <Skills />
        <Interests />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;

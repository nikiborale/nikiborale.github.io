import Navigation from './components/Navigation.jsx';
import BackgroundGrid from './components/BackgroundGrid.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Thinking from './sections/Thinking.jsx';
import CaseStudies from './sections/CaseStudies.jsx';
import Finance from './sections/Finance.jsx';
import Breakdowns from './sections/Breakdowns.jsx';
import Creative from './sections/Creative.jsx';
import Writing from './sections/Writing.jsx';
import NowSection from './sections/Now.jsx';
import Contact from './sections/Contact.jsx';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0f1722] text-ivory">
      <BackgroundGrid />
      <Navigation />
      <main className="space-y-2">
        <Hero />
        <About />
        <Thinking />
        <CaseStudies />
        <Finance />
        <Breakdowns />
        <Creative />
        <Writing />
        <NowSection />
        <Contact />
      </main>
    </div>
  );
}

export default App;

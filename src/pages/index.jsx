import Head from 'next/head';
import Navigation from '../components/Navigation.jsx';
import BackgroundGrid from '../components/BackgroundGrid.jsx';
import Hero from '../sections/Hero.jsx';
import About from '../sections/About.jsx';
import Experience from '../sections/Experience.jsx';
import Projects from '../sections/Projects.jsx';
import ProductThinking from '../sections/ProductThinking.jsx';
import DataDecision from '../sections/DataDecision.jsx';
import Artwork from '../sections/Artwork.jsx';
import Writing from '../sections/Writing.jsx';
import Skills from '../sections/Skills.jsx';
import Interests from '../sections/Interests.jsx';
import Resume from '../sections/Resume.jsx';
import Contact from '../sections/Contact.jsx';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nikita Borale | Product Strategy · Data & AI</title>
        <meta
          name="description"
          content="Nikita Borale — Product Manager in Boston blending product strategy, data & AI, and artistic creativity."
        />
        <meta property="og:title" content="Nikita Borale | Product Manager" />
        <meta
          property="og:description"
          content="A vibrant, renaissance-inspired portfolio showcasing product thinking, analytics, and creative exploration."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/nikita-headshot.svg" />
      </Head>
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
    </>
  );
}

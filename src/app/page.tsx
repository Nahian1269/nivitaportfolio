import { profile } from '@/lib/data';
import Header from '@/components/page/header';
import Hero from '@/components/page/hero';
import About from '@/components/page/about';
import Skills from '@/components/page/skills';
import Experience from '@/components/page/experience';
import Projects from '@/components/page/projects';
import ExtraCurricular from '@/components/page/extra-curricular';
import Education from '@/components/page/education';
import Footer from '@/components/page/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ExtraCurricular />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

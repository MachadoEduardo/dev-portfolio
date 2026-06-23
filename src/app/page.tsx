import Hero from '@/src/app/sections/Hero'
import AboutMe from './sections/AboutMe';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import { Projects } from './sections/Projects';

export default function Home() {
  return (
    <div className="home-page container-page">
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

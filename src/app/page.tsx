import Hero from '@/src/app/sections/Hero'
import AboutMe from './sections/AboutMe';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Spotify from './sections/Spotify';

export default function Home() {
  return (
    <div className="home-page container-page">
      <Hero/>
      
      <AboutMe/>
      <Testimonials/>
      <Spotify/>
      <Contact/>
    </div>
  );
}
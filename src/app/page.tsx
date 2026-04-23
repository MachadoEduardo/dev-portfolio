import Hero from '@/src/app/sections/Hero'
import AboutMe from './sections/AboutMe';

export default function Home() {
  return (
    <div className="home-page container-page">
      <Hero/>
      <AboutMe/>
    </div>
  );
}
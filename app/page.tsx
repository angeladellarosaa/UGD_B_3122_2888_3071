import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import VisionMission from './components/VisionMission';
import OurServices from './components/OurServices';
import ContactUs from './components/ContactUs';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VisionMission />
      <OurServices />
      <ContactUs />
    </main>
  );
}


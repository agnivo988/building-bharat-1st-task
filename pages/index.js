import FeatureSection from '@/components/FeatureSection';
import styles from './_app'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InitiativeFor from '@/components/InitiativeFor';
import LogoCarousel from "@/components/LogoCarousel";
import Testimonials from '@/components/Testimonials';
import ImpactStats from '@/components/ImpactStats';
import LogoCarouselSection from '@/components/LogoCarouselSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoCarousel />
      <Testimonials/>
      <InitiativeFor/>
      <FeatureSection/>
      <ImpactStats/>
      <LogoCarouselSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

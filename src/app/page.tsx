import Hero from '@/components/sections/Hero/Hero';
import TrustNumbers from '@/components/sections/TrustNumbers/TrustNumbers';
import Trust from '@/components/sections/Trust/Trust';
import Problem from '@/components/sections/Problem/Problem';
import Solution from '@/components/sections/Solution/Solution';
import Features from '@/components/sections/Features/Features';
import WhyChoose from '@/components/sections/WhyChoose/WhyChoose';
import Gallery from '@/components/sections/Gallery/Gallery';
import DemoVideo from '@/components/sections/DemoVideo/DemoVideo';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import LeadForm from '@/components/sections/LeadForm/LeadForm';
import FAQ from '@/components/sections/FAQ/FAQ';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustNumbers />
      <Trust />
      <Problem />
      <Solution />
      <Features />
      <WhyChoose />
      <Gallery />
      <DemoVideo />
      <Testimonials />
      <LeadForm />
      <FAQ />
    </main>
  );
}

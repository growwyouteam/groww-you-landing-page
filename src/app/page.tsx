import Hero from '@/components/sections/Hero/Hero';
import Trust from '@/components/sections/Trust/Trust';
import Problem from '@/components/sections/Problem/Problem';
import Solution from '@/components/sections/Solution/Solution';
import Features from '@/components/sections/Features/Features';
import WhyChoose from '@/components/sections/WhyChoose/WhyChoose';
import Gallery from '@/components/sections/Gallery/Gallery';
import Stats from '@/components/sections/Stats/Stats';
import LeadForm from '@/components/sections/LeadForm/LeadForm';
import FAQ from '@/components/sections/FAQ/FAQ';

export default function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <Problem />
      <Solution />
      <Features />
      <WhyChoose />
      <Gallery />
      <Stats />
      <LeadForm />
      <FAQ />
    </main>
  );
}

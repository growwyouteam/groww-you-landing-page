import './styles/globals.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Trust from './components/Trust/Trust';
import Problem from './components/Problem/Problem';
import Solution from './components/Solution/Solution';
import Features from './components/Features/Features';
import WhyChoose from './components/WhyChoose/WhyChoose';
import Gallery from './components/Gallery/Gallery';
import Stats from './components/Stats/Stats';
import LeadForm from './components/LeadForm/LeadForm';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';

export default function App() {
  return (
    <>
      <Navbar />
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
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

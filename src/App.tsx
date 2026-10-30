import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HelpYou from './components/Helpyou';
import HowItWorks from './components/Howitworks';
import Approach from './components/Approach';
import Differentials from './components/Differentials';
import FAQ from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/Whatsappbutton';

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-cream min-h-screen">
      <Header />

      <main className="pt-24">
        <Hero />
        <About />
        <Services />
        <HelpYou />
        <HowItWorks />
        <Approach />
        <Differentials />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}
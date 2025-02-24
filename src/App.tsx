import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import LiveStream from './components/LiveStream';
import Awards from './components/Awards';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./index.css"

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <LiveStream />
        <Awards />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
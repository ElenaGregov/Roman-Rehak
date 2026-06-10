
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Aktuality from './components/Aktuality';
import Gallery from './components/Gallery';
import Exhibitions from './components/Exhibitions';
import Contact from './components/Contact';
import Media from './components/Media';
import Footer from './components/Footer';
import './i18n';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Aktuality />
      <Gallery />
      <Media />   
      <Exhibitions />
      <Contact />
      <Footer />  
    </div>
  );
}

export default App;
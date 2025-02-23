import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import CV from './pages/CV';
import Certificates from './pages/Certificates';
import NetworkBackground from './components/NetworkBackground';
import MouseTracker from './components/MouseTracker';
import ColorModeToggle from './components/ColorModeToggle';
import { ColorModeProvider } from './context/ColorModeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <ColorModeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-[#1a1625] text-white relative overflow-hidden">
            <NetworkBackground />
            <MouseTracker />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/certificates" element={<Certificates />} />
            </Routes>
            <ColorModeToggle />
          </div>
        </Router>
      </LanguageProvider>
    </ColorModeProvider>
  );
}

export default App;
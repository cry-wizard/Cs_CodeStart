import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import Hero from './sections/Hero';
import About from './sections/About';
import Courses from './sections/Courses';
import WhyUs from './sections/WhyUs';
import Team from './sections/Team';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for splash screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {loading ? (
        <SplashScreen />
      ) : (
        <div className="min-h-screen relative overflow-hidden transition-colors duration-300">
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Courses />
            <WhyUs />
            <Team />
            <Contact />
          </main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'var(--card-bg)',
                color: 'var(--text-color)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border-color)',
              },
            }}
          />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;

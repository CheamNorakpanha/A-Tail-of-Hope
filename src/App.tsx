import './App.css';

import Header from './components/header/Header';
import Hero from './components/section/Hero';
import About from './components/section/About';
import Team from './components/section/Team';
import Issue from './components/section/Issue';
import Mission from './components/section/Mission';
import GetInvolved from './components/section/GetInvolved';
import Feedback from './components/section/Feedback';
import Gallery from './components/section/Gallery';
import Contact from './components/section/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

          {/* Header */}
          <Header />

        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Team Section */}
          <Team />

          {/* Issue Section */}
          <Issue />

          {/* Mission Section */}
          <Mission />

          {/* Get Involved Section */}
          <GetInvolved />

          {/* Feedback Section */}
          <Feedback />

          {/* Photo Gallery Section */}
          <Gallery />

          {/* Contact Section */}
          <Contact />

        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
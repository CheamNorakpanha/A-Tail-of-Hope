import './App.css';
import { useState } from "react";
import Logo from './components/header/Logo';
import DesktopNavBar from './components/header/DesktopNav';
import MobileMenuButton from './components/header/MobileMenuButton';
import RightSideButton from './components/header/RightSideButton';
import MobileNav from './components/header/MobileNav';

import Hero from './components/section/Hero';
import About from './components/section/About';
import Team from './components/section/Team';
import Issue from './components/section/Issue';
import Mission from './components/section/Mission';
import GetInvolved from './components/section/GetInvolved';
import Feedback from './components/section/Feedback';
import Contact from './components/section/Contact';
import Footer from './components/footer/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">

              {/* Logo */}
              <Logo />

              {/* Desktop Navigation */}
              <DesktopNavBar />

              {/* Right side buttons - Get Involved Button */}
              <RightSideButton />

              {/* Mobile menu button */}
              <MobileMenuButton />

            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <MobileNav setMobileMenuOpen={setMobileMenuOpen} />
            )}
          </div>
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
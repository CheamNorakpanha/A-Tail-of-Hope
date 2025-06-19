import './App.css';
import { Frown, HeartPulse, Scale } from "lucide-react";
import { useState } from "react";
import Logo from './components/header/Logo';
import DesktopNavBar from './components/header/DesktopNav';
import MobileMenuButton from './components/header/MobileMenuButton';
import RightSideButton from './components/header/RightSideButton';
import MobileNav from './components/header/MobileNav';

import Hero from './components/section/Hero';
import About from './components/section/About';
import Team from './components/section/Team';


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
          <section id="issue" className="w-full py-12 md:py-16 lg:py-20 bg-yellow-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">The Issue</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  The dog meat trade in Cambodia raises concerns related to health, emotional well-being, and the limited presence of clear regulations.
                  This practice continues in some communities and may affect both people and animals in different ways.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                    <HeartPulse className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Health Risks</h3>
                  <p className="text-gray-600">
                    Dog meat consumption can spread rabies and other diseases, especially when hygiene and safety standards are lacking.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Frown className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Emotional Impact</h3>
                  <p className="text-gray-600">
                    Many families experience distress when their pets are taken or lost to the trade, as dogs are often seen as companions.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border text-center sm:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Scale className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Lack of Regulation</h3>
                  <p className="text-gray-600">
                    The absence of clear laws and enforcement allows the trade to continue, raising concerns for both animal welfare and public health.
                  </p>
                </div>
              </div>

              {/* <div className="text-center max-w-3xl mx-auto space-y-6">
                <h3 className="text-2xl font-bold">Case Study: Kampot Province</h3>
                <p className="text-gray-600">
                  According to Khmer Times (2022), Kampot Provincial Police arrested multiple individuals for killing
                  three huskies for meat consumption. This case highlights the ongoing issue of dog meat trade in the
                  region.
                </p>
                <button className="bg-emerald-600 hover:bg-emerald-700">Read More Case Studies</button>
              </div> */}
            </div>
          </section>

          {/* Mission Section */}
          <section id="mission" className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Mission</h2>
                    <p className="text-lg text-gray-600">
                      Through this project, we aim to promote canine welfare and raise awareness about the dangers of the
                      dog meat trade.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Raise Awareness</h3>
                      <p className="text-gray-600">
                        Educate the public about the health risks and ethical concerns associated with dog meat
                        consumption.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Advocate for Regulations</h3>
                      <p className="text-gray-600">
                        Work with local authorities to establish and enforce regulations against the dog meat trade.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Support Rescue Efforts</h3>
                      <p className="text-gray-600">
                        Collaborate with animal rescue organizations to save dogs from the meat trade and provide them
                        with proper care.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="order-first lg:order-last">
                  <div className="aspect-video w-full overflow-hidden rounded-xl">
                    <img
                      src="https://diamondpet.storage.googleapis.com/wp-content/uploads/2023/02/06151608/dog-giving-paw-042418.jpg"
                      width={600}
                      height={400}
                      alt="Dogs being rescued"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Get Involved Section */}
          <section id='get-involved' className="w-full py-12 md:py-16 lg:py-20 bg-yellow-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Get Involved</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Be a voice for the voiceless. Join us in protecting dogs and raising awareness about the dangers of the dog meat trade in Kampot Province.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
                  <h3 className="text-xl font-bold mb-3">Donate</h3>
                  <p className="text-gray-600 mb-6">
                    Your contribution helps fund research, rescue efforts, and educational outreach. Every donation brings us one step closer to lasting change.
                  </p>
                  <button className="w-full border border-yellow-700 text-yellow-700 bg-white hover:bg-yellow-50 px-6 py-2 rounded-md font-medium transition-colors">
                    Donate Now
                  </button>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border text-center opacity-70 cursor-not-allowed select-none">
                  <h3 className="text-xl font-bold mb-3">Buy Our Merchandise</h3>
                  <p className="text-gray-600 mb-6">
                    Support our mission by purchasing our exclusive merch. Every item you buy helps fund our campaign and spreads the message of compassion.
                  </p>
                  <button className="w-full border border-yellow-700 text-yellow-700 bg-white px-6 py-2 rounded-md font-medium transition-colors cursor-not-allowed" disabled>
                    Buy Now
                  </button>

                  {/* Default Button - in enabled mode */}
                  {/* <button className="w-full text-white bg-yellow-700 hover:bg-yellow-800 px-6 py-2 rounded-md font-medium transition-colors" disabled>
                    Buy Now
                  </button> */}
                </div>


                <div className="bg-white rounded-lg p-6 shadow-sm border text-center sm:col-span-2 lg:col-span-1">
                  <h3 className="text-xl font-bold mb-3">Spread the Word</h3>
                  <p className="text-gray-600 mb-6">
                    Raise awareness by sharing our cause on social media and encouraging others to get involved. Together, we can create a more humane future for animals.
                  </p>
                  <a href="https://linktr.ee/a_tail_of_hope" target="_blank" rel="noopener noreferrer" className="block">
                    <button className="w-full border border-yellow-700 text-yellow-700 bg-white hover:bg-yellow-50 px-6 py-2 rounded-md font-medium transition-colors">
                      Share Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Feedback Section */}
          <section className="w-full py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">What People Are Saying</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Hear from supporters, volunteers, and advocates who believe in our mission.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                  <div className="space-y-4">
                    <div className="text-yellow-700">
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </div>
                    <blockquote className="text-gray-700 leading-relaxed">
                      "A Tail of Hope is an inspiring student-led initiative that shines a light on a deeply overlooked
                      issue in Cambodia. Their compassionate approach, rooted in research and community involvement, is
                      exactly what's needed to change attitudes and protect animals. By raising awareness and working
                      alongside local partners, they're planting the seeds for real, lasting change. I'm excited to see
                      how far their impact will reach."
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                        <span className="text-yellow-700 font-semibold">S</span>
                      </div>
                      <div>
                        <p className="font-semibold">Sokun</p>
                        <p className="text-sm text-gray-500">Animal welfare advocate and volunteer</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border">
                  <div className="space-y-4">
                    <div className="text-yellow-700">
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </div>
                    <blockquote className="text-gray-700 leading-relaxed">
                      "If you're passionate about animal welfare and want to support a cause led by compassionate young
                      changemakers, A Tail of Hope is a fantastic initiative to get behind. Whether it's joining their
                      awareness campaigns, volunteering at events, or supporting their outreach in Kampot, there's a
                      meaningful way for everyone to contribute. Their dedication and collaboration with communities like
                      Dirty Paw Cambodia truly set them apart."
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                        <span className="text-yellow-700 font-semibold">R</span>
                      </div>
                      <div>
                        <p className="font-semibold">Rithy</p>
                        <p className="text-sm text-gray-500">Volunteer and youth mentor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="border border-yellow-700 text-yellow-700 bg-white hover:bg-yellow-50 px-6 py-2 rounded-md font-medium transition-colors">
                  Share Your Feedback
                </button>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Contact Us</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Have questions or want to learn more about our initiative? Get in touch with us.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Get in Touch</h3>
                    <p className="text-gray-600">Fill out the form and we'll get back to you as soon as possible.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 text-yellow-700">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-600">+855 95 987 014</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 text-yellow-700">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-600">tailofhope88@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 text-yellow-700">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-600">Russian Federation Blvd (110), Phnom Penh 120404</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border">
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          First name
                        </label>
                        <input
                          id="first-name"
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          Last name
                        </label>
                        <input
                          id="last-name"
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <button className="w-full text-white bg-yellow-700 hover:bg-yellow-800 px-6 py-2 rounded-md font-medium transition-colors">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full border-t py-8 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500 text-center md:text-left">
                © 2025 A Tail of Hope | All rights reserved.
              </p>
              <div className="flex items-center space-x-3">
                {/* Facebook */}
                <a href="https://www.facebook.com/profile.php?id=61574791874658" className="transition-colors !mr-0" target="_blank" rel="noopener noreferrer">
                  <i className="fi fi-brands-facebook text-gray-400 hover:text-yellow-700 text-xl h-8 w-8"></i>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/a_tailofhope?igsh=d2R6bzB3Nms2eWp2" className="transition-colors !ml-0" target="_blank" rel="noopener noreferrer">
                  <i className="fi fi-brands-instagram text-gray-400 hover:text-yellow-700 text-xl h-8 w-8 mx-6"></i>
                </a>

                {/* TikTok */}
                <a href="https://www.tiktok.com/@atailofhope_official" className="transition-colors !ml-0" target="_blank" rel="noopener noreferrer">
                  <i className="fi fi-brands-tik-tok text-gray-400 hover:text-yellow-700 text-xl h-8 w-8"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
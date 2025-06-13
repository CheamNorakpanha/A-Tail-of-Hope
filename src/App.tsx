import './App.css';
import { ChevronRight, Heart, Shield, Users, Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from 'react-scroll'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <img
                    alt='A Tail of Hope Logo'
                    src={require('./atoh_logo_removebg.png')}
                    className='h-12 w-12'
                  />
                  <span className="text-lg font-bold">A Tail of Hope</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <Link to="about" smooth={true} duration={500} className="text-md font-medium transition-colors hover:text-yellow-700 mr-0">
                  About
                </Link>
                <Link to="team" smooth={true} duration={500} className="text-md font-medium transition-colors hover:text-yellow-700">Team
                </Link>
                <Link to="issue" smooth={true} duration={500} className="text-md font-medium transition-colors hover:text-yellow-700">
                  The Issue
                </Link>
                <Link to="mission" smooth={true} duration={500} className="text-md font-medium transition-colors hover:text-yellow-700">
                  Our Mission
                </Link>
                <Link to="contact" smooth={true} duration={500} className="text-md font-medium transition-colors hover:text-yellow-700">
                  Contact
                </Link>
              </nav>

              <div className="hidden md:flex items-center">
                <Link to="get-involved" smooth={true} duration={500} >
                  <button className="border-yellow-700 bg-yellow-700 text-white hover:bg-yellow-800 px-6 py-2 rounded-md font-medium transition-colors">Get Involved</button>
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                  className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-700"
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
                  <Link
                    to="#about"
                    className="block px-3 py-2 text-base font-medium transition-colors hover:text-yellow-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="#team"
                    className="block px-3 py-2 text-base font-medium transition-colors hover:text-yellow-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Team
                  </Link>
                  <Link
                    to="#issue"
                    className="block px-3 py-2 text-base font-medium transition-colors hover:text-yellow-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    The Issue
                  </Link>
                  <Link
                    to="#mission"
                    className="block px-3 py-2 text-base font-medium transition-colors hover:yellow-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Mission
                  </Link>
                  <Link
                    to="#contact"
                    className="block px-3 py-2 text-base font-medium transition-colors hover:yellow-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <div className="px-3 py-2">
                    <button className="w-full border-yellow-700 bg-yellow-700 text-white hover:bg-yellow-800 px-6 py-2 rounded-md font-medium transition-colors">Get Involved</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-16 lg:py-20 xl:py-24 bg-yellow-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      Protecting Canine Lives in Cambodia
                    </h1>
                    <p className="text-lg text-gray-600 sm:text-xl max-w-2xl">
                      A research initiative raising awareness about the dog meat trade in Kampot Province and promoting
                      canine welfare.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="about" smooth={true} duration={500} >
                      <button className="bg-yellow-700 text-white px-10 py-2 rounded-md font-medium hover:bg-yellow-800 transition-colors flex items-center justify-center">
                        Learn More
                        <ChevronRight className="ml-4 h-4 w-4" />
                      </button>
                    </Link>
                    <Link to="get-involved" smooth={true} duration={500} >
                      <button className="border border-yellow-700 text-yellow-700 bg-white hover:bg-yellow-50 px-6 py-2 rounded-md font-medium transition-colors">
                        Support Our Project
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="order-first lg:order-last">
                  <div className="aspect-video w-full overflow-hidden rounded-xl">
                    <img
                      src="https://www.edinburghnews.scotsman.com/webimg/b25lY21zOmU0NTEwMDUwLTcyZTEtNGQ2NS05MmE2LThhMmI4YmMzM2QzNDowYmE1ODkyNy0yZGUzLTQ1NTEtYTY5Yi01ZTg4NmJhODhhZTE=.jpg?crop=3:2,smart&trim=&width=990&quality=65&enable=upscale"
                      width={600}
                      height={400}
                      alt="Hero img of Dogs"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="w-full py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">About Our Initiative</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  A Tail of Hope is a research initiative led by IFL senior students, focusing on the use of dogs for
                  nourishment and trade in Kampot Province.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="aspect-video w-full overflow-hidden rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      width={600}
                      height={400}
                      alt="Students conducting research"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Our Background</h3>
                    <p className="text-gray-600">
                      Our initiative was founded out of concern for animal welfare and the growing issue of dog meat trade in Cambodia. Seeing its impact on animals and communities,
                      we aim to inform the public, advocate for better regulations, and support humane treatment of dogs.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Research Focus</h3>
                    <p className="text-gray-600">
                      We focus on the social, cultural, and economic factors behind the dog meat trade in Kampot Province. Our research explores public perceptions, health risks, and
                      the emotional impact on pet owners, with the goal of offering practical solutions to reduce the trade and promote responsible pet ownership.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Our Team</h3>
                    <p className="text-gray-600">
                      We are senior IFL students, united by our passion for animal welfare. Working together with local communities, animal rescue groups, and experts, we strive to
                      ensure our research creates meaningful change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section id="team" className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Our Team</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Meet the dedicated students behind A Tail of Hope initiative.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto overflow-hidden rounded-full">
                      <img
                        src="https://i.pinimg.com/736x/12/dc/36/12dc36b32a0367393fa81cb0fbdc7c17.jpg"
                        width={96}
                        height={96}
                        alt="Visnow Navyra"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Visnow Navyra</h3>
                      <p className="text-yellow-700 font-medium">Leader/Project Manager</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Navyra is a senior student at IFL and NUM, who determines in studying and joining volunteer in
                        promoting educational programs. Currently, she is interested about understanding the value of
                        canine life and excited to make this project come to life with her teammates. She expects to share
                        this experience with everyone who participate in rehabilitating stray dogs in Kampot Province.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Placeholder team members */}
                <div className="bg-white rounded-lg p-6 shadow-sm border opacity-50">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-gray-400" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-400">Team Member</h3>
                      <p className="text-gray-400 font-medium">Role</p>
                      <p className="text-gray-400 text-sm">More team members coming soon...</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border opacity-50 sm:col-span-2 lg:col-span-1">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-gray-400" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-400">Team Member</h3>
                      <p className="text-gray-400 font-medium">Role</p>
                      <p className="text-gray-400 text-sm">More team members coming soon...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Issue Section */}
          <section id="issue" className="w-full py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">The Issue</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Understanding the dog meat trade in Kampot Province and its implications.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Health Risks</h3>
                  <p className="text-gray-600">
                    Dog meat consumption poses significant health risks, including the transmission of rabies and other
                    zoonotic diseases.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Emotional Impact</h3>
                  <p className="text-gray-600">
                    The dog meat trade has a profound emotional impact on pet owners who lose their companions to this
                    practice.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border text-center sm:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Lack of Regulation</h3>
                  <p className="text-gray-600">
                    The absence of proper regulations allows the dog meat trade to continue unchecked, endangering both
                    animals and public health.
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
                  Join our cause and help us make a difference in the lives of dogs in Kampot Province.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
                  <h3 className="text-xl font-bold mb-3">Volunteer</h3>
                  <p className="text-gray-600 mb-6">
                    Join our team of volunteers and help with research, outreach, and awareness campaigns.
                  </p>
                  <button className="w-full border border-yellow-700 text-yellow-700 bg-white hover:bg-yellow-50 px-6 py-2 rounded-md font-medium transition-colors">
                    Sign Up
                  </button>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
                  <h3 className="text-xl font-bold mb-3">Donate</h3>
                  <p className="text-gray-600 mb-6">
                    Support our initiative financially to help fund our research and awareness campaigns.
                  </p>
                  <button className="w-full text-white bg-yellow-700 hover:bg-yellow-800 px-6 py-2 rounded-md font-medium transition-colors">Donate Now</button>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border text-center sm:col-span-2 lg:col-span-1">
                  <h3 className="text-xl font-bold mb-3">Spread the Word</h3>
                  <p className="text-gray-600 mb-6">
                    Share our message on social media and help us reach a wider audience.
                  </p>
                  <button className="w-full border border-yellow-700 text-yellow-700 bg-white hover:bg-yellow-50 px-6 py-2 rounded-md font-medium transition-colors">
                    Share
                  </button>
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
              <div className="flex items-center space-x-4">
                <Link to="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link to="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link to="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
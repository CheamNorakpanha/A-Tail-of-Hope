import React from 'react'

function Contact() {
    return (
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
    )
}

export default Contact
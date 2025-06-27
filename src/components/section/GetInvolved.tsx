import { useState } from 'react'
import { X } from 'lucide-react'
import { motion } from 'framer-motion'

function GetInvolved() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="get-involved" className="w-full py-12 md:py-16 lg:py-20 bg-yellow-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4"
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.6 }}
                    >
                        Get Involved
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.25, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.6 }}
                    >
                        Be a voice for the voiceless. Join us in protecting dogs and raising awareness about the dangers of the dog meat trade in Kampot Province.
                    </motion.p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Donate Card */}
                    <motion.div
                        className="bg-white rounded-lg p-6 shadow-sm border text-center"
                        initial={{ y: 100, opacity: 0, scale: 0.8 }}
                        whileInView={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.6 }}
                    >
                        <h3 className="text-xl font-bold mb-3">Donate</h3>
                        <p className="text-gray-600 mb-6">
                            Your contribution helps fund research, rescue efforts, and educational outreach. Every donation brings us one step closer to lasting change.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full border border-yellow-700 text-yellow-700 bg-white hover:bg-yellow-50 px-6 py-2 rounded-md font-medium transition-colors"
                        >
                            Donate Now
                        </button>
                    </motion.div>

                    {/* Merchandise Card (Disabled) */}
                    <motion.div
                        className="bg-white rounded-lg p-6 shadow-sm border text-center opacity-70 cursor-not-allowed select-none"
                        initial={{ y: 100, opacity: 0, scale: 0.8 }}
                        whileInView={{ y: 0, opacity: 0.7, scale: 1 }}
                        transition={{ duration: 1.25, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.6 }}
                    >
                        <h3 className="text-xl font-bold mb-3">Buy Our Merchandise</h3>
                        <p className="text-gray-600 mb-6">
                            Support our mission by purchasing our exclusive merch. Every item you buy helps fund our campaign and spreads the message of compassion.
                        </p>
                        <button
                            className="w-full border border-yellow-700 text-yellow-700 bg-white px-6 py-2 rounded-md font-medium transition-colors cursor-not-allowed"
                            disabled
                        >
                            Buy Now
                        </button>
                    </motion.div>

                    {/* Share Card */}
                    <motion.div
                        className="bg-white rounded-lg p-6 shadow-sm border text-center sm:col-span-2 lg:col-span-1"
                        initial={{ y: 100, opacity: 0, scale: 0.8 }}
                        whileInView={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.6 }}
                    >
                        <h3 className="text-xl font-bold mb-3">Spread the Word</h3>
                        <p className="text-gray-600 mb-6">
                            Raise awareness by sharing our cause on social media and encouraging others to get involved. Together, we can create a more humane future for animals.
                        </p>
                        <a
                            href="https://linktr.ee/a_tail_of_hope"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <button className="w-full border border-yellow-700 text-yellow-700 bg-white hover:bg-yellow-50 px-6 py-2 rounded-md font-medium transition-colors">
                                Share Now
                            </button>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Donation Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                    <motion.div className="relative bg-white rounded-lg w-full max-w-2xl"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <button
                            className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 rounded-full"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <div className="p-6">
                            <div className="mb-4">
                                <h2 className="text-2xl font-bold text-center mb-2">Support Our Cause</h2>
                                <p className="text-gray-600 text-center">
                                    Scan the QR code in the image above to make your donation. Every donation helps us protect canine lives in Cambodia
                                </p>
                            </div>

                            {/* <div className="w-full flex justify-center items-center">
                                <img
                                    src={require('../../donation_poster.jpg')}
                                    alt="Donation Information - Every cents of your donation matter"
                                    className="h-auto max-h-[50vh] rounded-lg border object-contain"
                                />s
                            </div> */}

                            <div className="w-full flex justify-center items-center">
                                <img
                                    src={require('../../img/donation/donation_poster.jpg')}
                                    alt="Donation Information - Every cents of your donation matter"
                                    className="w-full max-w-[95%] h-auto rounded-lg border object-contain"
                                />
                            </div>

                            {/* <div className="mt-6 text-center space-y-4">
                                <p className="text-sm text-gray-600">
                                    Scan the QR code in the image above to make your donation, or contact us for other donation methods.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                    <button
                                        className="border-yellow-700 bg-yellow-700 text-white hover:bg-yellow-800 px-6 py-2 rounded-md font-medium transition-colors"
                                        onClick={() => window.open("mailto:info@atailofhope.org", "_blank")}
                                    >
                                        Contact for Donation
                                    </button>
                                    <button
                                        className="border border-yellow-700 text-yellow-700 bg-white hover:bg-yellow-50 px-6 py-2 rounded-md font-medium transition-colors"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div> */}
                        </div>
                    </motion.div>
                </div>
            )}

        </section>
    )
}

export default GetInvolved

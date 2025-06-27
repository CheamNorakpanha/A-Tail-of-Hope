import Carousel from './Carousel';
import { motion } from 'framer-motion';

function Mission() {

    const slides = [
        "https://www.dogstrust.org.uk/images/800x600/assets/2023-05/Cambodia%20header.jpg",
        "https://media.4-paws.org/e/9/6/6/e966c50092f59fbb810a57a0547576f8e30097ff/1X8A5862-3000x1688.jpg",
        "https://media.4-paws.org/b/f/6/2/bf62f9d01f25850f9157c6b87287f7b9457232ac/VIER%20PFOTEN_2018-12-04_199-4000x2770-1920x1330.jpg",
        "https://i.ytimg.com/vi/wYwWJT0JFuA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgUihCMA8=&rs=AOn4CLDZ9muUXjdZyO0OWiOoMuGTYj9ZFA",
    ]

    return (
        <section id="mission" className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <motion.h2
                                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.6 }}
                            >
                                Our Mission
                            </motion.h2>
                            <motion.p
                                className="text-lg text-gray-600"
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1.25, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.6 }}
                            >
                                Through this project, we aim to promote canine welfare and raise awareness about the dangers of the
                                dog meat trade.
                            </motion.p>
                        </div>

                        <div className="space-y-6">
                            <motion.div
                                className="space-y-2"
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1.25, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.6 }}
                            >
                                <h3 className="text-xl font-bold">Raise Awareness</h3>
                                <p className="text-gray-600">
                                    We aim to educate the public about the health risks, such as rabies and other zoonotic diseases as well as the emotional and ethical consequences of dog meat consumption.
                                </p>
                            </motion.div>

                            <motion.div
                                className="space-y-2"
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.6 }}
                            >
                                <h3 className="text-xl font-bold">Advocate for Regulations</h3>
                                <p className="text-gray-600">
                                    We work with local authorities and stakeholders to push for effective regulations that ban the dog meat trade and safeguard animal rights.
                                </p>
                            </motion.div>
                            <motion.div
                                className="space-y-2"
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1.75, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.6 }}
                            >
                                <h3 className="text-xl font-bold">Support Rescue Efforts</h3>
                                <p className="text-gray-600">
                                    In partnership with Dirty Paws, we help rescue dogs from the meat trade, ensure they receive proper medical care, and find them safe, loving homes.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* <div className="order-first lg:order-last">
                        <div className="aspect-video w-full overflow-hidden rounded-xl">
                            <img
                                src="https://diamondpet.storage.googleapis.com/wp-content/uploads/2023/02/06151608/dog-giving-paw-042418.jpg"
                                width={600}
                                height={400}
                                alt="Dogs being rescued"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div> */}

                    <div className="order-first lg:order-last">
                        <motion.div
                            className="aspect-video w-full overflow-hidden rounded-xl"
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.6 }}
                        >
                            <Carousel autoSlide={true} autoSlideInterval={3000}>
                                {slides.map((s) => (
                                    <img src={s} alt="images with slides" className="h-full w-full object-cover" width={600} height={400} />
                                ))}
                            </Carousel>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission
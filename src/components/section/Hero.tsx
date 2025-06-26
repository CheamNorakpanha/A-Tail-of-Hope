import { Link } from 'react-scroll';
import { ChevronRight } from 'lucide-react';
import Carousel from './Carousel';
import { motion } from 'framer-motion';

function Hero() {

    const slides = [
        "https://www.edinburghnews.scotsman.com/webimg/b25lY21zOmU0NTEwMDUwLTcyZTEtNGQ2NS05MmE2LThhMmI4YmMzM2QzNDowYmE1ODkyNy0yZGUzLTQ1NTEtYTY5Yi01ZTg4NmJhODhhZTE=.jpg?crop=3:2,smart&trim=&width=990&quality=65&enable=upscale",
        "https://media.4-paws.org/a/f/d/7/afd77b1dd1052efc4b371d14841b42ae964b354e/VIER%20PFOTEN_2019-02-14_089-2890x2000-1920x1329.webp",
        "https://jspca.org.il/wp-content/uploads/2024/11/WhatsApp-Image-2024-10-28-at-10.50.09.jpeg",
        "https://people.com/thmb/ACXF8uZNFlZqbArP0tuXfYaCyDI=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/dog-meat-rescue-1-1-2000-ea3a7deeaf7e4f43b55fffae21de2f75.jpg",
    ]

    return (
        <section className="w-full py-12 md:py-16 lg:py-20 xl:py-24 bg-yellow-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="space-y-4">
                            <motion.h1
                                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.6 }}
                            >
                                Protecting Canine Lives in Cambodia
                            </motion.h1>
                            <motion.p
                                className="text-lg text-gray-600 sm:text-xl max-w-2xl"
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1.25, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.6 }}
                            >
                                A research initiative raising awareness about the dog meat trade in Kampot Province and promoting
                                canine welfare.
                            </motion.p>
                        </div>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.6 }}
                        >
                            <Link to="about" smooth={true} duration={500} offset={-65}>
                                <button className="bg-yellow-700 text-white px-10 py-2 rounded-md font-medium hover:bg-yellow-800 transition-colors flex items-center justify-center">
                                    Learn More
                                    <ChevronRight className="ml-4 h-4 w-4" />
                                </button>
                            </Link>
                            <Link to="get-involved" smooth={true} duration={500} offset={-65}>
                                <button className="border border-yellow-700 text-yellow-700 bg-white hover:bg-yellow-50 px-6 py-2 rounded-md font-medium transition-colors">
                                    Support Our Project
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    <div className="order-first lg:order-last">
                        <motion.div
                            className="aspect-video w-full overflow-hidden rounded-xl"
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.25, ease: "easeOut" }}
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

export default Hero
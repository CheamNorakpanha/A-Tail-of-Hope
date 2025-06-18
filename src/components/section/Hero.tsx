import React from 'react';
import { Link } from 'react-scroll';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
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
    );
};

export default Hero;

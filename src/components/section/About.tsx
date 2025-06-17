import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="w-full py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        About Our Initiative
                    </h2>
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
                                Our initiative was founded out of concern for animal welfare and the growing issue of dog meat trade in Cambodia.
                                Seeing its impact on animals and communities, we aim to inform the public, advocate for better regulations,
                                and support humane treatment of dogs.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Research Focus</h3>
                            <p className="text-gray-600">
                                We focus on the social, cultural, and economic factors behind the dog meat trade in Kampot Province. Our research
                                explores public perceptions, health risks, and the emotional impact on pet owners, with the goal of offering
                                practical solutions to reduce the trade and promote responsible pet ownership.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Our Team</h3>
                            <p className="text-gray-600">
                                We are senior IFL students, united by our passion for animal welfare. Working together with local communities,
                                animal rescue groups, and experts, we strive to ensure our research creates meaningful change.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

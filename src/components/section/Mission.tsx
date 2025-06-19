import React from 'react'

function Mission() {
    return (
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
                                    We aim to educate the public about the health risks, such as rabies and other zoonotic diseases as well as the emotional and ethical consequences of dog meat consumption.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">Advocate for Regulations</h3>
                                <p className="text-gray-600">
                                    We work with local authorities and stakeholders to push for effective regulations that ban the dog meat trade and safeguard animal rights.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">Support Rescue Efforts</h3>
                                <p className="text-gray-600">
                                    In partnership with Dirty Paws, we help rescue dogs from the meat trade, ensure they receive proper medical care, and find them safe, loving homes.
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
    )
}

export default Mission
import React from "react";
import { motion } from 'framer-motion'

interface GalleryImage {
    src: string;
    alt: string;
}

const galleryImages: GalleryImage[] = [
    {
        src: "https://plus.unsplash.com/premium_photo-1734395747956-ef1bb635cab5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Team activity in Kampot Province",
    },
    {
        src: "https://images.unsplash.com/photo-1661552066736-935e0cad1782?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Community outreach program",
    },
    {
        src: "https://images.unsplash.com/photo-1565979748550-c1dc4e262945?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Dog rescue operation",
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1665952050547-fa975453ce6c?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Educational workshop",
    },
    {
        src: "https://images.unsplash.com/photo-1587716463724-76559fcda1c7?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Team meeting with local authorities",
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1661602029674-3f7b4b71ee10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Awareness campaign event",
    },
    {
        src: "https://images.unsplash.com/photo-1709789945400-1256f7da7efb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Collaboration with Dirty Paw Cambodia",
    },
    {
        src: "https://images.unsplash.com/photo-1692906456160-385d805be646?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Research documentation",
    },
];

const Gallery: React.FC = () => {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4"
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.6 }}
                    >
                        Our Activities
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.25, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.6 }}
                    >
                        Explore the moments from our team's activities and outreach efforts
                        in Kampot Province.
                    </motion.p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.6 }}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                width={300}
                                height={300}
                                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* <div className="text-center mt-8">
                    <button className="border border-yellow-700 text-yellow-700 bg-white hover:bg-yellow-50 px-6 py-2 rounded-md font-medium transition-colors">
                        View More Photos
                    </button>
                </div> */}
            </div>
        </section>
    );
};

export default Gallery;

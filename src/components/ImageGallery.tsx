"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  {
    src: "/lift-gym-1.png",
    alt: "Modern gym equipment",
    title: "State-of-the-art Equipment",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "Personal training session",
    title: "Gym Image Here",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "Group fitness class",
    title: "Gym Image Here",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "Cardio area",
    title: "Gym Image Here",
  },
];

export default function ImageGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Fitness Home
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our premium facilities designed to support every step of
            your fitness journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-900">
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center"
                >
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: hoveredIndex === index ? 0 : 20,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-white text-2xl font-bold text-center"
                  >
                    {image.title}
                  </motion.h3>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

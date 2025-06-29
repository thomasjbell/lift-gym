"use client";
import { motion } from "framer-motion";
import { ArrowRight, Users, Heart, Smile } from "lucide-react";
import Image from "next/image";


export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/70 z-10" />
      <Image src="/lift-gym-hero.jpg" alt="Hero Image" fill className="object-cover">

      </Image>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="flex items-center space-x-6 mb-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center space-x-2 text-gray-300"
              >
                <Users className="h-6 w-6" />
                <span className="text-lg font-medium">Personal</span>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-center space-x-2 text-gray-300"
              >
                <Heart className="h-6 w-6" />
                <span className="text-lg font-medium">Supportive</span>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex items-center space-x-2 text-gray-300"
              >
                <Smile className="h-6 w-6" />
                <span className="text-lg font-medium">Friendly</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Transform Your
            <span className="block text-white">Fitness Journey</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
          >
            Experience a personal, supportive, and friendly environment where
            your fitness goals become reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors"
            >
              Take a Tour
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

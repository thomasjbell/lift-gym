"use client";
import { motion } from "framer-motion";
import { ArrowRight, Users, Heart, Smile } from "lucide-react";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/70 z-10" />
      <Image
        src="/lift-gym-hero.jpg"
        alt="Hero Image"
        fill
        className="object-cover"
        priority
      />
      
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        <div className="text-center">
          {/* Feature badges - Made much more prominent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            {/* Mobile: Stack vertically, Desktop: Horizontal */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 lg:space-x-16">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center space-x-3 text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/20 transition-all duration-300"
              >
                <Users className="h-7 w-7 sm:h-8 sm:w-8" />
                <span className="text-lg sm:text-xl font-semibold">Personal</span>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-center space-x-3 text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/20 transition-all duration-300"
              >
                <Heart className="h-7 w-7 sm:h-8 sm:w-8" />
                <span className="text-lg sm:text-xl font-semibold">Supportive</span>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex items-center space-x-3 text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/20 transition-all duration-300"
              >
                <Smile className="h-7 w-7 sm:h-8 sm:w-8" />
                <span className="text-lg sm:text-xl font-semibold">Friendly</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Chill out, let&apos;s lift.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Experience a personal, supportive, and friendly environment where
            your fitness goals become reality.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-lg mx-auto"
          >
            <AnimatedButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="w-full sm:w-auto"
            >
              Get in Touch
            </AnimatedButton>
            <AnimatedButton 
              href="/about" 
              variant="secondary" 
              size="lg" 
              className="w-full sm:w-auto"
            >
              About Us
            </AnimatedButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
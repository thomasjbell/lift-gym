"use client";
import { motion } from "framer-motion";
import { ArrowRight, Users, Heart, Smile } from "lucide-react";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/70 z-10" />
      <Image
        src="/lift-gym-hero.jpg"
        alt="Hero Image"
        fill
        className="object-cover"
      ></Image>

      <div className="mx-auto z-20">
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="flex items-center max-w-2xl space-x-16 mx-auto mb-2 justify-center">
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
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight justify-center text-center"
          >
            Chill out, let&apos;s lift.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl text-center mx-auto"
          >
            Experience a personal, supportive, and friendly environment where
            your fitness goals become reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex space-x-4 mx-auto justify-center"
          >
            <AnimatedButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="justify-right"
            >
              Get in Touch
            </AnimatedButton>

            <AnimatedButton href="/about" variant="secondary" size="lg" className="justify-left">
              About Us
            </AnimatedButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

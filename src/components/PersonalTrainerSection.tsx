"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function PersonalTrainerSection() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Are you are a personal trainer?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We are looking for Freelance PTs to join us as a base for training clients.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.975 }}
            className="inline-flex items-center bg-white text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </motion.a>

          
        </motion.div>
      </div>
    </section>
  );
}

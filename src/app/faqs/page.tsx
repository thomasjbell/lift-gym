"use client";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import FAQ from "@/components/FAQ";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Mobile optimized */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Mobile-friendly header layout */}
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
              <HelpCircle className="h-10 w-10 sm:h-12 sm:w-12 text-white flex-shrink-0" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block sm:inline">Frequently Asked</span>
                <span className="block sm:inline"> Questions</span>
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4 leading-relaxed">
              Got questions? We've got answers. Here are the most common questions from our friendly gym community.
            </p>
          </motion.div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}
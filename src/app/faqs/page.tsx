"use client";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import FAQ from "@/components/FAQ";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <HelpCircle className="h-12 w-12 text-white mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">Frequently Asked Questions</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Got questions? We've got answers. Here are the most common questions from our friendly gym community.
            </p>
          </motion.div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}
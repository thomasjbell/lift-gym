"use client";
import { motion } from "framer-motion";
import { GlobeLock } from "lucide-react";

export default function FAQPage() {
  return (
    <div className="bg-black text-white">
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
              <GlobeLock className="h-12 w-12 text-white mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">How We Use Your Data</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your privacy is our top priority.
            </p>
          </motion.div>
        </div>
      </section>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <p className="text-gray-300 my-32 text-2xl text-center">
        No personal information is collected or stored on our website. No data is passed on to third parties. <br />
        <br />
        Your contact details are purely for Lift Gym's use to get in touch with you.
    </p>
</div>
    </div>
  );
}
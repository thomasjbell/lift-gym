"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See Lift Gym in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get a glimpse of our state-of-the-art facility and supportive
            community
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-black rounded-2xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/XmGOkitwKCY?si=jram6bBGq_vdB-hP"
                title="Lift Gym Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center group hover:bg-black/10 transition-colors cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-white/30 transition-colors"
            >
              <Play className="h-12 w-12 text-white fill-current" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

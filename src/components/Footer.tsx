"use client";
import { motion } from "framer-motion";
import {
  Dumbbell,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Mobile: Stack everything, Desktop: Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Brand - Full width on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-2 text-center sm:text-left"
          >
            <Link href="/" className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
              <span className="text-xl sm:text-2xl font-bold">Lift Gym</span>
            </Link>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Personal, supportive, friendly. Transform your gym journey with us.
            </p>
            
            {/* Social icons - centered on mobile */}
            <div className="flex space-x-6 justify-center sm:justify-start">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.facebook.com/liftgymmk"
                className="text-gray-400 hover:text-gray-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="h-6 w-6 sm:h-7 sm:w-7" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/liftgymmk"
                className="text-gray-400 hover:text-gray-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="h-6 w-6 sm:h-7 sm:w-7" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.youtube.com/channel/UCr7WJ0IKpj8GuKI8mBdDIbQ"
                className="text-gray-400 hover:text-gray-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="h-6 w-6 sm:h-7 sm:w-7" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center sm:text-left"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1"
                >
                  FAQ's
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact - Inline icons on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center sm:text-left"
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-4">
              {/* Address - Inline icon on mobile */}
              <div className="flex items-start justify-center sm:justify-start space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div className="text-sm sm:text-base text-center sm:text-left">
                  <div>Falcon Drive, Old Stratford</div>
                  <div>Milton Keynes, MK19 6FG</div>
                </div>
              </div>
              
              {/* Email - Inline icon on mobile */}
              <div className="flex items-center justify-center sm:justify-start space-x-3 text-gray-300">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a 
                  href="mailto:liftgymmk@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base break-all"
                >
                  liftgymmk@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-8 pt-6 text-center"
        >
          <div className="flex flex-col space-y-3 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Lift Gym. All rights reserved.
            </p>
            <Link 
              href="/privacy-policy" 
              className="text-gray-500 hover:text-gray-400 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
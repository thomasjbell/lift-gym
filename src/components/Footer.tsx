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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="md:col-span-2"
          >
            <Link href="/" className="flex items-center space-x-2 mb-4">
            
              <span className="text-2xl font-bold">Lift Gym</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Personal, supportive, friendly. Transform your gym journey
              with us.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.facebook.com/liftgymmk"
                className="text-gray-400 hover:text-gray-200"
              >
                <FaFacebook className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/liftgymmk"
                className="text-gray-400 hover:text-gray-200"
              >
                <FaInstagram className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.youtube.com/channel/UCr7WJ0IKpj8GuKI8mBdDIbQ"
                className="text-gray-400 hover:text-gray-200"
              >
                <FaYoutube className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-7 w-7" />
                <span>Falcon Drive, Old Stratford, Milton Keynes, MK19 6FG</span>
              </div>
          
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>
                  <a href="mailto:liftgymmk@gmail.com" className="text-gray-300 hover:text-white transition-colors">liftgymmk@gmail.com</a> 
                  
                  </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ's
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

       

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400"
        >
          <div className="grid grid-cols-2 ">
            
            <div><a href=""></a></div>
          </div>
          <p className="mt-4 mb-2">&copy; 2025 Lift Gym. All rights reserved.</p>
          <div><a href="/privacy-policy" className="text-gray-500 hover:text-gray-400 transition-colors">Privacy Policy</a></div>
        </motion.div>
      </div>
    </footer>
  );
}

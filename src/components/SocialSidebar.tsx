"use client";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/liftgymmk",
    label: "Facebook"
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/liftgymmk",
    label: "Instagram"
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/channel/UCr7WJ0IKpj8GuKI8mBdDIbQ",
    label: "YouTube"
  }
];

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed top-40 right-0 z-40 hidden md:block"
    >
      {/* Container with rounded left edge */}
      <div className="bg-slate-950/70 backdrop-blur-sm border-l border-t border-b border-white/20 rounded-l-2xl py-4 px-3 space-y-3">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block group relative"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.2 + (index * 0.1) }}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-2 rounded-lg hover:bg-slate-100/10 transition-colors duration-200">
              <social.icon className="h-5 w-5 text-slate-100" />
            </div>
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap pointer-events-none"
            >
              {social.label}
            </motion.div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
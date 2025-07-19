"use client";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

// Animated Link Component
const AnimatedLink = ({ 
  href, 
  children, 
  className = "" 
}: { 
  href: string; 
  children: React.ReactNode; 
  className?: string; 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={href} 
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative inline-block">
        {children}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-white"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : 0 }}
          transition={{ 
            duration: 0.25, 
            ease: "easeInOut" 
          }}
        />
      </span>
    </Link>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-black/60 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.jpg" alt="Logo" width={60} height={60} />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <AnimatedLink
              href="/"
              className="text-white py-2"
            >
              Home
            </AnimatedLink>
            <AnimatedLink
              href="/about"
              className="text-white py-2"
            >
              About Us
            </AnimatedLink>
            <AnimatedLink
              href="/equipment"
              className="text-white py-2"
            >
              Equipment
            </AnimatedLink>
            <AnimatedLink
              href="/contact"
              className="text-white py-2"
            >
              Contact
            </AnimatedLink>
            <AnimatedLink
              href="/faqs"
              className="text-white py-2"
            >
              FAQ's
            </AnimatedLink>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-800"
          >
            <div className="flex flex-col space-y-4">
              <AnimatedLink
                href="/"
                className="text-white py-2"
              >
                Home
              </AnimatedLink>
              <AnimatedLink
                href="/equipment"
                className="text-white py-2"
              >
                Equipment
              </AnimatedLink>
              <AnimatedLink
                href="/contact"
                className="text-white py-2"
              >
                Contact
              </AnimatedLink>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
"use client";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon: Icon,
  className = "",
  disabled = false,
  type = "button"
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "px-6 py-2 text-sm rounded-lg",
    md: "px-8 py-3 text-base rounded-xl",
    lg: "px-10 py-4 text-lg rounded-2xl"
  };

  const variantClasses = {
    primary: "bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 shadow-lg transition-all duration-300 ease-in-out",
    secondary: "bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 shadow-lg transition-all duration-300 ease-in-out"
  };

  const roundedClass = sizeClasses[size].split(' ').find(cls => cls.startsWith('rounded')) || 'rounded-xl';

  const baseClasses = `
    relative font-semibold overflow-hidden
    disabled:opacity-50 disabled:cursor-not-allowed
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  const ButtonContent = () => (
    <div
      className={baseClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Border overlay that animates diagonally */}
      <motion.div
        className={`absolute inset-0 ${roundedClass} border-2 border-white`}
        initial={{ clipPath: "polygon(100% 0%, 100% 0%, 0% 100%, 0% 100%)" }}
        animate={{ 
          clipPath: isHovered 
            ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            : "polygon(100% 0%, 100% 0%, 0% 100%, 0% 100%)"
        }}
        transition={{ 
          duration: 0.3, 
          ease: "easeInOut" 
        }}
      />

      {/* Button content */}
      <div className="relative z-10 flex items-center justify-center space-x-2">
        {Icon && <Icon className="h-5 w-5" />}
        <span>{children}</span>
      </div>
    </div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className="inline-block"
      >
        <ButtonContent />
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className="inline-block"
    >
      <ButtonContent />
    </motion.button>
  );
}
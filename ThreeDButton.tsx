import { motion } from "motion/react";
import React from "react";

interface ThreeDButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
}

export const ThreeDButton: React.FC<ThreeDButtonProps> = ({ children, onClick, className = "", variant = 'primary' }) => {
  const isPrimary = variant === 'primary';

  return (
    <motion.button
      whileTap={{ y: 4, boxShadow: '0 0px 0 0 #8B6508' }}
      onClick={onClick}
      className={`
        relative px-8 py-4 font-display font-bold text-xs tracking-widest uppercase transition-all duration-75
        ${isPrimary 
          ? "bg-gold text-surface three-d-shadow hover:brightness-110" 
          : "border border-on-surface/20 bg-surface/30 backdrop-blur-md text-on-surface hover:bg-surface/50"
        }
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

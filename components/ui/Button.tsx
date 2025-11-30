import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', icon = true, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200";
  
  const variants = {
    primary: "bg-primary hover:bg-primary-hover text-white shadow-[0_0_20px_rgba(255,107,0,0.3)]",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/5",
    ghost: "bg-transparent text-gray-400 hover:text-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
      {icon && <ArrowUpRight size={18} />}
    </button>
  );
};

export default Button;
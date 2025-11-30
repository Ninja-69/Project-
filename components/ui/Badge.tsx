import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <div className={`inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
};

export default Badge;
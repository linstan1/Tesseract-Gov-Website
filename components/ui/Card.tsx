import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, title, className = '', onClick }) => {
  return (
    <div
      className={`bg-white border border-gov-border/50 rounded-2xl p-8 hover:border-gov-border transition-all duration-200 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {title && <h3 className="text-lg font-bold text-gov-dark mb-4">{title}</h3>}
      {children}
    </div>
  );
};

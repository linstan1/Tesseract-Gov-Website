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
      className={`bg-white border border-gov-border p-6 shadow-sm hover:shadow-md transition-shadow ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {title && <h3 className="text-xl font-bold text-gov-text mb-4">{title}</h3>}
      {children}
    </div>
  );
};

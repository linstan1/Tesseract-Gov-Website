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
      className={`bg-white border border-gov-border-light rounded-xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 ${onClick ? 'cursor-pointer hover:border-gov-blue/30' : ''} ${className}`}
      onClick={onClick}
    >
      {title && <h3 className="text-xl font-bold text-gov-text mb-4 font-serif">{title}</h3>}
      {children}
    </div>
  );
};

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
      className={`bg-white border border-gov-border/50 rounded-2xl p-8 hover:border-gov-border transition-all duration-200 ${onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-gov-focus focus:ring-offset-2' : ''} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {title && <h3 className="text-lg font-bold text-gov-dark mb-4">{title}</h3>}
      {children}
    </div>
  );
};

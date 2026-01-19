import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'start';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-sm focus:outline-none focus:ring-4 focus:ring-gov-focus transition-colors duration-200";
  
  const variants = {
    primary: "border-transparent text-white bg-gov-blue hover:bg-[#115e59] shadow-sm",
    secondary: "border-transparent text-gov-text bg-gov-bg hover:bg-gray-200",
    outline: "border-gov-text text-gov-text bg-transparent hover:bg-gray-100",
    start: "border-transparent text-white bg-[#00703c] hover:bg-[#005a30] font-bold text-lg shadow-md", // UK Gov "Start now" green
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
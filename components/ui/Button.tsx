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
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-lg focus:outline-none focus:ring-4 focus:ring-gov-focus transition-all duration-300 transform hover:scale-105 active:scale-100";

  const variants = {
    primary: "border-transparent text-white bg-gradient-to-r from-gov-blue to-gov-blue-dark hover:shadow-glow shadow-soft",
    secondary: "border-transparent text-gov-text bg-gov-bg hover:bg-gray-200 shadow-soft hover:shadow-md",
    outline: "border-2 border-gov-border text-gov-text bg-transparent hover:bg-gov-blue hover:text-white hover:border-gov-blue shadow-sm",
    start: "border-transparent text-white bg-gradient-to-r from-[#00703c] to-[#005a30] hover:shadow-glow font-bold text-lg shadow-md", // UK Gov "Start now" green
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
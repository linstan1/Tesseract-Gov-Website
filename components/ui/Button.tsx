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
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-gov-focus focus:ring-offset-2 transition-all duration-150";

  const variants = {
    primary: "text-white bg-gov-blue hover:bg-gov-blue-dark",
    secondary: "text-gov-dark bg-gov-bg border border-gov-border/50 hover:bg-white hover:border-gov-border",
    outline: "text-gov-dark bg-transparent border border-gov-border hover:bg-gov-bg",
    start: "text-white bg-[#00703c] hover:bg-[#005a30] font-bold",
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
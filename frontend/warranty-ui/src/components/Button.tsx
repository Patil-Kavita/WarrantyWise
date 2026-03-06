import React from 'react';
import { cn } from '../utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'danger';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className,
  ...props 
}) => {
  return (
    <button
      className={cn(
        'transition-all duration-200 font-medium rounded-lg px-4 py-2.5 flex items-center justify-center gap-2',
        {
          'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md hover:shadow-lg hover:opacity-90': variant === 'primary',
          'border-2 border-slate-200 text-slate-700 hover:bg-slate-50': variant === 'outline',
          'text-slate-600 hover:bg-slate-100': variant === 'ghost',
          'bg-red-500 text-white shadow-md hover:bg-red-600': variant === 'danger',
          'w-full': fullWidth
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

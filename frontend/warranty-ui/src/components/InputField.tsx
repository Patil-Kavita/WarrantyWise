import React, { forwardRef } from 'react';
import { cn } from '../utils';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, icon, className, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full">
        {label && <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              'w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 bg-white shadow-sm',
              icon ? 'pl-10' : '',
              error ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 hover:border-slate-300',
              className
            )}
            {...props}
          />
        </div>
        {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
      </div>
    );
  }
);
InputField.displayName = 'InputField';

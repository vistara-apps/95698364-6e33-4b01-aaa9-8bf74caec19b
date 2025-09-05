'use client';

import { ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ActionButtonProps {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function ActionButton({ 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  children,
  className = '',
  fullWidth = false
}: ActionButtonProps) {
  const baseClasses = 'font-medium transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    destructive: 'bg-red-600 text-white hover:bg-red-700 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={cn(
        baseClasses,
        variant === 'primary' ? variantClasses.primary : 
        variant === 'secondary' ? variantClasses.secondary : 
        variantClasses.destructive,
        size !== 'md' ? sizeClasses[size] : '',
        widthClass,
        className
      )}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      <span>{children}</span>
    </button>
  );
}

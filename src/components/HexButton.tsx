import React from 'react';

interface HexButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
}

export function HexButton({ children, active, className = '', ...props }: HexButtonProps) {
  return (
    <div className="hex-shadow inline-block">
      <button
        className={`hex-button px-8 py-3 font-medium transition-all duration-300 flex items-center justify-center min-w-[120px]
          ${active 
            ? 'bg-[var(--color-ice-blue)] text-white' 
            : 'bg-white text-slate-700 hover:bg-[var(--color-ice-light)] hover:text-slate-900'
          } ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}

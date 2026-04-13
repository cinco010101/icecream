import React from 'react';

interface HexCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  tags?: string[];
}

export function HexCard({ title, description, imageUrl, tags }: HexCardProps) {
  return (
    <div className="hex-shadow group">
      <div className="hex-card relative w-[280px] h-[320px] bg-white flex flex-col items-center justify-center p-8 text-center transition-transform duration-500 group-hover:scale-105 overflow-hidden">
        {/* Optional Background Image with Overlay */}
        {imageUrl && (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/90" />
          </>
        )}
        
        <div className="relative z-10 flex flex-col items-center h-full text-center px-4">
          <h3 className="text-2xl font-light text-slate-900 mb-2 tracking-tight">
            {title}
          </h3>
          <div className="w-10 h-0.5 bg-[var(--color-ice-blue)] mb-6 rounded-full" />
          
          <p className="text-sm text-slate-600 leading-relaxed mb-6 font-light">
            {description}
          </p>
          
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-auto pb-4">
              {tags.map((tag, i) => (
                <span key={i} className="text-[10px] uppercase tracking-widest px-3 py-1 bg-slate-50 border border-slate-100 text-slate-500 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

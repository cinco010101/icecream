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
        
        <div className="relative z-10 flex flex-col items-center h-full justify-center">
          <h3 className="text-xl font-semibold text-slate-800 mb-3">{title}</h3>
          <p className="text-sm text-slate-600 mb-4 line-clamp-4">{description}</p>
          
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-auto">
              {tags.map((tag, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-[var(--color-ice-light)] text-slate-700 rounded-full">
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

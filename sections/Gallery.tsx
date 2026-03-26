"use client";

import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { galleryImages } from '@/lib/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Gallery() {
  const ref = useScrollReveal();

  return (
    <Section id="gallery" className="bg-white py-1 md:py-1 lg:py-1">
      <div ref={ref} className="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 px-1">
        {galleryImages.map((src, index) => (
          <div key={index} className="relative aspect-square group overflow-hidden">
            <Image 
              src={src} 
              alt={`Rapito restaurant gallery photo ${index + 1}`} 
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover group-hover:scale-110 group-hover:opacity-80 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </Section>
  );
}

"use client";

import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { signatureDishes } from '@/lib/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function SignatureDish({ dish, index }: { dish: typeof signatureDishes[0]; index: number }) {
  const textRef = useScrollReveal();
  const imageRef = useScrollReveal();

  return (
    <Section className="text-[var(--color-cream)] py-0 lg:py-0 overflow-hidden">
      <div className={`flex flex-col min-h-[60vh] md:min-h-[70vh] ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        <div ref={textRef} className="reveal lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 relative z-10">
          <div className="max-w-xl">
            <h4 className="font-sans text-[var(--color-gold)] tracking-[0.2em] text-xs md:text-sm uppercase mb-4 md:mb-6 font-semibold">Signature</h4>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight">
              {dish.title}
            </h2>
            <p className="font-sans text-gray-400 mb-8 md:mb-10 leading-relaxed font-light text-base md:text-lg">
              {dish.description}
            </p>
            <a href="#reservations" className="inline-flex items-center justify-center h-12 px-8 md:px-10 text-sm font-sans font-medium uppercase tracking-[0.15em] border border-white text-white hover:bg-white hover:text-[var(--color-charcoal)] transition-all duration-500 ease-out hover:-translate-y-[2px]">
                Reserve a Table
              </a>
          </div>
        </div>
        <div ref={imageRef} className="reveal-fade stagger-2 lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full group">
          <Image 
            src={dish.image} 
            alt={`${dish.title} — Rapito signature dish`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </Section>
  );
}

export function SignatureDishes() {
  return (
    <div className="bg-[var(--color-charcoal)]">
      {signatureDishes.map((dish, index) => (
        <SignatureDish key={index} dish={dish} index={index} />
      ))}
    </div>
  );
}

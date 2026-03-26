"use client";

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function About() {
  const imageRef = useScrollReveal();
  const textRef = useScrollReveal();

  return (
    <Section id="about" className="bg-[var(--color-cream)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold)] opacity-[0.03] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          <div ref={imageRef} className="reveal relative w-full aspect-[4/5] mx-auto max-w-md lg:max-w-none">
            <Image 
              src="/images/about/chef-plating.png" 
              alt="Head chef carefully plating a gourmet dish in Rapito's kitchen" 
              fill
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 45vw"
              className="object-cover shadow-2xl z-10 rounded-[2px]"
            />
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-full h-full border border-[var(--color-gold)] z-0 hidden md:block"></div>
          </div>
          <div ref={textRef} className="reveal stagger-2 relative z-10 flex flex-col justify-center">
            <h4 className="font-sans text-[var(--color-gold)] tracking-[0.2em] text-xs md:text-sm uppercase mb-3 md:mb-4 font-semibold">Our Story</h4>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-8 text-[var(--color-charcoal)] leading-[1.1]">
              A Symphony of Flavor & Heritage
            </h2>
            <p className="font-sans text-gray-600 mb-4 md:mb-6 leading-relaxed text-base md:text-lg font-light">
              Founded on the principles of authentic Italian culinary traditions, Rapito brings together generational recipes and modern, high-end gastronomy. Every dish tells a story of passion, crafted with the finest ingredients sourced directly from Italy.
            </p>
            <p className="font-sans text-gray-600 mb-8 md:mb-10 leading-relaxed text-base md:text-lg font-light">
              Step into an atmosphere of understated luxury, where impeccable service meets the warmth of an Italian home. We invite you to lose yourself in an unforgettable dining experience.
            </p>
            <div className="border-t border-gray-200 pt-6 md:pt-8 w-max">
              <span className="font-serif italic text-xl md:text-2xl text-[var(--color-charcoal)] opacity-80">Chef Antonio Rossi</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

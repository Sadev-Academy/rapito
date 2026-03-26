"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

/**
 * Hero Section
 * 
 * Sets the luxury tone for the website. Features:
 * - Dynamic scroll-reveal entrance animations
 * - Full-screen immersive background video/image
 * - Glassmorphism effects for the trust badge
 */
export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Slight delay to trigger CSS entry animations after mount
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const m = mounted ? 'is-mounted' : '';

  return (
    <div className="relative h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 bg-[var(--color-charcoal)]">
        <Image
          src="/images/hero/dining-interior.png"
          alt="Interior of Rapito restaurant showcasing warm ambient Italian dining atmosphere"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-[var(--color-charcoal)]/40 to-black/40"></div>
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center text-white flex flex-col items-center">

        {/* Headline */}
        <h1 className={`hero-enter hero-delay-2 ${m} font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-5 md:mb-6 tracking-tight drop-shadow-2xl font-medium max-w-5xl leading-[1.1]`}>
          Authentic Italian Flavours, <br className="hidden md:block" />
          <span className="italic font-light text-[var(--color-cream)]">Crafted to Perfection</span>
        </h1>

        {/* Subheading */}
        <p className={`hero-enter hero-delay-3 ${m} font-sans text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-wide max-w-2xl mx-auto mb-10 md:mb-12 text-gray-200 drop-shadow-md px-4`}>
          Experience the passion of rustic culinary traditions elevated in a modern, luxury setting.
        </p>

        {/* CTAs */}
        <div className={`hero-enter hero-delay-4 ${m} flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0`}>
          <a href="#reservations">
            <Button variant="primary" size="lg" className="w-full sm:w-auto min-w-[220px] lg:min-w-[260px] text-sm md:text-base border border-transparent shadow-[0_20px_40px_rgba(139,0,0,0.3)] hover:shadow-[0_25px_50px_rgba(139,0,0,0.4)]">
              Book a Table
            </Button>
          </a>
          <a href="#menu" className={`hero-enter hero-delay-4 ${m} w-full sm:w-auto min-w-[220px] lg:min-w-[260px] inline-flex items-center justify-center h-14 px-10 text-sm md:text-base font-sans font-medium uppercase tracking-[0.15em] border border-white text-white hover:bg-white hover:text-[var(--color-charcoal)] backdrop-blur-sm shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out hover:-translate-y-[2px]`}>
            View Menu
          </a>
        </div>
      </Container>
    </div>
  );
}

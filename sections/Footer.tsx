"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { restaurantDetails } from '@/lib/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Footer() {
  const brandRef = useScrollReveal();
  const contactRef = useScrollReveal();
  const hoursRef = useScrollReveal();

  return (
    <footer id="contact" className="bg-[var(--color-charcoal)] text-white py-16 md:py-24 border-t-8 border-[var(--color-deep-red)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12 mb-16 md:mb-20 text-center md:text-left">
          {/* Brand */}
          <div ref={brandRef} className="reveal flex flex-col items-center md:items-start max-w-sm mx-auto md:mx-0">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-widest uppercase mb-4 md:mb-6 drop-shadow-sm">
              Rapito
            </h2>
            <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">
              A modern sanctuary of authentic Italian culinary art, where tradition meets contemporary luxury.
            </p>
          </div>
          
          {/* Contact */}
          <div ref={contactRef} className="reveal stagger-2 flex flex-col items-center md:items-start">
            <h4 className="font-sans text-[var(--color-gold)] tracking-[0.3em] text-[10px] uppercase mb-6 md:mb-8 font-semibold">Contact</h4>
            <address className="not-italic space-y-3 md:space-y-4 font-sans text-sm text-gray-400 font-light tracking-wide">
              {restaurantDetails.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <p className="pt-1">
                <a href={`mailto:${restaurantDetails.email}`} className="text-[var(--color-cream)] hover:text-white transition-colors duration-300 py-2 inline-block">{restaurantDetails.email}</a>
              </p>
              <p>
                <a href={`tel:${restaurantDetails.phone.replace(/\s/g, '')}`} className="text-[var(--color-cream)] hover:text-white transition-colors duration-300 py-2 inline-block">{restaurantDetails.phone}</a>
              </p>
            </address>
          </div>
          
          {/* Hours */}
          <div ref={hoursRef} className="reveal stagger-3 flex flex-col items-center md:items-start">
            <h4 className="font-sans text-[var(--color-gold)] tracking-[0.3em] text-[10px] uppercase mb-6 md:mb-8 font-semibold">Hours</h4>
            <ul className="space-y-3 md:space-y-4 font-sans text-sm text-gray-400 font-light tracking-wide w-full max-w-[220px]">
              {restaurantDetails.hours.map((hour, i) => (
                <li key={i} className="flex justify-between w-full">
                  <span>{hour.days}</span>
                  <span>{hour.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-gray-500 tracking-wider">
            &copy; {new Date().getFullYear()} Rapito Ristorante. All rights reserved.
          </p>
          <nav className="flex gap-8" aria-label="Social media links">
            <a href="#" className="font-sans text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors duration-300 py-2 px-1">Instagram</a>
            <a href="#" className="font-sans text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors duration-300 py-2 px-1">Facebook</a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

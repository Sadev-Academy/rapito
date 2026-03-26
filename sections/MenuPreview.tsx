"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { menuData } from '@/lib/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function MenuPreview() {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <Section id="menu" className="bg-white">
      <Container>
        <div ref={headingRef} className="reveal text-center mb-20 max-w-2xl mx-auto">
          <h4 className="font-sans text-[var(--color-gold)] tracking-[0.3em] text-xs uppercase mb-4 font-semibold">Il Menu</h4>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-charcoal)] leading-tight mb-8">
            Taste of <span className="italic text-[var(--color-deep-red)]/90">Excellence</span>
          </h2>
          <div className="w-16 h-px bg-[var(--color-gold)]/30 mx-auto"></div>
        </div>
        
        <div ref={gridRef} className="reveal stagger-2 grid lg:grid-cols-2 gap-x-20 gap-y-16 max-w-6xl mx-auto">
          {Object.entries(menuData).map(([category, items]) => (
            <div key={category} className="mb-4">
              <h3 className="font-serif text-3xl text-[var(--color-charcoal)] mb-8 pb-4 border-b border-[var(--color-gold)]/20 uppercase tracking-widest">{category}</h3>
              <div className="space-y-10">
                {items.map((item, index) => (
                  <div key={index} className="group flex flex-col relative hover:-translate-y-1 transition-transform duration-500 ease-out cursor-default">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-serif text-2xl text-[var(--color-charcoal)] group-hover:text-[var(--color-deep-red)] transition-colors duration-300">
                        {item.name}
                      </h4>
                      <span className="font-sans font-medium text-[var(--color-gold)] text-xl ml-4 tracking-wider">
                        {item.price}
                      </span>
                    </div>
                    <p className="font-sans text-sm font-light text-gray-500 tracking-wide leading-relaxed pr-8">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div ref={ctaRef} className="reveal stagger-4 text-center mt-20">
          <a href="#menu" className="inline-block font-sans text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-charcoal)] border-b border-[var(--color-charcoal)] pb-2 hover:text-[var(--color-deep-red)] hover:border-[var(--color-deep-red)] transition-colors duration-300">
            View Full Menu
          </a>
        </div>
      </Container>
    </Section>
  );
}

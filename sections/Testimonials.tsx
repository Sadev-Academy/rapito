"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { testimonialsData } from '@/lib/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function TestimonialCard({ review, index }: { review: typeof testimonialsData[0]; index: number }) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className={`reveal stagger-${index + 1}`}>
      <Card className="p-8 md:p-10 lg:p-12 text-center flex flex-col justify-between h-full group">
        <div>
          <div className="flex justify-center mb-6 md:mb-8" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-[var(--color-gold)] mx-0.5 md:mx-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="font-sans text-gray-500 font-light leading-relaxed md:leading-loose text-sm md:text-base mb-8 md:mb-10 italic">
            &quot;{review.text}&quot;
          </blockquote>
        </div>
        <div className="border-t border-gray-100 pt-5 md:pt-6">
          <cite className="not-italic">
            <span className="font-serif text-[var(--color-charcoal)] font-medium text-base md:text-lg block mb-1">{review.author}</span>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--color-gold)]">{review.publication}</span>
          </cite>
        </div>
      </Card>
    </div>
  );
}

export function Testimonials() {
  const headingRef = useScrollReveal();

  return (
    <Section className="bg-[var(--color-cream)] relative overflow-hidden">
      <Container>
        <div ref={headingRef} className="reveal text-center mb-12 md:mb-20 max-w-2xl mx-auto">
          <h4 className="font-sans text-[var(--color-gold)] tracking-[0.3em] text-xs uppercase mb-3 md:mb-4 font-semibold">Voices</h4>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[var(--color-charcoal)] mb-4 md:mb-6">
            What Critics Are Saying
          </h2>
          <div className="w-16 h-px bg-[var(--color-gold)]/30 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {testimonialsData.map((review, index) => (
            <TestimonialCard key={index} review={review} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

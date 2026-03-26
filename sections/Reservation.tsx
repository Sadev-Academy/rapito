"use client";

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

/**
 * Reservation Section
 * 
 * Handles the table booking user flow. Features:
 * - Managed form state for booking details
 * - Client-side validation for dates and contact info
 * - Simulated async submission with loading states
 * - Success feedback with booking confirmation details
 */
export function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '18:00',
    guests: '2 People',
    specialRequests: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name || formData.name.trim().length < 2) newErrors.name = 'Please provide a valid full name.';
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please provide a valid email address.';
    if (!formData.date) newErrors.date = 'Date is required.';
    else if (formData.date < today) newErrors.date = 'Date cannot be in the past.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setFormData({
      name: '', email: '', phone: '', date: '', time: '18:00', guests: '2 People', specialRequests: ''
    });
    setErrors({});
    setIsSuccess(false);
  };

  const labelClass = "font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold text-gray-500 group-focus-within:text-[var(--color-deep-red)] transition-colors duration-300";
  const inputClass = "w-full border-b bg-transparent py-3 text-base md:text-lg font-serif text-[var(--color-charcoal)] focus:outline-none transition-all duration-300 rounded-none placeholder:text-gray-300 placeholder:font-sans placeholder:text-sm md:placeholder:text-base cursor-text";

  if (isSuccess) {
    return (
      <Section id="reservations" className="bg-[var(--color-cream)] relative overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 md:p-16 lg:p-24 shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.02)] relative z-10 rounded-sm text-center" style={{ animation: 'reveal-up 0.7s ease-out forwards' }}>
            <h4 className="font-sans text-[var(--color-gold)] tracking-[0.3em] text-xs uppercase mb-4 font-semibold">Confirmed</h4>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-charcoal)] mb-6">We Look Forward to Serving You</h2>
            <div className="w-12 h-px bg-[var(--color-gold)]/40 mx-auto mb-8"></div>
            <p className="font-sans text-gray-500 font-light leading-relaxed mb-10 max-w-lg mx-auto text-sm md:text-base">
              Your table for {formData.guests} on {new Date(formData.date).toLocaleDateString()} at {formData.time} has been secured. A confirmation email has been dispatched to {formData.email}.
            </p>
            <Button variant="outline" size="lg" onClick={handleReset} className="border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-white">
              Make Another Booking
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="reservations" className="bg-[var(--color-cream)] relative overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 md:p-16 lg:p-24 shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.02)] relative z-10 rounded-sm">
          <div className="text-center mb-10 md:mb-16">
            <h4 className="font-sans text-[var(--color-gold)] tracking-[0.3em] text-xs uppercase mb-3 md:mb-4 font-semibold">Experience</h4>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[var(--color-charcoal)] mb-4 md:mb-6">Reserve Your Table</h2>
            <div className="w-12 h-px bg-[var(--color-gold)]/40 mx-auto"></div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10" noValidate>
            <div className="grid md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-8 md:gap-y-10">
              {/* Name */}
              <div className="space-y-2 md:space-y-3 relative group">
                <label htmlFor="res-name" className={labelClass}>Name *</label>
                <input 
                  id="res-name"
                  type="text" 
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your Full Name" 
                  className={`${inputClass} ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[var(--color-deep-red)]'}`} 
                />
                {errors.name && <span role="alert" className="absolute -bottom-5 md:-bottom-6 left-0 text-[10px] md:text-[11px] text-red-500 font-sans tracking-wide">{errors.name}</span>}
              </div>

              {/* Email */}
              <div className="space-y-2 md:space-y-3 relative group">
                <label htmlFor="res-email" className={labelClass}>Email *</label>
                <input 
                  id="res-email"
                  type="email" 
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your.email@example.com" 
                  className={`${inputClass} ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[var(--color-deep-red)]'}`} 
                />
                {errors.email && <span role="alert" className="absolute -bottom-5 md:-bottom-6 left-0 text-[10px] md:text-[11px] text-red-500 font-sans tracking-wide">{errors.email}</span>}
              </div>

              {/* Phone */}
              <div className="space-y-2 md:space-y-3 relative group">
                <label htmlFor="res-phone" className={labelClass}>Phone (Optional)</label>
                <input 
                  id="res-phone"
                  type="tel" 
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+44 20 7123 4567" 
                  className={`${inputClass} border-gray-200 focus:border-[var(--color-deep-red)]`} 
                />
              </div>

              {/* Guests */}
              <div className="space-y-2 md:space-y-3 relative group">
                <label htmlFor="res-guests" className={labelClass}>Guests *</label>
                <select 
                  id="res-guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  className={`${inputClass} border-gray-200 focus:border-[var(--color-deep-red)] appearance-none`}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={`${num} People`}>{num} {num === 1 ? 'Person' : 'People'}</option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div className="space-y-2 md:space-y-3 relative group">
                <label htmlFor="res-date" className={labelClass}>Date *</label>
                <input 
                  id="res-date"
                  type="date" 
                  min={today}
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className={`${inputClass} ${errors.date ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[var(--color-deep-red)]'}`} 
                />
                {errors.date && <span role="alert" className="absolute -bottom-5 md:-bottom-6 left-0 text-[10px] md:text-[11px] text-red-500 font-sans tracking-wide">{errors.date}</span>}
              </div>

              {/* Time */}
              <div className="space-y-2 md:space-y-3 relative group">
                <label htmlFor="res-time" className={labelClass}>Time *</label>
                <select 
                  id="res-time"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className={`${inputClass} border-gray-200 focus:border-[var(--color-deep-red)] appearance-none`}
                >
                  <option>17:00</option>
                  <option>17:30</option>
                  <option>18:00</option>
                  <option>18:30</option>
                  <option>19:00</option>
                  <option>19:30</option>
                  <option>20:00</option>
                  <option>20:30</option>
                  <option>21:00</option>
                  <option>21:30</option>
                  <option>22:00</option>
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div className="space-y-2 md:space-y-3 relative group">
              <label htmlFor="res-requests" className={labelClass}>Special Requests (Optional)</label>
              <textarea 
                id="res-requests"
                value={formData.specialRequests}
                onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                placeholder="Dietary requirements, special occasions, etc." 
                rows={2}
                className={`${inputClass} border-gray-200 focus:border-[var(--color-deep-red)] resize-none`} 
              />
            </div>

            <div className="pt-6 md:pt-10 text-center">
              <Button 
                variant="primary" 
                size="lg" 
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto min-w-[240px] ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
              >
                {isSubmitting ? 'Processing...' : 'Reserve Now'}
              </Button>
            </div>
          </form>
        </div>
      </Container>
      
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-white z-0 pointer-events-none"></div>
    </Section>
  );
}

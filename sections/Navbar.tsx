"use client";
import React, { useState, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // When near the top, set Home as active
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy
  useEffect(() => {
    const sectionIds = ['about', 'menu', 'reservations', 'gallery', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.15, rootMargin: '-60px 0px -35% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Contact', href: '#contact' }
  ];

  const isActive = (href: string) => {
    if (href === '#') return activeSection === '' || activeSection === 'home';
    return href === `#${activeSection}`;
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[var(--color-cream)]/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-[rgba(0,0,0,0.05)] py-0' : 'bg-transparent py-4'}`} role="banner">
        <Container>
          <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16 md:h-20' : 'h-20 md:h-24'}`}>
            <a href="#" className={`text-xl md:text-2xl font-serif font-bold tracking-widest uppercase transition-colors duration-500 ${scrolled ? 'text-[var(--color-deep-red)]' : 'text-white drop-shadow-md'}`} aria-label="Rapito — return to homepage">
              Rapito
            </a>
            
            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center gap-10 font-sans text-xs tracking-[0.15em] uppercase font-semibold transition-colors duration-500 ${scrolled ? 'text-[var(--color-charcoal)]' : 'text-white'}`} aria-label="Main navigation">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className={`relative group overflow-hidden pb-1 transition-all duration-300 ${isActive(link.href) ? 'nav-link-active' : 'hover:opacity-80'}`}>
                  <span>{link.name}</span>
                  <span className={`absolute left-0 bottom-0 w-full h-px transform transition-transform duration-500 ease-out ${isActive(link.href) ? 'translate-x-0' : '-translate-x-[105%] group-hover:translate-x-0'} ${scrolled ? 'bg-[var(--color-gold)]' : 'bg-white'}`}></span>
                </a>
              ))}
            </nav>
            
            <div className="hidden lg:block">
              <a 
                href="#reservations" 
                className={`inline-flex items-center justify-center h-10 px-6 text-xs font-sans font-medium uppercase tracking-[0.15em] transition-all duration-500 ease-out hover:-translate-y-[2px] ${
                  scrolled 
                    ? 'border border-[var(--color-charcoal)] text-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-white' 
                    : 'bg-white text-[var(--color-charcoal)] shadow-lg hover:bg-white/90 hover:text-[var(--color-deep-red)]'
                }`}
              >
                Book a Table
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button 
              className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-[60] transition-colors duration-500 ${scrolled || isMobileMenuOpen ? 'text-[var(--color-charcoal)]' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`block w-6 h-px transition-transform duration-300 ease-in-out ${scrolled || isMobileMenuOpen ? 'bg-[var(--color-charcoal)]' : 'bg-white'} ${isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
              <span className={`block w-6 h-px transition-opacity duration-300 ease-in-out ${scrolled || isMobileMenuOpen ? 'bg-[var(--color-charcoal)]' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-px transition-transform duration-300 ease-in-out ${scrolled || isMobileMenuOpen ? 'bg-[var(--color-charcoal)]' : 'bg-white'} ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-[var(--color-cream)] transition-all duration-500 ease-in-out lg:hidden flex flex-col items-center justify-center ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <nav className="flex flex-col items-center justify-center w-full max-w-sm space-y-6 md:space-y-8 px-6">
          <div className="text-sm font-sans tracking-[0.3em] text-[var(--color-gold)] uppercase font-semibold mb-4 md:mb-6">Navigation</div>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-2xl md:text-3xl font-serif transition-colors py-1 ${isActive(link.href) ? 'text-[var(--color-gold)]' : 'text-[var(--color-charcoal)] hover:text-[var(--color-deep-red)]'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="w-16 h-px bg-[var(--color-gold)]/30 mt-4 md:mt-6 mb-2"></div>
          <a href="#reservations" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="primary" size="lg" className="w-full mt-4 md:mt-6">
              Book a Table
            </Button>
          </a>
        </nav>
      </div>
    </>
  );
}

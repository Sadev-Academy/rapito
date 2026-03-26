import { Navbar } from '@/sections/Navbar';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { MenuPreview } from '@/sections/MenuPreview';
import { SignatureDishes } from '@/sections/SignatureDishes';
import { Reservation } from '@/sections/Reservation';
import { Gallery } from '@/sections/Gallery';
import { Testimonials } from '@/sections/Testimonials';
import { Footer } from '@/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-[var(--color-deep-red)] selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <MenuPreview />
      <SignatureDishes />
      <Reservation />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}

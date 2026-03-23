import { useState } from 'react';
import CartDrawer from '../components/CartDrawer';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';
import FeaturedSection from '../sections/FeaturedSection';
import Footer from '../sections/Footer';
import Hero from '../sections/Hero';
import Navbar from '../sections/Navbar';
import ProductsSection from '../sections/ProductsSection';

function HomePage() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="relative overflow-hidden">
      <Navbar onCategorySelect={setActiveCategory} />
      <main>
        <Hero />
        <FeaturedSection />
        <ProductsSection activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

export default HomePage;


import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="text-2xl font-heading font-bold gradient-text">Ibrahim A.</a>
        
        <div className="hidden md:flex items-center gap-8">
          <nav>
            <ul className="flex gap-8">
              <li><a href="#about" className="font-medium hover:text-primary transition-colors">About</a></li>
              <li><a href="#services" className="font-medium hover:text-primary transition-colors">Services</a></li>
              <li><a href="#tools" className="font-medium hover:text-primary transition-colors">Tools</a></li>
              <li><a href="#experience" className="font-medium hover:text-primary transition-colors">Experience</a></li>
              <li><a href="#testimonials" className="font-medium hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="font-medium hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </nav>
          <Button className="gradient-bg">Hire Me</Button>
        </div>

        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container-custom pt-20 pb-6">
          <nav>
            <ul className="flex flex-col gap-6 text-lg">
              <li><a href="#about" className="block py-2 font-medium hover:text-primary transition-colors" onClick={toggleMenu}>About</a></li>
              <li><a href="#services" className="block py-2 font-medium hover:text-primary transition-colors" onClick={toggleMenu}>Services</a></li>
              <li><a href="#tools" className="block py-2 font-medium hover:text-primary transition-colors" onClick={toggleMenu}>Tools</a></li>
              <li><a href="#experience" className="block py-2 font-medium hover:text-primary transition-colors" onClick={toggleMenu}>Experience</a></li>
              <li><a href="#testimonials" className="block py-2 font-medium hover:text-primary transition-colors" onClick={toggleMenu}>Testimonials</a></li>
              <li><a href="#contact" className="block py-2 font-medium hover:text-primary transition-colors" onClick={toggleMenu}>Contact</a></li>
              <li className="pt-4">
                <Button className="w-full gradient-bg" onClick={toggleMenu}>Hire Me</Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

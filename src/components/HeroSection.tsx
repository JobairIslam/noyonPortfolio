
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const HeroSection = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20" id="hero">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
      
      <div className="container-custom relative z-10 pt-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="block">Hi, I'm</span>
              <span className="gradient-text">Ibrahim A.</span>
            </h1>
            
            <h2 className="text-lg md:text-xl lg:text-2xl mb-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <span className="font-semibold block md:inline-block">Social Media Manager</span>
              <span className="hidden md:inline-block mx-2">|</span>
              <span className="font-semibold block md:inline-block">Content Strategy Specialist</span>
              <span className="hidden md:inline-block mx-2">|</span>
              <span className="font-semibold block md:inline-block">Organic Growth Expert</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 opacity-0 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              Helping businesses grow their digital presence through strategic social media management, 
              content creation, and organic growth techniques.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button className="gradient-bg" size="lg">
                Hire Me
              </Button>
              <Button variant="outline" size="lg">
                Download Resume
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="mt-12 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Find me on:</p>
              <div className="flex gap-6 justify-center md:justify-start">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex-1 max-w-md opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-full overflow-hidden aspect-square shadow-lg border-8 border-white dark:border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Ibrahim A. - Social Media Expert" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700">
            <ArrowDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

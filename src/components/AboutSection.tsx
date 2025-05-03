
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Passionate about creating meaningful digital experiences and helping brands thrive online.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Digital Marketing Expert with <span className="gradient-text">4 Years</span> of Experience</h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I specialize in social media growth, brand strategy, and content planning. My expertise spans across 
              multiple platforms including Facebook, Instagram, Twitter/X, LinkedIn, YouTube, and TikTok.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm passionate about helping businesses grow organically through strategic content creation, 
              community engagement, and data-driven decision making. My approach focuses on creating authentic connections
              between brands and their audiences.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="text-primary font-bold text-xl md:text-2xl mb-2">100+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Satisfied Clients</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="text-secondary font-bold text-xl md:text-2xl mb-2">150+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Completed Projects</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="text-accent font-bold text-xl md:text-2xl mb-2">6+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Platforms Mastered</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="text-primary font-bold text-xl md:text-2xl mb-2">4+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
          
          <Card className="overflow-hidden border-none shadow-lg">
            <CardContent className="p-0">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Ibrahim working on social media strategy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold">Strategic Thinking</h4>
                    <p className="text-sm opacity-90">Creating data-driven growth strategies</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Marketing Director",
      rating: 5,
      date: "November 2024",
      quote: "Amazing work Ibrahim, thank you very much! His strategic approach to our social media presence transformed our engagement metrics within weeks."
    },
    {
      name: "Sarah Williams",
      role: "Startup Founder",
      rating: 5,
      date: "October 2024",
      quote: "He took our engagement to a whole new level! Very creative, reliable and trustworthy. Ibrahim completely transformed our social media presence."
    },
    {
      name: "Michael Chen",
      role: "E-commerce Manager",
      rating: 5,
      date: "October 2023",
      quote: "True expert. Insights added immense value to our marketing strategy. Ibrahim's understanding of social media algorithms is outstanding."
    },
    {
      name: "Emma Davis",
      role: "Brand Manager",
      rating: 5,
      date: "October 2023",
      quote: "Very professional and communicative. Ibrahim delivered high-quality content on time and was always available to discuss strategy adjustments."
    },
    {
      name: "Robert Taylor",
      role: "Small Business Owner",
      rating: 5,
      date: "September 2023",
      quote: "Exceptional work and professionalism. Ibrahim's strategic approach helped us increase our followers by over 200% in just two months."
    },
    {
      name: "Jennifer Smith",
      role: "Content Creator",
      rating: 5,
      date: "August 2023",
      quote: "Appreciate your expertise and professionalism. The Instagram Reels you created doubled our engagement rate overnight."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Read what my clients have to say about working with me.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Testimonials (3 cards) */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length;
              return (
                <TestimonialCard key={index} testimonial={testimonials[index]} />
              );
            })}
          </div>

          {/* Mobile Testimonial (1 card) */}
          <div className="md:hidden">
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card className="bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300 hover:shadow-md h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 italic mb-6 flex-grow">
          "{testimonial.quote}"
        </p>
        <div className="flex items-center pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
            {testimonial.name.charAt(0)}
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role} • {testimonial.date}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialsSection;


import React from 'react';
import { Calendar } from "lucide-react";

const TimelineSection = () => {
  const timelineItems = [
    {
      title: "Strategy Specialist",
      period: "Nov 7–29, 2024",
      testimonial: "Amazing work Ibrahim, thank you very much!"
    },
    {
      title: "Social Media Manager – Engagement & Growth",
      period: "Oct 26 – Nov 29, 2024",
      testimonial: "He took our engagement to a whole new level! Very creative, reliable and trustworthy."
    },
    {
      title: "SMM + Graphic Creator",
      period: "Oct 26–29, 2023",
      testimonial: "True expert. Insights added immense value."
    },
    {
      title: "SMM Expert & Video Editor (E-Commerce)",
      period: "Oct 20–29, 2023",
      testimonial: "Very professional and communicative."
    },
    {
      title: "SMM Specialist",
      period: "Aug 30 – Sep 4, 2023",
      testimonial: "Exceptional work and professionalism."
    },
    {
      title: "Instagram Reels Editor",
      period: "Aug 17–21, 2023",
      testimonial: "Appreciate your expertise and professionalism."
    },
    {
      title: "Social Media Strategist",
      period: "Jul 26–31, 2023",
      testimonial: "Provided us a great strategy and roadmap. Brilliant!"
    },
    {
      title: "Part-time Social Media Manager",
      period: "May 1–8, 2023",
      testimonial: "Professional, intelligent, and talented individual."
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            My professional journey and client success stories.
          </p>
        </div>

        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
          
          <div className="relative space-y-12">
            {timelineItems.map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row gap-4 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-primary flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-[calc(50%-20px)] ${index % 2 === 0 ? 'md:pl-0 md:pr-12' : 'md:pr-0 md:pl-12'} ml-12 md:ml-0`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">{item.period}</div>
                    <div className="text-gray-600 dark:text-gray-300 italic">
                      "{item.testimonial}"
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

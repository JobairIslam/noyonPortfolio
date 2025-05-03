
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Youtube, Briefcase } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Facebook / X Marketing",
      description: "Strategic content planning and community management to grow your Facebook and X presence.",
      icon: <Facebook className="h-8 w-8 text-primary" />
    },
    {
      title: "Instagram Marketing",
      description: "Engaging visual content strategies for feed posts, stories, and reels to increase followers and engagement.",
      icon: <Instagram className="h-8 w-8 text-primary" />
    },
    {
      title: "LinkedIn Marketing",
      description: "Professional content strategy to build authority and generate B2B connections.",
      icon: <Linkedin className="h-8 w-8 text-primary" />
    },
    {
      title: "YouTube Viewership Boosting",
      description: "Video optimization, thumbnail design, and promotion strategies to increase views and subscribers.",
      icon: <Youtube className="h-8 w-8 text-primary" />
    },
    {
      title: "Content Strategy",
      description: "Comprehensive content planning aligned with business goals and audience interests.",
      icon: <Briefcase className="h-8 w-8 text-primary" />
    },
    {
      title: "Influencer Outreach",
      description: "Building relationships with relevant influencers to extend your brand reach.",
      icon: <Briefcase className="h-8 w-8 text-primary" />
    },
    {
      title: "Scheduling & Management",
      description: "Consistent posting schedule and management of social media accounts.",
      icon: <Briefcase className="h-8 w-8 text-primary" />
    },
    {
      title: "Graphic Design",
      description: "Eye-catching visual content creation aligned with your brand identity.",
      icon: <Briefcase className="h-8 w-8 text-primary" />
    },
    {
      title: "SEO",
      description: "Content optimization for better search engine visibility and organic traffic.",
      icon: <Briefcase className="h-8 w-8 text-primary" />
    },
    {
      title: "Reels Editing",
      description: "Engaging short-form video content for Instagram and TikTok to boost engagement.",
      icon: <Briefcase className="h-8 w-8 text-primary" />
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services Offered</h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Comprehensive social media and content services to help your brand stand out and grow online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group">
              <Card className="border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/20">
                <CardHeader>
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle className="transition-colors duration-300 group-hover:text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Trello, Calendar, Mail } from "lucide-react";

const ToolsSection = () => {
  const tools = [
    {
      name: "Letter.com",
      icon: <Mail className="h-10 w-10" />,
      category: "Email Marketing"
    },
    {
      name: "Trello",
      icon: <Trello className="h-10 w-10" />,
      category: "Project Management"
    },
    {
      name: "Monday.com",
      icon: <Trello className="h-10 w-10" />,
      category: "Project Management"
    },
    {
      name: "Asana",
      icon: <Trello className="h-10 w-10" />,
      category: "Project Management"
    },
    {
      name: "Canva",
      icon: <Trello className="h-10 w-10" />,
      category: "Graphic Design"
    },
    {
      name: "Adobe Premiere Pro",
      icon: <Trello className="h-10 w-10" />,
      category: "Video Editing"
    },
    {
      name: "Google Analytics",
      icon: <Trello className="h-10 w-10" />,
      category: "Analytics"
    },
    {
      name: "Buffer",
      icon: <Calendar className="h-10 w-10" />,
      category: "Scheduling"
    },
  ];

  return (
    <section id="tools" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools & Platforms</h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Professional tools I use to deliver exceptional results for my clients.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card 
              key={index} 
              className="border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-3 text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors duration-300">
                  {tool.icon}
                </div>
                <h3 className="font-medium text-lg mb-1 group-hover:text-primary transition-colors duration-300">{tool.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{tool.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;

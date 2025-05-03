
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    toast({
      title: "Message sent!",
      description: "I'll get back to you as soon as possible.",
    });
  };

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "#" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "#" },
    { icon: <Youtube className="w-5 h-5" />, label: "YouTube", href: "#" },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Ready to grow your social media presence? Let's discuss how I can help your business thrive online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input id="name" placeholder="Your Name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full gradient-bg">
                  Let's Work Together
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-between gap-6">
            <Card className="border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle>Contact Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4 mb-6">
                  <Mail className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:ibrahim@example.com" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                      ibrahim@example.com
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Connect on Social</h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index}
                        href={social.href} 
                        className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                        aria-label={social.label}
                      >
                        {social.icon}
                        <span>{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none gradient-bg text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Let's Create Something Amazing</h3>
                <p className="mb-4 opacity-90">
                  Ready to take your social media presence to the next level? I'm available for freelance work and consulting.
                </p>
                <Button variant="secondary" className="w-full">
                  Check My Availability
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

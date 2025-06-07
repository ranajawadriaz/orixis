
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      message: '',
    });

    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@orixis.com',
      link: 'mailto:hello@orixis.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '123 Innovation Drive\nTech City, TC 12345',
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9AM - 6PM PST\nSat - Sun: Closed',
      link: null
    },
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Innovation Drive\nTech City, TC 12345',
      phone: '+1 (555) 123-4567',
      image: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=400&h=300&fit=crop'
    },
    {
      city: 'New York',
      address: '456 Tech Avenue\nNY, NY 10001',
      phone: '+1 (555) 234-5678',
      image: 'https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=400&h=300&fit=crop'
    },
    {
      city: 'London',
      address: '789 Innovation Street\nLondon, UK EC1A 1BB',
      phone: '+44 20 1234 5678',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop'
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orixis-blue via-orixis-blue-light to-orixis-purple/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Let's <span className="gradient-text">Talk</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Ready to transform your business? Get in touch with our team and let's discuss how we can help you achieve your goals.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
              Start the Conversation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-gradient-card border-white/10">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-white">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company" className="text-white">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="service" className="text-white">Service Interest</Label>
                        <Select onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-orixis-blue-light border-white/20">
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="mobile-apps">Mobile Apps</SelectItem>
                            <SelectItem value="ai-solutions">AI Solutions</SelectItem>
                            <SelectItem value="ml-data">ML & Data Analytics</SelectItem>
                            <SelectItem value="consulting">Technology Consulting</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="budget" className="text-white">Project Budget</Label>
                      <Select onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-orixis-blue-light border-white/20">
                          <SelectItem value="under-50k">Under $50k</SelectItem>
                          <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                          <SelectItem value="100k-250k">$100k - $250k</SelectItem>
                          <SelectItem value="250k-500k">$250k - $500k</SelectItem>
                          <SelectItem value="over-500k">$500k+</SelectItem>
                          <SelectItem value="discuss">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[120px]"
                        placeholder="Tell us about your project and requirements..."
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:opacity-90 text-white">
                      Send Message
                      <Send className="ml-2" size={20} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-gradient-card border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mt-1">
                          <info.icon className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{info.title}</h4>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-white/70 hover:text-orixis-teal transition-colors whitespace-pre-line"
                            >
                              {info.details}
                            </a>
                          ) : (
                            <p className="text-white/70 whitespace-pre-line">{info.details}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Response</h3>
                  <p className="text-white/70 mb-4">
                    We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                  </p>
                  <div className="flex items-center space-x-2 text-orixis-teal">
                    <Clock size={16} />
                    <span className="text-sm">Average response: 2-4 hours</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gradient-to-b from-orixis-blue-light/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our <span className="gradient-text">Offices</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              With offices around the world, we're always close by to support your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="bg-gradient-card border-white/10 overflow-hidden hover-lift">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={office.image} 
                    alt={office.city}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{office.city}</h3>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <MapPin className="text-orixis-teal mt-1" size={16} />
                      <p className="text-white/70 text-sm whitespace-pre-line">{office.address}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="text-orixis-teal" size={16} />
                      <a href={`tel:${office.phone}`} className="text-white/70 hover:text-orixis-teal text-sm">
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-xl text-white/70">
                Quick answers to common questions about our services and process.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "What's your typical project timeline?",
                  answer: "Project timelines vary based on scope and complexity. Simple websites typically take 4-6 weeks, while complex AI solutions may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
                },
                {
                  question: "Do you offer ongoing support and maintenance?",
                  answer: "Yes, we offer comprehensive support and maintenance packages to ensure your solution continues to perform optimally. This includes regular updates, security patches, and feature enhancements."
                },
                {
                  question: "Can you work with our existing technology stack?",
                  answer: "Absolutely! We're experienced with a wide range of technologies and can integrate with or enhance your existing systems. We'll assess your current setup and recommend the best approach."
                },
                {
                  question: "What's your pricing structure?",
                  answer: "Our pricing is project-based and depends on scope, complexity, and timeline. We provide detailed estimates after understanding your requirements. We also offer retainer-based arrangements for ongoing work."
                }
              ].map((faq, index) => (
                <Card key={index} className="bg-gradient-card border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-white/70">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-primary border-0 text-center p-12">
            <CardContent>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Don't wait to transform your business. Schedule a free consultation and let's discuss how we can help you succeed.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-orixis-blue hover:bg-white/90">
                Schedule Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;

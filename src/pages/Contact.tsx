
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
      description: "Thank you for reaching out. Our AI team will get back to you within 24 hours.",
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
      <section className="relative py-20 overflow-hidden hero-section">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-orixis-blue dark:via-orixis-blue-light dark:to-orixis-purple/20" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-orixis-text">
              Let's <span className="gradient-text">Talk</span>
            </h1>
            <p className="text-xl md:text-2xl text-orixis-text-muted mb-8">
              Ready to transform your business with autonomous AI agents? Get in touch with our team and let's discuss how we can help you achieve your automation goals.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
              Start the Conversation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orixis-teal/20 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-orixis-purple/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-orixis-teal/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="theme-card">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-orixis-text mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-orixis-text">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="bg-orixis-text/5 border-orixis-text/20 text-orixis-text placeholder:text-orixis-text-muted"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-orixis-text">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="bg-orixis-text/5 border-orixis-text/20 text-orixis-text placeholder:text-orixis-text-muted"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company" className="text-orixis-text">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="bg-orixis-text/5 border-orixis-text/20 text-orixis-text placeholder:text-orixis-text-muted"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="service" className="text-orixis-text">Service Interest</Label>
                        <Select onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger className="bg-orixis-text/5 border-orixis-text/20 text-orixis-text">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-orixis-card-bg border-orixis-text/20">
                            <SelectItem value="agentic-ai">Agentic AI Solutions</SelectItem>
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="mobile-apps">Mobile Apps</SelectItem>
                            <SelectItem value="ai-automation">AI Automation</SelectItem>
                            <SelectItem value="ml-data">ML & Data Analytics</SelectItem>
                            <SelectItem value="consulting">Technology Consulting</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="budget" className="text-orixis-text">Project Budget</Label>
                      <Select onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="bg-orixis-text/5 border-orixis-text/20 text-orixis-text">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-orixis-card-bg border-orixis-text/20">
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
                      <Label htmlFor="message" className="text-orixis-text">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="bg-orixis-text/5 border-orixis-text/20 text-orixis-text placeholder:text-orixis-text-muted min-h-[120px]"
                        placeholder="Tell us about your project and AI automation requirements..."
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
              <Card className="theme-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orixis-text mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mt-1">
                          <info.icon className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-orixis-text">{info.title}</h4>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-orixis-text-muted hover:text-orixis-teal transition-colors whitespace-pre-line"
                            >
                              {info.details}
                            </a>
                          ) : (
                            <p className="text-orixis-text-muted whitespace-pre-line">{info.details}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="theme-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orixis-text mb-4">Quick AI Response</h3>
                  <p className="text-orixis-text-muted mb-4">
                    We typically respond to all AI project inquiries within 24 hours. For urgent autonomous AI matters, please call us directly.
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
      <section className="py-20 bg-gradient-to-b from-orixis-bg-secondary/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Our <span className="gradient-text">Offices</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              With offices around the world, we're always close by to support your AI automation and agentic technology needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="theme-card overflow-hidden hover-lift">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={office.image} 
                    alt={office.city}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orixis-text mb-3">{office.city}</h3>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <MapPin className="text-orixis-teal mt-1" size={16} />
                      <p className="text-orixis-text-muted text-sm whitespace-pre-line">{office.address}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="text-orixis-teal" size={16} />
                      <a href={`tel:${office.phone}`} className="text-orixis-text-muted hover:text-orixis-teal text-sm">
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
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-xl text-orixis-text-muted">
                Quick answers to common questions about our AI services and autonomous systems.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "What's your typical AI project timeline?",
                  answer: "AI project timelines vary based on complexity. Simple AI integrations take 4-6 weeks, while complex autonomous agent systems may take 3-6 months. We'll provide a detailed timeline during our initial AI consultation."
                },
                {
                  question: "Do you offer ongoing AI agent maintenance?",
                  answer: "Yes, we offer comprehensive support for autonomous AI agents including regular updates, performance optimization, and feature enhancements to ensure your AI systems continue to improve over time."
                },
                {
                  question: "Can you integrate with our existing systems?",
                  answer: "Absolutely! Our AI agents are designed to integrate seamlessly with existing technology stacks. We'll assess your current setup and recommend the best approach for AI implementation."
                },
                {
                  question: "What's your AI project pricing structure?",
                  answer: "Our AI pricing is project-based and depends on scope, complexity, and automation requirements. We provide detailed estimates after understanding your autonomous AI needs and offer retainer-based arrangements for ongoing AI agent management."
                }
              ].map((faq, index) => (
                <Card key={index} className="theme-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-orixis-text mb-3">{faq.question}</h3>
                    <p className="text-orixis-text-muted">{faq.answer}</p>
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
                Ready to Start Your AI Project?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how autonomous AI agents can transform your business operations and drive unprecedented efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-orixis-blue hover:bg-white/90">
                  Schedule AI Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  View AI Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;

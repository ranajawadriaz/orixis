import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { Reveal } from '@/components/motion';
import { outlineOnGradient } from '@/lib/ui';
import { SITE, whatsappLink, mailtoLink, contactOnWhatsApp } from '@/lib/site';

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

  const handleInputChange = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in your name, email and message.',
        variant: 'destructive',
      });
      return;
    }

    // Hand the enquiry off to WhatsApp with everything pre-filled.
    window.open(contactOnWhatsApp(formData), '_blank', 'noopener,noreferrer');

    toast({
      title: 'Opening WhatsApp…',
      description: 'Your details are pre-filled, just hit send and we\'ll reply quickly!',
    });

    setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', details: SITE.email, link: mailtoLink() },
    { icon: Phone, title: 'WhatsApp / Phone', details: SITE.phoneDisplay, link: `tel:${SITE.phoneTel}` },
    { icon: MapPin, title: 'Office', details: `${SITE.address.line1}\n${SITE.address.line2}`, link: SITE.address.maps },
    { icon: Clock, title: 'Business Hours', details: SITE.hours, link: null as string | null },
  ];

  const channels = [
    {
      icon: FaWhatsapp,
      title: 'Chat on WhatsApp',
      description: 'The fastest way to reach us. Message us and get a reply within hours.',
      action: 'Message Us',
      href: whatsappLink('Hi Orixis! I would like to discuss a project.'),
      external: true,
    },
    {
      icon: Mail,
      title: 'Send an Email',
      description: 'Prefer email? Drop us a line and we\'ll get back to you within a day.',
      action: 'Email Us',
      href: mailtoLink('Project Enquiry'),
      external: false,
    },
    {
      icon: MapPin,
      title: 'Visit the Office',
      description: `${SITE.address.line1}, ${SITE.address.line2}.`,
      action: 'Get Directions',
      href: SITE.address.maps,
      external: true,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden hero-section">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-orixis-blue dark:via-orixis-blue-light dark:to-orixis-purple/20" />
        <div className="relative container mx-auto px-4">
          <Reveal className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-orixis-text">
              Let's <span className="gradient-text">Talk</span>
            </h1>
            <p className="text-xl md:text-2xl text-orixis-text-muted mb-8">
              Ready to bring your idea to life? Get in touch and let's discuss how we can help.
            </p>
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-white shadow-lg shadow-orixis-teal/30">
              <a href={whatsappLink('Hi Orixis! I would like to start a conversation about a project.')} target="_blank" rel="noopener noreferrer">
                Start the Conversation
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </Reveal>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-orixis-teal/20 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-orixis-purple/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-orixis-teal/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <Reveal className="lg:col-span-2">
              <Card className="theme-card">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-orixis-text mb-2">Send us a message</h2>
                  <p className="text-orixis-text-muted mb-6 text-sm">
                    Fill this in and hit send, it opens WhatsApp with your details ready to go.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-orixis-text">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="mt-1.5 bg-orixis-text/5 border-orixis-text/20 text-orixis-text placeholder:text-orixis-text-muted"
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
                          className="mt-1.5 bg-orixis-text/5 border-orixis-text/20 text-orixis-text placeholder:text-orixis-text-muted"
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
                          className="mt-1.5 bg-orixis-text/5 border-orixis-text/20 text-orixis-text placeholder:text-orixis-text-muted"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <Label className="text-orixis-text">Service Interest</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger className="mt-1.5 bg-orixis-text/5 border-orixis-text/20 text-orixis-text">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-orixis-card-bg border-orixis-text/20">
                            {['AI Solutions', 'Web Development', 'Mobile Apps', 'Data & Analytics', 'Consulting', 'Other'].map((s) => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label className="text-orixis-text">Project Budget</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="mt-1.5 bg-orixis-text/5 border-orixis-text/20 text-orixis-text">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-orixis-card-bg border-orixis-text/20">
                          {['Under $5k', '$5k - $15k', '$15k - $50k', '$50k+', "Let's discuss"].map((b) => (
                            <SelectItem key={b} value={b}>{b}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-orixis-text">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="mt-1.5 bg-orixis-text/5 border-orixis-text/20 text-orixis-text placeholder:text-orixis-text-muted min-h-[120px]"
                        placeholder="Tell us about your project…"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:opacity-90 text-white">
                      Send via WhatsApp
                      <Send className="ml-2" size={20} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Reveal>

            {/* Contact Information */}
            <Reveal delay={0.1} className="space-y-6">
              <Card className="theme-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orixis-text mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info) => (
                      <div key={info.title} className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center mt-1 flex-shrink-0">
                          <info.icon className="text-white" size={20} />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-orixis-text">{info.title}</h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              {...(info.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                              className="text-orixis-text-muted hover:text-orixis-teal transition-colors whitespace-pre-line break-all"
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
                  <h3 className="text-xl font-bold text-orixis-text mb-4">Quick Response</h3>
                  <p className="text-orixis-text-muted mb-4">
                    We reply to most enquiries within a few hours. For anything urgent, WhatsApp is fastest.
                  </p>
                  <div className="flex items-center space-x-2 text-orixis-teal">
                    <Clock size={16} />
                    <span className="text-sm">Average response: 2-4 hours</span>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ways to Reach Us */}
      <section className="py-20 bg-gradient-to-b from-orixis-bg-secondary/50 to-transparent">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Ways to <span className="gradient-text">Reach Us</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              Pick whatever works best for you, we're happy to chat.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {channels.map((channel, index) => (
              <Reveal key={channel.title} delay={index * 0.08}>
                <Card className="theme-card hover-lift h-full text-center">
                  <CardContent className="p-8 flex flex-col items-center h-full">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-5">
                      <channel.icon className="text-white" size={30} />
                    </div>
                    <h3 className="text-xl font-bold text-orixis-text mb-2">{channel.title}</h3>
                    <p className="text-orixis-text-muted text-sm mb-6 flex-1">{channel.description}</p>
                    <Button asChild variant="outline" className="border-orixis-teal/40 text-orixis-teal hover:bg-orixis-teal/10">
                      <a
                        href={channel.href}
                        {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {channel.action}
                        <ArrowRight className="ml-2" size={16} />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Reveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-xl text-orixis-text-muted">
                Quick answers to common questions about working with us.
              </p>
            </Reveal>

            <div className="space-y-6">
              {[
                { question: 'What is your typical project timeline?', answer: 'It depends on scope. Simple builds take 4-6 weeks, while larger platforms can run 3-6 months. We give you a detailed timeline during our first call.' },
                { question: 'Do you offer ongoing maintenance?', answer: 'Yes. We offer support and maintenance plans including updates, performance tuning and new features so your product keeps improving.' },
                { question: 'Can you integrate with our existing systems?', answer: 'Absolutely. We assess your current stack and recommend the cleanest way to integrate, whether it is APIs, databases or third-party tools.' },
                { question: 'How does pricing work?', answer: 'Pricing is project-based and depends on scope and complexity. We provide a clear estimate after understanding your needs, and offer retainers for ongoing work.' },
              ].map((faq) => (
                <Reveal key={faq.question}>
                  <Card className="theme-card">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-orixis-text mb-3">{faq.question}</h3>
                      <p className="text-orixis-text-muted">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <Card className="bg-gradient-primary border-0 text-center p-8 sm:p-12 shadow-2xl shadow-orixis-purple/20">
              <CardContent>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
                  Ready to Start Your Project?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss how the right technology can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-orixis-blue hover:bg-white/90 w-full sm:w-auto whitespace-normal">
                    <a href={whatsappLink('Hi Orixis! I would like to schedule a consultation.')} target="_blank" rel="noopener noreferrer">
                      Book a Consultation
                      <ArrowRight className="ml-2" size={20} />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className={`${outlineOnGradient} w-full sm:w-auto whitespace-normal`}>
                    <Link to="/case-studies">View Our Portfolio</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;

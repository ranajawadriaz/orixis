import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Bot, TrendingUp, Shield, Zap, ArrowRight, CheckCircle, Star, Users, BarChart3,
} from 'lucide-react';
import { Reveal } from '@/components/motion';
import { outlineOnGradient } from '@/lib/ui';
import { whatsappLink } from '@/lib/site';

const Products = () => {
  const products = [
    {
      icon: Bot,
      title: 'OrixisAI Assistant',
      category: 'AI Automation',
      description: 'Intelligent assistants that handle customer support, qualify leads, and run repetitive workflows so your team can focus on what matters.',
      features: ['24/7 Customer Support', 'Smart Lead Qualification', 'Multi-step Workflows', 'CRM Integration'],
      pricing: 'From $299/mo',
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      metrics: { users: '10K+', satisfaction: '98%', efficiency: '85%' },
    },
    {
      icon: TrendingUp,
      title: 'DataInsight Pro',
      category: 'AI Analytics',
      description: 'An analytics platform that surfaces insights, predicts trends, and keeps your dashboards up to date, automatically.',
      features: ['Automated Insights', 'Predictive Modelling', 'Live Dashboards', 'API Integration'],
      pricing: 'From $499/mo',
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
      metrics: { users: '5K+', satisfaction: '96%', efficiency: '92%' },
    },
    {
      icon: Shield,
      title: 'SecureFlow',
      category: 'Security Suite',
      description: 'A cybersecurity solution with AI-assisted threat detection, automated response, and continuous risk assessment.',
      features: ['Threat Detection', 'Automated Response', 'Self-learning Defence', 'Risk Assessment'],
      pricing: 'Contact for pricing',
      status: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      metrics: { users: 'Beta', satisfaction: 'N/A', efficiency: 'N/A' },
    },
  ];

  const features = [
    { icon: Zap, title: 'Lightning Fast', description: 'Optimised AI with sub-second response times and reliable performance.' },
    { icon: Shield, title: 'Enterprise Security', description: 'Bank-grade security, monitoring, and SOC 2-aligned practices.' },
    { icon: Users, title: 'Scales With You', description: 'From startup to enterprise, our products grow as your workloads do.' },
    { icon: BarChart3, title: 'Insightful Analytics', description: 'Comprehensive reporting that gets sharper over time.' },
  ];

  const testimonials = [
    { name: 'David Park', company: 'TechStart Inc', content: 'OrixisAI cut our support tickets by 70% while improving customer satisfaction.', rating: 5, product: 'OrixisAI Assistant' },
    { name: 'Maria Santos', company: 'DataCorp', content: 'DataInsight Pro surfaced revenue opportunities worth $2M a year that we had missed.', rating: 5, product: 'DataInsight Pro' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden hero-section">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-orixis-blue dark:via-orixis-blue-light dark:to-orixis-purple/20" />
        <div className="relative container mx-auto px-4">
          <Reveal className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-orixis-text">
              AI-Powered <span className="gradient-text">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-orixis-text-muted mb-8">
              Ready-to-use SaaS solutions powered by AI that streamline your operations and help your team
              do more with less.
            </p>
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-white shadow-lg shadow-orixis-teal/30">
              <a href="#products">
                Explore Our Products
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </Reveal>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-orixis-teal/20 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-orixis-purple/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-orixis-teal/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </section>

      {/* Products Grid */}
      <section id="products" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {products.map((product) => (
              <Reveal key={product.title}>
                <Card className="theme-card overflow-hidden hover-lift">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="aspect-video lg:aspect-auto overflow-hidden">
                      <img src={product.image} alt={product.title} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-8 lg:p-12">
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <Badge className={product.status === 'Available' ? 'bg-green-500/20 text-green-500 dark:text-green-400 border-0' : 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-0'}>
                          {product.status}
                        </Badge>
                        <Badge variant="outline" className="border-orixis-teal/30 text-orixis-teal">
                          {product.category}
                        </Badge>
                      </div>

                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                          <product.icon className="text-white" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-orixis-text">{product.title}</h3>
                      </div>

                      <p className="text-orixis-text-muted mb-6 text-lg">{product.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {product.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-orixis-text-muted">
                            <CheckCircle size={16} className="text-orixis-teal mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {product.status === 'Available' && (
                        <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-orixis-text/5 dark:bg-white/5 rounded-xl">
                          {[
                            { v: product.metrics.users, l: 'Active Users' },
                            { v: product.metrics.satisfaction, l: 'Satisfaction' },
                            { v: product.metrics.efficiency, l: 'Efficiency Gain' },
                          ].map((m) => (
                            <div key={m.l} className="text-center">
                              <div className="text-xl font-bold gradient-text">{m.v}</div>
                              <div className="text-xs text-orixis-text-muted">{m.l}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="text-2xl font-bold gradient-text">{product.pricing}</div>
                        <div className="flex gap-3">
                          {product.status === 'Available' ? (
                            <>
                              <Button asChild variant="outline" className="border-orixis-text/30 text-orixis-text hover:bg-orixis-text/10">
                                <a href={whatsappLink(`Hi Orixis! I'd like to try ${product.title}.`)} target="_blank" rel="noopener noreferrer">
                                  Try Free
                                </a>
                              </Button>
                              <Button asChild className="bg-gradient-primary hover:opacity-90 text-white">
                                <Link to="/contact">
                                  Learn More
                                  <ArrowRight className="ml-2" size={16} />
                                </Link>
                              </Button>
                            </>
                          ) : (
                            <Button asChild className="bg-gradient-primary hover:opacity-90 text-white">
                              <a href={whatsappLink(`Hi Orixis! Please add me to the ${product.title} waitlist.`)} target="_blank" rel="noopener noreferrer">
                                Join Waitlist
                                <ArrowRight className="ml-2" size={16} />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-orixis-bg-secondary/50 to-transparent">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Why Choose <span className="gradient-text">Our Products</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              Built with enterprise-grade reliability and genuinely useful AI.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.08}>
                <Card className="theme-card text-center hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="text-white" size={30} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-orixis-text">{feature.title}</h3>
                    <p className="text-orixis-text-muted">{feature.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              See how our products are helping teams work smarter every day.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.08}>
                <Card className="theme-card hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={20} />
                      ))}
                    </div>
                    <p className="text-orixis-text-muted mb-4 italic">"{testimonial.content}"</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-orixis-text">{testimonial.name}</div>
                        <div className="text-orixis-text-muted text-sm">{testimonial.company}</div>
                      </div>
                      <Badge variant="outline" className="border-orixis-teal/30 text-orixis-teal text-xs">
                        {testimonial.product}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
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
                  Ready to Put AI to Work?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join the teams already using our products to drive growth and efficiency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-orixis-blue hover:bg-white/90 w-full sm:w-auto whitespace-normal">
                    <Link to="/contact">
                      Start Free Trial
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className={`${outlineOnGradient} w-full sm:w-auto whitespace-normal`}>
                    <a href={whatsappLink('Hi Orixis! I would like to schedule a product demo.')} target="_blank" rel="noopener noreferrer">
                      Schedule Demo
                    </a>
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

export default Products;

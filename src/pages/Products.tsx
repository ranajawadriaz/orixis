
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  TrendingUp, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Star,
  Users,
  BarChart3,
  Cog
} from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Bot,
      title: 'OrixisAI Assistant',
      category: 'Agentic AI Automation',
      description: 'Intelligent autonomous agents that handle customer support, lead qualification, and complex business processes with minimal supervision.',
      features: ['24/7 Autonomous Support', 'Intelligent Lead Qualification', 'Multi-Agent Workflows', 'CRM Integration'],
      pricing: 'Starting at $299/month',
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      metrics: {
        users: '10K+',
        satisfaction: '98%',
        efficiency: '85%'
      }
    },
    {
      icon: TrendingUp,
      title: 'DataInsight Pro',
      category: 'AI Analytics Platform',
      description: 'Advanced analytics platform with agentic AI that autonomously discovers insights, predicts trends, and recommends actions.',
      features: ['Autonomous Data Discovery', 'Predictive Modeling', 'Self-Updating Dashboards', 'API Integration'],
      pricing: 'Starting at $499/month',
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
      metrics: {
        users: '5K+',
        satisfaction: '96%',
        efficiency: '92%'
      }
    },
    {
      icon: Shield,
      title: 'SecureFlow',
      category: 'Autonomous Security Suite',
      description: 'Comprehensive cybersecurity solution with autonomous AI agents for threat detection, response, and prevention.',
      features: ['Autonomous Threat Detection', 'Automated Response', 'Self-Learning Security', 'Risk Assessment'],
      pricing: 'Contact for pricing',
      status: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      metrics: {
        users: 'Beta',
        satisfaction: 'N/A',
        efficiency: 'N/A'
      }
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized agentic AI with sub-second response times and autonomous decision-making.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with autonomous monitoring and SOC 2 compliance.'
    },
    {
      icon: Users,
      title: 'Scalable Agents',
      description: 'AI agents that scale autonomously from startup to enterprise workloads.'
    },
    {
      icon: BarChart3,
      title: 'Self-Learning Analytics',
      description: 'Comprehensive reporting with AI agents that improve insights over time.'
    },
  ];

  const testimonials = [
    {
      name: 'David Park',
      company: 'TechStart Inc',
      content: 'OrixisAI autonomous agents reduced our support tickets by 70% while improving customer satisfaction through intelligent automation.',
      rating: 5,
      product: 'OrixisAI Assistant'
    },
    {
      name: 'Maria Santos',
      company: 'DataCorp',
      content: 'The agentic AI in DataInsight Pro autonomously identified new revenue opportunities worth $2M annually without human intervention.',
      rating: 5,
      product: 'DataInsight Pro'
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
              Agentic AI-Powered <span className="gradient-text">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-orixis-text-muted mb-8">
              Innovative SaaS solutions powered by autonomous AI agents that work independently to transform your business operations.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
              Explore Our AI Agents
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orixis-teal/20 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-orixis-purple/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-orixis-teal/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {products.map((product, index) => (
              <Card key={index} className="theme-card overflow-hidden hover-lift">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge 
                        variant={product.status === 'Available' ? 'default' : 'secondary'}
                        className={product.status === 'Available' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}
                      >
                        {product.status}
                      </Badge>
                      <Badge variant="outline" className="border-orixis-teal/30 text-orixis-teal">
                        {product.category}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                        <product.icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-orixis-text">{product.title}</h3>
                    </div>
                    
                    <p className="text-orixis-text-muted mb-6 text-lg">{product.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-orixis-text-muted">
                          <CheckCircle size={16} className="text-orixis-teal mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {product.status === 'Available' && (
                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-orixis-text/5 dark:bg-white/5 rounded-lg">
                        <div className="text-center">
                          <div className="text-xl font-bold gradient-text">{product.metrics.users}</div>
                          <div className="text-xs text-orixis-text-muted">Active Users</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold gradient-text">{product.metrics.satisfaction}</div>
                          <div className="text-xs text-orixis-text-muted">Satisfaction</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold gradient-text">{product.metrics.efficiency}</div>
                          <div className="text-xs text-orixis-text-muted">Efficiency Gain</div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold gradient-text">{product.pricing}</div>
                      </div>
                      <div className="flex gap-3">
                        {product.status === 'Available' ? (
                          <>
                            <Button variant="outline" className="border-orixis-text/30 text-orixis-text hover:bg-orixis-text/10">
                              Try Free
                            </Button>
                            <Button className="bg-gradient-primary hover:opacity-90 text-white">
                              Learn More
                              <ArrowRight className="ml-2" size={16} />
                            </Button>
                          </>
                        ) : (
                          <Button className="bg-gradient-primary hover:opacity-90 text-white">
                            Join Waitlist
                            <ArrowRight className="ml-2" size={16} />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-orixis-bg-secondary/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Why Choose <span className="gradient-text">Our AI Agents</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              Built with enterprise-grade reliability and cutting-edge agentic AI technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="theme-card text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-orixis-text">{feature.title}</h3>
                  <p className="text-orixis-text-muted">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              See how our agentic AI products are autonomously transforming businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="theme-card hover-lift">
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-primary border-0 text-center p-12">
            <CardContent>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
                Ready to Deploy AI Agents?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of companies already using our autonomous AI agents to drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-orixis-blue hover:bg-white/90">
                  Start Free Trial
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Link to="/contact">Schedule Demo</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Products;

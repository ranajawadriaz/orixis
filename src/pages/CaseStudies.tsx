
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform with Agentic AI',
      client: 'RetailMax',
      industry: 'E-commerce',
      description: 'Complete digital transformation with autonomous AI agents handling customer service, inventory management, and personalized recommendations.',
      challenge: 'RetailMax was struggling with an outdated website that couldn\'t handle peak traffic and needed autonomous customer support.',
      solution: 'We built a scalable e-commerce platform using React, Node.js, and deployed autonomous AI agents for customer service and inventory optimization.',
      results: [
        { metric: 'Revenue Increase', value: '340%', icon: DollarSign },
        { metric: 'Page Load Speed', value: '85% faster', icon: Clock },
        { metric: 'Autonomous Resolution', value: '90% of queries', icon: Users },
        { metric: 'Conversion Rate', value: '180% improvement', icon: TrendingUp },
      ],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Agentic AI'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      testimonial: {
        quote: 'Orixis transformed our business with autonomous AI agents. The system handles 90% of customer queries without human intervention.',
        author: 'Sarah Johnson',
        position: 'CEO, RetailMax'
      }
    },
    {
      id: 2,
      title: 'Autonomous Healthcare Analytics',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      description: 'Implementation of agentic AI for autonomous patient data analysis, predictive healthcare, and automated clinical workflows.',
      challenge: 'Manual analysis of patient data was time-consuming and medical staff needed autonomous decision support systems.',
      solution: 'Developed autonomous AI agents with machine learning models for predictive healthcare insights and automated clinical workflows.',
      results: [
        { metric: 'Diagnosis Accuracy', value: '95% improvement', icon: TrendingUp },
        { metric: 'Processing Time', value: '90% reduction', icon: Clock },
        { metric: 'Autonomous Alerts', value: '24/7 monitoring', icon: Users },
        { metric: 'Cost Savings', value: '$2.5M annually', icon: DollarSign },
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Agentic AI'],
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
      testimonial: {
        quote: 'The autonomous AI agents have revolutionized how we analyze patient data and make medical decisions with 24/7 monitoring.',
        author: 'Dr. Michael Chen',
        position: 'Chief Medical Officer, MediCare Solutions'
      }
    },
    {
      id: 3,
      title: 'Autonomous Trading Platform',
      client: 'InvestSmart',
      industry: 'Financial Services',
      description: 'Native mobile application with autonomous AI agents for investment management, real-time market analysis, and automated trading strategies.',
      challenge: 'InvestSmart needed autonomous trading capabilities and real-time market analysis to compete with established fintech companies.',
      solution: 'Built native iOS and Android apps with autonomous AI agents for real-time trading, portfolio management, and automated investment strategies.',
      results: [
        { metric: 'User Acquisition', value: '500K downloads', icon: Users },
        { metric: 'Autonomous Trades', value: '75% of volume', icon: TrendingUp },
        { metric: 'App Rating', value: '4.8/5 stars', icon: Users },
        { metric: 'Revenue Growth', value: '280% increase', icon: DollarSign },
      ],
      technologies: ['React Native', 'Node.js', 'AWS', 'Redis', 'Agentic AI'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      testimonial: {
        quote: 'Our autonomous AI agents have become the go-to platform for automated trading. The AI handles 75% of trading decisions.',
        author: 'David Rodriguez',
        position: 'Founder, InvestSmart'
      }
    },
  ];

  const insights = [
    {
      title: 'The Future of Agentic AI in Business',
      description: 'Exploring how autonomous AI agents are reshaping industries and creating new opportunities for automation.',
      readTime: '8 min read',
      category: 'Agentic AI & Automation',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    },
    {
      title: 'Building Autonomous Web Applications',
      description: 'Best practices and architecture patterns for creating web applications with embedded AI agents.',
      readTime: '12 min read',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    },
    {
      title: 'Mobile Apps with AI Agent Integration',
      description: 'Key strategies for integrating autonomous AI agents into mobile applications for enhanced user experiences.',
      readTime: '6 min read',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
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
              Case Studies & <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-orixis-text-muted mb-8">
              Real results from real projects. Discover how we've helped businesses transform through agentic AI and autonomous technology.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
              <Link to="/contact" className="flex items-center">
                Start Your Success Story
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orixis-teal/20 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-orixis-purple/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-orixis-teal/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="theme-card overflow-hidden hover-lift">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className={`aspect-video lg:aspect-auto overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="outline" className="border-orixis-teal/30 text-orixis-teal">
                        {study.industry}
                      </Badge>
                      <Badge variant="secondary" className="bg-orixis-text/10 text-orixis-text">
                        {study.client}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-orixis-text mb-4">{study.title}</h3>
                    <p className="text-orixis-text-muted mb-6">{study.description}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-orixis-text mb-2">Challenge</h4>
                        <p className="text-orixis-text-muted text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orixis-text mb-2">Solution</h4>
                        <p className="text-orixis-text-muted text-sm">{study.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="bg-orixis-text/5 dark:bg-white/5 rounded-lg p-3">
                          <div className="flex items-center mb-1">
                            <result.icon size={16} className="text-orixis-teal mr-2" />
                            <span className="text-xs text-orixis-text-muted">{result.metric}</span>
                          </div>
                          <div className="text-lg font-bold gradient-text">{result.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-orixis-text mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-orixis-text/10 text-orixis-text text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-orixis-text/5 dark:bg-white/5 rounded-lg p-4 mb-6">
                      <p className="text-orixis-text-muted italic mb-3">"{study.testimonial.quote}"</p>
                      <div>
                        <div className="font-semibold text-orixis-text">{study.testimonial.author}</div>
                        <div className="text-orixis-teal text-sm">{study.testimonial.position}</div>
                      </div>
                    </div>

                    <Button className="bg-gradient-primary hover:opacity-90 text-white">
                      View Full Case Study
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insights & Articles */}
      <section className="py-20 bg-gradient-to-b from-orixis-bg-secondary/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Latest <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              Stay updated with the latest trends, insights, and best practices in agentic AI, automation, and technology innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Card key={index} className="theme-card overflow-hidden hover-lift group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-orixis-teal/30 text-orixis-teal text-xs">
                      {insight.category}
                    </Badge>
                    <span className="text-xs text-orixis-text-muted">{insight.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-orixis-text">{insight.title}</h3>
                  <p className="text-orixis-text-muted mb-4 text-sm">{insight.description}</p>
                  <Button variant="ghost" className="text-orixis-teal hover:text-orixis-teal-light p-0">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Button>
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
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join our portfolio of successful projects. Let's discuss how autonomous AI agents can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-orixis-blue hover:bg-white/90">
                  <Link to="/contact" className="flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Link to="/services">View Our Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;


import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      client: 'RetailMax',
      industry: 'E-commerce',
      description: 'Complete digital transformation of a traditional retail business into a modern e-commerce platform.',
      challenge: 'RetailMax was struggling with an outdated website that couldn\'t handle peak traffic and provided poor user experience.',
      solution: 'We built a scalable e-commerce platform using React, Node.js, and AI-powered recommendation engine.',
      results: [
        { metric: 'Revenue Increase', value: '340%', icon: DollarSign },
        { metric: 'Page Load Speed', value: '85% faster', icon: Clock },
        { metric: 'User Engagement', value: '220% increase', icon: Users },
        { metric: 'Conversion Rate', value: '180% improvement', icon: TrendingUp },
      ],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'AI/ML'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      testimonial: {
        quote: 'Orixis transformed our business completely. The new platform is incredible and our sales have tripled.',
        author: 'Sarah Johnson',
        position: 'CEO, RetailMax'
      }
    },
    {
      id: 2,
      title: 'AI-Powered Healthcare Analytics',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      description: 'Implementation of AI-driven analytics platform for patient data analysis and predictive healthcare.',
      challenge: 'Manual analysis of patient data was time-consuming and prone to human error, affecting patient care quality.',
      solution: 'Developed an AI-powered analytics platform with machine learning models for predictive healthcare insights.',
      results: [
        { metric: 'Diagnosis Accuracy', value: '95% improvement', icon: TrendingUp },
        { metric: 'Processing Time', value: '90% reduction', icon: Clock },
        { metric: 'Patient Satisfaction', value: '88% increase', icon: Users },
        { metric: 'Cost Savings', value: '$2.5M annually', icon: DollarSign },
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Docker'],
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
      testimonial: {
        quote: 'The AI platform has revolutionized how we analyze patient data and make medical decisions.',
        author: 'Dr. Michael Chen',
        position: 'Chief Medical Officer, MediCare Solutions'
      }
    },
    {
      id: 3,
      title: 'Fintech Mobile App Development',
      client: 'InvestSmart',
      industry: 'Financial Services',
      description: 'Native mobile application for investment management with real-time market data and AI recommendations.',
      challenge: 'InvestSmart needed a secure, user-friendly mobile app to compete with established fintech companies.',
      solution: 'Built native iOS and Android apps with real-time trading, portfolio management, and AI-powered investment advice.',
      results: [
        { metric: 'User Acquisition', value: '500K downloads', icon: Users },
        { metric: 'Trading Volume', value: '400% increase', icon: TrendingUp },
        { metric: 'App Rating', value: '4.8/5 stars', icon: Users },
        { metric: 'Revenue Growth', value: '280% increase', icon: DollarSign },
      ],
      technologies: ['React Native', 'Node.js', 'AWS', 'Redis', 'ML APIs'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      testimonial: {
        quote: 'Our app has become the go-to platform for young investors. The AI recommendations are incredibly accurate.',
        author: 'David Rodriguez',
        position: 'Founder, InvestSmart'
      }
    },
  ];

  const insights = [
    {
      title: 'The Future of AI in Business',
      description: 'Exploring how artificial intelligence is reshaping industries and creating new opportunities.',
      readTime: '8 min read',
      category: 'AI & Technology',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    },
    {
      title: 'Building Scalable Web Applications',
      description: 'Best practices and architecture patterns for creating web applications that scale.',
      readTime: '12 min read',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    },
    {
      title: 'Mobile App Success Strategies',
      description: 'Key factors that determine the success of mobile applications in today\'s competitive market.',
      readTime: '6 min read',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orixis-blue via-orixis-blue-light to-orixis-purple/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Case Studies & <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Real results from real projects. Discover how we've helped businesses transform through technology.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
              <Link to="/contact" className="flex items-center">
                Start Your Success Story
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="bg-gradient-card border-white/10 overflow-hidden hover-lift">
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
                      <Badge variant="secondary" className="bg-white/10 text-white">
                        {study.client}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-white/70 mb-6">{study.description}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-white/60 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Solution</h4>
                        <p className="text-white/60 text-sm">{study.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-3">
                          <div className="flex items-center mb-1">
                            <result.icon size={16} className="text-orixis-teal mr-2" />
                            <span className="text-xs text-white/60">{result.metric}</span>
                          </div>
                          <div className="text-lg font-bold gradient-text">{result.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-white/10 text-white text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-4 mb-6">
                      <p className="text-white/80 italic mb-3">"{study.testimonial.quote}"</p>
                      <div>
                        <div className="font-semibold text-white">{study.testimonial.author}</div>
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
      <section className="py-20 bg-gradient-to-b from-orixis-blue-light/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Latest <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Stay updated with the latest trends, insights, and best practices in technology and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Card key={index} className="bg-gradient-card border-white/10 overflow-hidden hover-lift group">
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
                    <span className="text-xs text-white/60">{insight.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{insight.title}</h3>
                  <p className="text-white/70 mb-4 text-sm">{insight.description}</p>
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
                Join our portfolio of successful projects. Let's discuss how we can help you achieve similar results.
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

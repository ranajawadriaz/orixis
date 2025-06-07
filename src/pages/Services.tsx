
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Smartphone, 
  Brain, 
  Database, 
  Globe, 
  Zap, 
  Shield, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Scalable, performant web applications built with modern frameworks and best practices.',
      features: ['React/Next.js', 'Node.js/Python', 'Cloud Deployment', 'API Integration'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native iOS and Android applications that deliver exceptional user experiences.',
      features: ['iOS/Android Native', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Intelligent automation and AI-powered platforms that transform business operations.',
      features: ['Machine Learning', 'NLP Processing', 'Computer Vision', 'Predictive Analytics'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Comprehensive data solutions from collection to actionable business insights.',
      features: ['Data Pipeline', 'Real-time Analytics', 'Business Intelligence', 'Data Visualization'],
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
    },
  ];

  const technologies = [
    'React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'TensorFlow',
    'AWS', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'Redis'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a comprehensive project roadmap.',
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs user-centric interfaces and robust system architecture.',
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing ensures quality and performance.',
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Seamless deployment with ongoing maintenance and feature updates.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-orixis-text">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-orixis-text-muted mb-8">
              Comprehensive technology solutions that drive innovation and business growth.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
              <Link to="/contact" className="flex items-center">
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="theme-card overflow-hidden hover-lift group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-orixis-text">{service.title}</h3>
                  </div>
                  <p className="text-orixis-text-muted mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-orixis-text-muted">
                        <CheckCircle size={16} className="text-orixis-teal mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-orixis-teal hover:text-orixis-teal-light hover:bg-orixis-teal/10">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gradient-to-b from-orixis-bg-secondary/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Technologies We <span className="gradient-text">Master</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-orixis-text/10 hover:bg-orixis-teal/20 text-orixis-text border-orixis-text/20 px-4 py-2 text-sm hover-lift"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="theme-card text-center hover-lift">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold gradient-text mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-3 text-orixis-text">{step.title}</h3>
                  <p className="text-orixis-text-muted">{step.description}</p>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create a solution that exceeds your expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-orixis-blue hover:bg-white/90">
                  <Link to="/contact" className="flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Brain, Database, ArrowRight, CheckCircle } from 'lucide-react';
import { Reveal } from '@/components/motion';
import { TechGlyph } from '@/components/tech';
import { outlineOnGradient } from '@/lib/ui';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Scalable, performant web applications built with modern frameworks and best practices.',
      features: ['React / Next.js', 'Node.js / Python', 'Cloud Deployment', 'API Integration'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native iOS and Android applications that deliver exceptional user experiences.',
      features: ['iOS / Android Native', 'Cross-Platform', 'UI/UX Design', 'App Store Launch'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Intelligent automation and AI-powered tools that transform how your business operates.',
      features: ['Machine Learning', 'NLP & Chatbots', 'Computer Vision', 'Predictive Analytics'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Comprehensive data solutions from collection to actionable business insights.',
      features: ['Data Pipelines', 'Real-time Analytics', 'BI Dashboards', 'Data Visualisation'],
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
    },
  ];

  const technologies = [
    'React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'TensorFlow',
    'AWS', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'Redis',
  ];

  const process = [
    { step: '01', title: 'Discovery & Planning', description: 'We analyse your requirements and create a comprehensive project roadmap.' },
    { step: '02', title: 'Design & Architecture', description: 'Our team designs user-centric interfaces and robust system architecture.' },
    { step: '03', title: 'Development & Testing', description: 'Agile development with continuous testing ensures quality and performance.' },
    { step: '04', title: 'Deployment & Support', description: 'Seamless deployment with ongoing maintenance and feature updates.' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-section">
        <div className="container mx-auto px-4">
          <Reveal className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-orixis-text">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-orixis-text-muted mb-8">
              Comprehensive technology solutions that drive innovation and business growth.
            </p>
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-white shadow-lg shadow-orixis-teal/30">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={(index % 2) * 0.1}>
                <Card className="theme-card overflow-hidden hover-lift group h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                        <service.icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-orixis-text">{service.title}</h3>
                    </div>
                    <p className="text-orixis-text-muted mb-6">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-orixis-text-muted">
                          <CheckCircle size={16} className="text-orixis-teal mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button asChild variant="ghost" className="text-orixis-teal hover:text-orixis-teal-light hover:bg-orixis-teal/10">
                      <Link to="/contact">
                        Get a Quote <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gradient-to-b from-orixis-bg-secondary/50 to-transparent">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Technologies We <span className="gradient-text">Master</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable solutions.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <Reveal key={tech} delay={index * 0.04}>
                <div className="group flex flex-col items-center gap-3 rounded-2xl theme-card p-5 sm:p-6 hover-lift">
                  <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
                    <TechGlyph name={tech} size={40} />
                  </span>
                  <span className="text-sm font-medium text-orixis-text text-center">{tech}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.08}>
                <Card className="theme-card text-center hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold gradient-text mb-4">{step.step}</div>
                    <h3 className="text-xl font-semibold mb-3 text-orixis-text">{step.title}</h3>
                    <p className="text-orixis-text-muted">{step.description}</p>
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
                  Ready to Get Started?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss your project requirements and create a solution that exceeds your expectations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-orixis-blue hover:bg-white/90 w-full sm:w-auto whitespace-normal">
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className={`${outlineOnGradient} w-full sm:w-auto whitespace-normal`}>
                    <Link to="/case-studies">View Case Studies</Link>
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

export default Services;

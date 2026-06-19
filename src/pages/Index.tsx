import { lazy, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Brain, Zap, Star, Sparkles, Bot } from 'lucide-react';
import { Reveal } from '@/components/motion';
import { outlineOnGradient } from '@/lib/ui';
import { whatsappLink } from '@/lib/site';

const RobotShowcase = lazy(() => import('@/components/robot/RobotShowcase'));

const Index = () => {
  const services = [
    { icon: Code, title: 'Web Development', description: 'Custom, scalable web platforms built with modern, battle-tested technologies.' },
    { icon: Smartphone, title: 'Mobile Apps', description: 'Native iOS & Android apps that deliver fast, delightful user experiences.' },
    { icon: Brain, title: 'AI Solutions', description: 'Intelligent automation, chatbots and AI agents tailored to your workflow.' },
    { icon: Zap, title: 'Data & ML', description: 'Machine learning models and analytics that turn data into decisions.' },
  ];

  const stats = [
    { number: '120+', label: 'Projects Delivered' },
    { number: '50+', label: 'Happy Clients' },
    { number: '6+', label: 'Years of Craft' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', company: 'RetailMax', content: 'Orixis rebuilt our platform and the results speak for themselves, faster, smarter, and customers love it.', rating: 5 },
    { name: 'Mike Chen', company: 'StartupXYZ', content: 'Professional, communicative, and genuinely invested in our success. They delivered exactly what we needed.', rating: 5 },
    { name: 'Lisa Rodriguez', company: 'Enterprise Inc', content: 'The best development partner we have worked with. Thoughtful engineering and real attention to detail.', rating: 5 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden hero-section">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-orixis-blue dark:via-orixis-blue-light dark:to-orixis-purple/20" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-orixis-teal/30 bg-orixis-teal/10 px-4 py-1.5 text-sm font-medium text-orixis-teal mb-6">
                <Sparkles size={15} /> AI · Web · Mobile Solutions
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-orixis-text leading-[1.05]">
                Engineering the Future with{' '}
                <span className="gradient-text">AI, Web &amp; Mobile</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg md:text-2xl text-orixis-text-muted mb-9 max-w-3xl mx-auto">
                We design and build intelligent, scalable products that help businesses automate the
                busywork, delight their users, and grow with confidence.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-white px-8 py-6 text-lg shadow-lg shadow-orixis-teal/30">
                  <Link to="/contact">
                    Build With Orixis
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-orixis-text/30 text-orixis-text hover:bg-orixis-text/10 px-8 py-6 text-lg">
                  <Link to="/products">Explore Our AI Products</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-24 left-10 w-20 h-20 bg-orixis-teal/20 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-orixis-purple/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-24 w-12 h-12 bg-orixis-teal/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </section>

      {/* Interactive Robot Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-orixis-purple/10 px-4 py-1.5 text-sm font-medium text-orixis-purple mb-5">
                  <Bot /> Say hello to Orbi
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-5 text-orixis-text">
                  Meet our interactive <span className="gradient-text">3D robot</span>
                </h2>
                <p className="text-lg text-orixis-text-muted mb-5">
                  Orbi is here to say hello. Grab him with your mouse for a spin, then tap the buttons
                  below to watch him wave, walk, run, jump and even pull off a few dance moves.
                </p>
                <p className="text-lg text-orixis-text-muted mb-8">
                  Had fun? That same sense of delight is exactly what we love bringing to the products we
                  build for our clients.
                </p>
                <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
                  <Link to="/contact">
                    Start your project
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Suspense
                fallback={
                  <div className="flex h-[340px] sm:h-[440px] lg:h-[480px] items-center justify-center rounded-3xl border border-orixis-text/10 bg-gradient-card">
                    <div className="h-10 w-10 animate-spin rounded-full border-2 border-orixis-teal border-t-transparent" />
                  </div>
                }
              >
                <RobotShowcase />
              </Suspense>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-orixis-bg-secondary/50">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-orixis-text">
              What We <span className="gradient-text">Do</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              End-to-end technology solutions that move your business forward.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <Card className="theme-card hover-lift group h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <service.icon className="text-white" size={30} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-orixis-text">{service.title}</h3>
                    <p className="text-orixis-text-muted mb-4">{service.description}</p>
                    <Button asChild variant="ghost" className="text-orixis-teal hover:text-orixis-teal-light hover:bg-orixis-teal/10">
                      <Link to="/services">
                        Learn More <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.1} className="text-center">
                <div className="text-3xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-orixis-text-muted">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-orixis-bg-secondary/50 to-transparent">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-orixis-text">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              Don't just take our word for it, here's what our clients say about working with us.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <div>
                      <div className="font-semibold text-orixis-text">{testimonial.name}</div>
                      <div className="text-orixis-teal text-sm">{testimonial.company}</div>
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
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's talk about how the right technology can help you achieve your goals and stay ahead
                  of the competition.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-orixis-blue hover:bg-white/90 px-8 py-6 text-lg">
                    <Link to="/contact">
                      Let's Talk
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className={`${outlineOnGradient} px-8 py-6 text-lg`}>
                    <a href={whatsappLink('Hi Orixis! I would like to discuss a project.')} target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
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

export default Index;

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  ArrowRight, MapPin, Clock, DollarSign, Users, Coffee, Heart, Globe, GraduationCap, MessageCircle,
} from 'lucide-react';
import { Reveal } from '@/components/motion';
import { outlineOnGradient } from '@/lib/ui';
import { applyOnWhatsApp, whatsappLink } from '@/lib/site';

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$180k - $230k',
      description: 'Lead the development of AI features and intelligent automation for our products and clients.',
      requirements: ['Python / TensorFlow', 'ML Systems', 'PhD preferred'],
      posted: '2 days ago',
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$130k - $170k',
      description: 'Build scalable web applications with modern frameworks and clean, maintainable code.',
      requirements: ['React / Node.js', 'API Design', 'Agile experience'],
      posted: '1 week ago',
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$120k - $160k',
      description: 'Design intuitive, delightful user experiences for our products and client projects.',
      requirements: ['Figma', 'UX Research', 'Design Systems'],
      posted: '3 days ago',
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$150k - $190k',
      description: 'Build and maintain the infrastructure that powers our products and deployments.',
      requirements: ['AWS / GCP', 'Kubernetes', 'CI/CD'],
      posted: '5 days ago',
    },
    {
      title: 'Solutions Sales Executive',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90k - $130k + Commission',
      description: 'Drive growth by connecting enterprise clients with the right Orixis solutions.',
      requirements: ['B2B Tech Sales', 'CRM Experience', 'Great Communication'],
      posted: '1 week ago',
    },
    {
      title: 'AI Research Intern',
      department: 'Research',
      location: 'Hybrid',
      type: 'Internship',
      experience: 'Student',
      salary: '$9k - $12k/month',
      description: 'Work on real AI research alongside our team and ship experiments that matter.',
      requirements: ['CS / AI Student', 'Python', 'Curiosity'],
      posted: '4 days ago',
    },
  ];

  const benefits = [
    { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive health, dental and vision cover, plus mental health support.' },
    { icon: Coffee, title: 'Flexible Work', description: 'Remote-first culture with flexible hours and generous paid time off.' },
    { icon: DollarSign, title: 'Competitive Pay', description: 'Top-tier compensation with equity and performance bonuses.' },
    { icon: GraduationCap, title: 'Learning & Growth', description: 'Annual learning budget, conference tickets and mentorship.' },
    { icon: Users, title: 'Great Culture', description: 'A collaborative team with hackathons, talks and regular offsites.' },
    { icon: Globe, title: 'Real Impact', description: 'Work on projects that make a genuine difference for clients worldwide.' },
  ];

  const perks = [
    'MacBook Pro or PC of your choice',
    'Home office allowance',
    'Annual learning budget ($4,000)',
    'Conference attendance support',
    'Stock options program',
    'Quarterly team retreats',
    'Free lunch on office days',
    'Gym membership reimbursement',
    'Mental health & wellness support',
    'Generous parental leave',
  ];

  const culture = [
    { title: 'Innovation First', description: 'We encourage experimentation and bold ideas.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop' },
    { title: 'Work-Life Balance', description: 'Great work comes from well-rested, happy people.', image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop' },
    { title: 'Diverse Perspectives', description: 'We celebrate different backgrounds and viewpoints.', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop' },
  ];

  const steps = [
    { step: '01', title: 'Apply', desc: 'Send us a message on WhatsApp with your details and portfolio.' },
    { step: '02', title: 'Screen', desc: 'A friendly intro call with our team lead.' },
    { step: '03', title: 'Interview', desc: 'A practical challenge and a chat about how you work.' },
    { step: '04', title: 'Offer', desc: 'We make a decision quickly and welcome you aboard.' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden hero-section">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-orixis-blue dark:via-orixis-blue-light dark:to-orixis-purple/20" />
        <div className="relative container mx-auto px-4">
          <Reveal className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-orixis-text">
              Build the Future <span className="gradient-text">With Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-orixis-text-muted mb-8">
              Join a team that's shaping how businesses use technology. Build great products, work with
              brilliant people, and make a real impact.
            </p>
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-white shadow-lg shadow-orixis-teal/30">
              <a href="#positions">
                View Open Positions
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </Reveal>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-orixis-teal/20 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-orixis-purple/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-orixis-teal/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              We're growing fast and looking for talented people to join us.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Reveal key={position.title} delay={(index % 2) * 0.08}>
                <Card className="theme-card hover-lift group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4 gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-orixis-text mb-2">{position.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-orixis-text-muted flex-wrap">
                          <span className="flex items-center"><Users size={16} className="mr-1" />{position.department}</span>
                          <span className="flex items-center"><MapPin size={16} className="mr-1" />{position.location}</span>
                        </div>
                      </div>
                      <Badge className={position.type === 'Full-time' ? 'bg-green-500/20 text-green-600 dark:text-green-400 border-0' : 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-0'}>
                        {position.type}
                      </Badge>
                    </div>

                    <p className="text-orixis-text-muted mb-4">{position.description}</p>

                    <div className="flex items-center gap-4 mb-4 text-sm text-orixis-text-muted flex-wrap">
                      <span className="flex items-center"><Clock size={16} className="mr-1" />{position.experience}</span>
                      <span className="flex items-center"><DollarSign size={16} className="mr-1" />{position.salary}</span>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-orixis-text mb-2">Key Requirements</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.requirements.map((req) => (
                          <Badge key={req} variant="secondary" className="bg-orixis-text/10 text-orixis-text text-xs">{req}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <span className="text-xs text-orixis-text-muted">Posted {position.posted}</span>
                      <Button asChild className="bg-gradient-primary hover:opacity-90 text-white">
                        <a
                          href={applyOnWhatsApp({ title: position.title, department: position.department, location: position.location })}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Apply Now
                          <ArrowRight className="ml-2" size={16} />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-orixis-bg-secondary/50 to-transparent">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Why <span className="gradient-text">Orixis?</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              We offer more than a job, an environment where you can do your best work.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 0.06}>
                <Card className="theme-card text-center hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="text-white" size={30} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-orixis-text">{benefit.title}</h3>
                    <p className="text-orixis-text-muted">{benefit.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Culture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
                  Complete <span className="gradient-text">Benefits Package</span>
                </h2>
                <p className="text-orixis-text-muted text-lg mb-8">
                  We take care of our team with comprehensive benefits that support both your growth and
                  your well-being.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {perks.map((perk) => (
                    <div key={perk} className="flex items-center text-orixis-text-muted">
                      <div className="w-2 h-2 bg-orixis-teal rounded-full mr-3 flex-shrink-0" />
                      <span className="text-sm">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="space-y-6">
              {culture.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08}>
                  <Card className="theme-card overflow-hidden hover-lift">
                    <div className="grid grid-cols-3 gap-0">
                      <div className="col-span-1 aspect-square overflow-hidden">
                        <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="col-span-2 p-4 flex flex-col justify-center">
                        <h4 className="font-semibold text-orixis-text mb-2">{item.title}</h4>
                        <p className="text-orixis-text-muted text-sm">{item.description}</p>
                      </CardContent>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gradient-to-b from-orixis-bg-secondary/50 to-transparent">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Application <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              Transparent, efficient, and focused on finding the right fit.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((process, index) => (
              <Reveal key={process.step} delay={index * 0.08}>
                <Card className="theme-card text-center hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold gradient-text mb-4">{process.step}</div>
                    <h3 className="text-xl font-semibold mb-3 text-orixis-text">{process.title}</h3>
                    <p className="text-orixis-text-muted">{process.desc}</p>
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
                  Don't See the Perfect Role?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  We're always keen to meet talented people. Send us your resume and say hello.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-orixis-blue hover:bg-white/90">
                    <a
                      href={whatsappLink("Hi Orixis! I'd love to join your team. Here's a bit about me:\n\n• Name:\n• Role I'm interested in:\n• Portfolio / CV link:")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Send Resume
                      <MessageCircle className="ml-2" size={20} />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className={outlineOnGradient}>
                    <Link to="/about">Learn More About Us</Link>
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

export default Careers;

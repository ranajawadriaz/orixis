import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Users, Globe } from 'lucide-react';
import { Reveal } from '@/components/motion';
import { outlineOnGradient } from '@/lib/ui';

const About = () => {
  const team = [
    {
      name: 'Alex Chen',
      position: 'CEO & Co-Founder',
      bio: 'Former Google engineer with 15+ years across AI, machine learning and product strategy.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      expertise: ['Strategy', 'AI', 'Leadership'],
    },
    {
      name: 'Sarah Martinez',
      position: 'CTO & Co-Founder',
      bio: 'Ex-Amazon architect specialising in scalable infrastructure and full-stack engineering.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      expertise: ['Architecture', 'DevOps', 'Full-Stack'],
    },
    {
      name: 'David Kim',
      position: 'Head of AI',
      bio: 'PhD in Computer Science and published researcher in deep learning and NLP.',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      expertise: ['Machine Learning', 'NLP', 'Research'],
    },
    {
      name: 'Emily Johnson',
      position: 'Head of Design',
      bio: 'Award-winning UX designer focused on intuitive interfaces for complex products.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      expertise: ['UX Design', 'Product', 'Research'],
    },
  ];

  const values = [
    { icon: Target, title: 'Innovation', description: 'We push boundaries to deliver solutions that are genuinely better, not just newer.' },
    { icon: Users, title: 'Client Success', description: 'Your goals are our goals. We measure ourselves by the outcomes we help you reach.' },
    { icon: Heart, title: 'Craft & Excellence', description: 'We sweat the details, from architecture to the last pixel of the experience.' },
    { icon: Globe, title: 'Positive Impact', description: 'We build technology that makes work easier and the world a little better.' },
  ];

  const milestones = [
    { year: '2019', title: 'Company Founded', description: 'Orixis was established with a simple vision: build technology that genuinely helps businesses grow.' },
    { year: '2020', title: 'First AI Platform', description: 'Launched our first AI-powered product, transforming customer support for early clients.' },
    { year: '2021', title: 'Series A Funding', description: 'Secured $5M to accelerate product development and grow the team.' },
    { year: '2022', title: '100+ Projects', description: 'Delivered our 100th project for clients across multiple industries worldwide.' },
    { year: '2023', title: 'AI Research Lab', description: 'Opened a dedicated lab to advance our AI and automation capabilities.' },
    { year: '2024', title: 'Going Global', description: 'Expanded to serve clients across North America, Europe and Asia-Pacific.' },
  ];

  const stats = [
    { number: '120+', label: 'Projects Delivered' },
    { number: '100+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Countries Served' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden hero-section">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-orixis-blue dark:via-orixis-blue-light dark:to-orixis-purple/20" />
        <div className="relative container mx-auto px-4">
          <Reveal className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-orixis-text">
              About <span className="gradient-text">Orixis</span>
            </h1>
            <p className="text-xl md:text-2xl text-orixis-text-muted mb-8">
              We're a team of engineers, designers and problem-solvers who love turning ambitious ideas into
              products people enjoy using.
            </p>
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-white shadow-lg shadow-orixis-teal/30">
              <Link to="/careers">
                Join Our Team
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-orixis-teal/20 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-orixis-purple/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-orixis-teal/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Reveal>
                <Card className="theme-card hover-lift">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                        <Target className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-orixis-text">Our Mission</h3>
                    </div>
                    <p className="text-orixis-text-muted text-lg">
                      To make cutting-edge technology accessible to businesses of all sizes, helping them
                      innovate, automate and create meaningful impact.
                    </p>
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal delay={0.1}>
                <Card className="theme-card hover-lift">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                        <Eye className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-orixis-text">Our Vision</h3>
                    </div>
                    <p className="text-orixis-text-muted text-lg">
                      To be the technology partner businesses trust most, known for craftsmanship, honesty
                      and results that last.
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-orixis-text">
                  Engineering the <span className="gradient-text">Future</span>
                </h2>
                <p className="text-orixis-text-muted text-lg">
                  Since 2019, Orixis has helped hundreds of companies transform their operations through
                  smart software, AI and automation. We combine deep technical expertise with genuine care
                  for the people who use what we build.
                </p>
                <p className="text-orixis-text-muted text-lg">
                  Our multidisciplinary team thrives on hard problems, and on the satisfaction of shipping
                  solutions that make a real difference.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                      <div className="text-orixis-text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-orixis-bg-secondary/50 to-transparent">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08}>
                <Card className="theme-card text-center hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="text-white" size={30} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-orixis-text">{value.title}</h3>
                    <p className="text-orixis-text-muted">{value.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              Key milestones in our story so far.
            </p>
          </Reveal>

          {/* Desktop timeline */}
          <div className="relative hidden md:block">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary opacity-30" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <Reveal key={milestone.year}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="theme-card hover-lift">
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold gradient-text mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-semibold mb-2 text-orixis-text">{milestone.title}</h3>
                          <p className="text-orixis-text-muted">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="w-6 h-6 bg-gradient-primary rounded-full border-4 border-orixis-bg relative z-10" />
                    <div className="w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden space-y-5 relative pl-6">
            <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-gradient-primary opacity-30" />
            {milestones.map((milestone) => (
              <Reveal key={milestone.year}>
                <div className="relative">
                  <div className="absolute -left-[1.35rem] top-2 w-3 h-3 rounded-full bg-gradient-primary" />
                  <Card className="theme-card">
                    <CardContent className="p-5">
                      <div className="text-xl font-bold gradient-text mb-1">{milestone.year}</div>
                      <h3 className="text-lg font-semibold mb-1 text-orixis-text">{milestone.title}</h3>
                      <p className="text-orixis-text-muted text-sm">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-b from-orixis-bg-secondary/50 to-transparent">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              The people behind Orixis, diverse expertise, shared passion.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.08}>
                <Card className="theme-card overflow-hidden hover-lift group h-full">
                  <div className="aspect-square overflow-hidden bg-orixis-bg-secondary">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-orixis-text mb-1">{member.name}</h3>
                    <p className="text-orixis-teal mb-3">{member.position}</p>
                    <p className="text-orixis-text-muted text-sm mb-4">{member.bio}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.expertise.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-orixis-text/10 text-orixis-text text-xs">
                          {skill}
                        </Badge>
                      ))}
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
                  Want to Join Our Mission?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  We're always looking for talented people who share our passion for great technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-orixis-blue hover:bg-white/90 w-full sm:w-auto whitespace-normal">
                    <Link to="/careers">
                      View Open Positions
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className={`${outlineOnGradient} w-full sm:w-auto whitespace-normal`}>
                    <Link to="/contact">Get In Touch</Link>
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

export default About;

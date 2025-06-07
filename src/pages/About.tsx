
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Award, Users, Globe } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Alex Chen',
      position: 'CEO & Co-Founder',
      bio: 'Former Google engineer with 15+ years experience in agentic AI, machine learning, and autonomous systems.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      expertise: ['Agentic AI', 'Strategy', 'Leadership']
    },
    {
      name: 'Sarah Martinez',
      position: 'CTO & Co-Founder',
      bio: 'Ex-Amazon architect specializing in autonomous systems, scalable infrastructure, and AI agent orchestration.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop&crop=face',
      expertise: ['AI Agents', 'DevOps', 'Full-Stack']
    },
    {
      name: 'David Kim',
      position: 'Head of Agentic AI',
      bio: 'PhD in Computer Science, published researcher in autonomous agents, deep learning, and multi-agent systems.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      expertise: ['Autonomous Agents', 'NLP', 'Research']
    },
    {
      name: 'Emily Johnson',
      position: 'Head of Design',
      bio: 'Award-winning UX designer with expertise in creating intuitive interfaces for AI-powered and autonomous systems.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      expertise: ['AI UX Design', 'Product Design', 'User Research']
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Autonomous Innovation',
      description: 'We constantly push boundaries with agentic AI and autonomous systems to deliver breakthrough solutions that work independently.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We deploy AI agents that work 24/7 to ensure your business objectives are continuously met.'
    },
    {
      icon: Heart,
      title: 'Excellence in Automation',
      description: 'We maintain the highest standards in autonomous system design, from AI agent performance to user experience.'
    },
    {
      icon: Globe,
      title: 'Global Autonomous Impact',
      description: 'We believe autonomous AI should make the world better, creating self-improving solutions that scale globally.'
    },
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Orixis was established with a vision to transform businesses through autonomous AI agents and agentic technology.'
    },
    {
      year: '2020',
      title: 'First AI Agent Platform',
      description: 'Launched our first autonomous AI agent platform, revolutionizing customer support with 24/7 automation.'
    },
    {
      year: '2021',
      title: 'Series A Funding',
      description: 'Secured $5M in Series A funding to accelerate agentic AI development and autonomous system deployment.'
    },
    {
      year: '2022',
      title: '100+ Autonomous Deployments',
      description: 'Reached milestone of deploying autonomous AI agents for over 100 clients across various industries worldwide.'
    },
    {
      year: '2023',
      title: 'Agentic AI Research Lab',
      description: 'Established dedicated research lab to advance autonomous agent technology and multi-agent system orchestration.'
    },
    {
      year: '2024',
      title: 'Global Agent Network',
      description: 'Expanded operations to deploy autonomous AI agents serving clients in North America, Europe, and Asia-Pacific.'
    },
  ];

  const stats = [
    { number: '500+', label: 'AI Agents Deployed' },
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
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-orixis-text">
              About <span className="gradient-text">Orixis</span>
            </h1>
            <p className="text-xl md:text-2xl text-orixis-text-muted mb-8">
              We're a team of innovators, engineers, and visionaries dedicated to transforming businesses through autonomous AI agents and cutting-edge agentic technology.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
              <Link to="/careers" className="flex items-center">
                Join Our Team
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

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="theme-card hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                      <Target className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-orixis-text">Our Mission</h3>
                  </div>
                  <p className="text-orixis-text-muted text-lg">
                    To democratize autonomous AI agents and make cutting-edge agentic technology accessible to businesses of all sizes, 
                    enabling them to innovate, automate, and create meaningful impact through intelligent automation.
                  </p>
                </CardContent>
              </Card>

              <Card className="theme-card hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                      <Eye className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-orixis-text">Our Vision</h3>
                  </div>
                  <p className="text-orixis-text-muted text-lg">
                    To be the world's leading autonomous technology partner, known for creating intelligent AI agents that drive business 
                    transformation and positive societal impact through autonomous innovation and excellence.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-orixis-text">
                Engineering the <span className="gradient-text">Autonomous Future</span>
              </h2>
              <p className="text-orixis-text-muted text-lg">
                Since our founding in 2019, Orixis has been at the forefront of agentic AI innovation. We've helped hundreds 
                of companies transform their operations through autonomous AI agents, intelligent automation, and self-improving systems.
              </p>
              <p className="text-orixis-text-muted text-lg">
                Our multidisciplinary team combines deep expertise in autonomous systems with creative problem-solving to deliver AI agents 
                that not only meet today's challenges but autonomously adapt to tomorrow's opportunities.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                    <div className="text-orixis-text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-orixis-bg-secondary/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as pioneers in autonomous AI technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="theme-card text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-orixis-text">{value.title}</h3>
                  <p className="text-orixis-text-muted">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              Key milestones in our evolution from startup to leading autonomous AI technology company.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary opacity-30"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="theme-card hover-lift">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold gradient-text mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold mb-2 text-orixis-text">{milestone.title}</h3>
                        <p className="text-orixis-text-muted">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-6 h-6 bg-gradient-primary rounded-full border-4 border-orixis-bg relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-b from-orixis-bg-secondary/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              The brilliant minds behind Orixis, bringing together diverse expertise and shared passion for autonomous AI innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="theme-card overflow-hidden hover-lift group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-orixis-text mb-1">{member.name}</h3>
                  <p className="text-orixis-teal mb-3">{member.position}</p>
                  <p className="text-orixis-text-muted text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-orixis-text/10 text-orixis-text text-xs">
                        {skill}
                      </Badge>
                    ))}
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
                Want to Join Our Mission?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for autonomous AI innovation and excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-orixis-blue hover:bg-white/90">
                  <Link to="/careers" className="flex items-center">
                    View Open Positions
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;


import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Coffee, 
  Zap, 
  Heart,
  Globe,
  GraduationCap
} from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior Agentic AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$180k - $230k',
      description: 'Lead the development of autonomous AI agents and multi-agent systems for enterprise automation.',
      requirements: ['Python/TensorFlow', 'Autonomous Systems', 'PhD preferred'],
      posted: '2 days ago'
    },
    {
      title: 'Full Stack Developer (AI Integration)',
      department: 'Engineering',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$130k - $170k',
      description: 'Build scalable web applications with embedded AI agents using modern frameworks.',
      requirements: ['React/Node.js', 'AI Agent APIs', 'Agile experience'],
      posted: '1 week ago'
    },
    {
      title: 'AI Product Designer',
      department: 'Design',
      location: 'Austin, TX / Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$120k - $160k',
      description: 'Design intuitive user experiences for autonomous AI-powered products and agent interfaces.',
      requirements: ['Figma/Sketch', 'AI UX Design', 'Agent Interaction Design'],
      posted: '3 days ago'
    },
    {
      title: 'DevOps Engineer (AI Infrastructure)',
      department: 'Engineering',
      location: 'Seattle, WA / Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$150k - $190k',
      description: 'Build and maintain infrastructure for autonomous AI agent deployment and orchestration.',
      requirements: ['AWS/GCP', 'Kubernetes', 'AI Model Deployment'],
      posted: '5 days ago'
    },
    {
      title: 'AI Solutions Sales Executive',
      department: 'Sales',
      location: 'Boston, MA / Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90k - $130k + Commission',
      description: 'Drive growth by selling autonomous AI agent solutions to enterprise clients.',
      requirements: ['B2B AI Sales', 'Tech Industry', 'CRM Experience'],
      posted: '1 week ago'
    },
    {
      title: 'Agentic AI Research Intern',
      department: 'Research',
      location: 'San Francisco, CA',
      type: 'Internship',
      experience: 'Student',
      salary: '$9k - $12k/month',
      description: 'Work on cutting-edge autonomous AI agent research and multi-agent system development.',
      requirements: ['CS/AI Student', 'Python', 'Research Experience'],
      posted: '4 days ago'
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance plus wellness programs and mental health support.'
    },
    {
      icon: Coffee,
      title: 'Autonomous Work',
      description: 'Remote-first culture with flexible hours, unlimited PTO, and AI-assisted productivity tools.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pay',
      description: 'Top-tier compensation with equity participation, performance bonuses, and AI project incentives.'
    },
    {
      icon: GraduationCap,
      title: 'AI Learning & Growth',
      description: 'Annual learning budget, AI conference attendance, and mentorship from leading AI researchers.'
    },
    {
      icon: Users,
      title: 'Innovation Culture',
      description: 'Collaborative environment with regular AI research presentations, hackathons, and team offsites.'
    },
    {
      icon: Globe,
      title: 'Autonomous Impact',
      description: 'Work on AI agent projects that make a difference for clients worldwide and shape the future of automation.'
    },
  ];

  const perks = [
    'MacBook Pro or PC with AI development setup',
    'Home office allowance + AI tools budget',
    'Annual learning budget ($4,000)',
    'AI conference attendance support',
    'Stock options program',
    'Quarterly innovation retreats',
    'Free lunch (office days)',
    'Gym membership reimbursement',
    'Mental health & wellness support',
    'Parental leave policy',
  ];

  const culture = [
    {
      title: 'AI-First Innovation',
      description: 'We encourage experimentation with autonomous AI and agentic systems.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop'
    },
    {
      title: 'Autonomous Work-Life',
      description: 'We believe great AI work comes from well-rested, autonomously-driven people.',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop'
    },
    {
      title: 'Diverse AI Perspectives',
      description: 'We celebrate different perspectives in AI development and autonomous system design.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop'
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
              Join the <span className="gradient-text">AI Revolution</span>
            </h1>
            <p className="text-xl md:text-2xl text-orixis-text-muted mb-8">
              Be part of a team that's shaping the future of autonomous AI agents. Build amazing products, work with brilliant people, and make a real impact in the age of agentic AI.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
              View Open Positions
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orixis-teal/20 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-orixis-purple/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-orixis-teal/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              We're growing fast and looking for talented individuals to join our autonomous AI mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="theme-card hover-lift group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-orixis-text mb-2">{position.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-orixis-text-muted">
                        <span className="flex items-center">
                          <Users size={16} className="mr-1" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {position.location}
                        </span>
                      </div>
                    </div>
                    <Badge 
                      variant={position.type === 'Full-time' ? 'default' : 'secondary'}
                      className={position.type === 'Full-time' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}
                    >
                      {position.type}
                    </Badge>
                  </div>
                  
                  <p className="text-orixis-text-muted mb-4">{position.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-orixis-text-muted">
                    <span className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {position.experience}
                    </span>
                    <span className="flex items-center">
                      <DollarSign size={16} className="mr-1" />
                      {position.salary}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="font-semibold text-orixis-text mb-2">Key Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.requirements.map((req, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-orixis-text/10 text-orixis-text text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-orixis-text-muted">Posted {position.posted}</span>
                    <Button className="bg-gradient-primary hover:opacity-90 text-white">
                      Apply Now
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-orixis-bg-secondary/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Why <span className="gradient-text">Orixis?</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              We offer more than just a job – we provide an environment where you can thrive in the age of autonomous AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="theme-card text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-orixis-text">{benefit.title}</h3>
                  <p className="text-orixis-text-muted">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
                Complete <span className="gradient-text">Benefits Package</span>
              </h2>
              <p className="text-orixis-text-muted text-lg mb-8">
                We believe in taking care of our team members with comprehensive benefits and perks that support both your professional growth in AI and personal well-being.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {perks.map((perk, index) => (
                  <div key={index} className="flex items-center text-orixis-text-muted">
                    <div className="w-2 h-2 bg-orixis-teal rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{perk}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {culture.map((item, index) => (
                <Card key={index} className="theme-card overflow-hidden hover-lift">
                  <div className="grid grid-cols-3 gap-0">
                    <div className="col-span-1 aspect-square overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="col-span-2 p-4 flex flex-col justify-center">
                      <h4 className="font-semibold text-orixis-text mb-2">{item.title}</h4>
                      <p className="text-orixis-text-muted text-sm">{item.description}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gradient-to-b from-orixis-bg-secondary/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Application <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              Our hiring process is designed to be transparent, efficient, and focused on finding the right AI talent.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply', desc: 'Submit your application and AI portfolio through our careers page.' },
              { step: '02', title: 'Screen', desc: 'Initial phone/video screening with our AI team lead.' },
              { step: '03', title: 'Interview', desc: 'Technical AI challenges and cultural fit interviews with the team.' },
              { step: '04', title: 'Offer', desc: 'Final decision and offer discussion with AI project assignments.' },
            ].map((process, index) => (
              <Card key={index} className="theme-card text-center hover-lift">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold gradient-text mb-4">{process.step}</div>
                  <h3 className="text-xl font-semibold mb-3 text-orixis-text">{process.title}</h3>
                  <p className="text-orixis-text-muted">{process.desc}</p>
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
                Ready to Shape the AI Future?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Don't see a perfect match? We're always interested in meeting talented AI professionals. Send us your resume!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-orixis-blue hover:bg-white/90">
                  <Link to="/contact" className="flex items-center">
                    Send Resume
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Careers;

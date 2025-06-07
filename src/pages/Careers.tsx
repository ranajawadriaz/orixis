
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
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$150k - $200k',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: ['Python/TensorFlow', 'ML/DL expertise', 'PhD preferred'],
      posted: '2 days ago'
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$120k - $160k',
      description: 'Build scalable web applications using modern frameworks and technologies.',
      requirements: ['React/Node.js', 'AWS/Docker', 'Agile experience'],
      posted: '1 week ago'
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Austin, TX / Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110k - $150k',
      description: 'Design intuitive user experiences for our AI-powered products.',
      requirements: ['Figma/Sketch', 'UX Research', 'Design Systems'],
      posted: '3 days ago'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Seattle, WA / Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$140k - $180k',
      description: 'Build and maintain scalable infrastructure and deployment pipelines.',
      requirements: ['AWS/GCP', 'Kubernetes', 'CI/CD'],
      posted: '5 days ago'
    },
    {
      title: 'Sales Executive',
      department: 'Sales',
      location: 'Boston, MA / Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$80k - $120k + Commission',
      description: 'Drive growth by building relationships with enterprise clients.',
      requirements: ['B2B Sales', 'Tech Industry', 'CRM Experience'],
      posted: '1 week ago'
    },
    {
      title: 'Machine Learning Intern',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Internship',
      experience: 'Student',
      salary: '$8k - $10k/month',
      description: 'Work on exciting ML projects and gain hands-on experience with AI.',
      requirements: ['CS/ML Student', 'Python', 'Passion for AI'],
      posted: '4 days ago'
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance plus wellness programs.'
    },
    {
      icon: Coffee,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pay',
      description: 'Top-tier compensation with equity participation and performance bonuses.'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Growth',
      description: 'Annual learning budget, conference attendance, and mentorship programs.'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events and offsites.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Work on projects that make a difference for clients worldwide.'
    },
  ];

  const perks = [
    'MacBook Pro or PC of your choice',
    'Home office setup allowance',
    'Annual learning budget ($3,000)',
    'Conference attendance support',
    'Stock options program',
    'Quarterly team retreats',
    'Free lunch (office days)',
    'Gym membership reimbursement',
    'Mental health support',
    'Parental leave policy',
  ];

  const culture = [
    {
      title: 'Innovation First',
      description: 'We encourage experimentation and creative problem-solving.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop'
    },
    {
      title: 'Work-Life Balance',
      description: 'We believe great work comes from well-rested, happy people.',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop'
    },
    {
      title: 'Diversity & Inclusion',
      description: 'We celebrate different perspectives and backgrounds.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop'
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orixis-blue via-orixis-blue-light to-orixis-purple/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Join the <span className="gradient-text">Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Be part of a team that's shaping the future of technology. Build amazing products, work with brilliant people, and make a real impact.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
              View Open Positions
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We're growing fast and looking for talented individuals to join our mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="bg-gradient-card border-white/10 hover-lift group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-white/60">
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
                  
                  <p className="text-white/70 mb-4">{position.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
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
                      <h4 className="font-semibold text-white mb-2">Key Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.requirements.map((req, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-white/10 text-white text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/50">Posted {position.posted}</span>
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
      <section className="py-20 bg-gradient-to-b from-orixis-blue-light/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Why <span className="gradient-text">Orixis?</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We offer more than just a job – we provide an environment where you can thrive and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gradient-card border-white/10 text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Complete <span className="gradient-text">Benefits Package</span>
              </h2>
              <p className="text-white/70 text-lg mb-8">
                We believe in taking care of our team members with comprehensive benefits and perks that support both your professional and personal growth.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {perks.map((perk, index) => (
                  <div key={index} className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-orixis-teal rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{perk}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {culture.map((item, index) => (
                <Card key={index} className="bg-gradient-card border-white/10 overflow-hidden hover-lift">
                  <div className="grid grid-cols-3 gap-0">
                    <div className="col-span-1 aspect-square overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="col-span-2 p-4 flex flex-col justify-center">
                      <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-white/70 text-sm">{item.description}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gradient-to-b from-orixis-blue-light/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Application <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Our hiring process is designed to be transparent, efficient, and focused on finding the right fit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply', desc: 'Submit your application and resume through our careers page.' },
              { step: '02', title: 'Screen', desc: 'Initial phone/video screening with our HR team.' },
              { step: '03', title: 'Interview', desc: 'Technical and cultural fit interviews with the team.' },
              { step: '04', title: 'Offer', desc: 'Final decision and offer discussion.' },
            ].map((process, index) => (
              <Card key={index} className="bg-gradient-card border-white/10 text-center hover-lift">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold gradient-text mb-4">{process.step}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{process.title}</h3>
                  <p className="text-white/70">{process.desc}</p>
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
                Ready to Shape the Future?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Don't see a perfect match? We're always interested in meeting talented people. Send us your resume!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-orixis-blue hover:bg-white/90">
                  <Link to="/contact" className="flex items-center">
                    Send Resume
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Learn More About Us
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

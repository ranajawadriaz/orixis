import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, Quote, CheckCircle2, X } from 'lucide-react';
import { Reveal } from '@/components/motion';
import { TechGlyph } from '@/components/tech';
import SafeImg from '@/components/SafeImg';
import { outlineOnGradient } from '@/lib/ui';
import { whatsappLink } from '@/lib/site';

type Result = { metric: string; value: string; icon: typeof TrendingUp };

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  duration: string;
  description: string;
  overview: string[];
  challenge: string;
  solution: string;
  approach: string[];
  results: Result[];
  technologies: string[];
  image: string;
  testimonial: { quote: string; author: string; position: string };
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'E-commerce Platform Rebuild for RetailMax',
    client: 'RetailMax',
    industry: 'E-commerce',
    duration: '5 months',
    description:
      'A complete digital transformation: a fast, modern storefront backed by an AI support assistant and smart inventory.',
    overview: [
      'RetailMax is a mid-market retailer with a fast-growing online catalogue. Their legacy storefront buckled under seasonal traffic and offered a clunky shopping experience that hurt conversion.',
      'We partnered with their team to rebuild the platform from the ground up, a performant React storefront, a scalable Node.js backend, and an AI assistant that resolves the bulk of customer questions on its own.',
    ],
    challenge:
      'The existing site crashed during peak sales, page loads were slow, and the small support team was overwhelmed by repetitive questions about orders, sizing and returns.',
    solution:
      'We delivered a headless commerce platform with a CDN-backed React frontend, a resilient Node.js API, and an AI assistant trained on RetailMax policies that handles order tracking, FAQs and returns end-to-end.',
    approach: [
      'Ran a discovery sprint to map the customer journey and prioritise high-impact pages.',
      'Rebuilt the storefront with React + a headless CMS for sub-second page loads.',
      'Re-architected checkout for reliability under heavy concurrent load.',
      'Integrated an AI support assistant with hand-off to humans for edge cases.',
      'Set up observability and load testing ahead of the holiday peak.',
    ],
    results: [
      { metric: 'Revenue Increase', value: '+340%', icon: DollarSign },
      { metric: 'Page Load Speed', value: '85% faster', icon: Clock },
      { metric: 'Queries Auto-resolved', value: '90%', icon: Users },
      { metric: 'Conversion Rate', value: '+180%', icon: TrendingUp },
    ],
    technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Redis'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=700&fit=crop',
    testimonial: {
      quote:
        'Orixis rebuilt our platform and the assistant now handles 90% of customer queries without a human. Our holiday season was our best ever, and the calmest.',
      author: 'Sarah Johnson',
      position: 'CEO, RetailMax',
    },
  },
  {
    id: 2,
    title: 'Predictive Healthcare Analytics for MediCare',
    client: 'MediCare Solutions',
    industry: 'Healthcare',
    duration: '7 months',
    description:
      'Machine learning that helps clinicians analyse patient data faster and catch risks earlier, with 24/7 monitoring.',
    overview: [
      'MediCare Solutions runs a network of clinics generating huge volumes of patient data. Manual analysis was slow, and clinicians lacked timely decision support.',
      'We built a HIPAA-aware analytics platform with predictive models that flag at-risk patients and a clean dashboard clinicians actually enjoy using.',
    ],
    challenge:
      'Manual review of patient records was time-consuming and inconsistent. Important signals were sometimes missed, and there was no continuous monitoring between visits.',
    solution:
      'A secure data pipeline feeds ML models that score patient risk and surface anomalies, presented through an intuitive React dashboard with real-time alerts.',
    approach: [
      'Consolidated fragmented data sources into a secure, compliant pipeline.',
      'Trained and validated predictive models with the clinical team in the loop.',
      'Designed a dashboard around real clinician workflows, not the data model.',
      'Added 24/7 monitoring with alerting for high-risk changes.',
    ],
    results: [
      { metric: 'Diagnosis Accuracy', value: '+95%', icon: TrendingUp },
      { metric: 'Processing Time', value: '90% lower', icon: Clock },
      { metric: 'Monitoring', value: '24/7', icon: Users },
      { metric: 'Annual Savings', value: '$2.5M', icon: DollarSign },
    ],
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'AWS'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=700&fit=crop',
    testimonial: {
      quote:
        'The platform changed how we analyse patient data. We catch risks earlier and our clinicians trust the insights, the 24/7 monitoring gives everyone peace of mind.',
      author: 'Dr. Michael Chen',
      position: 'Chief Medical Officer, MediCare Solutions',
    },
  },
  {
    id: 3,
    title: 'Mobile Trading App for InvestSmart',
    client: 'InvestSmart',
    industry: 'Financial Services',
    duration: '6 months',
    description:
      'A polished native mobile app with real-time market data, smart portfolio tools and rock-solid reliability.',
    overview: [
      'InvestSmart is a fintech startup competing with established players. They needed a fast, trustworthy mobile experience to win and retain users.',
      'We designed and built native iOS and Android apps with real-time market data, intuitive portfolio management and bank-grade security.',
    ],
    challenge:
      'They needed real-time market analysis and a flawless mobile experience to compete, with no room for downtime or data lag.',
    solution:
      'Native apps backed by a low-latency Node.js services layer, real-time data streaming, and a clean UX that makes investing approachable for everyone.',
    approach: [
      'Prototyped the core flows and validated them with real users early.',
      'Built native iOS/Android apps for the best possible performance.',
      'Engineered a low-latency streaming layer for live market data.',
      'Hardened security and shipped with a phased, monitored rollout.',
    ],
    results: [
      { metric: 'Downloads', value: '500K+', icon: Users },
      { metric: 'App Rating', value: '4.8 / 5', icon: TrendingUp },
      { metric: 'Crash-free Sessions', value: '99.9%', icon: CheckCircle2 },
      { metric: 'Revenue Growth', value: '+280%', icon: DollarSign },
    ],
    technologies: ['React Native', 'Node.js', 'AWS', 'Redis', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=700&fit=crop',
    testimonial: {
      quote:
        'Our app became the go-to for our users. It is fast, reliable and beautifully designed, exactly what we needed to compete with the big names.',
      author: 'David Rodriguez',
      position: 'Founder, InvestSmart',
    },
  },
];

const insights = [
  {
    title: 'The Practical Guide to AI Agents in Business',
    description: 'Where AI agents genuinely help today, and how to roll them out without the hype.',
    readTime: '8 min read',
    category: 'AI & Automation',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    body: [
      'AI agents are everywhere in the headlines, but the teams getting real value start small and specific. The trick is to automate a narrow, repetitive workflow first, then expand once it earns trust.',
      'Good candidates share three traits: the task is high-volume, the rules are reasonably clear, and a human can easily review the output. Customer support triage, lead qualification and data entry are classic wins.',
      'The biggest mistake is skipping the human-in-the-loop. Keep a clear hand-off path, measure resolution quality, and iterate. Done right, an agent frees your team to focus on the work that actually needs a person.',
    ],
  },
  {
    title: 'Building Web Apps That Stay Fast as You Grow',
    description: 'Architecture patterns that keep performance high from your first user to your millionth.',
    readTime: '12 min read',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=600&h=400&fit=crop',
    body: [
      'Performance is a feature. Users feel every extra hundred milliseconds, and search engines reward speed. The good news is that most slowness comes from a handful of fixable patterns.',
      'Lean on a CDN, render the critical path first, and defer everything else. Cache aggressively, paginate heavy queries, and add indexes before you need them, not after the incident.',
      'Finally, measure in production. Real-user monitoring tells you what your laptop never will. Optimise the slowest real journeys, and let the rest be "good enough".',
    ],
  },
  {
    title: 'Designing Mobile Experiences People Love',
    description: 'Small UX decisions that make the difference between an app that is kept and one that is deleted.',
    readTime: '6 min read',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    body: [
      'Great mobile UX is mostly about respect, for the user\'s time, attention and thumbs. The best apps feel instant, forgiving and obvious.',
      'Reduce taps to the core action, make destructive actions reversible, and never block the UI on a slow network. Optimistic updates and skeleton screens go a long way.',
      'Polish the details: haptics, motion, and empty states. They cost little but signal craft, and craft is what makes an app feel trustworthy.',
    ],
  },
];

const CaseStudies = () => {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);
  const [activeInsight, setActiveInsight] = useState<(typeof insights)[number] | null>(null);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden hero-section">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-orixis-blue dark:via-orixis-blue-light dark:to-orixis-purple/20" />
        <div className="relative container mx-auto px-4">
          <Reveal className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-orixis-text">
              Case Studies &amp; <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-orixis-text-muted mb-8">
              Real results from real projects. See how we have helped businesses grow with thoughtful
              technology.
            </p>
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-white shadow-lg shadow-orixis-teal/30">
              <Link to="/contact">
                Start Your Success Story
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-orixis-teal/20 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-orixis-purple/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-orixis-teal/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <Reveal key={study.id}>
                <Card className="theme-card overflow-hidden hover-lift">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className={`aspect-video lg:aspect-auto overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <SafeImg src={study.image} alt={study.title} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-8 lg:p-12">
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <Badge variant="outline" className="border-orixis-teal/30 text-orixis-teal">{study.industry}</Badge>
                        <Badge variant="secondary" className="bg-orixis-text/10 text-orixis-text">{study.client}</Badge>
                        <Badge variant="secondary" className="bg-orixis-text/10 text-orixis-text">{study.duration}</Badge>
                      </div>

                      <h3 className="text-2xl font-bold text-orixis-text mb-4">{study.title}</h3>
                      <p className="text-orixis-text-muted mb-6">{study.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {study.results.map((result) => (
                          <div key={result.metric} className="bg-orixis-text/5 dark:bg-white/5 rounded-xl p-3">
                            <div className="flex items-center mb-1">
                              <result.icon size={16} className="text-orixis-teal mr-2" />
                              <span className="text-xs text-orixis-text-muted">{result.metric}</span>
                            </div>
                            <div className="text-lg font-bold gradient-text">{result.value}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech) => (
                            <span key={tech} className="inline-flex items-center gap-1.5 rounded-full bg-orixis-text/10 px-3 py-1 text-xs text-orixis-text">
                              <TechGlyph name={tech} size={14} /> {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button onClick={() => setActiveStudy(study)} className="bg-gradient-primary hover:opacity-90 text-white">
                        Read Full Case Study
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Insights & Articles */}
      <section className="py-20 bg-gradient-to-b from-orixis-bg-secondary/50 to-transparent">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-orixis-text">
              Latest <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-xl text-orixis-text-muted max-w-2xl mx-auto">
              Practical perspectives on AI, web and mobile, minus the hype.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Reveal key={insight.title} delay={index * 0.08}>
                <Card className="theme-card overflow-hidden hover-lift group h-full flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <SafeImg src={insight.image} alt={insight.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="border-orixis-teal/30 text-orixis-teal text-xs">{insight.category}</Badge>
                      <span className="text-xs text-orixis-text-muted">{insight.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-orixis-text">{insight.title}</h3>
                    <p className="text-orixis-text-muted mb-4 text-sm flex-1">{insight.description}</p>
                    <Button onClick={() => setActiveInsight(insight)} variant="ghost" className="text-orixis-teal hover:text-orixis-teal-light p-0 justify-start w-fit">
                      Read More <ArrowRight size={16} className="ml-1" />
                    </Button>
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
                  Ready to Create Your Success Story?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can help you achieve results like these.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-orixis-blue hover:bg-white/90">
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className={outlineOnGradient}>
                    <Link to="/services">View Our Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Case Study Dialog */}
      <Dialog open={activeStudy !== null} onOpenChange={(open) => !open && setActiveStudy(null)}>
        <DialogContent className="w-[calc(100vw-24px)] sm:w-full max-w-3xl max-h-[90vh] overflow-y-auto theme-card border-orixis-text/10 p-0 gap-0 flex flex-col [&>button]:hidden">
          {activeStudy && (
            <>
              <div className="relative shrink-0 aspect-[16/7] overflow-hidden rounded-t-lg">
                <SafeImg src={activeStudy.image} alt={activeStudy.title} className="w-full h-full object-cover" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/40 to-transparent" />
                <button
                  onClick={() => setActiveStudy(null)}
                  aria-label="Close"
                  className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur transition-colors hover:bg-black/65"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <Badge variant="outline" className="border-orixis-teal/30 text-orixis-teal">{activeStudy.industry}</Badge>
                    <Badge variant="secondary" className="bg-orixis-text/10 text-orixis-text">{activeStudy.client}</Badge>
                    <Badge variant="secondary" className="bg-orixis-text/10 text-orixis-text">{activeStudy.duration}</Badge>
                  </div>
                  <DialogTitle className="text-2xl sm:text-3xl font-display font-bold text-orixis-text text-left">
                    {activeStudy.title}
                  </DialogTitle>
                  <DialogDescription className="sr-only">Full case study for {activeStudy.client}</DialogDescription>
                </DialogHeader>

                <div className="mt-6 space-y-6 text-left">
                  <div className="space-y-3">
                    {activeStudy.overview.map((p, i) => (
                      <p key={i} className="text-orixis-text-muted leading-relaxed">{p}</p>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-xl bg-orixis-text/5 dark:bg-white/5 p-4">
                      <h4 className="font-semibold text-orixis-text mb-2">The Challenge</h4>
                      <p className="text-sm text-orixis-text-muted">{activeStudy.challenge}</p>
                    </div>
                    <div className="rounded-xl bg-orixis-text/5 dark:bg-white/5 p-4">
                      <h4 className="font-semibold text-orixis-text mb-2">Our Solution</h4>
                      <p className="text-sm text-orixis-text-muted">{activeStudy.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-orixis-text mb-3">How We Approached It</h4>
                    <ul className="space-y-2">
                      {activeStudy.approach.map((step, i) => (
                        <li key={i} className="flex gap-3 text-sm text-orixis-text-muted">
                          <CheckCircle2 size={18} className="text-orixis-teal flex-shrink-0 mt-0.5" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-orixis-text mb-3">The Results</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {activeStudy.results.map((r) => (
                        <div key={r.metric} className="rounded-xl bg-gradient-card border border-orixis-text/10 p-3 text-center">
                          <div className="text-xl font-bold gradient-text">{r.value}</div>
                          <div className="text-[11px] text-orixis-text-muted mt-1">{r.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-orixis-text mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeStudy.technologies.map((tech) => (
                        <span key={tech} className="inline-flex items-center gap-1.5 rounded-full bg-orixis-text/10 px-3 py-1 text-xs text-orixis-text">
                          <TechGlyph name={tech} size={14} /> {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-orixis-teal/20 bg-orixis-teal/5 p-5">
                    <Quote className="text-orixis-teal mb-2" size={22} />
                    <p className="text-orixis-text italic mb-3">"{activeStudy.testimonial.quote}"</p>
                    <div className="font-semibold text-orixis-text">{activeStudy.testimonial.author}</div>
                    <div className="text-orixis-teal text-sm">{activeStudy.testimonial.position}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button asChild className="bg-gradient-primary hover:opacity-90 text-white flex-1">
                      <Link to="/contact" onClick={() => setActiveStudy(null)}>Start a Similar Project</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-orixis-text/30 text-orixis-text hover:bg-orixis-text/10 flex-1">
                      <a href={whatsappLink(`Hi Orixis! I read the ${activeStudy.client} case study and would like to discuss a project.`)} target="_blank" rel="noopener noreferrer">
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Insight Article Dialog */}
      <Dialog open={activeInsight !== null} onOpenChange={(open) => !open && setActiveInsight(null)}>
        <DialogContent className="w-[calc(100vw-24px)] sm:w-full max-w-2xl max-h-[90vh] overflow-y-auto theme-card border-orixis-text/10 p-0 gap-0 flex flex-col [&>button]:hidden">
          {activeInsight && (
            <>
              <div className="relative shrink-0 aspect-[16/7] overflow-hidden rounded-t-lg">
                <SafeImg src={activeInsight.image} alt={activeInsight.title} className="w-full h-full object-cover" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/40 to-transparent" />
                <button
                  onClick={() => setActiveInsight(null)}
                  aria-label="Close"
                  className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur transition-colors hover:bg-black/65"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="border-orixis-teal/30 text-orixis-teal text-xs">{activeInsight.category}</Badge>
                    <span className="text-xs text-orixis-text-muted">{activeInsight.readTime}</span>
                  </div>
                  <DialogTitle className="text-2xl font-display font-bold text-orixis-text text-left">{activeInsight.title}</DialogTitle>
                  <DialogDescription className="sr-only">{activeInsight.description}</DialogDescription>
                </DialogHeader>
                <div className="mt-5 space-y-4 text-left">
                  {activeInsight.body.map((p, i) => (
                    <p key={i} className="text-orixis-text-muted leading-relaxed">{p}</p>
                  ))}
                  <Button asChild className="bg-gradient-primary hover:opacity-90 text-white mt-2">
                    <Link to="/contact" onClick={() => setActiveInsight(null)}>Talk to Our Team</Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CaseStudies;

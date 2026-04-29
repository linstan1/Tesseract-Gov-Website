import React from 'react';
import { Star, Users, Briefcase } from 'lucide-react';
import { Card } from '../components/ui/Card';

const TESTIMONIALS = [
  {
    quote: 'Their expertise in AI and data science was instrumental in developing our AI-powered platform. The team consistently delivered high-quality work and showed deep understanding of our fintech requirements.',
    name: 'Kalgera',
    role: 'Fintech - Vulnerable Customer Protection',
  },
  {
    quote: 'Tesseract Academy helped us build an AI-driven game testing system that significantly improved our QA processes. Their technical depth and responsiveness exceeded expectations.',
    name: 'Footboard',
    role: 'Gaming & AI Development',
  },
  {
    quote: 'Working with the Tesseract Academy resulted in a 35% reduction in manual work through their data science solutions. They brought genuine expertise and practical recommendations.',
    name: 'bemege',
    role: 'IT Consultancy',
  },
  {
    quote: "The Tesseract Academy's LLM fine-tuning solution transformed how we process and analyse documents. Their understanding of financial services was exceptional.",
    name: 'Digipal',
    role: 'Wealth Management',
  },
  {
    quote: 'They created the machine learning/AI models to improve our real-time transport data. Professional, knowledgeable, and great communicators throughout.',
    name: 'J&M Field Services',
    role: 'Transport & Logistics',
  },
  {
    quote: 'The Tesseract Academy is the place for managers and supervisors looking for ways to integrate AI and Data Science into their organization.',
    name: 'Jennet Toyjaneva, PhD',
    role: 'Product Lead, Vertex Pharmaceuticals',
  },
  {
    quote: 'Stylianos is an absolute expert! He has the unique ability to break down the very complex subject of AI for C-level executives with no tech background.',
    name: 'Ivo Gospodinov',
    role: 'CEO & Co-Founder, Staykeepers',
  },
  {
    quote: "I really enjoyed being part of the Tesseract Academy's AI and Web3 mastery program. Dr Kampakis has a wide range of experiences across industry and academia. Highly recommended!",
    name: 'Dr Runli Guo',
    role: 'Senior Cybersecurity Leader',
  },
  {
    quote: 'I enjoyed the modules, the course and the 1-on-1 time with Dr Kampakis!',
    name: 'Patrick Cleary',
    role: 'Financial Regulator',
  },
];

const EXECUTIVE_TRAINING = [
  {
    client: 'US Navy',
    title: 'AI, Blockchain & Applications Workshop',
    participants: '40+',
    description: 'Delivered an executive workshop on artificial intelligence, blockchain technology, and their practical applications for 40+ senior US Navy personnel. Covered strategic AI readiness, distributed ledger use cases in defence and logistics, and frameworks for identifying high-impact AI opportunities within large operational organisations.',
    image: '/impact-navy.jpg',
    imageAlt: 'US Navy executive AI and blockchain workshop',
  },
  {
    client: 'Vodafone',
    title: 'Data Science for Decision Makers',
    participants: 'Senior leadership team',
    description: 'Delivered executive upskilling workshop for Vodafone senior leadership focused on data science for decision-makers. Helped teams identify where AI and data science can add value across the organisation, understand practical use cases, and build a framework for prioritising AI initiatives with measurable business impact.',
    image: '/impact-vodafone.jpg',
    imageAlt: 'Vodafone executive data science workshop',
  },
  {
    client: 'Philips',
    title: 'Data Science for Decision Makers',
    participants: 'Senior leadership team',
    description: 'Delivered executive upskilling workshop for Philips leadership teams on data science for decision-makers. Focused on understanding how to integrate AI into existing workflows, identifying the right use cases for their organisation, and building internal capability to evaluate and commission data science projects effectively.',
    image: '/impact-philips.jpg',
    imageAlt: 'Philips executive data science workshop',
  },
];

export const Feedback: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-20">
      <div>
        <h1 className="text-5xl font-extrabold text-gov-dark mb-6 tracking-tight leading-tight">Testimonials & Executive Training</h1>
        <p className="text-xl text-gov-secondary/90 leading-relaxed max-w-4xl">
          Verified reviews from Clutch and our training programmes, alongside executive AI and data science workshops delivered for global organisations.
        </p>
      </div>

      {/* Executive Training */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-gov-blue/10 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-gov-blue" />
          </div>
          <h2 className="text-3xl font-bold text-gov-dark">Executive Training</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXECUTIVE_TRAINING.map((item) => (
            <Card key={item.client} className="flex flex-col overflow-hidden p-0">
              <img src={item.image} alt={item.imageAlt} width="800" height="384" loading="lazy" decoding="async" className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs font-semibold text-gov-blue uppercase tracking-wider mb-1">{item.client}</p>
                <h3 className="text-lg font-semibold text-gov-dark mb-1">{item.title}</h3>
                <p className="text-xs text-gov-secondary mb-4 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" /> {item.participants} participants
                </p>
                <p className="text-sm text-gov-secondary leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-gov-blue/10 flex items-center justify-center">
            <Star className="w-5 h-5 text-gov-blue" />
          </div>
          <h2 className="text-3xl font-bold text-gov-dark">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gov-text leading-relaxed text-sm flex-1 mb-4">"{t.quote}"</p>
              <div className="border-t border-gov-border/30 pt-4">
                <p className="font-semibold text-gov-dark text-sm">{t.name}</p>
                <p className="text-xs text-gov-secondary">{t.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

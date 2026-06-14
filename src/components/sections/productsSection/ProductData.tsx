import type { Product, Category } from '../../../types/product';

export const CATEGORIES: Category[] = [
  'All',
  'AI',
  'Data',
  'Creative',
  'Operations',
  'Vision',
  'Security',
];

export const products: Product[] = [
  {
    id: 'assistant',
    category: 'AI',
    title: 'VYNHO Assistant',
    tagline: 'Your always-on AI teammate',
    description:
      'A production-grade conversational AI that handles 80% of customer inquiries autonomously, drafts internal docs, and escalates intelligently. Trained on your knowledge base in minutes, not months.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    badge: 'Popular',
    startingPrice: '$49',
    metric: { value: '92%', label: 'Resolution rate' },
    useCases: ['Customer support', 'Internal knowledge', 'Sales qualification'],
    integrations: 40,
    featured: true,
  },
  {
    id: 'analytics',
    category: 'Data',
    title: 'VYNHO Analytics',
    tagline: 'From raw data to decisions',
    description:
      'Unified analytics platform that connects your warehouse, surfaces anomalies, and delivers plain-language insights every morning. Ask questions in English — get charts and answers in seconds.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    badge: 'Popular',
    startingPrice: '$99',
    metric: { value: '<30s', label: 'Time to insight' },
    useCases: ['Revenue forecasting', 'Churn prediction', 'Funnel analysis'],
    integrations: 85,
  },
  {
    id: 'content',
    category: 'Creative',
    title: 'VYNHO Studio',
    tagline: 'On-brand content, 10x faster',
    description:
      'Generate blog posts, ad copy, social content, and product imagery that actually sounds like your brand. Trains on your tone, guidelines, and past winners — never produces generic output.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    badge: 'New',
    startingPrice: '$29',
    metric: { value: '10x', label: 'Faster output' },
    useCases: ['Blog & SEO', 'Ad creatives', 'Product photography'],
    integrations: 25,
  },
  {
    id: 'automation',
    category: 'Operations',
    title: 'VYNHO Flow',
    tagline: 'Automate the work that matters',
    description:
      'Build intelligent workflows that trigger across your stack. Route tickets, approve requests, sync data, and trigger actions — all without writing code. Learns from every run to get smarter over time.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    startingPrice: '$79',
    metric: { value: '24 hrs', label: 'Saved per user / week' },
    useCases: ['Support triage', 'Lead routing', 'Invoice processing'],
    integrations: 200,
  },
  {
    id: 'vision',
    category: 'Vision',
    title: 'VYNHO Vision',
    tagline: 'See everything. Understand more.',
    description:
      'Production-ready computer vision for manufacturing QA, retail analytics, and document processing. Deploy pre-trained models in hours or fine-tune on your data with zero ML expertise.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    startingPrice: '$149',
    metric: { value: '99.2%', label: 'Detection accuracy' },
    useCases: ['Manufacturing QA', 'Retail analytics', 'Document OCR'],
    integrations: 35,
  },
  {
    id: 'security',
    category: 'Security',
    title: 'VYNHO Shield',
    tagline: 'Threats caught before they land',
    description:
      'Continuous monitoring across endpoints, identity, and cloud. Uses behavioral AI to flag anomalies in real time — catching the threats your SIEM misses, with zero false-positive fatigue.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    badge: 'Enterprise',
    startingPrice: 'Custom',
    metric: { value: '<4 min', label: 'Mean time to detect' },
    useCases: ['Threat detection', 'Identity protection', 'Compliance audit'],
    integrations: 60,
  },
];

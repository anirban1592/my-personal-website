import { TrendingUp, Zap, Brain } from 'lucide-react';

export const caseStudies = [
  {
    id: 'headless-replatform',
    Icon: TrendingUp,
    title: 'Headless Commerce Replatform',
    client: 'Global Fashion Retailer',
    tags: ['Shopify Plus', 'Next.js', 'AWS', 'GraphQL'],
    problem:
      'Monolithic platform unable to handle 10x traffic spikes during peak sales; 8s page load times causing 45% cart abandonment.',
    solution:
      'Architected MACH-based headless stack with Shopify Plus storefront API, Next.js SSR/ISR, CloudFront edge caching, and decoupled OMS via event-driven microservices.',
    impact: '$12M incremental revenue in Year 1 · 3s → 0.8s page load · 60% drop in cart abandonment',
  },
  {
    id: 'ai-personalization',
    Icon: Brain,
    title: 'AI-Powered Personalization Engine',
    client: 'APAC Electronics Brand',
    tags: ['AWS SageMaker', 'Salesforce CC', 'Python', 'Kafka'],
    problem:
      'Generic product recommendations driving less than 2% CTR. No unified customer data layer across web, app, and in-store channels.',
    solution:
      'Built real-time ML recommendation engine on SageMaker, unified customer profiles via CDP integration, and deployed A/B testing framework for continuous model improvement.',
    impact: '18% revenue uplift · CTR 2% → 9.4% · 340ms recommendation latency at scale',
  },
  {
    id: 'b2b-marketplace',
    Icon: Zap,
    title: 'B2B Digital Commerce Platform',
    client: 'Industrial Manufacturer (Europe)',
    tags: ['SAP Commerce', 'Azure', 'ERP Integration', 'DDD'],
    problem:
      'Legacy EDI-based ordering causing 3-day fulfillment delays and 30% order error rates. Sales team spending 60% of time on manual order processing.',
    solution:
      'Designed domain-driven SAP Commerce Cloud B2B portal with real-time ERP/PIM sync, self-service quoting engine, and automated approval workflows.',
    impact: '3-day → 4-hour fulfillment · 30% → 2% error rate · $2.1M annual ops savings',
  },
];

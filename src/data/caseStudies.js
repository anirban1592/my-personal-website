import { TrendingUp, Zap, Brain } from 'lucide-react';

export const caseStudies = [
  {
    id: 'order-history-management',
    Icon: Brain,
    title: 'B2B Order History Management System',
    client: 'Computacenter (via Sonata Software)',
    tags: ['SAP Commerce', 'Salesforce', 'SAP ERP', 'Track & Trace'],
    problem:
      'No unified order data view for 70+ enterprise clients across US, EU, and UK. Order data was fragmented across SAP, Track & Trace, and multiple legacy sources with no consolidated backbone.',
    solution:
      'Conceptualised and led end-to-end delivery of a central Order History Management System, consolidating data from SAP, Track & Trace, and legacy sources into a single integration backbone connected to 10+ upstream and downstream systems including Salesforce.',
    impact: '70+ enterprise clients served · 8 countries on a single platform · Client recognised delivery with formal accolades',
  },
  {
    id: 'ccv2-cloud-migration',
    Icon: TrendingUp,
    title: 'SAP Commerce Cloud (CCv2) Migration',
    client: 'Computacenter (via Sonata Software)',
    tags: ['SAP CCv2', 'Azure', 'ERP Migration', 'Cloud Architecture'],
    problem:
      'On-prem SAP Commerce platform constrained scalability and resilience. Migration of 10M+ live price records posed a major delivery risk to the programme timeline.',
    solution:
      'Directed the full on-prem to CCv2 migration end-to-end. Applied targeted source-and-destination scaling to expedite the 10M+ price record transfer, and oversaw contact and customer data ERP migrations across complex multi-region environments.',
    impact: '87% improvement in platform availability · 50% reduction in operational overhead · 10M+ price records migrated with zero data loss',
  },
  {
    id: 'b2b-automation-chatbot',
    Icon: Zap,
    title: 'B2B eCommerce Automation & AI Chatbot',
    client: 'ThyssenKrupp (via Sonata Software)',
    tags: ['Hybris', 'Apigee API', 'Chatbot', 'Backoffice'],
    problem:
      'Manual order status lookups consuming staff capacity across 1,000+ daily users. Legacy backoffice had no real-time order visibility and Hybris platform was running on an end-of-life 5.0 version.',
    solution:
      'Built an Order Helper Chatbot delivering autonomous real-time order status retrieval. Implemented API integrations for user management and heavy backoffice customisation. Completed Hybris 5.0 to 6.0 platform upgrade in 3 weeks with doubled testing coverage to reduce migration risk.',
    impact: 'Chatbot serving 1,000+ daily users autonomously · Hybris upgrade completed in 3 weeks · Doubled test coverage during platform migration',
  },
];

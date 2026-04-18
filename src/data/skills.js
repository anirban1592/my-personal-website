import { Cloud, ShoppingCart, Brain, Layers } from 'lucide-react';

export const skills = [
  {
    id: 'cloud',
    category: 'Cloud Platforms',
    Icon: Cloud,
    items: [
      'AWS (EC2, ECS, Lambda)',
      'Google Cloud Platform',
      'Azure',
      'Terraform / IaC',
      'Docker & Kubernetes',
      'CI/CD Pipelines',
      'Serverless Architecture',
      'CloudFront / CDN',
    ],
  },
  {
    id: 'ecommerce',
    category: 'Ecommerce',
    Icon: ShoppingCart,
    items: [
      'Shopify Plus',
      'Salesforce Commerce Cloud',
      'SAP Commerce',
      'Magento 2 / Adobe Commerce',
      'Headless Commerce',
      'MACH Architecture',
      'Payment Gateways',
      'OMS / WMS Integration',
    ],
  },
  {
    id: 'aiml',
    category: 'AI / ML',
    Icon: Brain,
    items: [
      'Recommendation Engines',
      'Demand Forecasting',
      'Personalization ML',
      'LLM Integration',
      'Claude / OpenAI APIs',
      'A/B Testing Frameworks',
      'Customer Segmentation',
      'Predictive Analytics',
    ],
  },
  {
    id: 'architecture',
    category: 'Architecture',
    Icon: Layers,
    items: [
      'Microservices Design',
      'Event-Driven Systems',
      'API Gateway / REST / GraphQL',
      'Domain-Driven Design',
      'System Design at Scale',
      'Technical Due Diligence',
      'Solution Architecture',
      'RFP / Presales',
    ],
  },
];

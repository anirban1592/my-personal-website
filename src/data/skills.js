import { Cloud, ShoppingCart, Brain, Layers } from 'lucide-react';

export const skills = [
  {
    id: 'cloud',
    category: 'Cloud Platforms',
    Icon: Cloud,
    items: [
      'Azure',
      'AWS',
      'SAP BTP',
      'Kafka',
      'CI/CD & DevOps',
      'Docker & Containers',
      'Cloud Platform Design',
      'SonarQube',
    ],
  },
  {
    id: 'ecommerce',
    category: 'Ecommerce',
    Icon: ShoppingCart,
    items: [
      'SAP Commerce (Hybris)',
      'Salesforce',
      'Apigee API',
      'Solr',
      'Stripe',
      'Worldpay',
      'OData / REST',
      'B2B Commerce',
    ],
  },
  {
    id: 'aiml',
    category: 'AI & Automation',
    Icon: Brain,
    items: [
      'AI Agent Design',
      'MS Copilot',
      'Copilot Studio',
      'Power Automate',
      'ServiceNow',
      'SharePoint',
      'Intelligent Automation',
      'Chatbot Development',
    ],
  },
  {
    id: 'architecture',
    category: 'Architecture & Leadership',
    Icon: Layers,
    items: [
      'Solution Architecture',
      'Enterprise Integration',
      'Security Architecture',
      'Team Leadership',
      'Stakeholder Management',
      'OAuth 2.0 / OIDC / SAML',
      'Java & Spring Boot',
      'Python / React.js / Next.js',
    ],
  },
];

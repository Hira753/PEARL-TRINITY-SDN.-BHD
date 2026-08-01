import { SolutionItem, IndustryItem, ProcessPhase, TeamMember, InsightArticle, Testimonial } from '../types';

export const COMPANY_INFO = {
  name: 'PEARL TRINITY SDN. BHD.',
  shortName: 'Pearl Trinity',
  registrationNo: '201801042918 (1304950-V)',
  tagline: 'Building Digital Solutions That Drive Business Growth',
  subtitle: 'Your Partner for Software Development, AI Innovation & Digital Transformation',
  email: 'contact@pearltrinity.com',
  phone: '+60 3 8312 9800',
  address: 'Level 18, Menara Trinity, Cyberjaya Tech City, 63000 Cyberjaya, Selangor, Malaysia',
  singaporeOffice: '71 Ayer Rajah Crescent, #04-12 Tech Park, Singapore 139951',
  hours: 'Monday - Friday: 9:00 AM - 6:00 PM (GMT+8)',
  stats: [
    { value: '150+', label: 'Enterprise Projects Delivered' },
    { value: '99.9%', label: 'System SLA Uptime Guarantee' },
    { value: '14+', label: 'Countries Served Worldwide' },
    { value: '$1.2B+', label: 'Value Generated for Clients' }
  ]
};

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    subtitle: 'Tailored enterprise architectures engineered for infinite scale',
    description: 'We build bespoke, high-performance software systems crafted specifically around your complex operational workflows. From legacy modernization to core banking and ERP architectures.',
    iconName: 'Code',
    badge: 'Enterprise Architecture',
    illustrationType: 'software',
    features: [
      'Microservices & Event-Driven Architecture',
      'Legacy System Modernization & Cloud Refactoring',
      'High-Throughput API Gateway Integration',
      'Automated CI/CD Pipelines & DevOps Mastery',
      'Zero-Trust Enterprise Security Governance'
    ],
    techStack: ['TypeScript', 'Node.js', 'Go', 'Python', 'Kubernetes', 'Docker'],
    metrics: [
      { label: 'Avg Efficiency Boost', value: '+340%' },
      { label: 'Deployment Speed', value: '4x Faster' }
    ]
  },
  {
    id: 'web-mobile-apps',
    title: 'Web & Mobile Applications',
    subtitle: 'High-conversion, frictionless web and cross-platform native experiences',
    description: 'Delivering lightning-fast, ultra-responsive progressive web apps and iOS/Android native applications with seamless offline sync, biometric security, and pixel-perfect UX.',
    iconName: 'Smartphone',
    badge: 'Cross-Platform Native',
    illustrationType: 'app',
    features: [
      'iOS & Android Cross-Platform Native Builds',
      'Sub-Second Progressive Web App Performance',
      'Real-Time WebSocket & Push Notification Engines',
      'Biometric Security & Encrypted Offline Storage',
      'Omnichannel Analytics & Real-Time Telemetry'
    ],
    techStack: ['React Native', 'React', 'Next.js', 'Swift', 'Kotlin', 'Tailwind CSS'],
    metrics: [
      { label: 'User Retention', value: '88%' },
      { label: 'Load Time', value: '< 0.8s' }
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & Intelligent Automation',
    subtitle: 'Next-gen LLM integration, predictive intelligence & robotic process automation',
    description: 'Transform raw data into competitive intelligence. We deploy tailored Gemini/LLM agents, automated decision engines, computer vision systems, and autonomous workflow bots.',
    iconName: 'Sparkles',
    badge: 'Generative AI & Agentic Workflows',
    illustrationType: 'ai',
    features: [
      'Custom Retrieval-Augmented Generation (RAG) Engines',
      'Agentic Workflow Automation & Natural Language APIs',
      'Predictive Analytics & Anomaly Detection Systems',
      'Computer Vision & OCR Document Processing',
      'Private On-Premise LLM Fine-Tuning & Deployment'
    ],
    techStack: ['Gemini API', 'PyTorch', 'TensorFlow', 'LangChain', 'FastAPI', 'Python'],
    metrics: [
      { label: 'Process Cost Reduction', value: '65%' },
      { label: 'Accuracy Score', value: '99.4%' }
    ]
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions & Infrastructure',
    subtitle: 'Resilient multi-cloud engineering, auto-scaling & FinOps optimization',
    description: 'Architecting rock-solid cloud environments on GCP, AWS, and Azure. We guarantee 99.99% availability with automated failover, disaster recovery, and cloud cost containment.',
    iconName: 'Cloud',
    badge: 'Multi-Cloud Excellence',
    illustrationType: 'cloud',
    features: [
      'Multi-Cloud Architecture (Google Cloud, AWS, Azure)',
      'Infrastructure as Code (Terraform & Pulumi)',
      'Automated Disaster Recovery & Active-Active Failover',
      'Serverless Edge Computing & Global CDN Setup',
      'Cloud Cost Optimization & FinOps Audits'
    ],
    techStack: ['GCP', 'AWS', 'Terraform', 'Kubernetes', 'Istio', 'Prometheus'],
    metrics: [
      { label: 'Uptime Commitment', value: '99.99%' },
      { label: 'Cloud Savings', value: '35% Avg' }
    ]
  },
  {
    id: 'blockchain-solutions',
    title: 'Blockchain & Cryptographic Systems',
    subtitle: 'Decentralized ledgers, smart contract security & tokenization platforms',
    description: 'Empowering institutions with tamper-proof decentralized systems, smart contract auditing, asset tokenization engines, and enterprise consortium blockchain networks.',
    iconName: 'Layers',
    badge: 'Distributed Ledger Tech',
    illustrationType: 'blockchain',
    features: [
      'Consortium & Private Enterprise Blockchains',
      'Smart Contract Design & Security Auditing',
      'Real-World Asset (RWA) Tokenization Platforms',
      'Zero-Knowledge Proof (ZKP) Identity Systems',
      'Cross-Chain Interoperability Protocols'
    ],
    techStack: ['Solidity', 'Hyperledger Fabric', 'Ethereum', 'Web3.js', 'Rust'],
    metrics: [
      { label: 'Audit Record', value: '0 Breaches' },
      { label: 'Transaction Speed', value: '10k TPS' }
    ]
  },
  {
    id: 'uiux-design',
    title: 'UI/UX Design & Digital Product Design',
    subtitle: 'Human-centric design systems that elevate global brand authority',
    description: 'Crafting intuitive digital touchpoints backed by cognitive research, interaction design, and rigorous usability testing to turn casual users into brand advocates.',
    iconName: 'Layout',
    badge: 'Design Systems & UX Research',
    illustrationType: 'design',
    features: [
      'Enterprise Scalable Design Systems & Pattern Libraries',
      'Data-Driven UX Audit & Heatmap Behavioral Analysis',
      'Rapid High-Fidelity Interactive Prototyping',
      'WCAG 2.1 AA Accessibility & Global Usability Standards',
      'Micro-Interactions & Fluid Motion Design'
    ],
    techStack: ['Figma', 'Framer Motion', 'Tailwind CSS', 'Design Tokens', 'Storybook'],
    metrics: [
      { label: 'Conversion Lift', value: '+142%' },
      { label: 'NPS Score Impact', value: '+45 pts' }
    ]
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'tech',
    name: 'Technology & SaaS',
    tagline: 'Scaling high-velocity platforms with cloud-native elasticity',
    description: 'We equip global technology companies and SaaS scaleups with bulletproof backends, real-time analytics pipelines, and multi-tenant cloud architectures built for rapid hyper-growth.',
    iconName: 'Cpu',
    keyBenefits: [
      'Multi-tenant isolated database architectures',
      'Elastic auto-scaling for millions of concurrent users',
      'Developer API portals & SDK generation'
    ],
    compliance: ['SOC 2 Type II', 'ISO 27001', 'GDPR Compliant'],
    caseStudyTitle: 'Global SaaS Platform Transformation',
    caseStudyStat: '10x Capacity with 40% Lower Compute Costs'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    tagline: 'HIPAA-compliant digital health, AI diagnostics & patient portals',
    description: 'Engineering ultra-secure health platforms, tele-medicine portals, predictive diagnostic models, and medical IoT sensor integration adhering to international healthcare regulations.',
    iconName: 'Activity',
    keyBenefits: [
      'End-to-end PHI data encryption in transit & at rest',
      'AI-assisted clinical workflow automation',
      'FHIR / HL7 standard interoperability'
    ],
    compliance: ['HIPAA Compliant', 'FDA SAMD Ready', 'ISO 13485'],
    caseStudyTitle: 'AI-Powered Diagnostic Imaging System',
    caseStudyStat: '99.2% Accuracy in Early Pathology Screening'
  },
  {
    id: 'finance',
    name: 'Financial Services & Fintech',
    tagline: 'Bank-grade security, low-latency trading & fraud detection engines',
    description: 'Modernizing core banking infrastructure, automated credit risk scoring, crypto asset custody platforms, and sub-millisecond algorithmic fraud detection systems.',
    iconName: 'ShieldCheck',
    keyBenefits: [
      'Sub-millisecond real-time fraud monitoring',
      'Automated KYC/AML verification workflows',
      'Open Banking API integration'
    ],
    compliance: ['PCI-DSS Level 1', 'BNM RMiT', 'MAS TRM Standards'],
    caseStudyTitle: 'Digital Banking Core Engine Upgrade',
    caseStudyStat: '$4.5B Annual Transaction Volume Handled'
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    tagline: 'Omnichannel commerce platforms with AI personalized recommendations',
    description: 'Building high-conversion headless commerce setups, dynamic pricing engines, unified inventory management across thousands of retail outlets, and personalized AI shopping assistants.',
    iconName: 'ShoppingBag',
    keyBenefits: [
      'Headless commerce architecture with Shopify/Stripe APIs',
      'AI dynamic inventory forecasting',
      'Real-time personalized product recommendations'
    ],
    compliance: ['PCI-DSS Certified', 'GDPR', 'CCPA Compliant'],
    caseStudyTitle: 'Omnichannel Regional Retail Re-platforming',
    caseStudyStat: '+210% Black Friday Sales Throughput'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Logistics',
    tagline: 'Industry 4.0 smart factory, IoT tracking & predictive maintenance',
    description: 'Connecting physical factory floors with digital twin simulations, IoT sensor telematics, automated warehouse robotics control, and supply chain predictive maintenance.',
    iconName: 'Factory',
    keyBenefits: [
      'IoT edge sensor data ingestion pipelines',
      'Supply chain digital twin tracking',
      'Predictive machinery fault prevention'
    ],
    compliance: ['ISO 9001', 'IEC 62443', 'Industry 4.0 Certified'],
    caseStudyTitle: 'Smart Factory IoT Telemetry Rollout',
    caseStudyStat: '82% Reduction in Unplanned Assembly Downtime'
  },
  {
    id: 'services',
    name: 'Professional Services',
    tagline: 'Automated practice management, contract analytics & client portals',
    description: 'Empowered legal, accounting, and consulting firms with secure document intelligence, automated billing engines, and client collaboration portals with granular access controls.',
    iconName: 'Briefcase',
    keyBenefits: [
      'AI legal contract analysis & clause extraction',
      'Biometric client portal authentication',
      'Automated time tracking & milestone billing'
    ],
    compliance: ['ISO 27001', 'SOC 1 & SOC 2', 'Confidential Data Protection'],
    caseStudyTitle: 'International Advisory Firm Digital Portal',
    caseStudyStat: '60% Faster Client Onboarding Cycle'
  },
  {
    id: 'startups',
    name: 'Startups & Scaleups',
    tagline: 'Rapid MVP engineering to Series-A pitch readiness in weeks',
    description: 'Partnering with visionary founders to turn ambitious napkin ideas into venture-funded enterprise products with clean codebase, documentation, and investor-grade security.',
    iconName: 'Rocket',
    keyBenefits: [
      'Dedicated Agile SWAT product squads',
      'In-house UI/UX design + full-stack build',
      'Zero technical debt foundational codebase'
    ],
    compliance: ['Fundable Technical Audit Ready', 'Global Scale Architecture'],
    caseStudyTitle: 'Fintech Startup Launch to Series B',
    caseStudyStat: '$28M Raised Post Product Launch'
  }
];

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    step: 1,
    title: 'Discover',
    subtitle: 'Strategic alignment, technical auditing & product discovery',
    duration: 'Weeks 1 - 2',
    description: 'We dive deep into your organizational ecosystem, auditing existing technical infrastructure, defining clear ROI metrics, mapping security compliance mandates, and defining project blueprints.',
    deliverables: [
      'Technical Architecture Blueprint',
      'Security & Regulatory Compliance Matrix',
      'Sprint Roadmap & Resource Allocation Map',
      'Interactive Wireframe Concepts'
    ],
    iconName: 'Search'
  },
  {
    step: 2,
    title: 'Design',
    subtitle: 'Human-centered UX, system design & cloud architecture',
    duration: 'Weeks 3 - 5',
    description: 'Our design and architecture teams craft high-fidelity interactive visual prototypes, design system tokens, database schemas, microservice specifications, and API contracts.',
    deliverables: [
      'Figma Production Design System',
      'Interactive User Experience Prototypes',
      'OpenAPI 3.0 Contract Specifications',
      'Database Entity Relationship Diagrams (ERD)'
    ],
    iconName: 'Palette'
  },
  {
    step: 3,
    title: 'Develop',
    subtitle: 'Agile 2-week sprints, test-driven code & continuous integration',
    duration: 'Weeks 6 - 12+',
    description: 'Engineers write clean, modular, unit-tested TypeScript code backed by automated CI/CD security scanning, peer code reviews, and weekly live demo showcases.',
    deliverables: [
      'Clean Modular Code Repository (GitHub/GitLab)',
      'Automated Test Suite (>90% Code Coverage)',
      'Staging Environment Live Previews',
      'Penetration Testing & Vulnerability Reports'
    ],
    iconName: 'Code'
  },
  {
    step: 4,
    title: 'Deliver',
    subtitle: 'Seamless zero-downtime deployment, knowledge transfer & 24/7 SLA',
    duration: 'Ongoing',
    description: 'We orchestrate zero-downtime production deployment, train your internal engineering teams, provide full source code ownership, and offer ongoing 24/7 Managed SLA Support.',
    deliverables: [
      'Zero-Downtime Multi-Region Production Deploy',
      'Complete Technical Documentation & OpenAPI Manuals',
      'Executive & Developer Training Workshops',
      '24/7 Enterprise SLA & Infrastructure Monitoring'
    ],
    iconName: 'CheckCircle2'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dr. Aaron Tan',
    role: 'Chief Executive Officer & Founder',
    bio: 'Ex-Google Cloud Principal Architect with over 18 years in distributed systems, AI innovation, and corporate digital strategy across Asia-Pacific.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    linkedin: 'https://linkedin.com',
    expertise: ['Enterprise AI Strategy', 'Cloud Architecture', 'Executive Leadership']
  },
  {
    name: 'Elena Rostova',
    role: 'Chief Technology Officer',
    bio: 'Former Tech Lead at Palo Alto Networks & SAP. Specialist in zero-trust cybersecurity, multi-cloud Kubernetes clusters, and AI agentic systems.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    linkedin: 'https://linkedin.com',
    expertise: ['Zero-Trust Security', 'Kubernetes Orchestration', 'LLM Infrastructure']
  },
  {
    name: 'Karthik Subramaniam',
    role: 'VP of Software Engineering',
    bio: 'Over 15 years building high-throughput financial trading systems and core banking engines in London, Singapore, and Kuala Lumpur.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    linkedin: 'https://linkedin.com',
    expertise: ['Fintech Core Engines', 'Distributed Ledger', 'High-Frequency APIs']
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Product & UI/UX',
    bio: 'Award-winning digital product designer previously leading design teams at Accenture Interactive and Grab. Passionate about human-centric AI.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
    linkedin: 'https://linkedin.com',
    expertise: ['Design Systems', 'UX Research', 'Micro-Interactions']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'Pearl Trinity transformed our legacy core banking architecture into an ultra-resilient microservice setup. Their speed, security discipline, and AI expertise are second to none in Southeast Asia.',
    author: 'Dato\' Hisham Razak',
    role: 'Chief Information Officer',
    company: 'Apex Horizon Financial Group',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    metric: '4.5B Transaction Volume'
  },
  {
    id: 't2',
    quote: 'The AI document automation system engineered by Pearl Trinity reduced our medical claims processing time from 3 days to under 4 minutes. They delivered well ahead of schedule.',
    author: 'Dr. Rebecca Lin',
    role: 'Director of Healthcare Innovation',
    company: 'BioCare Health Systems Global',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200',
    metric: '99.4% Automated Accuracy'
  },
  {
    id: 't3',
    quote: 'Partnering with Pearl Trinity gave our startup investor-grade code and bank-level security right out of the gate. We scaled to over 2 million active users without a single incident.',
    author: 'Marcus Vance',
    role: 'Co-Founder & CEO',
    company: 'OmniTrade Technologies',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    metric: '$28M Series-B Growth'
  }
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'art-1',
    title: 'The Enterprise Guide to Deploying Private AI Agents Safely in 2026',
    category: 'AI & Automation',
    readTime: '6 min read',
    date: 'August 2026',
    summary: 'How leading Fortune 500 enterprises are leveraging private Gemini LLM pipelines while maintaining 100% data residency and zero-trust security.',
    author: 'Elena Rostova',
    authorRole: 'CTO, Pearl Trinity',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'art-2',
    title: 'Architecting High-Availability Multi-Cloud Kubernetes Infrastructure',
    category: 'Cloud Engineering',
    readTime: '8 min read',
    date: 'July 2026',
    summary: 'A step-by-step breakdown of active-active GCP and AWS hybrid cloud failover for zero-downtime enterprise operations.',
    author: 'Dr. Aaron Tan',
    authorRole: 'CEO, Pearl Trinity',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'art-3',
    title: 'Modernizing Legacy Monoliths Without Stopping Business Operations',
    category: 'Software Architecture',
    readTime: '5 min read',
    date: 'July 2026',
    summary: 'Strategies for applying the Strangler Fig pattern to refactor 15-year-old COBOL and Java systems into lightweight cloud microservices.',
    author: 'Karthik Subramaniam',
    authorRole: 'VP Engineering',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800'
  }
];

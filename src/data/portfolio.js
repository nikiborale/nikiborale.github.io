export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#product-thinking', label: 'Product Thinking' },
  { href: '#artwork', label: 'Artwork' },
  { href: '#writing', label: 'Writing' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export const timeline = [
  {
    year: '2016',
    title: 'Mechanical Engineering Graduate',
    detail: 'Built systems thinking and analytical rigor from a mechanical engineering foundation.',
  },
  {
    year: '2020',
    title: 'M.Eng. Management, Dartmouth College',
    detail: 'Blended product strategy, analytics, and operations into data-informed roadmapping.',
  },
  {
    year: '2021–Now',
    title: 'Product Leadership in Healthcare & AI',
    detail: 'Scaled enterprise analytics, AI-enabled products, and cross-functional delivery.',
  },
];

export const experience = [
  {
    company: 'Blue Health Intelligence',
    role: 'Technical Product Manager II',
    highlights: [
      'Managed relationships with 10+ enterprise clients and translated stakeholder needs into a roadmap generating $1M ARR.',
      'Improved CSAT by 90% through UI/UX improvements and operationalized feedback loops.',
      'Analyzed 1B+ rows of healthcare data to power analytics products; increased engagement by 70%.',
    ],
  },
  {
    company: 'Tesla',
    role: 'Technical Program Manager',
    highlights: [
      'Built Tableau dashboards from 100K+ data points, improving decision-making and productivity by 25%.',
      'Implemented Lean Six Sigma process optimization, increasing efficiency by 90%.',
      'Led digital transformation for inventory systems, saving $1M annually.',
    ],
  },
  {
    company: 'AAA Healthcare Consulting',
    role: 'Lead Technical Product Manager',
    highlights: [
      'Managed three cross-functional teams and delivered two AI-driven healthcare products.',
      'Generated $300K revenue within six months and integrated EHR systems for 40% higher efficiency.',
      'Reduced customer churn by 60% by aligning roadmap strategy with operational priorities.',
    ],
  },
];

export const caseStudies = [
  {
    title: 'Marketing Optimization ML Model',
    tags: ['Machine Learning', 'Growth', 'Analytics'],
    summary: 'Optimizing marketing interventions with predictive segmentation and experimentation.',
    trend: [
      { name: 'W1', value: 18 },
      { name: 'W2', value: 24 },
      { name: 'W3', value: 29 },
      { name: 'W4', value: 36 },
      { name: 'W5', value: 42 },
      { name: 'W6', value: 50 },
    ],
    steps: [
      {
        title: 'Problem',
        detail: 'Marketing teams lacked clarity on which interventions drove conversion lift.',
      },
      {
        title: 'User Insight',
        detail: 'Analysis of 2,000 customer journeys revealed distinct behavioral segments.',
      },
      {
        title: 'Hypothesis',
        detail: 'Segment-specific interventions would increase conversion efficiency and reduce spend.',
      },
      {
        title: 'Experiment / Model',
        detail: 'Built a predictive ML model recommending optimal marketing actions by segment.',
      },
      {
        title: 'Decision',
        detail: 'Prioritized channel mix shifts and lifecycle triggers for each segment.',
      },
      {
        title: 'Outcome',
        detail: 'Insights projected to improve marketing efficiency by 50%.',
      },
    ],
    metrics: [
      { label: 'Journeys', value: '2,000+' },
      { label: 'Projected Lift', value: '50%' },
      { label: 'Segments', value: '6' },
    ],
  },
  {
    title: 'Blockchain Financial Transaction Product',
    tags: ['Fintech', 'Blockchain', 'MVP'],
    summary: 'Defining a blockchain-enabled transaction platform with rapid scoping.',
    trend: [
      { name: 'W1', value: 14 },
      { name: 'W2', value: 22 },
      { name: 'W3', value: 28 },
      { name: 'W4', value: 34 },
      { name: 'W5', value: 38 },
      { name: 'W6', value: 44 },
    ],
    steps: [
      {
        title: 'Problem',
        detail: 'Financial teams struggled to scope blockchain transaction workflows quickly.',
      },
      {
        title: 'User Insight',
        detail: 'Analysis of 100K+ protocol records exposed latency and compliance bottlenecks.',
      },
      {
        title: 'Hypothesis',
        detail: 'A modular MVP with compliance rails would shorten evaluation cycles.',
      },
      {
        title: 'Experiment / Model',
        detail: 'Defined MVP features and simulated transaction rails across priority corridors.',
      },
      {
        title: 'Decision',
        detail: 'Focused on settlement transparency, audit tooling, and multi-sig custody.',
      },
      {
        title: 'Outcome',
        detail: 'Reduced product scoping time by 30% and accelerated stakeholder buy-in.',
      },
    ],
    metrics: [
      { label: 'Records', value: '100K+' },
      { label: 'Scoping Time', value: '-30%' },
      { label: 'Corridors', value: '4' },
    ],
  },
  {
    title: 'Predictive Risk Forecasting',
    tags: ['Time Series', 'AI', 'Strategy'],
    summary: 'Forecasting disruption risk to protect revenue and resiliency.',
    trend: [
      { name: 'W1', value: 20 },
      { name: 'W2', value: 27 },
      { name: 'W3', value: 33 },
      { name: 'W4', value: 39 },
      { name: 'W5', value: 45 },
      { name: 'W6', value: 52 },
    ],
    steps: [
      {
        title: 'Problem',
        detail: 'Leaders lacked early warning signals for disruption risk in client portfolios.',
      },
      {
        title: 'User Insight',
        detail: 'Historical time-series data showed repeatable early warning indicators.',
      },
      {
        title: 'Hypothesis',
        detail: 'A forecasting model with scenario levers could increase revenue resilience.',
      },
      {
        title: 'Experiment / Model',
        detail: 'Built a forecasting model and disruption framework with threshold triggers.',
      },
      {
        title: 'Decision',
        detail: 'Embedded the model into executive dashboards and risk reviews.',
      },
      {
        title: 'Outcome',
        detail: 'Helped increase client revenue by 30% by informing proactive interventions.',
      },
    ],
    metrics: [
      { label: 'Revenue Lift', value: '30%' },
      { label: 'Forecast Horizon', value: '12 mo' },
      { label: 'Signals', value: '18' },
    ],
  },
];

export const productPrinciples = [
  {
    title: 'User-first thinking',
    detail: 'Begin with lived user context, not assumptions, to identify true pain points.',
  },
  {
    title: 'Hypothesis-driven experiments',
    detail: 'Every roadmap bet has a measurable learning goal and success definition.',
  },
  {
    title: 'Data-informed decisions',
    detail: 'Pair qualitative insight with quantitative evidence to prioritize trade-offs.',
  },
  {
    title: 'Cross-functional alignment',
    detail: 'Create clarity across design, engineering, and stakeholders through shared artifacts.',
  },
  {
    title: 'Strategy frameworks',
    detail: 'Use competitive mapping, JTBD, and funnel analysis to guide product bets.',
  },
];

export const playgrounds = [
  {
    title: 'How I would redesign Venmo',
    detail:
      'Focus on financial wellness: predictive cash-flow insights, smarter bill splitting, and behavioral nudges to reduce overdrafts.',
  },
  {
    title: "Improving Uber's driver experience",
    detail:
      'Create a real-time earnings optimizer, transparent surge forecasting, and better shift scheduling to reduce churn.',
  },
  {
    title: 'AI in healthcare decision support',
    detail:
      'Layer explainable AI into care management workflows so clinicians can trust and act on recommendations.',
  },
  {
    title: 'Improving healthcare cost transparency',
    detail:
      'Use claims data to generate real-time cost estimates, provider comparisons, and out-of-pocket projections.',
  },
];

export const dataFlows = [
  {
    title: 'Healthcare claims data',
    insight: 'Identified cost outliers and preventable spend drivers.',
    action: 'Built a Tableau-style dashboard for provider cohorts.',
    impact: 'Improved engagement by 70% and accelerated interventions.',
  },
  {
    title: 'Product funnel analytics',
    insight: 'Detected drop-offs in mid-funnel onboarding.',
    action: 'Designed guided onboarding with targeted nudges.',
    impact: 'Lifted completion rates by 25%.',
  },
  {
    title: 'Experimentation data',
    insight: 'A/B results showed pricing sensitivity by segment.',
    action: 'Rolled out tiered packaging and upsell paths.',
    impact: 'Increased ARR expansion by 18%.',
  },
];

export const financeSignals = [
  { name: 'Awareness', value: 62 },
  { name: 'Activation', value: 54 },
  { name: 'Retention', value: 71 },
  { name: 'Revenue', value: 46 },
  { name: 'Advocacy', value: 38 },
];

export const dashboardMix = [
  { name: 'Revenue', value: 42 },
  { name: 'Engagement', value: 68 },
  { name: 'Efficiency', value: 55 },
  { name: 'Risk', value: 49 },
  { name: 'Quality', value: 63 },
];

export const skillsRadar = [
  { metric: 'Strategy', value: 90 },
  { metric: 'Analytics', value: 92 },
  { metric: 'Execution', value: 86 },
  { metric: 'Collaboration', value: 88 },
  { metric: 'Design', value: 80 },
  { metric: 'Experimentation', value: 84 },
];

export const gallery = [
  {
    title: 'Renaissance Bloom',
    image: '/artwork-1.svg',
  },
  {
    title: 'Florentine Light',
    image: '/artwork-2.svg',
  },
  {
    title: 'Sage Reverie',
    image: '/artwork-3.svg',
  },
  {
    title: 'Ochre Study',
    image: '/artwork-4.svg',
  },
  {
    title: 'Lavender Skies',
    image: '/artwork-5.svg',
  },
  {
    title: 'Blush Momentum',
    image: '/artwork-6.svg',
  },
];

export const writings = [
  {
    title: 'Product management that feels like storytelling',
    tag: 'Product Strategy',
    blurb: 'Translating ambiguity into a roadmap that resonates with teams and customers.',
  },
  {
    title: 'AI in healthcare: trust, safety, and measurable impact',
    tag: 'AI in Healthcare',
    blurb: 'Designing guardrails and evaluation metrics for clinical-grade AI.',
  },
  {
    title: 'Fintech innovation beyond the hype',
    tag: 'Fintech',
    blurb: 'How to balance compliance, speed, and human-centered finance products.',
  },
  {
    title: 'Career reflections: building influence without title',
    tag: 'Career',
    blurb: 'Ways PMs can create alignment and momentum across complex systems.',
  },
  {
    title: 'Experimentation that actually drives decisions',
    tag: 'Growth & Analytics',
    blurb: 'Building experimentation loops that deliver decisions instead of dashboards.',
  },
];

export const skills = {
  product: ['Agile', 'Scrum', 'JIRA', 'Kanban', 'Figma', 'A/B Testing'],
  technical: ['Python', 'SQL', 'R', 'Snowflake', 'Databricks', 'AWS', 'Tableau', 'Advanced Excel'],
};

export const interests = [
  'Painting',
  'Travel',
  'Investing',
  'Fitness',
  'Pilates',
  'Hiking',
  'Cooking',
  'Entrepreneurship',
  'Design',
];

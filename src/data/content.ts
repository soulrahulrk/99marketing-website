export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Packages", href: "#packages" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    slug: "performance-marketing",
    icon: "target",
    title: "Performance Marketing",
    copy: "Google Ads, Meta Ads, YouTube, LinkedIn, programmatic media, and campaign optimization tied to ROAS.",
  },
  {
    slug: "seo-content",
    icon: "search",
    title: "SEO & Content",
    copy: "Technical SEO, local SEO, on-page content strategy, keyword mapping, and authority-building systems.",
  },
  {
    slug: "crm-email-automation",
    icon: "automation",
    title: "CRM & Email Automation",
    copy: "Lifecycle automation, lead nurturing, email and SMS workflows, segmentation, and pipeline support.",
  },
  {
    slug: "cro-analytics",
    icon: "chart",
    title: "CRO & Analytics",
    copy: "Conversion rate optimization, landing page testing, attribution, analytics dashboards, and funnel QA.",
  },
  {
    slug: "web-app-development",
    icon: "monitor",
    title: "Web & App Development",
    copy: "Fast websites, landing pages, mobile-friendly experiences, integrations, and growth-ready applications.",
  },
  {
    slug: "social-media-creative",
    icon: "megaphone",
    title: "Social Media & Creative",
    copy: "Content calendars, paid social creative, community campaigns, brand messaging, and on-brand design.",
  },
  {
    slug: "martech-integrations",
    icon: "plug",
    title: "Martech Integrations",
    copy: "Marketing stack setup, API integrations, CRM handoffs, tracking pixels, and custom automation flows.",
  },
];

const serviceDetailsBySlug = {
  "performance-marketing": {
    metaTitle: "Performance Marketing Agency in Mohali | Google Ads & Paid Media",
    metaDescription:
      "Run Google Ads, Meta Ads, YouTube, LinkedIn, and programmatic campaigns with senior-led performance marketing strategy from 99 Marketing Services.",
    headline: "Performance marketing built around ROAS, CAC, and pipeline quality",
    summary:
      "We structure paid media around measurable business outcomes, not vanity traffic. Campaigns are planned with clear targets, fast creative testing, and weekly optimization across search, social, video, and retargeting.",
    deliverables: [
      "Google Ads, Meta Ads, LinkedIn, YouTube, and programmatic campaign setup",
      "Audience research, campaign structure, budget pacing, and media calendar",
      "Creative testing, ad copy, landing page alignment, and offer testing",
      "ROAS, CAC, CPL, conversion, and pipeline dashboards",
    ],
    outcomes: [
      "Cleaner acquisition channels",
      "Lower wasted spend",
      "Stronger lead quality",
      "Repeatable performance reporting",
    ],
  },
  "seo-content": {
    metaTitle: "SEO Services in Mohali | Technical SEO, Local SEO & Content",
    metaDescription:
      "Improve search visibility with technical SEO, local SEO, keyword strategy, on-page content, and authority-building from 99 Marketing Services.",
    headline: "SEO and content systems that help buyers find you",
    summary:
      "We turn your website into a search-ready growth asset with technical fixes, keyword-led page planning, useful content, internal linking, and local SEO foundations.",
    deliverables: [
      "Technical SEO audit, indexation checks, schema review, and Core Web Vitals guidance",
      "Keyword mapping for service pages, location pages, and conversion pages",
      "On-page optimization, metadata, internal linking, and content briefs",
      "Local SEO improvements for Mohali, Punjab, India, and service-area visibility",
    ],
    outcomes: [
      "More qualified organic traffic",
      "Better service-page rankings",
      "Cleaner site structure",
      "Higher intent search visibility",
    ],
  },
  "crm-email-automation": {
    metaTitle: "CRM & Email Automation Services | Lead Nurturing and Lifecycle Marketing",
    metaDescription:
      "Build CRM automation, email and SMS workflows, lead nurturing journeys, and lifecycle marketing systems with 99 Marketing Services.",
    headline: "CRM and email automation that keeps leads moving",
    summary:
      "We connect your traffic sources to follow-up systems that respond quickly, segment leads intelligently, and keep prospects warm until they are ready to buy.",
    deliverables: [
      "Lead capture, tagging, segmentation, and CRM pipeline setup",
      "Email and SMS journeys for inquiries, demos, abandoned leads, and reactivation",
      "Sales handoff rules, notification flows, and lead quality tracking",
      "Lifecycle reporting for opens, clicks, conversions, and pipeline movement",
    ],
    outcomes: [
      "Faster response times",
      "Better lead nurturing",
      "Cleaner sales handoffs",
      "More revenue from existing traffic",
    ],
  },
  "cro-analytics": {
    metaTitle: "CRO & Analytics Agency | Conversion Optimization and Tracking",
    metaDescription:
      "Improve landing page conversion rates with CRO, funnel audits, analytics dashboards, attribution setup, and testing from 99 Marketing Services.",
    headline: "CRO and analytics that turn traffic into revenue",
    summary:
      "We diagnose where users drop, fix measurement gaps, and run focused experiments across pages, forms, offers, and follow-up so more traffic turns into pipeline.",
    deliverables: [
      "Funnel audit, landing page review, form analysis, and analytics QA",
      "Conversion tracking, event mapping, attribution checks, and dashboard setup",
      "A/B testing roadmap for pages, offers, creative, and call-to-action flows",
      "Weekly reporting on conversion rate, CAC, payback, and channel quality",
    ],
    outcomes: [
      "Higher conversion rates",
      "More reliable attribution",
      "Clearer funnel decisions",
      "Lower acquisition waste",
    ],
  },
  "web-app-development": {
    metaTitle: "Website & App Development in Mohali | Fast Landing Pages and Growth Sites",
    metaDescription:
      "Build fast websites, landing pages, mobile-friendly pages, integrations, and growth-ready applications with 99 Marketing Services.",
    headline: "Web and app development for campaigns that need to convert",
    summary:
      "We build fast, readable, mobile-friendly digital experiences that support SEO, paid media, analytics, CRM handoff, and conversion-focused customer journeys.",
    deliverables: [
      "SEO-ready websites, campaign landing pages, and mobile-responsive layouts",
      "Conversion-focused copy structure, forms, CTAs, and tracking hooks",
      "CRM, analytics, payment, and marketing automation integrations",
      "Performance, accessibility, and deployment-ready static builds",
    ],
    outcomes: [
      "Faster page experiences",
      "Better campaign conversion",
      "Cleaner tracking setup",
      "More scalable site ownership",
    ],
  },
  "social-media-creative": {
    metaTitle: "Social Media Marketing & Creative Services | Content, Paid Social and Brand",
    metaDescription:
      "Plan social media content, paid social creative, brand messaging, and campaign design with 99 Marketing Services.",
    headline: "Social media and creative built for attention and conversion",
    summary:
      "We combine content planning, brand messaging, ad creative, and campaign design so your social presence supports acquisition, trust, and repeatable growth.",
    deliverables: [
      "Content calendar, campaign themes, creative direction, and post planning",
      "Paid social concepts, static creatives, video or UGC briefs, and ad copy",
      "Brand messaging, offer positioning, and campaign landing-page alignment",
      "Performance review for engagement, traffic, leads, and creative learnings",
    ],
    outcomes: [
      "Stronger brand recall",
      "More useful campaign creative",
      "Clearer social content rhythm",
      "Better paid social learnings",
    ],
  },
  "martech-integrations": {
    metaTitle: "Martech Integration Services | CRM, Tracking, APIs and Automation",
    metaDescription:
      "Connect your marketing stack with CRM integrations, analytics, tracking pixels, APIs, and automation workflows from 99 Marketing Services.",
    headline: "Martech integrations that make your stack measurable",
    summary:
      "We connect the tools behind your marketing operation so data flows cleanly between website, ads, analytics, CRM, automation, and reporting dashboards.",
    deliverables: [
      "Tracking pixel setup, event mapping, UTM governance, and analytics QA",
      "CRM integrations, lead routing, webhook flows, and API handoffs",
      "Dashboard setup for campaigns, pipeline, lifecycle, and revenue metrics",
      "Automation documentation, testing, and ongoing stack governance",
    ],
    outcomes: [
      "Cleaner source tracking",
      "Fewer manual handoffs",
      "More reliable dashboards",
      "Better marketing operations",
    ],
  },
} as const;

export const servicePages = services.map((service) => ({
  ...service,
  ...serviceDetailsBySlug[service.slug as keyof typeof serviceDetailsBySlug],
}));

export const problems = [
  "Stagnant growth and low-quality leads",
  "Leaky funnels and weak conversion rates",
  "High CAC, poor ROAS, and unclear payback",
  "Broken tracking, attribution, and reporting",
  "Fragmented marketing stack and vendors",
  "Weak positioning or unclear go-to-market",
];

export const solutions = [
  "Full-funnel strategy aligned to revenue goals",
  "High-impact campaigns with creative that converts",
  "Tracking, analytics, and attribution you can trust",
  "Conversion optimization that compounds",
  "Integrated CRM and automation for lifecycle growth",
  "Clear positioning, messaging, and campaign governance",
];

export const approach = [
  {
    icon: "search",
    title: "Discovery & Diagnosis",
    copy: "Audit channels, analytics, website quality, competition, offer clarity, and opportunity gaps.",
  },
  {
    icon: "rocket",
    title: "Build & Instrumentation",
    copy: "Set up campaign structure, landing pages, content systems, dashboards, and tracking foundations.",
  },
  {
    icon: "tap",
    title: "Launch & Learn",
    copy: "Go live, validate the strongest signals, and turn test data into sharper creative and targeting.",
  },
  {
    icon: "growth",
    title: "Optimize & Scale",
    copy: "Iterate on CAC, ROAS, conversion rate, lifecycle flows, and winning channels.",
  },
  {
    icon: "governance",
    title: "Governance",
    copy: "Keep reporting, reviews, roadmaps, and decisions accountable with a senior-led cadence.",
  },
];

export const packages = [
  {
    icon: "rocket",
    title: "Launch Pad",
    subtitle: "For early-stage teams building traction",
    price: "Custom starter plan",
    features: [
      "Strategy sprint and 90-day growth roadmap",
      "Two paid channels plus SEO foundation",
      "Eight creatives per month and on-brand copy",
      "Analytics setup, dashboards, and weekly check-ins",
    ],
    cta: "Get Started",
  },
  {
    icon: "growth",
    title: "Growth Engine",
    subtitle: "For funded teams proving scalable unit economics",
    price: "Scale plan",
    featured: true,
    features: [
      "Multi-channel performance marketing",
      "SEO, content, and link-building roadmap",
      "CRO program with landing page experiments",
      "CRM automation and lifecycle marketing",
      "Bi-weekly reporting and sprint planning",
    ],
    cta: "Build Growth Engine",
  },
  {
    icon: "crown",
    title: "Revenue Partner",
    subtitle: "For enterprises demanding predictable growth",
    price: "Dedicated squad",
    features: [
      "Integrated brand, media, CRO, SEO, and CRM",
      "Market expansion and channel innovation",
      "Video, UGC, and high-volume creative production",
      "Executive reviews and always-on dashboards",
    ],
    cta: "Talk to an Expert",
  },
];

export const results = [
  { value: "3X", label: "Average ROAS improvement" },
  { value: "60%+", label: "Increase in qualified leads" },
  { value: "90", label: "Days to launch global campaigns" },
  { value: "40%", label: "Lower CAC on average" },
  { value: "25%+", label: "Lift in conversion rate" },
];

export const industries = [
  "SaaS companies",
  "eCommerce brands",
  "Healthcare providers",
  "Education institutes",
  "B2B enterprises",
  "Startups and scaleups",
];

export const faq = [
  {
    question: "What digital marketing services does 99 Marketing Services provide?",
    answer:
      "99 Marketing Services provides performance marketing, SEO, content strategy, social media marketing, CRM automation, conversion rate optimization, analytics, and web or app development.",
  },
  {
    question: "Where is 99 Marketing Services located?",
    answer:
      "The agency is based in Phase 10, Mohali, Punjab 160062 and works with clients across India and global markets.",
  },
  {
    question: "Can you help with Google Ads, SEO, and landing pages together?",
    answer:
      "Yes. The growth model combines paid media, search visibility, landing page optimization, tracking, and CRM follow-up so traffic can convert into measurable revenue.",
  },
];

export const contact = {
  phoneDisplay: "8700 979899",
  phoneHref: "tel:+918700979899",
  email: "info@99marketingservices.com",
  emailHref: "mailto:info@99marketingservices.com",
  address: "Phase 10, Mohali, Punjab 160062",
  calendly: "https://calendly.com/linkwithmarketing/30min",
  instagram: "https://www.instagram.com/99marketingservices",
  linkedin: "https://www.linkedin.com/company/107770331",
  facebook: "https://www.facebook.com/profile.php?id=61577388386042",
  x: "https://x.com/99marketing_",
};

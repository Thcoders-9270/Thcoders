import { categorizedServices } from "@/data/cgt-services";
import { services } from "@/data/services";

export interface ServiceDetail {
  slug: string;
  id: string;
  title: string;
  category: string;
  icon: string;
  headline: string;
  description: string;
  longDescription: string;
  stats: { value: string; label: string }[];
  capabilities: { title: string; description: string; tag: string }[];
  process: { step: string; title: string; description: string; deliverable: string }[];
  technologies: string[];
  benefits: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

// Custom tailored metadata for known services
const specificDetails: Record<string, Partial<ServiceDetail>> = {
  "react-development": {
    headline: "Engineered for Velocity, Scale, and Immersive User Experiences",
    longDescription: "We build enterprise-grade React applications that combine lightning-fast render cycles, modular component architecture, and fluid micro-interactions. From complex SaaS dashboards to high-conversion customer portals, our React engineers craft scalable frontends designed to evolve with your business.",
    stats: [
      { value: "99+", label: "Lighthouse Performance" },
      { value: "60fps", label: "Fluid UI Interactions" },
      { value: "2x", label: "Faster Feature Delivery" },
      { value: "100%", label: "TypeScript Strict Mode" },
    ],
    capabilities: [
      { title: "Custom Component Architecture", description: "Design-system aligned, modular, and reusable React components using Tailwind CSS and Radix UI.", tag: "Frontend Architecture" },
      { title: "State Management & Data Caching", description: "High-performance state machines and server-state synchronization with TanStack Query, Zustand, and Redux Toolkit.", tag: "State & Cache" },
      { title: "Progressive Web Apps (PWA)", description: "Offline-first capability, service workers, and responsive design for native-like web experiences.", tag: "Mobile Web" },
      { title: "Performance Profiling & Optimization", description: "Code-splitting, tree-shaking, lazy loading, and virtualized lists for million-row datasets.", tag: "Optimization" },
      { title: "Full TypeScript Integration", description: "End-to-end type safety preventing runtime regressions and speeding up developer velocity.", tag: "Type Safety" },
      { title: "Micro-Frontend Architecture", description: "Decoupled web applications empowering distributed engineering teams to ship autonomously.", tag: "Enterprise Scale" },
    ],
    technologies: ["React 19", "TypeScript", "Next.js", "Zustand", "TanStack Query", "Tailwind CSS", "Framer Motion", "Vite", "Jest & Cypress"],
    faqs: [
      { question: "How do you ensure high performance in large React applications?", answer: "We apply granular bundle analysis, memoization patterns, dynamic imports with React Suspense, virtualized lists for heavy DOM nodes, and edge caching." },
      { question: "Do you build custom design systems with React?", answer: "Yes. We create enterprise-grade component libraries backed by Storybook, Figma tokens, and accessible WCAG 2.1 compliance." },
      { question: "Can you migrate our legacy app to modern React?", answer: "Absolutely. We specialize in incremental strangler-fig migrations that modernize your legacy codebase without halting feature delivery." },
    ]
  },
  "nextjs-development": {
    headline: "Next-Gen Full-Stack Web Applications Powered by Next.js & Server Components",
    longDescription: "Harness the power of React Server Components, hybrid SSR/SSG rendering, and Edge computing. Our team builds production-ready Next.js web applications with instant page loads, sub-second TTFB, and SEO-optimized architecture.",
    stats: [
      { value: "<0.8s", label: "Average First Contentful Paint" },
      { value: "100%", label: "SEO & Core Web Vitals Score" },
      { value: "99.99%", label: "Edge Availability" },
      { value: "3x", label: "Conversion Lift" },
    ],
    capabilities: [
      { title: "App Router & Server Components", description: "Zero-bundle-size server components reducing client payloads and drastically accelerating page loads.", tag: "Next.js Architecture" },
      { title: "Edge & Serverless API Routes", description: "Ultra-low latency backend functions running globally at the edge close to your end-users.", tag: "Edge Computing" },
      { title: "Dynamic SEO & Social Metadata", description: "Automated OpenGraph generation, JSON-LD structured schema, and dynamic sitemaps for maximum organic reach.", tag: "Search Engine Optimization" },
      { title: "Incremental Static Regeneration (ISR)", description: "Serve static pages that automatically revalidate in the background without full rebuilds.", tag: "Hybrid Rendering" },
      { title: "Headless CMS Integration", description: "Seamless pairing with Strapi, Sanity, Contentful, or Supabase for effortless content orchestration.", tag: "CMS & Backends" },
      { title: "Authentication & Security", description: "Hardened session management with NextAuth, Clerk, or Supabase Auth with strict CSRF protection.", tag: "Security" },
    ],
    technologies: ["Next.js 15+", "React Server Components", "Vercel Edge", "Tailwind CSS", "Supabase", "Prisma", "TypeScript", "Redis"],
    faqs: [
      { question: "Why choose Next.js over vanilla React?", answer: "Next.js provides built-in server-side rendering (SSR), static site generation (SSG), automatic routing, image optimization, and server actions, giving you superior SEO and blistering load times." },
      { question: "How do you handle global deployment and caching?", answer: "We leverage edge middleware, distributed CDN caching strategies, and ISR for global sub-second responsiveness." }
    ]
  },
  "openai-integration": {
    headline: "Transform Your Business with Autonomous AI, LLMs, and Intelligent Automation",
    longDescription: "We engineer production-grade AI systems leveraging OpenAI GPT-4o, Claude, and local open-source LLMs. From custom RAG pipelines to autonomous AI agents and multimodal workflows, we turn complex AI capabilities into reliable business advantages.",
    stats: [
      { value: "10x", label: "Efficiency Increase" },
      { value: "<200ms", label: "Semantic Search Latency" },
      { value: "99.2%", label: "Response Accuracy with RAG" },
      { value: "SOC-2", label: "Compliant AI Pipelines" },
    ],
    capabilities: [
      { title: "Custom RAG (Retrieval-Augmented Gen)", description: "Connect LLMs directly to your internal documents, databases, and APIs with hybrid vector search.", tag: "RAG Systems" },
      { title: "Autonomous AI Agents", description: "Task-oriented AI bots that reason, execute API calls, process unstructured data, and perform workflows.", tag: "Agentic AI" },
      { title: "Fine-Tuning & Prompt Engineering", description: "Domain-specific model optimization, system prompts, few-shot conditioning, and evaluation benchmarks.", tag: "Model Optimization" },
      { title: "Semantic Search & Vector DBs", description: "Instant semantic indexing using Pinecone, Qdrant, pgvector, and Milvus for ultra-fast context retrieval.", tag: "Vector Databases" },
      { title: "Cost & Token Optimization", description: "Prompt caching, model routing, semantic caching, and streaming to slash API costs by up to 70%.", tag: "Token Efficiency" },
      { title: "AI Guardrails & Compliance", description: "Strict hallucination prevention, PII redaction, and output validation to ensure safe enterprise deployment.", tag: "AI Safety" },
    ],
    technologies: ["OpenAI GPT-4o", "LangChain", "LlamaIndex", "Pinecone", "pgvector", "Python", "FastAPI", "Anthropic Claude"],
    faqs: [
      { question: "How do you prevent AI hallucinations?", answer: "We implement multi-layered verification: grounded context retrieval with RAG, structured JSON output enforcement, strict system boundaries, and automated validation checkers." },
      { question: "Can we use AI without exposing sensitive company data?", answer: "Yes. We set up private VPC deployments, enterprise zero-data-retention OpenAI instances, or private self-hosted open-source models (Llama 3, Mistral)." }
    ]
  },
  "react-native": {
    headline: "High-Performance Native Mobile Apps for iOS & Android with a Single Codebase",
    longDescription: "Accelerate your mobile roadmap with world-class React Native and Expo development. We deliver 60fps animations, native module bridges, offline-first sync, and smooth gesture mechanics that rival pure Swift and Kotlin apps.",
    stats: [
      { value: "50%", label: "Faster Development Time" },
      { value: "60fps", label: "Smooth Native Gestures" },
      { value: "100%", label: "Code Sharing Across iOS & Android" },
      { value: "4.9★", label: "App Store Average" },
    ],
    capabilities: [
      { title: "Expo & Bare React Native", description: "Modern EAS builds, automated OTA updates, and native modules customized for your app's needs.", tag: "Core Architecture" },
      { title: "Native Module Integration", description: "Custom Swift and Kotlin bridges for Bluetooth, camera hardware, biometric auth, and background services.", tag: "Native Hardware" },
      { title: "Offline-First Data Sync", description: "Local SQLite / WatermelonDB persistence with seamless conflict resolution when returning online.", tag: "Offline Sync" },
      { title: "Fluid Gesture Interactions", description: "Reanimated 3 and React Native Gesture Handler for tactile, delightful 60fps tactile interfaces.", tag: "Gestures & Animations" },
      { title: "App Store & Play Store CI/CD", description: "Automated build pipelines, test distribution via TestFlight, and zero-downtime submission workflows.", tag: "DevOps & Stores" },
      { title: "Push Notifications & Deep Linking", description: "Reliable push delivery, rich media notifications, and universal links for seamless user re-engagement.", tag: "Engagement" },
    ],
    technologies: ["React Native", "Expo & EAS", "TypeScript", "Reanimated 3", "WatermelonDB", "Native Swift & Kotlin", "RevenueCat"],
    faqs: [
      { question: "Does React Native perform as well as native iOS/Android?", answer: "With modern architectures (Hermes engine, JSI, and Reanimated 3), React Native achieves smooth 60fps native performance while cutting development costs in half." },
      { question: "Can you publish and maintain our apps on the App Store and Google Play?", answer: "Yes, we handle the entire release lifecycle including certs, store guidelines, review approvals, and ongoing updates." }
    ]
  }
};

export function getServiceDetails(slug: string): ServiceDetail {
  // Try finding in categorizedServices first
  const allCategorized = categorizedServices.flatMap(cat => 
    cat.items.map(item => ({ ...item, categoryTitle: cat.title }))
  );
  const foundCategorized = allCategorized.find(
    s => s.href === `/services/${slug}` || s.href.endsWith(`/${slug}`) || s.id === slug
  );

  // Try finding in general services list
  const foundGeneral = services.find(s => s.id === slug || s.title.toLowerCase().replace(/\s+/g, "-") === slug);

  const title = foundCategorized?.title || foundGeneral?.title || slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const category = foundCategorized?.categoryTitle || "Specialized Engineering";
  const icon = foundCategorized?.icon || foundGeneral?.icon || "/icons/web.png";
  const description = foundCategorized?.description || foundGeneral?.description || `Enterprise-grade ${title} solutions tailored for forward-thinking companies.`;

  const custom = specificDetails[slug] || {};

  return {
    slug,
    id: foundCategorized?.id || foundGeneral?.id || slug,
    title,
    category,
    icon,
    headline: custom.headline || `High-Impact, Production-Ready ${title} for Scalable Growth`,
    description: description,
    longDescription: custom.longDescription || `At THCoders, we deliver end-to-end ${title} services that merge battle-tested architecture with modern design. Our senior engineers and designers build secure, scalable, and high-performance solutions tailored to your unique business objectives.`,
    stats: custom.stats || [
      { value: "99.9%", label: "System Reliability" },
      { value: "2x", label: "Faster Time to Market" },
      { value: "100%", label: "Senior-Led Execution" },
      { value: "24/7", label: "Dedicated Support" },
    ],
    capabilities: custom.capabilities || [
      { title: `Custom ${title} Architecture`, description: `Bespoke system design and implementation tailored precisely to your operational requirements.`, tag: "Architecture" },
      { title: "High-Performance Engineering", description: "Built for speed, scalability, and seamless integration with your existing infrastructure.", tag: "Performance" },
      { title: "Enterprise Security & Compliance", description: "Industry-standard data protection, role-based access control, and vulnerability scanning.", tag: "Security" },
      { title: "Agile Sprint Delivery", description: "Transparent milestones, continuous integration, and weekly staging deployments.", tag: "Agile Workflow" },
      { title: "Comprehensive QA & Testing", description: "Automated unit, integration, and end-to-end testing ensuring rock-solid stability.", tag: "Quality Assurance" },
      { title: "Maintenance & SLA Support", description: "Proactive monitoring, incident response, and continuous feature enhancements.", tag: "Ongoing Support" },
    ],
    process: [
      { step: "01", title: "Discovery & Tech Strategy", description: "We analyze your requirements, define the technical blueprint, and choose the optimal architectural stack.", deliverable: "Technical Specification & Roadmap" },
      { step: "02", title: "UI/UX & Prototyping", description: "Interactive wireframes and high-fidelity prototypes ensuring flawless user experience before writing code.", deliverable: "Interactive Figma Prototypes" },
      { step: "03", title: "Sprint-Based Development", description: "Rapid two-week development sprints with continuous code reviews, CI/CD, and live demo staging.", deliverable: "Tested Production Code" },
      { step: "04", title: "Rigorous QA & Security", description: "Thorough performance profiling, automated test suites, accessibility audits, and vulnerability testing.", deliverable: "QA & Audit Reports" },
      { step: "05", title: "Deployment & Scaling", description: "Zero-downtime deployment, infrastructure orchestration, telemetry monitoring, and ongoing optimization.", deliverable: "Live Production Release" },
    ],
    technologies: custom.technologies || ["TypeScript", "Next.js", "Docker", "AWS", "Node.js", "PostgreSQL", "Redis", "Tailwind CSS", "GitHub Actions"],
    benefits: custom.benefits || [
      { title: "Direct Access to Senior Engineers", description: "No communication middlemen. Work directly with seasoned developers and technical architects." },
      { title: "100% Code & IP Ownership", description: "You own all source code, assets, and design files from day one with clear licensing." },
      { title: "Predictable Sprint Velocity", description: "Fixed deliverables and clear milestone tracking so you always know what is being shipped." },
      { title: "Scalable Infrastructure", description: "Systems designed to seamlessly handle 10x traffic spikes without performance degradation." },
    ],
    faqs: custom.faqs || [
      { question: `How quickly can we kick off our ${title} project?`, answer: "We typically onboard and kick off discovery sprints within 3-5 business days after scoping requirements." },
      { question: "How does THCoders communicate and manage progress?", answer: "We use dedicated Slack/Discord channels, weekly live demo sessions, and transparent Linear/Jira boards for real-time task tracking." },
      { question: "Do you offer post-launch maintenance and support?", answer: "Yes, we provide flexible SLA and maintenance tiers including security patches, performance tuning, and feature extensions." },
      { question: "Can you collaborate with our existing in-house team?", answer: "Absolutely. We seamlessly integrate as dedicated pods alongside your in-house product managers and engineers." },
    ],
  };
}

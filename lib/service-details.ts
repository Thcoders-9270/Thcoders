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
  },
  "3d-interior": {
    headline: "Photorealistic 3D Interior CGI, Architectural Staging & 360° Panoramas",
    longDescription: "Bring architectural floor plans and interior spaces to life with hyper-realistic CGI. Our senior 3D artists with 7+ years of experience craft physically accurate materials, realistic light bounces, and luxury interior staging for real estate developers, interior designers, and commercial enterprises.",
    stats: [
      { value: "76+", label: "360° Interior Renders" },
      { value: "8K UHD", label: "Equirectangular Resolution" },
      { value: "7+ Yrs", label: "CGI & Raytracing Mastery" },
      { value: "100%", label: "VR & Tour Compatible" },
    ],
    capabilities: [
      { title: "360° Equirectangular Panoramas", description: "Immersive spherical renders ready for WebGL tour engines, Meta Quest, Apple Vision Pro, and Matterport.", tag: "Virtual Tours" },
      { title: "Physically Based Rendering (PBR)", description: "Accurate light refractions, true-to-life surface roughness, luxury fabric texturing, and realistic wood grain.", tag: "Materiality" },
      { title: "Commercial & Institutional Staging", description: "Auditoriums, broadcast studios, executive boardrooms, and command centers tailored to real-world dimensions.", tag: "Commercial CGI" },
      { title: "Custom Furniture & Lighting Fixtures", description: "High-poly 3D modeling of bespoke designer furniture, chandeliers, and custom architectural elements.", tag: "3D Modeling" },
      { title: "Daylight & Dusk Mood Studies", description: "Accurate sun positioning, circadian lighting sequences, and ambient night scene simulations.", tag: "Lighting Studies" },
      { title: "Interactive Web 3D Embeds", description: "Optimized GLTF/GLB models and Three.js scenes for interactive web exploration directly in browsers.", tag: "Web 3D" },
    ],
    technologies: ["3ds Max", "V-Ray", "Corona Renderer", "Blender", "Unreal Engine 5", "Three.js", "Substance Painter", "Photoshop"],
    faqs: [
      { question: "What files do you need to begin a 3D interior project?", answer: "We can work from CAD floor plans (.dwg), Revit/BIM models, PDF blueprints, 2D sketches, or material moodboards." },
      { question: "Are your 360 renders compatible with virtual tour platforms?", answer: "Yes, our renders are formatted as standard equirectangular panoramas up to 8K, fully compatible with Kuula, Matterport, 3DVista, and custom WebGL viewers." },
      { question: "What is your typical delivery timeframe for interior CGI renders?", answer: "Initial drafts and clay renders are delivered in 3-5 business days, with final 8K polished renders within 7-10 business days depending on room complexity." }
    ]
  },
  "3d-exterior": {
    headline: "High-Impact Architectural Exterior CGI, Masterplans & Environmental Landscapes",
    longDescription: "Captivate prospective buyers, city planning boards, and investors with breathtaking exterior 3D architectural renders. We create photorealistic facade elevations, lush landscape foliage, masterplan developments, and dramatic day-to-dusk lighting sequences.",
    stats: [
      { value: "8K UHD", label: "Render Precision" },
      { value: "7+ Yrs", label: "Architectural CGI Experience" },
      { value: "360°", label: "Aerial & Landscape Coverage" },
      { value: "100%", label: "Planning Board Ready" },
    ],
    capabilities: [
      { title: "Masterplan & Estate Elevations", description: "Large-scale residential communities, luxury villas, and commercial masterplans with contextual surrounding terrain.", tag: "Masterplans" },
      { title: "Foliage & Landscape Architecture", description: "Botanically accurate vegetation, trees, water bodies, and seasonal atmospheric environmental effects.", tag: "Landscaping" },
      { title: "Aerial & Drone Match CGI", description: "Seamlessly compositing 3D architectural models into real-world drone photography and site topography.", tag: "Photo-Matching" },
      { title: "Day, Dusk & Golden Hour Studies", description: "Dramatic lighting simulations demonstrating architectural beauty across varying natural times of day.", tag: "Atmosphere" },
      { title: "Material & Facade Detailing", description: "High-resolution architectural brickwork, glass reflections, curtain walls, and composite metal panels.", tag: "Facade Detailing" },
      { title: "Cinematic Exterior Walkthroughs", description: "4K camera flythroughs and cinematic architectural animation trailers for high-stakes marketing launches.", tag: "Animation" },
    ],
    technologies: ["Unreal Engine 5", "3ds Max", "V-Ray", "Blender", "Lumion", "Forest Pack", "Substance Designer"],
    faqs: [
      { question: "Can you match local geographical surroundings and site topography?", answer: "Yes, we integrate GIS site data, satellite elevation models, and drone survey footage to ensure pinpoint environmental accuracy." },
      { question: "Can we request revisions for materials and facade finishes?", answer: "Yes, our milestone workflow includes clay preview approvals, material selection check-ins, and final illumination polish rounds." }
    ]
  },
  "ue5-cgi": {
    headline: "Unreal Engine 5 Real-Time Walkthroughs, Lumen Illumination & Spatial Digital Twins",
    longDescription: "Step inside your architectural projects before ground is broken. Leveraging Unreal Engine 5's revolutionary Lumen dynamic global illumination and Nanite geometry, we engineer real-time interactive walkthroughs and digital twins for desktop, VR, and pixel streaming.",
    stats: [
      { value: "60fps", label: "Real-Time Framerate" },
      { value: "Lumen", label: "Dynamic Global Illumination" },
      { value: "Nanite", label: "Micro-Polygon Geometry" },
      { value: "Web Stream", label: "Pixel Streaming Ready" },
    ],
    capabilities: [
      { title: "Real-Time Interactive Exploration", description: "Clients can walk freely through interior and exterior spaces, toggling materials, lighting, and time of day in real-time.", tag: "Interactivity" },
      { title: "Lumen Global Illumination", description: "Hyper-realistic indirect lighting and infinite bounces that respond dynamically without pre-baked lightmaps.", tag: "Real-Time Lighting" },
      { title: "Virtual Reality (VR) Support", description: "Native Meta Quest and PC VR headset support for true 1:1 human scale architectural immersion.", tag: "VR Immersion" },
      { title: "Pixel Streaming to Web Browsers", description: "Run high-end UE5 scenes on cloud GPUs and stream directly to client web browsers with zero downloads.", tag: "Cloud Streaming" },
    ],
    technologies: ["Unreal Engine 5.4", "Lumen", "Nanite", "MetaSound", "Chaos Physics", "WebRTC Pixel Streaming", "Blender"],
    faqs: [
      { question: "Can clients view the Unreal Engine experience without a gaming PC?", answer: "Yes! We deploy Pixel Streaming solutions that allow anyone on a laptop, iPad, or mobile browser to stream the live 3D experience with zero hardware requirements." }
    ]
  },
  "3d-design": {
    headline: "Custom 3D Models, Moveable Articulated Toys & Spatial CGI",
    longDescription: "We engineer high-fidelity 3D models, moveable and articulated toys with functional mechanical joints, collectible action figures, character rigging, and photorealistic architectural CGI. Whether designing functional joints for toy manufacturing, 3D printing prototypes, or immersive real-time spatial assets, our senior 3D artists deliver unmatched precision.",
    stats: [
      { value: "100%", label: "Moveable Joint Precision" },
      { value: "3D Print", label: "Production & Mold Ready" },
      { value: "7+ Yrs", label: "Senior 3D Artists" },
      { value: "8K UHD", label: "CGI & Render Quality" },
    ],
    capabilities: [
      { title: "Moveable Toys & Articulated Action Figures", description: "Engineering ball-and-socket joints, hinge mechanics, swivel articulations, and tolerances for functional moveable toys.", tag: "Toy Design" },
      { title: "Custom 3D Character & Creature Modeling", description: "High-detail digital sculpting, organic texturing, and stylized character modeling for collectibles, toys, and games.", tag: "Character CGI" },
      { title: "Skeletal Rigging & Joint Mechanics", description: "Full bone hierarchies, inverse kinematics (IK), and skin weighting so toys and character models move naturally.", tag: "Rigging" },
      { title: "3D Printing & Tooling Preparation", description: "Watertight STL/OBJ mesh generation, split-part keying, hollow-wall thickness optimization, and mold tolerances.", tag: "Manufacturing" },
      { title: "Architectural Interior & Exterior CGI", description: "Photorealistic rendering for commercial, residential, and institutional developments.", tag: "Architecture" },
      { title: "360° Equirectangular Panoramas", description: "Virtual tour panoramas compatible with all standard VR and web viewers.", tag: "Panoramas" },
    ],
    technologies: ["Blender", "ZBrush", "3ds Max", "Unreal Engine 5", "V-Ray", "Substance Painter", "Fusion 360", "Three.js"],
    faqs: [
      { question: "Can you design moveable toys with functional joints and articulation?", answer: "Yes! We specialize in designing functional articulations including ball-and-socket joints, hinge joints, ratchet mechanisms, and keyed assembly parts optimized for injection molding or resin 3D printing." },
      { question: "Can you provide files ready for 3D printing and manufacturing?", answer: "Absolutely. We supply watertight STL, OBJ, or STEP files with verified wall thicknesses, key pegs, and pre-hollowed parts ready for rapid prototyping and factory tooling." },
      { question: "What software and formats do you use for 3D models and toys?", answer: "We work in Blender, ZBrush, and 3ds Max, delivering in .STL, .OBJ, .FBX, .GLTF, and STEP formats complete with full PBR textures and rigging if required." }
    ]
  },
  "3d-toys-models": {
    headline: "Custom 3D Models, Moveable Articulated Toys & Character Rigging",
    longDescription: "From collectible action figures with articulated ball-and-socket joints to functional moveable toys and detailed character sculpts. We handle concept modeling, mechanical joint design, skeletal rigging, and manufacturing-ready 3D print file prep.",
    stats: [
      { value: "100%", label: "Articulated Joint Accuracy" },
      { value: "3D Print", label: "Watertight STL / STEP" },
      { value: "7+ Yrs", label: "Sculpting & Rigging" },
      { value: "Factory", label: "Mold & Tooling Ready" },
    ],
    capabilities: [
      { title: "Functional Articulated Joint Design", description: "Ball joints, hinges, swivels, and click-joints designed with tight tolerances for real-world movement.", tag: "Joint Engineering" },
      { title: "Toy & Collectible Sculpting", description: "Stylized and realistic action figures, vinyl toys, mascots, and tabletop miniatures.", tag: "Sculpting" },
      { title: "Rigging for Animation & Pose Testing", description: "Digital skeleton setup with inverse kinematics to test range of motion before manufacturing.", tag: "Rigging" },
      { title: "Part Splitting & Keying", description: "Dividing multi-part toys with interlocking keys and pegs for easy assembly and seam concealment.", tag: "Part Tooling" },
      { title: "Color & Texture Painting", description: "Hand-painted textures, decal placement, and Pantone color specs for production.", tag: "Texturing" },
      { title: "Rapid Prototyping Support", description: "Test prints, clearance adjustments, and shrink factor compensation.", tag: "Prototyping" },
    ],
    technologies: ["Blender", "ZBrush", "Fusion 360", "Substance Painter", "KeyShot", "STL / STEP"],
    faqs: [
      { question: "Can you design custom moveable toys from rough sketches or concept art?", answer: "Yes, we can take rough sketches, 2D character sheets, or reference images and turn them into fully articulated, 3D-printable moveable toy prototypes." },
      { question: "Do you design the internal joints so parts don't become loose?", answer: "Yes, we engineer friction fits, ratchet teeth, and ball-socket tolerances with proper material clearance to ensure tight, durable joint articulation." }
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

import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "nexus-dashboard",
    slug: "nexus-fintech-dashboard",
    title: "Nexus Fintech Dashboard",
    client: "Nexus",
    description: "A comprehensive financial analytics dashboard serving 50K+ monthly active users.",
    challenge: "Nexus needed a real-time financial dashboard that could process and visualize millions of data points while maintaining sub-second response times and enterprise-grade security.",
    solution: "We built a React-powered dashboard with D3.js visualizations, WebSocket real-time updates, and AI-driven anomaly detection. The architecture uses micro-frontends for scalability and Redis caching for performance.",
    results: [
      "50K+ monthly active users",
      "99.9% platform uptime",
      "40% reduction in data processing time",
      "4.8/5 user satisfaction rating",
    ],
    image: "/case-studies/nexus.jpg",
    tags: ["Fintech", "React", "AI", "Dashboard"],
  },
  {
    id: "social-butterfly-app",
    slug: "social-butterfly-platform",
    title: "Social Butterfly Platform",
    client: "Social Butterfly",
    description: "A cross-platform social media management app serving 100K+ content creators.",
    challenge: "Social Butterfly needed a mobile-first platform that could handle content scheduling across multiple social networks, real-time analytics, and team collaboration — all with an intuitive user experience.",
    solution: "We developed a Flutter-based cross-platform app with Firebase backend, AI-powered content recommendations, and a custom analytics engine. The design focused on reducing cognitive load while maximizing productivity.",
    results: [
      "100K+ content creators onboarded",
      "4.7 app store rating",
      "60% increase in user engagement",
      "3x faster content publishing",
    ],
    image: "/case-studies/social-butterfly.jpg",
    tags: ["Mobile", "Flutter", "AI", "Social Media"],
  },
];

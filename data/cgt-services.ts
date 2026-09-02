export interface CategorizedService {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface ServiceCategory {
  title: string;
  items: CategorizedService[];
}

export const categorizedServices: ServiceCategory[] = [
  {
    title: "Web Development",
    items: [
      { id: "react", title: "React JS", description: "Interactive user interfaces", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png", href: "/services/react-development" },
      { id: "nextjs", title: "Next.js", description: "Fast, SEO-friendly web apps", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/next_js.png", href: "/services/nextjs-development" },
      { id: "vue", title: "Vue JS", description: "Versatile frontend frameworks", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vue_js.png", href: "/services/vue-development" },
      { id: "nuxtjs", title: "Nuxt.js", description: "Intuitive Vue framework", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/nuxt_js.png", href: "/services/nuxtjs-development" },
      { id: "nodejs", title: "Node.js", description: "Scalable backend systems", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png", href: "/services/nodejs-development" },
      { id: "ror", title: "Ruby on Rails", description: "Rapid backend development", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ruby_on_rails.png", href: "/services/ror-development" },
    ],
  },
  {
    title: "Mobile Development",
    items: [
      { id: "react-native", title: "React Native", description: "Cross-platform mobile apps", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png", href: "/services/react-native" },
      { id: "ios", title: "iOS Development", description: "Native Apple experiences", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ios.png", href: "/services/ios-development" },
      { id: "android", title: "Android Development", description: "Native Android applications", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/android.png", href: "/services/android-development" },
    ],
  },
  {
    title: "AI & Integrations",
    items: [
      { id: "openai", title: "ChatGPT/OpenAI", description: "LLM integration & intelligence", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/langchain_icon.png", href: "/services/openai-integration" },
      { id: "ai-chatbot", title: "AI Chatbots", description: "Conversational agents", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tensorflow.png", href: "/services/ai-chatbots" },
      { id: "chatwoot", title: "Chatwoot", description: "Customer engagement platform", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ruby.png", href: "/services/chatwoot" },
    ],
  },
  {
    title: "E-Commerce & CMS",
    items: [
      { id: "spree", title: "Spree Commerce", description: "Open-source ecommerce", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ruby_on_rails.png", href: "/services/spree-commerce" },
      { id: "strapi", title: "Strapi", description: "Leading open-source headless CMS", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/strapi.png", href: "/services/strapi" },
    ],
  },
  {
    title: "Cloud & Extensions",
    items: [
      { id: "aws", title: "AWS Solutions", description: "Cloud infrastructure & DevOps", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png", href: "/services/aws" },
      { id: "chrome", title: "Chrome Extensions", description: "Browser tool development", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png", href: "/services/chrome-extensions" },
    ],
  }
];

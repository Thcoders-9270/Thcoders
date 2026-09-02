import type { NavigationItem } from "@/types";

export const mainNavigation: NavigationItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "#" },
  {
    label: "Portfolios",
    href: "/portfolio",
    children: [
      { label: "Mobile Apps", href: "/portfolio?category=Mobile App", icon: "Smartphone" },
      { label: "Websites", href: "/portfolio?category=Web App", icon: "Globe" },
      { label: "3D Interior Visualization", href: "/portfolio?category=3D Interior Visualization", icon: "Box" },
      { label: "3D Exterior Visualization", href: "/portfolio?category=3D Exterior Visualization", icon: "Box" },
      { label: "All Projects", href: "/portfolio", icon: "Grid3X3" },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQs", href: "/#faq" },
];

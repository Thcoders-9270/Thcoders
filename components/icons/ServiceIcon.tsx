import Image from "next/image"
import {
  GameDevIcon,
  MobileAppIcon,
  AIIcon,
  WebDevIcon,
  ThreeDIcon,
  EcommerceIcon,
  CinematicsIcon,
  EnterpriseIcon,
  GameDesignIcon,
  VRIcon,
  MetaverseIcon,
  UIUXIcon,
  TabletIcon,
  DesktopIcon,
  AudioIcon,
  EngineIcon,
  SEOIcon,
  BrandIcon,
  MarketingIcon,
  ChatbotIcon,
} from "./service-icons"

const pngIcons: Record<string, string> = {
  Smartphone: "/icons/app-development.png",
  Globe: "/icons/web.png",
  Gamepad2: "/icons/game-development.png",
  Swords: "/icons/game-development.png",
  Brain: "/icons/deep-learning.png",
  Layers: "/icons/vr.png",
  Palette: "/icons/ui.png",
}

const svgIcons: Record<string, React.ReactNode> = {
  Gamepad2: <GameDevIcon className="h-5 w-5" />,
  Smartphone: <MobileAppIcon className="h-5 w-5" />,
  Brain: <AIIcon className="h-5 w-5" />,
  Globe: <WebDevIcon className="h-5 w-5" />,
  Box: <ThreeDIcon className="h-5 w-5" />,
  ShoppingCart: <EcommerceIcon className="h-5 w-5" />,
  Clapperboard: <CinematicsIcon className="h-5 w-5" />,
  Building2: <EnterpriseIcon className="h-5 w-5" />,
  Swords: <GameDesignIcon className="h-5 w-5" />,
  Layers: <VRIcon className="h-5 w-5" />,
  Cube: <MetaverseIcon className="h-5 w-5" />,
  Palette: <UIUXIcon className="h-5 w-5" />,
  Tablet: <TabletIcon className="h-5 w-5" />,
  Monitor: <DesktopIcon className="h-5 w-5" />,
  Headphones: <AudioIcon className="h-5 w-5" />,
  Hexagon: <EngineIcon className="h-5 w-5" />,
  Search: <SEOIcon className="h-5 w-5" />,
  Sparkles: <BrandIcon className="h-5 w-5" />,
  TrendingUp: <MarketingIcon className="h-5 w-5" />,
  Bot: <ChatbotIcon className="h-5 w-5" />,
}

export function ServiceIcon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  // If the icon is passed as a direct URL
  if (name.startsWith("/") || name.startsWith("http")) {
    return (
      <div className={`relative ${className}`}>
        <Image src={name} alt="" fill className="object-contain" sizes="40px" />
      </div>
    )
  }

  const pngSrc = pngIcons[name]

  if (pngSrc) {
    return (
      <div className={`relative ${className}`}>
        <Image src={pngSrc} alt="" fill className="object-contain" sizes="40px" />
      </div>
    )
  }

  const SvgComponent = svgIcons[name]
  if (SvgComponent) {
    return <>{SvgComponent}</>
  }

  // Fallback for missing icons
  return <div className={`bg-zinc-100 rounded-md ${className}`} />
}

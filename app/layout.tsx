import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { SmoothScroll } from "@/components/shared/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LayoutClient } from "@/components/layout/LayoutClient";

const fontSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thcoders.com"),
  title: {
    default: "THCoders — From Vision to Launch. We Code the Future.",
    template: "%s | THCoders",
  },
  description:
    "Crafted by designers. Built by engineers. Scaled by marketers. A premium software agency specializing in web, mobile, AI, and game development.",
  openGraph: {
    title: "THCoders — From Vision to Launch. We Code the Future.",
    description:
      "Crafted by designers. Built by engineers. Scaled by marketers. A premium software agency specializing in web, mobile, AI, and game development.",
    url: "https://thcoders.com",
    siteName: "THCoders",
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "THCoders — From Vision to Launch. We Code the Future.",
    description:
      "Crafted by designers. Built by engineers. Scaled by marketers.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} font-sans`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh flex flex-col bg-background text-foreground antialiased selection:bg-primary/10">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScroll>
            <Navbar />
            <main className="flex-1">
              <LayoutClient>{children}</LayoutClient>
            </main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}

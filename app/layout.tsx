import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticleBackground from "@/components/animations/ParticleBackground";
import ScrollSequenceBackground from "@/components/animations/ScrollSequenceBackground";

export const metadata: Metadata = {
  title: "Kortex Automation | Premium Enterprise AI Agency",
  description: "We architect, integrate, and launch custom cognitive AI agents, autonomous voice bots, CRM pipeline automations, and custom dashboards for fast-scaling businesses.",
  keywords: [
    "AI automation agency",
    "AI automation services",
    "AI chatbot development",
    "AI voice agent development",
    "workflow automation services",
    "AI agents for business",
    "CRM automation services",
    "WhatsApp automation services"
  ],
  openGraph: {
    title: "Kortex Automation | Premium Enterprise AI Agency",
    description: "Automate your workflows and operations using state-of-the-art cognitive LLMs and integrations.",
    type: "website",
    locale: "en_US",
  },
  metadataBase: new URL("https://kortex-automation.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-bg-dark text-slate-100 font-sans selection:bg-accent-cyan/30 selection:text-white">
        <ScrollSequenceBackground />
        <ParticleBackground />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

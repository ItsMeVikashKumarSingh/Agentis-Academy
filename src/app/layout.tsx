import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AgentCraft — AI Agents & Automation Academy",
  description: "Premier engineering academy for building, orchestrating, and deploying production autonomous AI agents, multi-agent swarms, and enterprise workflow automations.",
  keywords: "ai agents, autonomous agents, langgraph, crewai, n8n automation, model context protocol, mcp, local llm, python, agent architecture",
  openGraph: {
    title: "AgentCraft — AI Agents & Automation Academy",
    description: "Build, orchestrate, and deploy production-grade autonomous AI agents and workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${geist.variable} bg-[var(--color-cream-paper)] text-[var(--color-charcoal)] antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

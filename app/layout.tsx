import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { AnimatedBackground } from "@/components/animated-background"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "TruWell AI - Empower Your Health Decisions",
  description: "Scan Well, Know Well, Choose Well. AI-powered product safety analysis for smarter wellness choices.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <AnimatedBackground />
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}

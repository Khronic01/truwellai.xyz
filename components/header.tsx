"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const WAITLIST_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScBmnd9FMbSpcVpkgFYnB9_i5NarKS0bcXS79zqVTDWd56qLA/viewform"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 logo-hover cursor-pointer">
            <Image
              src="/truwell-logo.png"
              alt="TruWell AI Logo"
              width={40}
              height={40}
              className="w-10 h-10 transition-transform duration-300 hover:scale-110"
            />
            <span className="text-xl font-bold text-primary">TruWell AI™</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link text-foreground hover:text-primary font-medium">
              Home
            </a>
            <a href="#features" className="nav-link text-foreground hover:text-primary font-medium">
              Features
            </a>
            <a href="#how-it-works" className="nav-link text-foreground hover:text-primary font-medium">
              How It Works
            </a>
            <a href="#download" className="nav-link text-foreground hover:text-primary font-medium">
              Download
            </a>
          </nav>

          <div className="hidden md:flex items-center">
            <Button size="sm" className="button-hover bg-primary hover:bg-primary/90 hover-glow" asChild>
              <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                Join Waitlist
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-all duration-300 icon-hover"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="nav-link text-foreground hover:text-primary font-medium py-2">
                Home
              </a>
              <a href="#features" className="nav-link text-foreground hover:text-primary font-medium py-2">
                Features
              </a>
              <a href="#how-it-works" className="nav-link text-foreground hover:text-primary font-medium py-2">
                How It Works
              </a>
              <a href="#download" className="nav-link text-foreground hover:text-primary font-medium py-2">
                Download
              </a>
              <div className="pt-4">
                <Button size="sm" className="w-full button-hover bg-primary hover:bg-primary/90 hover-glow" asChild>
                  <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                    Join Waitlist
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Download, Apple, Play } from "lucide-react"

const WAITLIST_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScBmnd9FMbSpcVpkgFYnB9_i5NarKS0bcXS79zqVTDWd56qLA/viewform"

export function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
            📱 Coming Soon
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Be the First to <span className="text-primary">Transform Your Health</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join our waitlist and get early access to TruWell AI™. Be among the first to experience AI-powered product
            scanning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-r from-card to-card/50 border-primary/20 slide-up">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Join the Waitlist Today</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Get exclusive early access to AI-powered ingredient analysis, personalized health insights, and be
                    part of our founding community.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "Early access to the app",
                    "Exclusive founding member benefits",
                    "Priority customer support",
                    "Special launch pricing",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-black hover:bg-black/90 text-white flex-1" asChild>
                    <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                      <Apple className="w-5 h-5 mr-2" />
                      Join Waitlist - iOS
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                      <Play className="w-5 h-5 mr-2" />
                      Join Waitlist - Android
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Content - Phone Preview */}
              <div className="relative">
                <div className="relative mx-auto max-w-xs">
                  {/* Phone Frame */}
                  <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl float">
                    <div className="bg-background rounded-[2rem] overflow-hidden">
                      {/* App Preview */}
                      <div className="px-6 py-8 text-center space-y-4">
                        <div className="w-16 h-16 bg-primary rounded-2xl mx-auto flex items-center justify-center">
                          <Smartphone className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">TruWell AI</h4>
                          <p className="text-sm text-muted-foreground">Smart Health Scanner</p>
                        </div>
                        <Button size="sm" className="w-full bg-primary hover:bg-primary/90" asChild>
                          <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                            <Download className="w-4 h-4 mr-2" />
                            Coming Soon
                          </a>
                        </Button>
                        <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                          <span>Launching Soon</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div
                    className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full p-3 shadow-lg float"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <Download className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Help Section */}
        <div className="mt-16 text-center slide-up">
          <Card className="inline-block p-6 bg-card/50">
            <div className="space-y-4">
              <h4 className="font-semibold">Questions About TruWell AI?</h4>
              <p className="text-sm text-muted-foreground">Join our waitlist to stay updated on our launch</p>
              <Button variant="outline" size="sm" asChild>
                <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                  📝 Join Waitlist
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

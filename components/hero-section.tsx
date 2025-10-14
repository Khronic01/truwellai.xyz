"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, Smartphone, Shield, CheckCircle } from "lucide-react"

const WAITLIST_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScBmnd9FMbSpcVpkgFYnB9_i5NarKS0bcXS79zqVTDWd56qLA/viewform"

export function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-background via-card to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Top Content - Centered Heading Section */}
          <div className="max-w-4xl mx-auto text-center space-y-8 slide-up">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 mx-auto">
                <Shield className="w-4 h-4 mr-2" />
                The Future of Product Safety
              </Badge>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                <span className="inline-block animate-fade-in-up text-hover-float" style={{ animationDelay: "0.1s" }}>
                  Empower{" "}
                </span>
                <span className="inline-block animate-fade-in-up text-hover-bounce" style={{ animationDelay: "0.2s" }}>
                  Your{" "}
                </span>
                <span
                  className="inline-block animate-fade-in-up text-hover-gradient font-extrabold"
                  style={{ animationDelay: "0.3s" }}
                >
                  Health{" "}
                </span>
                <span
                  className="inline-block animate-fade-in-up text-hover-gradient font-extrabold"
                  style={{ animationDelay: "0.4s" }}
                >
                  Decisions{" "}
                </span>
                <span className="inline-block animate-fade-in-up text-hover-float" style={{ animationDelay: "0.5s" }}>
                  with{" "}
                </span>
                <span
                  className="inline-block animate-fade-in-up text-hover-glow text-primary font-extrabold"
                  style={{ animationDelay: "0.6s" }}
                >
                  TruWell AI™
                </span>
              </h1>

              <p
                className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.7s" }}
              >
                Scan Well, Know Well, Choose Well. In a world where 94% of products labeled "natural" contain hidden
                allergens, TruWell AI™ helps you make smarter wellness choices through trusted AI and health data
                insights.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.9s" }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 hover-glow" asChild>
                <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                  <Smartphone className="w-5 h-5 mr-2" />
                  Join Waitlist
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent hover-glow" asChild>
                <a href="#features">
                  <Camera className="w-5 h-5 mr-2" />
                  Explore Features
                </a>
              </Button>
            </div>

            <div
              className="flex items-center justify-center space-x-6 text-sm text-muted-foreground animate-fade-in-up"
              style={{ animationDelay: "1.1s" }}
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Coming Soon</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>AI-Powered Scanning</span>
              </div>
            </div>
          </div>

          <div className="relative max-w-sm mx-auto animate-fade-in-up" style={{ animationDelay: "1.3s" }}>
            <div className="relative">
              <div
                className="relative bg-gray-900 rounded-[3rem] p-1 shadow-2xl"
                style={{ width: "280px", height: "570px" }}
              >
                {/* Screen reflection overlay */}
                <div className="absolute inset-1 rounded-[2.8rem] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>

                {/* Actual screen */}
                <div className="bg-black rounded-[2.8rem] overflow-hidden h-full relative">
                  {/* Dynamic Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

                  {/* Live Status Bar with real-time elements */}
                  <div className="bg-black px-6 py-3 flex justify-between items-center text-white text-sm relative z-20">
                    <span className="font-medium">9:41</span>
                    <div className="flex items-center space-x-1">
                      {/* Signal bars */}
                      <div className="flex space-x-1">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className={`w-1 bg-white rounded-full ${i < 3 ? "h-2" : "h-3"}`}></div>
                        ))}
                      </div>
                      {/* WiFi icon */}
                      <div className="w-4 h-3 relative">
                        <div className="absolute inset-0 border-2 border-white rounded-sm border-b-0"></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                      </div>
                      {/* Battery */}
                      <div className="w-6 h-3 border border-white rounded-sm relative">
                        <div className="w-4 h-full bg-green-400 rounded-sm"></div>
                        <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-white rounded-r-sm"></div>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-2 space-y-3 bg-gradient-to-b from-gray-900 to-black text-white h-full">
                    {/* App header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-xs">T</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm text-white">TruWell AI</h3>
                          <p className="text-xs text-gray-400">Live Scanning</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                          <span className="text-xs">⚡</span>
                        </div>
                        <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                          <span className="text-xs">⚙️</span>
                        </div>
                      </div>
                    </div>

                    {/* Live Camera Viewfinder */}
                    <div className="relative bg-gray-800 rounded-2xl overflow-hidden" style={{ height: "200px" }}>
                      {/* Simulated camera feed background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800"></div>

                      {/* Product label simulation */}
                      <div className="absolute inset-4 bg-white rounded-lg p-3 text-black text-xs">
                        <div className="font-bold mb-1">CeraVe Daily Moisturizer</div>
                        <div className="text-gray-600 text-xs leading-tight">
                          INGREDIENTS: Water, Glycerin, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Ceramide NP...
                        </div>
                      </div>

                      {/* Scanning overlay with animated corners */}
                      <div className="absolute inset-4 border-2 border-primary rounded-lg">
                        {/* Animated corner brackets */}
                        <div className="absolute -top-1 -left-1 w-6 h-6 border-l-4 border-t-4 border-primary rounded-tl-lg scan-pulse"></div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 border-r-4 border-t-4 border-primary rounded-tr-lg scan-pulse"></div>
                        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-l-4 border-b-4 border-primary rounded-bl-lg scan-pulse"></div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-4 border-b-4 border-primary rounded-br-lg scan-pulse"></div>

                        {/* Scanning line animation */}
                        <div className="absolute inset-0 overflow-hidden">
                          <div
                            className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"
                            style={{
                              animation: "scan-line 2s ease-in-out infinite",
                              transform: "translateY(40px)",
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Live scanning status */}
                      <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                        <Badge className="bg-primary/90 text-white text-xs px-2 py-1">🔍 Scanning...</Badge>
                        <div className="text-white text-xs bg-black/50 px-2 py-1 rounded">OCR: 94%</div>
                      </div>
                    </div>

                    {/* Real-time Analysis Results */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-white">Live Analysis</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-400">Processing</span>
                        </div>
                      </div>

                      {/* Ingredient detection in real-time */}
                      <div className="space-y-1">
                        {[
                          { name: "Water", confidence: "99%", status: "✅ Safe" },
                          { name: "Glycerin", confidence: "97%", status: "💚 Beneficial" },
                          { name: "Ceramide NP", confidence: "94%", status: "✅ Safe" },
                          { name: "Fragrance", confidence: "91%", status: "⚠️ Monitor" },
                        ].map((ingredient, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between text-xs bg-gray-800/50 rounded-lg px-3 py-2"
                          >
                            <div className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                              <span className="text-white">{ingredient.name}</span>
                              <span className="text-gray-400">({ingredient.confidence})</span>
                            </div>
                            <span className="text-xs">{ingredient.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Safety Score Display */}
                    <div className="bg-gray-800/50 rounded-xl p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-white">Safety Score</span>
                        <span className="text-2xl font-bold text-primary">92%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                        <div
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-400">Personalized for your health profile</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced floating elements with realistic shadows */}
              <div
                className="absolute -top-6 -right-6 bg-primary text-white rounded-2xl p-4 shadow-2xl float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold">94%</div>
                  <div className="text-xs opacity-90">Accuracy</div>
                </div>
              </div>
              <div
                className="absolute -bottom-6 -left-6 bg-accent text-white rounded-2xl p-4 shadow-2xl float"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold">0.3s</div>
                  <div className="text-xs opacity-90">Analysis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

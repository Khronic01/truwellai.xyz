"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, Settings, Lightbulb, RotateCcw, CheckCircle } from "lucide-react"

export function LiveScanningSection() {
  const [scanningStep, setScanningStep] = useState(0)
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)

  const scanningSteps = [
    "Initializing camera feed...",
    "Detecting product label...",
    "OCR text recognition...",
    "AI analyzing ingredients...",
    "Processing health profile...",
    "Generating safety report...",
    "Analysis complete!",
  ]

  const ingredients = [
    { name: "Water", status: "Safe", color: "bg-primary/10 text-primary" },
    { name: "Glycerin", status: "Beneficial", color: "bg-accent/10 text-accent" },
    { name: "Ceramide NP", status: "Safe", color: "bg-primary/10 text-primary" },
    { name: "Fragrance", status: "Monitor", color: "bg-yellow-100 text-yellow-700" },
    { name: "Hyaluronic Acid", status: "Beneficial", color: "bg-accent/10 text-accent" },
  ]

  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setScanningStep((prev) => {
          if (prev >= scanningSteps.length - 1) {
            setIsScanning(false)
            setScanProgress(100)
            return 0
          }
          setScanProgress(((prev + 1) / scanningSteps.length) * 100)
          return prev + 1
        })
      }, 800)

      return () => clearInterval(interval)
    }
  }, [isScanning, scanningSteps.length])

  const startScanning = () => {
    setIsScanning(true)
    setScanningStep(0)
    setScanProgress(0)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Live Product <span className="text-primary">Scanning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Experience real-time ingredient analysis with our advanced OCR technology. Simply point your camera at any
            product label and watch as TruWell AI instantly identifies ingredients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-6 slide-up">
            <div className="space-y-4">
              {[
                "Real-time OCR text recognition with 99.2% accuracy",
                "Instant ingredient identification and parsing",
                "Live safety analysis in 0.3 seconds",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" onClick={startScanning} disabled={isScanning} className="bg-primary hover:bg-primary/90">
              <Camera className="w-5 h-5 mr-2" />
              {isScanning ? "Scanning..." : "Experience Live Scanning"}
            </Button>
          </div>

          {/* Interactive Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              {/* Phone Frame */}
              <div
                className="relative bg-gray-900 rounded-[3rem] p-1 shadow-2xl"
                style={{ width: "280px", height: "570px" }}
              >
                {/* Screen reflection and ambient lighting */}
                <div className="absolute inset-1 rounded-[2.8rem] bg-gradient-to-br from-white/5 via-transparent to-black/20 pointer-events-none"></div>

                <div className="bg-black rounded-[2.8rem] overflow-hidden h-full relative">
                  {/* Dynamic Island */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-full z-10 border border-gray-800"></div>

                  {/* Realistic Status Bar */}
                  <div className="bg-black px-6 py-3 flex justify-between items-center text-white text-sm relative z-20">
                    <div className="flex items-center space-x-4">
                      <span className="font-medium">9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 bg-white rounded-sm opacity-80"></div>
                        <span className="text-xs opacity-60">Verizon</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {/* 5G indicator */}
                      <span className="text-xs font-bold">5G</span>
                      {/* Signal strength */}
                      <div className="flex space-x-0.5">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1 bg-white rounded-full ${i === 0 ? "h-1" : i === 1 ? "h-2" : i === 2 ? "h-3" : "h-4"}`}
                          ></div>
                        ))}
                      </div>
                      {/* WiFi */}
                      <div className="w-4 h-3 relative">
                        <div className="absolute inset-0 border-2 border-white rounded-sm border-b-0 opacity-80"></div>
                      </div>
                      {/* Battery */}
                      <div className="w-6 h-3 border border-white rounded-sm relative">
                        <div className="w-5 h-full bg-green-400 rounded-sm"></div>
                        <div className="absolute -right-0.5 top-1/2 transform -translate-y-1/2 w-0.5 h-1.5 bg-white rounded-r-sm"></div>
                      </div>
                      <span className="text-xs">87%</span>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="px-4 py-2 space-y-3 bg-gradient-to-b from-gray-900 to-black text-white h-full">
                    {/* App Navigation */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-sm">T</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm text-white">TruWell AI</h3>
                          <p className="text-xs text-gray-400">Product Scanner</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                          <Settings className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                          <Lightbulb className="w-4 h-4 text-yellow-400" />
                        </button>
                      </div>
                    </div>

                    {/* Live Camera Feed with Product */}
                    <div className="relative bg-gray-800 rounded-2xl overflow-hidden" style={{ height: "220px" }}>
                      {/* Realistic camera background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800"></div>

                      {/* Product in viewfinder */}
                      <div className="absolute inset-6 bg-white rounded-lg p-3 shadow-lg transform rotate-1">
                        <div className="text-black">
                          <div className="font-bold text-sm mb-1">CeraVe Daily Moisturizer</div>
                          <div className="text-xs text-gray-600 leading-tight">
                            INGREDIENTS: Water, Glycerin, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Ceramide NP,
                            Ceramide AP, Ceramide EOP, Carbomer, Dimethicone, Behentrimonium Methosulfate, Sodium
                            Lauroyl Lactylate, Sodium Hyaluronate, Cholesterol, Phenoxyethanol, Disodium EDTA,
                            Dipotassium Phosphate, Potassium Phosphate, Potassium Chloride, Phytosphingosine,
                            Leuconostoc/Radish Root Ferment Filtrate, Ethylhexylglycerin, Fragrance
                          </div>
                        </div>
                      </div>

                      {/* Advanced scanning overlay */}
                      <div className="absolute inset-0">
                        {/* Corner brackets with glow effect */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-primary rounded-tl-xl shadow-lg shadow-primary/50 scan-pulse"></div>
                        <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-primary rounded-tr-xl shadow-lg shadow-primary/50 scan-pulse"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-primary rounded-bl-xl shadow-lg shadow-primary/50 scan-pulse"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-primary rounded-br-xl shadow-lg shadow-primary/50 scan-pulse"></div>

                        {/* Scanning grid overlay */}
                        <div className="absolute inset-4 border border-primary/30 rounded-lg">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse"></div>
                        </div>

                        {/* Real-time detection points */}
                        <div className="absolute top-12 left-8 w-2 h-2 bg-primary rounded-full animate-ping"></div>
                        <div
                          className="absolute top-16 right-12 w-2 h-2 bg-accent rounded-full animate-ping"
                          style={{ animationDelay: "0.5s" }}
                        ></div>
                        <div
                          className="absolute bottom-16 left-12 w-2 h-2 bg-primary rounded-full animate-ping"
                          style={{ animationDelay: "1s" }}
                        ></div>
                      </div>

                      {/* Live scanning status with progress */}
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="bg-black/80 rounded-lg p-2 backdrop-blur-sm">
                          <div className="flex justify-between items-center mb-1">
                            <Badge className="bg-primary/90 text-white text-xs px-2 py-1">
                              {isScanning ? "🔍 Scanning..." : "✅ Ready to Scan"}
                            </Badge>
                            <div className="text-white text-xs">
                              OCR: {isScanning ? `${Math.round(scanProgress)}%` : "94%"}
                            </div>
                          </div>
                          {isScanning && (
                            <div className="w-full bg-gray-700 rounded-full h-1">
                              <div
                                className="bg-gradient-to-r from-primary to-accent h-1 rounded-full transition-all duration-300"
                                style={{ width: `${scanProgress}%` }}
                              ></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Real-time Ingredient Analysis */}
                    {isScanning ? (
                      <Card className="p-3 bg-gray-800/50 border-gray-700">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                            <p className="text-sm font-medium text-primary">{scanningSteps[scanningStep]}</p>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-1">
                            <div
                              className="bg-gradient-to-r from-primary to-accent h-1 rounded-full transition-all duration-300"
                              style={{ width: `${scanProgress}%` }}
                            ></div>
                          </div>
                        </div>
                      </Card>
                    ) : (
                      <Card className="p-3 bg-gray-800/50 border-gray-700">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-white">Detected Ingredients</span>
                            <Badge className="bg-primary/20 text-primary text-xs">Live Analysis</Badge>
                          </div>
                          <div className="space-y-1">
                            {[
                              { name: "Water", status: "Safe", color: "bg-primary/20 text-primary" },
                              { name: "Glycerin", status: "Beneficial", color: "bg-accent/20 text-accent" },
                              { name: "Ceramide NP", status: "Safe", color: "bg-primary/20 text-primary" },
                              { name: "Fragrance", status: "Monitor", color: "bg-yellow-500/20 text-yellow-400" },
                            ].map((ingredient, index) => (
                              <div key={index} className="flex items-center justify-between text-xs">
                                <div className="flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                                  <span className="text-white">{ingredient.name}</span>
                                </div>
                                <Badge className={ingredient.color}>{ingredient.status}</Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Card>
                    )}

                    {/* Camera Controls */}
                    <div className="flex justify-center space-x-4 pt-2">
                      <button
                        onClick={startScanning}
                        disabled={isScanning}
                        className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg disabled:opacity-50"
                      >
                        <Camera className="w-8 h-8 text-white" />
                      </button>
                      <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                        <RotateCcw className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced floating stats */}
              <div
                className="absolute -top-8 -right-8 bg-primary text-white rounded-2xl p-4 shadow-2xl float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-center">
                  <div className="text-xl font-bold">99.2%</div>
                  <div className="text-xs opacity-90">OCR Accuracy</div>
                </div>
              </div>
              <div
                className="absolute -bottom-8 -left-8 bg-accent text-white rounded-2xl p-4 shadow-2xl float"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-center">
                  <div className="text-xl font-bold">0.3s</div>
                  <div className="text-xs opacity-90">Analysis Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

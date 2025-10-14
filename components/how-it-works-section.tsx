"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Brain, CheckCircle, ArrowRight } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      icon: Smartphone,
      title: "Scan & Capture",
      description:
        "Point your camera at any product label or scan the barcode. Our advanced OCR technology instantly captures and processes ingredient information with clinical precision.",
      action: "Try Scanning",
      color: "bg-primary",
    },
    {
      number: "2",
      icon: Brain,
      title: "AI Analysis",
      description:
        "Our proprietary AI, trained on medical journals and regulatory databases, analyzes ingredients against your personal health profile in seconds.",
      action: "See AI in Action",
      color: "bg-accent",
    },
    {
      number: "3",
      icon: CheckCircle,
      title: "Choose Better",
      description:
        "Receive color-coded safety scores, detailed risk breakdowns, and smart alternatives. Make informed decisions with confidence.",
      action: "Explore Results",
      color: "bg-primary",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 mb-4">
            ⚡ How TruWell AI™ Works 🚀
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Three Simple Steps to <span className="text-primary">Transform Your Shopping</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Transform your shopping experience and protect your health with our streamlined process
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card
                className="p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 slide-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-6">
                  {/* Step Number */}
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 ${step.color} text-white rounded-full flex items-center justify-center text-xl font-bold`}
                    >
                      {step.number}
                    </div>
                    <div className="p-3 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  {/* Action Button */}
                  <Button
                    variant="outline"
                    className="w-full group-hover:border-primary group-hover:text-primary transition-colors bg-transparent"
                  >
                    {step.action}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Target Audience */}
        <div className="mt-20 slide-up">
          <h3 className="text-2xl font-bold text-center mb-8">🎯 Perfect for:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { emoji: "👨‍👩‍👧‍👦", label: "Parents with children who have allergies" },
              { emoji: "🤱", label: "Pregnant and nursing mothers" },
              { emoji: "🏃‍♀️", label: "Health-conscious millennials" },
              { emoji: "🌱", label: "Eco-conscious shoppers" },
              { emoji: "⚕️", label: "People with chronic conditions" },
              { emoji: "💚", label: "Wellness enthusiasts" },
            ].map((audience, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">{audience.emoji}</div>
                <p className="text-xs text-muted-foreground text-balance">{audience.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

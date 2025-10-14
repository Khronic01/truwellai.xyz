"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Target, Globe, TrafficCone as Traffic, Users, Lightbulb, UserCheck } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Bot,
      title: "TruWell AI Wellness Companion",
      description:
        "Your smart wellness support tool. Helps you track symptoms, explore evidence-based lifestyle tips, and learn from health-related patterns.",
      badge: "🤖 AI-Powered",
    },
    {
      icon: Target,
      title: "Hyper-Personalized Protection",
      description:
        "Tailored risk scores based on your unique health profile, allergies, pregnancy status, and chronic conditions.",
      badge: "🎯 Personalized",
    },
    {
      icon: Globe,
      title: "Global Regulatory Intelligence",
      description:
        "Real-time updates from FDA, EPA, EU, and WHO databases ensure you're always protected against emerging health threats.",
      badge: "🌍 Global Data",
    },
    {
      icon: Traffic,
      title: "Color-Coded Safety Scores",
      description:
        "Instantly understand product safety with our traffic light system: Safe ✅, Moderate ⚠️, or Avoid 🔴.",
      badge: "🚦 Visual Alerts",
    },
    {
      icon: Users,
      title: "Community-Driven Insights",
      description:
        "Access verified reviews from over 1 million user scans. Get crowdsourced alerts tagged to specific health profiles.",
      badge: "👥 Community",
    },
    {
      icon: Lightbulb,
      title: "Smart Alternatives",
      description:
        "Find safer, cheaper, or greener substitutes with price comparisons, ratings, and direct purchase links.",
      badge: "💡 Smart Suggestions",
    },
  ]

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
            Revolutionary AI-Powered Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Advanced Technology for <span className="text-primary">Personalized Health</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            TruWell AI™ uses advanced technology and user-provided health profiles to deliver personalized insights into
            product ingredients, leveraging trusted data sources and AI to support informed wellness choices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Expert Access Feature - Highlighted */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 slide-up">
          <div className="flex items-start space-x-6">
            <div className="p-4 bg-primary/10 rounded-xl">
              <UserCheck className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <h3 className="text-xl font-semibold">Expert Access</h3>
                <Badge className="bg-accent/10 text-accent border-accent/20">👨‍⚕️ Professional Support</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                One-click consultations with dermatologists, toxicologists, and nutritionists. Get professional medical
                advice tailored to your specific health concerns and product questions.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

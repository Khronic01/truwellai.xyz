"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Star, AlertTriangle } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: AlertTriangle,
      value: "94%",
      label: 'Products labeled "natural" contain hidden allergens',
      color: "text-red-500",
    },
    {
      icon: TrendingUp,
      value: "11M",
      label: "Lives lost annually to diet-related diseases",
      color: "text-orange-500",
    },
    {
      icon: Star,
      value: "59%",
      label: "Performance consistent with expert-level pattern recognition",
      color: "text-primary",
    },
    {
      icon: Users,
      value: "+60",
      label: "NPS Score - Higher than 95% of healthcare apps",
      color: "text-accent",
    },
  ]

  return (
    <section className="py-16 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <p className="text-sm text-muted-foreground text-balance">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

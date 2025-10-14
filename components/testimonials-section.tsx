"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Mother of 2",
      avatar: "👩‍💼",
      rating: 5,
      text: "TruWell AI has been a game-changer for our family. My daughter has severe allergies, and this app gives me peace of mind when shopping. The personalized alerts are incredibly accurate.",
      highlight: "Peace of mind for allergic children",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Dermatologist",
      avatar: "👨‍⚕️",
      rating: 5,
      text: "I recommend TruWell AI to my patients with sensitive skin conditions. The ingredient analysis is thorough and the regulatory database integration is impressive.",
      highlight: "Recommended by healthcare professionals",
    },
    {
      name: "Emma Thompson",
      role: "Pregnant Mother",
      avatar: "🤱",
      rating: 5,
      text: "During my pregnancy, TruWell AI helped me avoid harmful ingredients I never knew existed. The pregnancy-safe recommendations are invaluable.",
      highlight: "Essential for pregnancy safety",
    },
    {
      name: "James Park",
      role: "Fitness Enthusiast",
      avatar: "🏃‍♂️",
      rating: 5,
      text: "The community insights feature is amazing. I can see what other athletes are using and get recommendations for cleaner supplements.",
      highlight: "Community-driven recommendations",
    },
  ]

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 mb-4">
            ⭐ Trusted by 50,000+ Users
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            What Our <span className="text-primary">Community Says</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join thousands of health-conscious individuals making safer choices every day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 slide-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>

                {/* Highlight */}
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {testimonial.highlight}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center slide-up">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4.8</div>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">App Store Rating</p>
              </div>
              <div className="w-px h-16 bg-border"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">50K+</div>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div className="w-px h-16 bg-border"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                <p className="text-sm text-muted-foreground">Products Scanned</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

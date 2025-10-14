import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Target, Users, Lightbulb, Award, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mint via-white to-mint">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">About TruWell AI</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 text-balance">
              Empowering Healthier Choices Through AI
            </h1>
            <p className="text-xl text-charcoal/70 mb-8 text-pretty max-w-2xl mx-auto">
              We're on a mission to make product safety transparent and accessible to everyone, using cutting-edge AI
              technology to protect what matters most—your health.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover-glow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-charcoal">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/70 leading-relaxed">
                    To democratize health information by providing instant, personalized product safety assessments
                    powered by artificial intelligence. We believe everyone deserves to know what's in their products
                    and how it affects their unique health profile.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 hover:border-secondary/40 transition-all hover:shadow-xl hover-glow">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl text-charcoal">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/70 leading-relaxed">
                    A world where making healthy choices is effortless. We envision a future where AI-powered health
                    technology is accessible to all, eliminating the confusion around product ingredients and empowering
                    informed decisions for better well-being.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4 bg-white/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Our Story</h2>
            <div className="space-y-6 text-charcoal/70 leading-relaxed">
              <p>
                TruWell AI was born from a personal experience. Our founder, a new parent, spent countless hours
                researching product ingredients to ensure their child's safety. The process was overwhelming—deciphering
                complex chemical names, cross-referencing allergen databases, and trying to understand conflicting
                health information.
              </p>
              <p>
                We realized millions of people face this same challenge every day. Parents checking baby products,
                individuals with allergies scanning food labels, health-conscious consumers trying to make informed
                choices—all struggling with the same information overload.
              </p>
              <p>
                In 2023, we assembled a team of AI engineers, health experts, and product designers to solve this
                problem. After two years of development and training our AI on millions of product labels and medical
                databases, TruWell AI was launched in 2025.
              </p>
              <p>
                Today, we're proud to help over 500,000 users make safer, healthier choices every day. Our AI has
                analyzed over 10 million products, identified thousands of potential health risks, and empowered
                families to take control of their wellness journey.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover-glow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-charcoal">Health First</CardTitle>
                  <CardDescription>Your well-being is our top priority</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal/70">
                    Every decision we make is guided by one question: Does this help people live healthier lives?
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 hover:border-secondary/40 transition-all hover:shadow-xl hover-glow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-charcoal">Transparency</CardTitle>
                  <CardDescription>Clear, honest, and accessible information</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal/70">
                    We believe in complete transparency about our AI, data sources, and how we protect your privacy.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover-glow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-charcoal">Innovation</CardTitle>
                  <CardDescription>Pushing boundaries with AI technology</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal/70">
                    We continuously improve our AI algorithms to provide the most accurate and helpful health insights.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-charcoal mb-4">Meet Our Leadership</h2>
            <p className="text-center text-charcoal/70 mb-12 max-w-2xl mx-auto">
              Our diverse team brings together expertise in AI, healthcare, and product design to create the best
              possible experience.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Sarah Chen",
                  role: "CEO & Co-Founder",
                  bio: "Former Google AI researcher with 15 years in machine learning and healthcare technology.",
                },
                {
                  name: "Michael Rodriguez",
                  role: "CTO & Co-Founder",
                  bio: "Ex-Apple engineer specializing in mobile AI and computer vision systems.",
                },
                {
                  name: "Dr. Emily Watson",
                  role: "Chief Medical Officer",
                  bio: "Board-certified physician and toxicologist with expertise in ingredient safety.",
                },
              ].map((member, index) => (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover-glow"
                >
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4" />
                    <CardTitle className="text-charcoal">{member.name}</CardTitle>
                    <CardDescription className="text-secondary font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-charcoal/70 text-center">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Users, value: "500K+", label: "Active Users" },
                { icon: Award, value: "10M+", label: "Products Scanned" },
                { icon: TrendingUp, value: "95%", label: "Accuracy Rate" },
                { icon: Heart, value: "50K+", label: "Health Alerts Sent" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover-glow text-center"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-3xl text-charcoal">{stat.value}</CardTitle>
                    <CardDescription className="text-charcoal/70">{stat.label}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Us on Our Mission</h2>
            <p className="text-xl text-white/90 mb-8 text-pretty">
              Whether you're looking to join our team or partner with us, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Partner With Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

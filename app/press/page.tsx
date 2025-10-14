import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Newspaper, Download, Mail, Calendar, Award, TrendingUp, Users, ExternalLink } from "lucide-react"

export default function PressPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mint via-white to-mint">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Press & Media</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 text-balance">TruWell AI in the News</h1>
            <p className="text-xl text-charcoal/70 mb-8 text-pretty max-w-2xl mx-auto">
              The latest news, press releases, and media coverage about TruWell AI's mission to make health information
              accessible to everyone.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Mail className="w-4 h-4 mr-2" />
              Contact Press Team
            </Button>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Latest News</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  date: "January 15, 2025",
                  category: "Product Launch",
                  title: "TruWell AI Launches Advanced Allergen Detection Feature",
                  excerpt:
                    "New AI-powered feature can detect hidden allergens in products with 98% accuracy, helping millions of people with food sensitivities.",
                  source: "TechCrunch",
                },
                {
                  date: "December 10, 2024",
                  category: "Funding",
                  title: "TruWell AI Raises $25M Series A to Expand Health Tech Platform",
                  excerpt:
                    "Led by Sequoia Capital, the funding will accelerate AI development and expand into European markets.",
                  source: "VentureBeat",
                },
                {
                  date: "November 22, 2024",
                  category: "Partnership",
                  title: "Major Grocery Chain Partners with TruWell AI for In-Store Scanning",
                  excerpt: "Whole Foods announces integration of TruWell AI technology in 500+ stores nationwide.",
                  source: "Forbes",
                },
                {
                  date: "October 5, 2024",
                  category: "Award",
                  title: "TruWell AI Named 'Best Health App of 2024' by Apple",
                  excerpt:
                    "Apple recognizes TruWell AI for innovation in health technology and user experience design.",
                  source: "Apple Newsroom",
                },
              ].map((news, index) => (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover-glow"
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-primary/10 text-primary">{news.category}</Badge>
                      <span className="text-sm text-charcoal/60 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {news.date}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-charcoal hover:text-primary transition-colors cursor-pointer">
                      {news.title}
                    </CardTitle>
                    <CardDescription className="text-charcoal/70">{news.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-charcoal/60">{news.source}</span>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        Read More
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16 px-4 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Press Releases</h2>
            <div className="space-y-6">
              {[
                {
                  date: "January 15, 2025",
                  title: "TruWell AI Surpasses 500,000 Active Users Milestone",
                  desc: "Company announces major growth milestone and expansion plans for 2025.",
                },
                {
                  date: "December 1, 2024",
                  title: "TruWell AI Achieves HIPAA Compliance Certification",
                  desc: "Healthcare-grade security standards now protect all user health data.",
                },
                {
                  date: "October 15, 2024",
                  title: "TruWell AI Launches in European Markets",
                  desc: "App now available in UK, Germany, France, and Spain with localized ingredient databases.",
                },
              ].map((release, index) => (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover-glow"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-charcoal/60" />
                          <span className="text-sm text-charcoal/60">{release.date}</span>
                        </div>
                        <CardTitle className="text-xl text-charcoal mb-2">{release.title}</CardTitle>
                        <CardDescription className="text-charcoal/70">{release.desc}</CardDescription>
                      </div>
                      <Button
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/5 whitespace-nowrap bg-transparent"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-charcoal mb-12">By the Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Users, value: "500K+", label: "Active Users" },
                { icon: TrendingUp, value: "10M+", label: "Products Scanned" },
                { icon: Award, value: "95%", label: "User Satisfaction" },
                { icon: Newspaper, value: "100+", label: "Media Mentions" },
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

        {/* Media Kit */}
        <section className="py-16 px-4 bg-white/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Media Kit</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover-glow text-center">
                <CardHeader>
                  <Download className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-charcoal">Brand Assets</CardTitle>
                  <CardDescription>Logos, colors, and brand guidelines</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-primary/30 text-primary hover:bg-primary/5 bg-transparent"
                  >
                    Download
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 hover:border-secondary/40 transition-all hover:shadow-xl hover-glow text-center">
                <CardHeader>
                  <Download className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <CardTitle className="text-charcoal">Product Screenshots</CardTitle>
                  <CardDescription>High-resolution app screenshots</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-secondary/30 text-secondary hover:bg-secondary/5 bg-transparent"
                  >
                    Download
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover-glow text-center">
                <CardHeader>
                  <Download className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-charcoal">Company Fact Sheet</CardTitle>
                  <CardDescription>Key facts and statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-primary/30 text-primary hover:bg-primary/5 bg-transparent"
                  >
                    Download
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Press */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-charcoal mb-4">Press Inquiries</h2>
            <p className="text-xl text-charcoal/70 mb-8 text-pretty">
              For media inquiries, interview requests, or additional information, please contact our press team.
            </p>
            <div className="bg-white/50 rounded-lg p-8 max-w-md mx-auto">
              <div className="space-y-3 text-left">
                <div>
                  <p className="text-sm text-charcoal/60">Email</p>
                  <p className="text-charcoal font-medium">press@truwell.ai</p>
                </div>
                <div>
                  <p className="text-sm text-charcoal/60">Phone</p>
                  <p className="text-charcoal font-medium">+1 (555) 123-4567</p>
                </div>
                <div>
                  <p className="text-sm text-charcoal/60">Response Time</p>
                  <p className="text-charcoal font-medium">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

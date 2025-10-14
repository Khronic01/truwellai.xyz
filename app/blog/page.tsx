import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, Clock, ArrowRight, TrendingUp, Sparkles, Shield, Scan } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mint via-white to-mint">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">TruWell AI Blog</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 text-balance">
              Health Insights & Product Safety Tips
            </h1>
            <p className="text-xl text-charcoal/70 mb-8 text-pretty max-w-2xl mx-auto">
              Discover how AI is revolutionizing product safety, learn about ingredient analysis, and get expert tips
              for healthier living.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-charcoal/40 w-5 h-5" />
              <Input
                placeholder="Search articles..."
                className="pl-12 pr-4 py-3 text-lg border-primary/20 focus:border-primary"
              />
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <Badge className="mb-6 bg-secondary/10 text-secondary">Featured Article</Badge>
            <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-2xl hover-glow overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-12 flex items-center justify-center">
                  <div className="w-full h-64 bg-gradient-to-br from-primary to-secondary rounded-lg" />
                </div>
                <CardHeader className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-primary/10 text-primary">AI Technology</Badge>
                    <span className="text-sm text-charcoal/60 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      January 15, 2025
                    </span>
                    <span className="text-sm text-charcoal/60 flex items-center gap-1">
                      <Clock className="w-3 h-3" />8 min read
                    </span>
                  </div>
                  <CardTitle className="text-3xl text-charcoal mb-4">
                    How TruWell AI's Advanced Scanning Technology Works
                  </CardTitle>
                  <CardDescription className="text-base text-charcoal/70 mb-6">
                    Dive deep into the machine learning algorithms, computer vision systems, and natural language
                    processing that power our ingredient analysis. Learn how we achieve 95% accuracy in detecting
                    potential health risks.
                  </CardDescription>
                  <Link href="/blog/advanced-scanning-technology">
                    <Button className="bg-primary hover:bg-primary/90">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardHeader>
              </div>
            </Card>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 px-4 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Browse by Category</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Sparkles, title: "AI Technology", count: 12, color: "primary" },
                { icon: Shield, title: "Product Safety", count: 18, color: "secondary" },
                { icon: TrendingUp, title: "Health Tips", count: 24, color: "primary" },
                { icon: Scan, title: "How-To Guides", count: 15, color: "secondary" },
              ].map((category, index) => (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover-glow cursor-pointer text-center"
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 bg-${category.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <category.icon className={`w-6 h-6 text-${category.color}`} />
                    </div>
                    <CardTitle className="text-charcoal">{category.title}</CardTitle>
                    <CardDescription>{category.count} articles</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "AI Technology",
                  title: "Understanding AI-Powered Ingredient Analysis",
                  excerpt:
                    "Learn how our machine learning models process millions of ingredient combinations to provide personalized safety assessments.",
                  date: "January 12, 2025",
                  readTime: "6 min",
                  slug: "ai-ingredient-analysis",
                },
                {
                  category: "Product Safety",
                  title: "Hidden Allergens: What Labels Don't Tell You",
                  excerpt:
                    "Discover the most common hidden allergens in everyday products and how TruWell AI helps you identify them instantly.",
                  date: "January 10, 2025",
                  readTime: "5 min",
                  slug: "hidden-allergens",
                },
                {
                  category: "Health Tips",
                  title: "Building Your Personalized Health Profile",
                  excerpt:
                    "A comprehensive guide to setting up your health profile for the most accurate product safety recommendations.",
                  date: "January 8, 2025",
                  readTime: "7 min",
                  slug: "health-profile-guide",
                },
                {
                  category: "How-To Guides",
                  title: "Mastering Product Scanning: Tips & Tricks",
                  excerpt:
                    "Get the best scanning results with these expert tips on lighting, angles, and camera positioning.",
                  date: "January 5, 2025",
                  readTime: "4 min",
                  slug: "scanning-tips",
                },
                {
                  category: "Product Safety",
                  title: "Decoding Safety Scores: What Do They Mean?",
                  excerpt:
                    "Understand how we calculate safety scores and what each rating means for your health and wellness.",
                  date: "January 3, 2025",
                  readTime: "5 min",
                  slug: "safety-scores-explained",
                },
                {
                  category: "AI Technology",
                  title: "The Science Behind OCR Text Recognition",
                  excerpt:
                    "Explore the optical character recognition technology that reads ingredient labels with 98% accuracy.",
                  date: "December 30, 2024",
                  readTime: "8 min",
                  slug: "ocr-technology",
                },
              ].map((article, index) => (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover-glow cursor-pointer group"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-primary/10 text-primary text-xs">{article.category}</Badge>
                      <span className="text-xs text-charcoal/60 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                    </div>
                    <CardTitle className="text-lg text-charcoal group-hover:text-primary transition-colors mb-3">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-charcoal/70 mb-4">{article.excerpt}</CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-charcoal/60 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime} read
                      </span>
                      <Link href={`/blog/${article.slug}`}>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/5 bg-transparent"
              >
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-xl text-white/90 mb-8 text-pretty">
              Get the latest health insights, product safety tips, and AI technology updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white border-white text-charcoal placeholder:text-charcoal/50"
              />
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

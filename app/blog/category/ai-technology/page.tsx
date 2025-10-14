import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Sparkles, Brain, Cpu, Zap, Database, Eye } from "lucide-react"
import Link from "next/link"
import { getArticlesByCategory } from "@/lib/articles"

export default function AITechnologyPage() {
  const aiArticles = getArticlesByCategory("AI Technology")

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint via-white to-mint">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <Link href="/blog">
              <Button variant="ghost" className="mb-6 text-primary hover:text-primary/80">
                ← Back to Blog
              </Button>
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center hover-glow">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <Badge className="bg-primary/10 text-primary text-lg px-4 py-2">AI Technology</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6 text-balance">
              The AI Behind TruWell: Innovation in Health Tech
            </h1>
            <p className="text-xl text-charcoal/70 mb-8 text-pretty max-w-3xl leading-relaxed">
              Explore the cutting-edge artificial intelligence, machine learning, and computer vision technologies that
              power TruWell AI's revolutionary product scanning and ingredient analysis system. Discover how we're
              making health safety accessible to everyone through advanced AI.
            </p>
            <div className="flex items-center gap-6 text-charcoal/60">
              <span className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                {aiArticles.length} In-Depth Articles
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-secondary" />
                Expert Insights
              </span>
            </div>
          </div>
        </section>

        {/* AI Technology Overview */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Our AI Technology Stack</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Eye,
                  title: "Computer Vision",
                  description:
                    "Advanced image recognition and OCR technology that reads product labels with 98% accuracy in any lighting condition.",
                  features: ["Real-time scanning", "Multi-language support", "Curved surface detection"],
                },
                {
                  icon: Brain,
                  title: "Machine Learning",
                  description:
                    "Neural networks trained on millions of ingredient combinations to identify health risks and allergens instantly.",
                  features: ["Personalized analysis", "Continuous learning", "95% accuracy rate"],
                },
                {
                  icon: Database,
                  title: "Natural Language Processing",
                  description:
                    "NLP models that parse complex ingredient lists and understand scientific nomenclature across multiple languages.",
                  features: ["Ingredient parsing", "Chemical name recognition", "Context understanding"],
                },
              ].map((tech, index) => (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover-glow text-center fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 hover-glow-secondary">
                      <tech.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-charcoal mb-3">{tech.title}</CardTitle>
                    <CardDescription className="text-charcoal/70 mb-4 leading-relaxed">
                      {tech.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {tech.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-charcoal/60">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Key Features */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mb-16 border border-primary/20">
              <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">What Makes Our AI Different</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Real-Time Processing",
                    description: "Complete scan analysis in under 2 seconds with cloud-based AI acceleration",
                  },
                  {
                    title: "Personalized Intelligence",
                    description: "AI adapts to your unique health profile, allergies, and dietary preferences",
                  },
                  {
                    title: "Continuous Learning",
                    description: "Models improve daily with user feedback and new research data",
                  },
                  {
                    title: "Privacy-First Design",
                    description: "On-device processing where possible, encrypted data, zero image storage",
                  },
                  {
                    title: "Multi-Modal Analysis",
                    description: "Combines OCR, barcode scanning, and image recognition for maximum accuracy",
                  },
                  {
                    title: "Expert-Validated",
                    description: "AI recommendations reviewed by medical professionals and nutritionists",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal mb-1">{feature.title}</h4>
                      <p className="text-sm text-charcoal/70 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 px-4 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Deep Dive: AI Technology Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiArticles.map((article, index) => (
                <Card
                  key={article.id}
                  className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover-glow cursor-pointer group fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Cpu className="w-16 h-16 text-primary/30 group-hover:text-primary/50 transition-colors" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-primary/10 text-primary text-xs hover-glow">AI Technology</Badge>
                      <span className="text-xs text-charcoal/60 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                    </div>
                    <CardTitle className="text-lg text-charcoal group-hover:text-primary transition-colors mb-3">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-charcoal/70 mb-4 leading-relaxed">
                      {article.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-charcoal/60">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                        <span>{article.author}</span>
                      </div>
                      <Link href={`/blog/${article.slug}`}>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                          Read
                          <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="w-12 h-12 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Experience AI-Powered Health Safety</h2>
            <p className="text-xl text-white/90 mb-8 text-pretty">
              See how our advanced AI technology can help you make safer, healthier choices every day. Download TruWell
              AI and scan your first product in seconds.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 button-hover text-lg px-8"
            >
              Download TruWell AI
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

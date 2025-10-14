import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Share2, Bookmark, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogArticlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mint via-white to-mint">
      <Header />

      <main className="pt-20">
        {/* Article Header */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog">
              <Button variant="ghost" className="mb-6 text-primary hover:text-primary/80">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <Badge className="mb-4 bg-primary/10 text-primary">AI Technology</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 text-balance">
              How TruWell AI's Advanced Scanning Technology Works
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-8 text-charcoal/60">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                January 15, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />8 min read
              </span>
              <span>By Dr. Sarah Chen</span>
            </div>

            <div className="flex gap-3 mb-8">
              <Button
                variant="outline"
                size="sm"
                className="border-primary/30 text-primary hover:bg-primary/5 bg-transparent"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/30 text-primary hover:bg-primary/5 bg-transparent"
              >
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>

            <div className="h-96 bg-gradient-to-br from-primary to-secondary rounded-lg mb-12" />
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-charcoal/80 leading-relaxed">
                <p className="text-xl text-charcoal/90 font-medium">
                  At TruWell AI, we've built one of the most sophisticated product scanning systems in the health tech
                  industry. Our technology combines multiple AI models to deliver instant, accurate ingredient analysis
                  that helps millions make safer choices every day.
                </p>

                <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">The Three-Layer AI System</h2>

                <p>
                  Our scanning technology operates on three distinct layers, each powered by specialized machine
                  learning models that work together seamlessly:
                </p>

                <h3 className="text-2xl font-semibold text-charcoal mt-8 mb-4">
                  1. Computer Vision & OCR (Optical Character Recognition)
                </h3>

                <p>
                  The first layer uses advanced computer vision to detect and isolate ingredient labels from product
                  packaging. Our proprietary OCR system, trained on over 5 million product labels, can read text in
                  various fonts, sizes, and lighting conditions with 98% accuracy.
                </p>

                <p>Key capabilities include:</p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Real-time text detection and extraction from live camera feeds</li>
                  <li>Multi-language support (English, Spanish, French, German)</li>
                  <li>Handling of curved surfaces, reflections, and poor lighting</li>
                  <li>Automatic correction of perspective distortion</li>
                </ul>

                <h3 className="text-2xl font-semibold text-charcoal mt-8 mb-4">
                  2. Natural Language Processing & Ingredient Parsing
                </h3>

                <p>
                  Once text is extracted, our NLP models parse the ingredient list, identifying individual components
                  and their chemical names. This layer handles the complexity of ingredient nomenclature, including:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Scientific names (e.g., "Sodium Lauryl Sulfate")</li>
                  <li>Common names (e.g., "Vitamin C" for "Ascorbic Acid")</li>
                  <li>E-numbers and food additive codes</li>
                  <li>Allergen declarations and "may contain" warnings</li>
                </ul>

                <h3 className="text-2xl font-semibold text-charcoal mt-8 mb-4">
                  3. Health Risk Assessment & Personalization
                </h3>

                <p>
                  The final layer is where the magic happens. Our health risk assessment model cross-references
                  identified ingredients against:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your personal health profile (allergies, conditions, preferences)</li>
                  <li>Medical databases and research papers</li>
                  <li>FDA warnings and regulatory information</li>
                  <li>Community-reported reactions and experiences</li>
                </ul>

                <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">The Training Process</h2>

                <p>
                  Building this system required training our AI on massive datasets. Here's what went into creating
                  TruWell AI:
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-8">
                  <h4 className="text-xl font-semibold text-charcoal mb-4">Training Data</h4>
                  <ul className="space-y-2">
                    <li>
                      <strong>5 million product labels</strong> from grocery stores, pharmacies, and online retailers
                    </li>
                    <li>
                      <strong>2 million ingredient combinations</strong> with known health effects
                    </li>
                    <li>
                      <strong>500,000 medical research papers</strong> on ingredient safety
                    </li>
                    <li>
                      <strong>1 million user scans</strong> with feedback for continuous improvement
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">Real-Time Processing</h2>

                <p>
                  Speed is crucial for a great user experience. Our system processes a complete scan in under 2 seconds:
                </p>

                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>
                    <strong>0-500ms:</strong> Camera capture and image preprocessing
                  </li>
                  <li>
                    <strong>500-1000ms:</strong> OCR text extraction and ingredient parsing
                  </li>
                  <li>
                    <strong>1000-1500ms:</strong> Health risk assessment and personalization
                  </li>
                  <li>
                    <strong>1500-2000ms:</strong> Results display with recommendations
                  </li>
                </ol>

                <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">Continuous Improvement</h2>

                <p>Our AI doesn't stop learning. Every scan contributes to improving our models through:</p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>User feedback:</strong> When users report incorrect readings, we retrain our models
                  </li>
                  <li>
                    <strong>New product additions:</strong> Our database grows daily with new products
                  </li>
                  <li>
                    <strong>Research updates:</strong> We incorporate the latest health research automatically
                  </li>
                  <li>
                    <strong>A/B testing:</strong> We constantly test new model versions for accuracy improvements
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">Privacy & Security</h2>

                <p>
                  All processing happens with your privacy in mind. Your health profile is encrypted end-to-end, and
                  scanned images are never stored on our servers. We use on-device processing where possible and
                  anonymize all data used for model training.
                </p>

                <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">The Future of Scanning</h2>

                <p>We're constantly pushing the boundaries of what's possible. Here's what's coming next:</p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Offline scanning:</strong> Full functionality without internet connection
                  </li>
                  <li>
                    <strong>Barcode integration:</strong> Instant product lookup via UPC codes
                  </li>
                  <li>
                    <strong>AR visualization:</strong> See ingredient breakdowns in augmented reality
                  </li>
                  <li>
                    <strong>Voice commands:</strong> Hands-free scanning while shopping
                  </li>
                </ul>

                <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-8 my-12 text-center">
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Try It Yourself</h3>
                  <p className="text-charcoal/70 mb-6">
                    Experience the power of AI-driven product scanning. Download TruWell AI today and see how easy it is
                    to make healthier choices.
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Download TruWell AI
                  </Button>
                </div>

                <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">Conclusion</h2>

                <p>
                  TruWell AI's scanning technology represents years of research, millions of data points, and countless
                  hours of engineering. But at its core, it's about one simple goal: making it easier for you to
                  understand what's in your products and make informed decisions about your health.
                </p>

                <p>
                  As we continue to improve and expand our capabilities, we remain committed to transparency, accuracy,
                  and putting your health first. Thank you for being part of our journey to make product safety
                  accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 px-4 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Understanding AI-Powered Ingredient Analysis",
                  excerpt: "Learn how machine learning processes ingredient combinations...",
                  readTime: "6 min",
                },
                {
                  title: "The Science Behind OCR Text Recognition",
                  excerpt: "Explore the optical character recognition technology...",
                  readTime: "8 min",
                },
                {
                  title: "Building Your Personalized Health Profile",
                  excerpt: "A comprehensive guide to setting up your health profile...",
                  readTime: "7 min",
                },
              ].map((article, index) => (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover-glow cursor-pointer group"
                >
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <CardHeader>
                    <CardTitle className="text-lg text-charcoal group-hover:text-primary transition-colors mb-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-charcoal/70 mb-4">{article.excerpt}</CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-charcoal/60 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime} read
                      </span>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

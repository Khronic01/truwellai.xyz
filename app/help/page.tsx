import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, BookOpen, Smartphone, Shield, Users, Zap, ChevronRight, Star } from "lucide-react"

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Help Center</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">How can we help you?</h1>
            <p className="text-xl text-slate-600 mb-8 text-pretty max-w-2xl mx-auto">
              Find answers to common questions, learn how to use TruWell AI, and get the most out of your health
              journey.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Search for help articles, features, or topics..."
                className="pl-12 pr-4 py-3 text-lg border-emerald-200 focus:border-emerald-400"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700">
                Search
              </Button>
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Popular Topics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-emerald-200 hover:border-emerald-300 transition-all hover:shadow-lg cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                    <Smartphone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-900">Getting Started</CardTitle>
                  <CardDescription>Learn the basics of using TruWell AI</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-slate-600">12 articles</p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 hover:border-emerald-300 transition-all hover:shadow-lg cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                    <Zap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-900">Scanning Products</CardTitle>
                  <CardDescription>Master the art of product scanning</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-slate-600">8 articles</p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 hover:border-emerald-300 transition-all hover:shadow-lg cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                    <Shield className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-900">Safety & Privacy</CardTitle>
                  <CardDescription>Your data security and privacy</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-slate-600">6 articles</p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 hover:border-emerald-300 transition-all hover:shadow-lg cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-900">Account & Profile</CardTitle>
                  <CardDescription>Manage your account settings</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-slate-600">10 articles</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-emerald-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-emerald-700">
                  How accurate is TruWell AI's ingredient analysis?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pt-2">
                  TruWell AI uses advanced machine learning algorithms trained on millions of product labels and
                  ingredient databases. Our accuracy rate is over 95% for ingredient identification and safety
                  assessment. We continuously improve our AI models based on user feedback and new research data.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-emerald-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-emerald-700">
                  Can I use TruWell AI offline?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pt-2">
                  TruWell AI requires an internet connection for real-time ingredient analysis and safety assessments.
                  However, your previously scanned products and their safety scores are cached locally, so you can
                  review them offline. We're working on offline scanning capabilities for future updates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-emerald-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-emerald-700">
                  How do I set up my health profile and allergies?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pt-2">
                  After downloading the app, go to Settings &gt; Health Profile. You can add allergies, dietary
                  restrictions, health conditions, and preferences. This information helps TruWell AI provide
                  personalized safety assessments. Your health data is encrypted and never shared with third parties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-emerald-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-emerald-700">
                  What types of products can I scan?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pt-2">
                  TruWell AI can scan food products, beverages, cosmetics, personal care items, cleaning products, and
                  supplements. We support products with ingredient labels in English, Spanish, French, and German. Our
                  database includes over 2 million products and is constantly expanding.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-emerald-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-emerald-700">
                  Is my personal health data secure?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pt-2">
                  Absolutely. We use bank-level encryption (AES-256) to protect your data. Your health information is
                  stored locally on your device and encrypted before any cloud sync. We're HIPAA compliant and never
                  sell or share your personal health data with advertisers or third parties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-emerald-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-emerald-700">
                  How much does TruWell AI cost?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pt-2">
                  TruWell AI offers a free tier with 10 scans per month and basic safety assessments. Our Premium plan
                  ($9.99/month) includes unlimited scans, detailed ingredient analysis, expert consultations, and
                  advanced health insights. We also offer a family plan for $19.99/month covering up to 6 family
                  members.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-emerald-200 hover:border-emerald-300 transition-all hover:shadow-lg cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-emerald-100 text-emerald-800">Getting Started</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-slate-600">4.9</span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-emerald-700 transition-colors">
                    Complete Guide to Product Scanning
                  </CardTitle>
                  <CardDescription>
                    Learn how to get the most accurate results when scanning product labels with TruWell AI.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">5 min read</span>
                    <ChevronRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 hover:border-emerald-300 transition-all hover:shadow-lg cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-100 text-blue-800">Health Tips</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-slate-600">4.8</span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-emerald-700 transition-colors">
                    Understanding Ingredient Safety Scores
                  </CardTitle>
                  <CardDescription>
                    Decode what our AI-powered safety scores mean and how to use them for better health decisions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">7 min read</span>
                    <ChevronRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 hover:border-emerald-300 transition-all hover:shadow-lg cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-100 text-purple-800">Advanced</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-slate-600">4.7</span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-emerald-700 transition-colors">
                    Setting Up Family Health Profiles
                  </CardTitle>
                  <CardDescription>
                    Create personalized health profiles for each family member to get tailored safety recommendations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">4 min read</span>
                    <ChevronRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 px-4 bg-emerald-50">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Still need help?</h2>
            <p className="text-xl text-slate-600 mb-8 text-pretty">
              Can't find what you're looking for? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Contact Support</Button>
              <Button
                variant="outline"
                className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 bg-transparent"
              >
                Join Community
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

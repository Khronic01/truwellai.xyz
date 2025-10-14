import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Phone, Mail, Clock, CheckCircle, Zap } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">24/7 Support Available</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">We're Here to Help</h1>
            <p className="text-xl text-slate-600 mb-8 text-pretty max-w-2xl mx-auto">
              Get instant support for TruWell AI. Our team is dedicated to helping you make safer, healthier choices.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="border-emerald-200 hover:border-emerald-300 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-900">Live Chat</CardTitle>
                  <CardDescription>Get instant help from our support team</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-slate-600 mb-4">Average response time: 2 minutes</p>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Start Chat</Button>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 hover:border-emerald-300 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-900">Email Support</CardTitle>
                  <CardDescription>Send us a detailed message</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-slate-600 mb-4">Response within 4 hours</p>
                  <Button
                    variant="outline"
                    className="w-full border-emerald-300 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                  >
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 hover:border-emerald-300 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-900">Phone Support</CardTitle>
                  <CardDescription>Speak directly with our experts</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-slate-600 mb-4">Mon-Fri, 9AM-6PM EST</p>
                  <Button
                    variant="outline"
                    className="w-full border-emerald-300 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                  >
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Status */}
        <section className="py-12 px-4 bg-white/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">System Status</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <CardTitle className="text-green-900">All Systems Operational</CardTitle>
                      <CardDescription>Everything is running smoothly</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">App Performance</span>
                      <Badge className="bg-green-100 text-green-800">99.9% Uptime</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">AI Scanning</span>
                      <Badge className="bg-green-100 text-green-800">Operational</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Database</span>
                      <Badge className="bg-green-100 text-green-800">Healthy</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-slate-600" />
                    <div>
                      <CardTitle className="text-slate-900">Response Times</CardTitle>
                      <CardDescription>Current support metrics</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Live Chat</span>
                      <Badge variant="secondary">2 min avg</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Email</span>
                      <Badge variant="secondary">4 hrs avg</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Phone</span>
                      <Badge variant="secondary">30 sec avg</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Help */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Quick Help</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Common Issues</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer">
                    <Zap className="w-5 h-5 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">App won't scan products</p>
                      <p className="text-sm text-slate-600">Check camera permissions and lighting</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer">
                    <Zap className="w-5 h-5 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">Incorrect ingredient analysis</p>
                      <p className="text-sm text-slate-600">Report the issue for AI improvement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer">
                    <Zap className="w-5 h-5 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">Account sync problems</p>
                      <p className="text-sm text-slate-600">Sign out and back in to refresh</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Getting Started</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">Download the app</p>
                      <p className="text-sm text-slate-600">Available on iOS and Android</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">Set up your profile</p>
                      <p className="text-sm text-slate-600">Add allergies and health preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">Start scanning</p>
                      <p className="text-sm text-slate-600">Point camera at product labels</p>
                    </div>
                  </div>
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

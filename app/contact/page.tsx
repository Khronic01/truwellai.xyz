import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, HeadphonesIcon } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Get in Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">Contact TruWell AI</h1>
            <p className="text-xl text-slate-600 mb-8 text-pretty max-w-2xl mx-auto">
              Have questions about our AI-powered health scanning? We'd love to hear from you. Reach out to our team
              anytime.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="border-emerald-200 hover:border-emerald-300 transition-colors text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-900">Live Chat</CardTitle>
                  <CardDescription>Instant support available</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">Available 24/7</p>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 hover:border-emerald-300 transition-colors text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-900">Phone</CardTitle>
                  <CardDescription>Speak with our team</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-slate-900 mb-1">+1 (555) 123-4567</p>
                  <p className="text-sm text-slate-600">Mon-Fri, 9AM-6PM EST</p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 hover:border-emerald-300 transition-colors text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-900">Email</CardTitle>
                  <CardDescription>Send us a message</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-slate-900 mb-1">hello@truwell.ai</p>
                  <p className="text-sm text-slate-600">Response within 4 hours</p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 hover:border-emerald-300 transition-colors text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-900">Office</CardTitle>
                  <CardDescription>Visit us in person</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">San Francisco, CA</p>
                  <p className="text-sm text-slate-600">By appointment only</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4 bg-white/50">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="border-emerald-200 focus:border-emerald-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="border-emerald-200 focus:border-emerald-400" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="border-emerald-200 focus:border-emerald-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="border-emerald-200 focus:border-emerald-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger className="border-emerald-200 focus:border-emerald-400">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="press">Press & Media</SelectItem>
                        <SelectItem value="feedback">Product Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      className="min-h-32 border-emerald-200 focus:border-emerald-400"
                    />
                  </div>

                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Send Message</Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in touch</h3>
                  <p className="text-slate-600 mb-6">
                    We're here to help you make healthier choices. Whether you have questions about our AI technology,
                    need technical support, or want to explore partnership opportunities, we'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Business Hours</h4>
                      <p className="text-slate-600 text-sm">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-slate-600 text-sm">Saturday - Sunday: 10:00 AM - 4:00 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <HeadphonesIcon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">24/7 Support</h4>
                      <p className="text-slate-600 text-sm">
                        Our AI-powered chat support is available around the clock for urgent technical issues and basic
                        questions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Community</h4>
                      <p className="text-slate-600 text-sm">
                        Join our community forum to connect with other health-conscious users and share tips.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-emerald-50 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
                  <div className="space-y-3">
                    <a
                      href="/help"
                      className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      <span className="text-sm">Help Center</span>
                    </a>
                    <a
                      href="/support"
                      className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      <span className="text-sm">Technical Support</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      <span className="text-sm">Community Forum</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      <span className="text-sm">Feature Requests</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Offices</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-emerald-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    <CardTitle className="text-emerald-900">San Francisco HQ</CardTitle>
                  </div>
                  <CardDescription>Our main headquarters and R&D center</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-2">123 Innovation Drive</p>
                  <p className="text-sm text-slate-600 mb-2">San Francisco, CA 94105</p>
                  <p className="text-sm text-slate-600">United States</p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    <CardTitle className="text-emerald-900">New York Office</CardTitle>
                  </div>
                  <CardDescription>East Coast operations and partnerships</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-2">456 Health Avenue</p>
                  <p className="text-sm text-slate-600 mb-2">New York, NY 10001</p>
                  <p className="text-sm text-slate-600">United States</p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    <CardTitle className="text-emerald-900">London Office</CardTitle>
                  </div>
                  <CardDescription>European operations and compliance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-2">789 Wellness Street</p>
                  <p className="text-sm text-slate-600 mb-2">London, EC1A 1BB</p>
                  <p className="text-sm text-slate-600">United Kingdom</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

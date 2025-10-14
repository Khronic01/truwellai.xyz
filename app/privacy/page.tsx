import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Eye, UserCheck, Globe, Calendar, FileText } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Privacy Policy</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">Your Privacy Matters</h1>
            <p className="text-xl text-slate-600 mb-8 text-pretty max-w-2xl mx-auto">
              We're committed to protecting your personal information and health data. Learn how we collect, use, and
              safeguard your information.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Last updated: January 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Version 2.1</span>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Highlights */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Privacy at a Glance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="border-emerald-200 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-900">Encrypted Data</CardTitle>
                  <CardDescription>Bank-level AES-256 encryption</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-emerald-200 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-900">No Data Selling</CardTitle>
                  <CardDescription>We never sell your personal information</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-emerald-200 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserCheck className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-900">HIPAA Compliant</CardTitle>
                  <CardDescription>Healthcare-grade privacy standards</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-emerald-200 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-900">GDPR Ready</CardTitle>
                  <CardDescription>Full compliance with EU regulations</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 px-4 bg-white/50">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-slate max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  TruWell AI ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of
                  your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
                  your information when you use our mobile application and related services (collectively, the
                  "Service").
                </p>
                <p className="text-slate-600 leading-relaxed">
                  By using our Service, you agree to the collection and use of information in accordance with this
                  Privacy Policy. We will not use or share your information with anyone except as described in this
                  Privacy Policy.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">2.1 Personal Information</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We may collect personally identifiable information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                  <li>Create an account or register for our Service</li>
                  <li>Set up your health profile, including allergies and dietary restrictions</li>
                  <li>Contact us for customer support</li>
                  <li>Participate in surveys or provide feedback</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">2.2 Health Information</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  With your explicit consent, we collect health-related information including:
                </p>
                <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                  <li>Allergies and food sensitivities</li>
                  <li>Dietary preferences and restrictions</li>
                  <li>Health conditions relevant to product safety</li>
                  <li>Medication information (if provided)</li>
                  <li>Pregnancy status (if applicable)</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">2.3 Usage Data</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We automatically collect certain information when you use our Service:
                </p>
                <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                  <li>Device information (model, operating system, unique identifiers)</li>
                  <li>App usage patterns and feature interactions</li>
                  <li>Product scanning history and results</li>
                  <li>Search queries and preferences</li>
                  <li>Crash reports and performance data</li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We use the collected information for various purposes:
                </p>
                <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                  <li>Provide personalized product safety assessments</li>
                  <li>Improve our AI algorithms and scanning accuracy</li>
                  <li>Send you relevant health and safety alerts</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Analyze usage patterns to enhance our Service</li>
                  <li>Comply with legal obligations and protect our rights</li>
                  <li>Send marketing communications (with your consent)</li>
                </ul>
              </div>

              {/* Data Sharing */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the
                  following circumstances:
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">4.1 Service Providers</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We may share your information with trusted third-party service providers who assist us in operating
                  our Service, conducting our business, or serving our users, provided they agree to keep this
                  information confidential.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">4.2 Legal Requirements</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We may disclose your information if required to do so by law or in response to valid requests by
                  public authorities.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">4.3 Business Transfers</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred as part
                  of that transaction.
                </p>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Security</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                  <li>AES-256 encryption for data at rest and in transit</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Multi-factor authentication for account access</li>
                  <li>Secure cloud infrastructure with AWS/Google Cloud</li>
                  <li>Employee training on data protection best practices</li>
                  <li>Incident response procedures for security breaches</li>
                </ul>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Privacy Rights</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                  <li>
                    <strong>Access:</strong> Request copies of your personal information
                  </li>
                  <li>
                    <strong>Rectification:</strong> Request correction of inaccurate information
                  </li>
                  <li>
                    <strong>Erasure:</strong> Request deletion of your personal information
                  </li>
                  <li>
                    <strong>Portability:</strong> Request transfer of your data to another service
                  </li>
                  <li>
                    <strong>Restriction:</strong> Request limitation of processing your information
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to processing of your personal information
                  </li>
                  <li>
                    <strong>Withdraw Consent:</strong> Withdraw consent for data processing
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  To exercise these rights, please contact us at privacy@truwell.ai or through our in-app settings.
                </p>
              </div>

              {/* Data Retention */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Retention</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                  this Privacy Policy:
                </p>
                <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                  <li>Account information: Until account deletion or 3 years of inactivity</li>
                  <li>Health profile data: Until you remove it or delete your account</li>
                  <li>Scanning history: 2 years or until account deletion</li>
                  <li>Usage analytics: Aggregated data retained indefinitely</li>
                  <li>Support communications: 3 years for quality assurance</li>
                </ul>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Children's Privacy</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Our Service is not intended for children under 13 years of age. We do not knowingly collect personal
                  information from children under 13. If you are a parent or guardian and believe your child has
                  provided us with personal information, please contact us immediately.
                </p>
              </div>

              {/* International Transfers */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. International Data Transfers</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Your information may be transferred to and processed in countries other than your own. We ensure
                  appropriate safeguards are in place, including:
                </p>
                <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                  <li>Standard Contractual Clauses approved by the European Commission</li>
                  <li>Adequacy decisions for data transfers to approved countries</li>
                  <li>Certification under privacy frameworks like Privacy Shield successors</li>
                </ul>
              </div>

              {/* Changes to Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by:
                </p>
                <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                  <li>Posting the new Privacy Policy on this page</li>
                  <li>Sending you an email notification</li>
                  <li>Providing an in-app notification</li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  Changes become effective immediately upon posting. Your continued use of the Service after any changes
                  constitutes acceptance of the new Privacy Policy.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Us</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-emerald-50 rounded-lg p-6">
                  <div className="space-y-2">
                    <p className="text-slate-900 font-medium">TruWell AI Privacy Team</p>
                    <p className="text-slate-600">Email: privacy@truwell.ai</p>
                    <p className="text-slate-600">Phone: +1 (555) 123-4567</p>
                    <p className="text-slate-600">Address: 123 Innovation Drive, San Francisco, CA 94105</p>
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

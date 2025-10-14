import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Clock, DollarSign, Heart, Zap, Users, Coffee, Laptop, GraduationCap } from "lucide-react"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mint via-white to-mint">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Join Our Team</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 text-balance">
              Build the Future of Health Tech
            </h1>
            <p className="text-xl text-charcoal/70 mb-8 text-pretty max-w-2xl mx-auto">
              Join a passionate team using AI to make the world healthier. We're looking for talented individuals who
              want to make a real impact on people's lives.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View Open Positions
            </Button>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Why TruWell AI?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover-glow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-charcoal">Meaningful Work</CardTitle>
                  <CardDescription>Make a real impact on people's health</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal/70 text-center">
                    Your work directly helps millions make safer, healthier choices every day.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 hover:border-secondary/40 transition-all hover:shadow-xl hover-glow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-charcoal">Cutting-Edge Tech</CardTitle>
                  <CardDescription>Work with the latest AI technology</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal/70 text-center">
                    Build with advanced machine learning, computer vision, and mobile AI systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover-glow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-charcoal">Amazing Team</CardTitle>
                  <CardDescription>Collaborate with world-class talent</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal/70 text-center">
                    Work alongside experts from Google, Apple, and leading healthcare institutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Benefits & Perks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: DollarSign, title: "Competitive Salary", desc: "Top-tier compensation + equity" },
                { icon: Heart, title: "Health Coverage", desc: "Medical, dental, vision for you & family" },
                { icon: Laptop, title: "Remote Flexible", desc: "Work from anywhere or our offices" },
                { icon: Coffee, title: "Unlimited PTO", desc: "Take time off when you need it" },
                { icon: GraduationCap, title: "Learning Budget", desc: "$2,000/year for courses & conferences" },
                { icon: Users, title: "Team Events", desc: "Regular offsites and team building" },
                { icon: Zap, title: "Latest Equipment", desc: "MacBook Pro, monitors, and tools" },
                { icon: Heart, title: "Wellness Program", desc: "Gym membership & mental health support" },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover-glow text-center"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-base text-charcoal">{benefit.title}</CardTitle>
                    <CardDescription className="text-sm">{benefit.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Open Positions</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Senior AI/ML Engineer",
                  department: "Engineering",
                  location: "San Francisco, CA / Remote",
                  type: "Full-time",
                  salary: "$180K - $250K",
                },
                {
                  title: "Mobile Engineer (iOS/Android)",
                  department: "Engineering",
                  location: "San Francisco, CA / Remote",
                  type: "Full-time",
                  salary: "$160K - $220K",
                },
                {
                  title: "Product Designer",
                  department: "Design",
                  location: "San Francisco, CA / Remote",
                  type: "Full-time",
                  salary: "$140K - $190K",
                },
                {
                  title: "Health Data Scientist",
                  department: "Data Science",
                  location: "Remote",
                  type: "Full-time",
                  salary: "$150K - $200K",
                },
                {
                  title: "Customer Success Manager",
                  department: "Customer Success",
                  location: "New York, NY / Remote",
                  type: "Full-time",
                  salary: "$90K - $130K",
                },
                {
                  title: "Marketing Manager",
                  department: "Marketing",
                  location: "Remote",
                  type: "Full-time",
                  salary: "$110K - $150K",
                },
              ].map((job, index) => (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover-glow"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-charcoal mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-primary/10 text-primary">{job.department}</Badge>
                          <Badge variant="outline" className="border-primary/30 text-charcoal/70">
                            <MapPin className="w-3 h-3 mr-1" />
                            {job.location}
                          </Badge>
                          <Badge variant="outline" className="border-primary/30 text-charcoal/70">
                            <Clock className="w-3 h-3 mr-1" />
                            {job.type}
                          </Badge>
                          <Badge variant="outline" className="border-primary/30 text-charcoal/70">
                            <DollarSign className="w-3 h-3 mr-1" />
                            {job.salary}
                          </Badge>
                        </div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">Apply Now</Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hiring Process */}
        <section className="py-16 px-4 bg-white/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Our Hiring Process</h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Application Review",
                  desc: "We review your application and resume within 3-5 business days.",
                },
                {
                  step: "2",
                  title: "Initial Call",
                  desc: "30-minute conversation with our recruiting team to learn about you and the role.",
                },
                {
                  step: "3",
                  title: "Technical Interview",
                  desc: "For technical roles: coding challenge or system design discussion.",
                },
                {
                  step: "4",
                  title: "Team Interviews",
                  desc: "Meet with team members and hiring manager to discuss your experience.",
                },
                {
                  step: "5",
                  title: "Final Interview",
                  desc: "Conversation with leadership about culture fit and your career goals.",
                },
                {
                  step: "6",
                  title: "Offer",
                  desc: "If it's a match, we'll extend an offer and welcome you to the team!",
                },
              ].map((process, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">{process.title}</h3>
                    <p className="text-charcoal/70">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Briefcase className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-charcoal mb-4">Don't See the Right Role?</h2>
            <p className="text-xl text-charcoal/70 mb-8 text-pretty">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future
              opportunities.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Send General Application
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

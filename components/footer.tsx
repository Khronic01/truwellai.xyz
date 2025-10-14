import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/truwell-logo.png" alt="TruWell AI Logo" width={32} height={32} className="w-8 h-8" />
              <span className="text-lg font-bold text-primary">TruWell AI™</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering health decisions with AI-powered product safety analysis.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/#features"
                className="block text-muted-foreground hover:text-primary transition-colors hover-glow"
              >
                Features
              </Link>
              <Link
                href="/#how-it-works"
                className="block text-muted-foreground hover:text-primary transition-colors hover-glow"
              >
                How It Works
              </Link>
              <Link
                href="/#download"
                className="block text-muted-foreground hover:text-primary transition-colors hover-glow"
              >
                Download
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-primary transition-colors hover-glow"
              >
                About Us
              </Link>
              <Link
                href="/careers"
                className="block text-muted-foreground hover:text-primary transition-colors hover-glow"
              >
                Careers
              </Link>
              <Link
                href="/press"
                className="block text-muted-foreground hover:text-primary transition-colors hover-glow"
              >
                Press
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/help"
                className="block text-muted-foreground hover:text-primary transition-colors hover-glow"
              >
                Help Center
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-primary transition-colors hover-glow"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="block text-muted-foreground hover:text-primary transition-colors hover-glow"
              >
                Privacy
              </Link>
            </div>
          </div>

          {/* Blog */}
          <div className="space-y-4">
            <h4 className="font-semibold">Blog</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/blog"
                className="block text-muted-foreground hover:text-primary transition-colors hover-glow"
              >
                All Articles
              </Link>
              <Link
                href="/blog"
                className="block text-muted-foreground hover:text-primary transition-colors hover-glow"
              >
                AI Technology
              </Link>
              <Link
                href="/blog"
                className="block text-muted-foreground hover:text-primary transition-colors hover-glow"
              >
                Health Tips
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2025 TruWell AI™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

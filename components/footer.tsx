import Link from "next/link"
import { Building2 } from "lucide-react"

export function Footer() {
  return (//container mx-auto px-24 py-16 pt-24 min-h-screen
    <footer className="container mx-auto px-24 pt-2 w-full border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-6 w-6" />
              <span className="font-bold">The Udyog</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Work is Worship. Build Your Future with The Udyog.
            </p>
          </div>
          <div className="px-20">
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-20">
            <h3 className="mb-4 text-sm font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#training" className="text-muted-foreground hover:text-foreground">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/services#placement" className="text-muted-foreground hover:text-foreground">
                  Placement
                </Link>
              </li>
              <li>
                <Link href="/services#consultancy" className="text-muted-foreground hover:text-foreground">
                  Consultancy
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-20">
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                123 Business District
                <br />
                Mumbai, Maharashtra
                <br />
                India
              </li>
              <li>
                <a href="tel:+911234567890" className="text-muted-foreground hover:text-foreground">
                  +91 123 456 7890
                </a>
              </li>
              <li>
                <a href="mailto:info@theudyog.com" className="text-muted-foreground hover:text-foreground">
                  info@theudyog.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Udyog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
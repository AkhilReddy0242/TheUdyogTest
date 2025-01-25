import Link from "next/link"
// import { Building2 } from "lucide-react"
import logo from './LOGO.png'

export function Footer() {
  return (
    <footer className="w-full border-t bg-background pl-8 pr-8">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              {/* <Building2 className="h-6 w-6" /> */}
              <img src={logo.src} alt="UDYOG LOGO" className="h-8 w-8" />
              <span className="font-bold">The Udyog</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Work is Worship. Build Your Future with The Udyog.
            </p>
          </div>
          <div>
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
          <div>
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
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
              2nd floor, H.NO 6-39/114 
                <br />
                 West Venkatapuram, Secunderabad.
                <br />
                India
              </li>
              <li>
                <a href="tel:+911234567890" className="text-muted-foreground hover:text-foreground">
                +91 9059384960 <br/>
                +91 9985681819
                </a>
              </li>
              <li>
                <a href="mailto:info@theudyog.com" className="text-muted-foreground hover:text-foreground">
                services.theudyog@gmail.com
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
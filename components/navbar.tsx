"use client"

import * as React from "react"
import Link from "next/link"
// import { Building2, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { UserNav } from "@/components/auth/user-nav"
import logo from './LOGO.png'
import { useAuth } from "@/lib/auth"
import { Menu } from "lucide-react"
import { VisuallyHidden } from "@/components/ui/visually-hidden"
import Image from "next/image"

const publicRoutes = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Career Opportunities" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const premiumRoutes = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/careers/premium", label: "Career Opportunities" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { user } = useAuth()

  const routes = React.useMemo(() => {
    if (!user) return publicRoutes
    if (user.isPremium) return premiumRoutes
    return [...publicRoutes]
  }, [user])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-8">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          {/* <Building2 className="h-6 w-6" /> */}
          <Image src={logo.src} alt="UDYOG LOGO" className="h-8 w-8" width={10} height={10}/>
          <span className="font-bold">The Udyog</span>
        </Link>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <nav className="flex items-center space-x-6 text-sm font-medium ml-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="transition-colors hover:text-foreground/80"
              >
                {route.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <UserNav />
            <ModeToggle />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-5 w-5" />
                <VisuallyHidden>Open menu</VisuallyHidden>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" aria-describedby="simple-description">
              <SheetHeader>
                <SheetTitle>The Udyog</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="text-foreground/60 transition-colors hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
                <UserNav />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
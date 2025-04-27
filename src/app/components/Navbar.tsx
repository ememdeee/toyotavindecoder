import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { MobileNav } from "./MobileNav"
import type React from "react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-secondary/60 shadow-md">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl font-serif text-primary">Toyota VIN Decoder</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavLink href={process.env.SAMPLE_URL || "#"} nofollow>
                  Sample
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink href="/window-sticker">Window Sticker</NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink href="/unlimited-vin-reports">For Dealers</NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink href="/about-us">About Us</NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink href="/contact-us">Contact Us</NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-inherit group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 font-serif">
                  Tools
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4 md:w-[500px] lg:w-[600px] bg-secondary/50">
                    <div className="grid gap-3 md:grid-cols-2">
                      <ToolLink href="/build-sheet-by-vin" title="Build Sheet by VIN" description="Get a complete factory build sheet for any Toyota by VIN." />
                      <ToolLink href="/options-by-vin" title="Option By VIN" description="Look up factory-installed options and packages for any Toyota by VIN." />
                      <ToolLink href="/warranty-by-vin" title="Warranty Check" description="Check the warranty status and coverage details of a Toyota by VIN." />
                      <ToolLink href="/specs-by-vin" title="Specs By VIN" description="Retrieve detailed specifications, including engine, transmission, and dimensions, for any Toyota by VIN." />
                      <ToolLink href="/paint-code-by-vin" title="Paint Code by VIN" description="Find the exact paint code and color details for a Toyota by VIN." />
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <nav className="flex items-center space-x-2">
          <MobileNav />
          <Button
            asChild
            variant="outline"
            className="hidden md:flex vintage-border text-primary hover:bg-accent rounded-none"
          >
            <Link href="https://www.clearvin.com/en/user/login/?a_aid=b3a49a62" rel="noopener noreferrer">
              Login
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

function NavLink({
  href,
  children,
  nofollow = false,
}: {
  href: string
  children: React.ReactNode
  nofollow?: boolean
}) {
  const linkProps = nofollow
    ? {
        target: "_blank",
        rel: "nofollow noopener noreferrer",
      }
    : {}

  return (
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuLink
        className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 font-serif"
        {...linkProps}
      >
        {children}
      </NavigationMenuLink>
    </Link>
  )
}

function ToolLink({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link
      href={href}
      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    >
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{description}</p>
    </Link>
  )
}


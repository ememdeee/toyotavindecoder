"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  const closeSheet = () => setIsOpen(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6 text-primary" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 bg-secondary">
        <SheetHeader>
          <SheetTitle className="font-serif text-primary">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4 p-4">
          <MobileNavLink href="/sample" onClick={closeSheet}>
            Sample
          </MobileNavLink>
          <MobileNavLink href="/window-sticker-lookup" onClick={closeSheet}>
            Window Sticker
          </MobileNavLink>
          <MobileNavLink href="/build-sheet-by-vin" onClick={closeSheet}>
            Build Sheet by VIN
          </MobileNavLink>
          <MobileNavLink href="/options-by-vin" onClick={closeSheet}>
            Option by VIN
          </MobileNavLink>
          <MobileNavLink href="/warranty-by-vin" onClick={closeSheet}>
            Warranty by VIN
          </MobileNavLink>
          <MobileNavLink href="/specs-by-vin" onClick={closeSheet}>
            Specs by VIN
          </MobileNavLink>
          <MobileNavLink href="/paint-code-by-vin" onClick={closeSheet}>
            Paint Code by VIN
          </MobileNavLink>
          <MobileNavLink href="/about-us" onClick={closeSheet}>
            About Us
          </MobileNavLink>
          <MobileNavLink href="/contact-us" onClick={closeSheet}>
            Contact Us
          </MobileNavLink>
          <MobileNavLink href="https://www.clearvin.com/en/user/login/?a_aid=b3a49a62" onClick={closeSheet}>
            Login
          </MobileNavLink>
          <MobileNavLink href="https://www.clearvin.com/en/user/register/?a_aid=b3a49a62" onClick={closeSheet}>
            Sign Up
          </MobileNavLink>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} className="text-sm font-medium text-primary hover:text-primary/80 font-serif" onClick={onClick}>
      {children}
    </Link>
  )
}
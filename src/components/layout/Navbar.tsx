'use client'

import Link from 'next/link'
import { Menu, X, Globe, User, Bell } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Directory', href: '/directory' },
    { name: 'Matrimony', href: '/matrimony' },
    { name: 'Business', href: '/business' },
    { name: 'Events', href: '/events' },
  ]

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2.5 group">
              <div className="h-9 w-9 bg-primary rounded-lg flex items-center justify-center shadow-sm group-hover:bg-accent transition-colors">
                <span className="text-primary-foreground font-serif font-bold text-xl leading-none mt-0.5">S</span>
              </div>
              <span className="text-2xl font-serif font-bold text-primary tracking-tight group-hover:text-accent transition-colors">
                Swakula Sali
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 border-l border-border pl-4">
              <Button variant="ghost" size="icon" aria-label="Notifications" onClick={() => alert('No new notifications')}>
                <Bell className="h-5 w-5 text-foreground" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Language" onClick={() => alert('Language toggle coming soon')}>
                <Globe className="h-5 w-5 text-foreground" />
              </Button>
              <Link href="/auth" tabIndex={-1}>
                <Button variant="default" size="sm" className="gap-2">
                  <User className="h-4 w-4" />
                  Login
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Main menu"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6 text-foreground" />
              ) : (
                <Menu className="block h-6 w-6 text-foreground" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background shadow-lg absolute w-full left-0 z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-2 px-3 border-t border-border/50 mt-2 pb-4">
              <Button variant="outline" className="w-full justify-start gap-2" onClick={() => alert('Language toggle coming soon')}>
                <Globe className="h-4 w-4" />
                Language
              </Button>
              <Link href="/auth" onClick={() => setIsMobileMenuOpen(false)} tabIndex={-1} className="w-full">
                <Button variant="default" className="w-full justify-start gap-2">
                  <User className="h-4 w-4" />
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

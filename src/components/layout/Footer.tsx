import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-muted py-12 border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-primary tracking-tight">Swakula Sali</span>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              A digital ecosystem connecting the Swakula Sali community worldwide. Preserving our heritage, empowering our future.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/directory" className="text-sm text-muted-foreground hover:text-primary transition-colors">Directory</Link>
              </li>
              <li>
                <Link href="/matrimony" className="text-sm text-muted-foreground hover:text-primary transition-colors">Matrimony</Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">Events</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/donations" className="text-sm text-muted-foreground hover:text-primary transition-colors">Donations</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Swakula Sali Community Platform. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            {/* Social Links placeholders */}
            <span className="text-muted-foreground hover:text-primary cursor-pointer">Facebook</span>
            <span className="text-muted-foreground hover:text-primary cursor-pointer">Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

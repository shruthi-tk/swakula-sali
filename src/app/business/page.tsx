'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { mockBusinesses } from '@/lib/mock-data'
import { Search, Briefcase, MapPin, Globe, Phone, Mail, ArrowUpRight } from 'lucide-react'

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-muted/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="bg-gradient-to-br from-primary to-[#5a1b12] rounded-3xl p-10 md:p-16 text-center text-primary-foreground mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/woven.png')]"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Business & Support Network</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Discover, support, and collaborate with enterprises owned by the Swakula Sali community. From traditional weaving to modern tech startups.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Search businesses or services..." 
                  className="pl-12 h-14 rounded-full bg-white text-foreground border-none text-lg shadow-inner" 
                />
              </div>
              <Button size="lg" className="h-14 rounded-full px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold shadow-lg">
                Register Business
              </Button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-4 overflow-x-auto pb-6 mb-8 scrollbar-hide">
          {['All Businesses', 'Textiles & Silk', 'Technology', 'Food & Catering', 'Retail', 'Consulting'].map((cat, i) => (
            <Button key={i} variant={i === 0 ? 'default' : 'outline'} className={`whitespace-nowrap rounded-full px-6 border-border ${i === 0 ? 'bg-primary' : 'bg-card text-foreground hover:bg-muted'}`}>
              {cat}
            </Button>
          ))}
        </div>

        {/* Business Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mockBusinesses.map((business) => (
            <Card key={business.id} className="border-border/50 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col md:flex-row bg-card">
              <div className="md:w-1/3 bg-muted flex flex-col items-center justify-center p-6 border-r border-border/50">
                <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <Briefcase className="h-8 w-8" />
                </div>
                <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground font-medium border-none">
                  {business.category}
                </Badge>
              </div>
              <div className="md:w-2/3 p-6 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold font-serif text-foreground">{business.name}</h3>
                </div>
                <p className="text-muted-foreground mb-4 flex-grow">{business.description}</p>
                
                <div className="space-y-2 mb-6">
                  {business.services?.map((service, i) => (
                    <span key={i} className="inline-block mr-2 mb-2 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {service}
                    </span>
                  ))}
                </div>

                <div className="mt-auto border-t border-border/50 pt-4 grid grid-cols-2 gap-2 text-sm">
                  {business.contact_phone && (
                    <a href={`tel:${business.contact_phone}`} className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="h-4 w-4 mr-2" /> Call
                    </a>
                  )}
                  {business.contact_email && (
                    <a href={`mailto:${business.contact_email}`} className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="h-4 w-4 mr-2" /> Email
                    </a>
                  )}
                  {business.website_url && (
                    <a href={business.website_url} target="_blank" rel="noopener noreferrer" className="flex items-center text-muted-foreground hover:text-primary transition-colors col-span-2 mt-2">
                      <Globe className="h-4 w-4 mr-2" /> {business.website_url.replace(/^https?:\/\//, '')}
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

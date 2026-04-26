'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { mockDirectory } from '@/lib/mock-data'
import { Search, MapPin, Briefcase, Filter, MessageCircle } from 'lucide-react'

export default function DirectoryPage() {
  return (
    <div className="min-h-screen bg-muted/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">Community Directory</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with Swakula Sali members around the world. Find mentors, reconnect with old friends, or network with professionals.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-card p-6 rounded-2xl shadow-sm border border-border mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input placeholder="Search by name, profession, or skills..." className="pl-10 h-12 bg-background border-border/50" />
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="h-12 px-6 gap-2 border-border/50 bg-background text-foreground">
                <MapPin className="h-4 w-4 text-primary" /> Location
              </Button>
              <Button variant="outline" className="h-12 px-6 gap-2 border-border/50 bg-background text-foreground">
                <Briefcase className="h-4 w-4 text-primary" /> Profession
              </Button>
              <Button variant="secondary" className="h-12 px-6 gap-2">
                <Filter className="h-4 w-4" /> Filter
              </Button>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDirectory.map((profile) => (
            <Card key={profile.id} className="overflow-hidden hover:shadow-lg transition-all border-border/50">
              <div className="h-24 bg-gradient-to-r from-primary/80 to-primary"></div>
              <CardContent className="pt-0 relative">
                <div className="flex justify-between items-start">
                  {/* Avatar */}
                  <div className="h-20 w-20 rounded-full border-4 border-card bg-muted flex items-center justify-center -mt-10 mb-4 shadow-sm relative overflow-hidden">
                    {profile.user.avatar_url ? (
                      <img src={profile.user.avatar_url} alt={profile.user.full_name} className="h-full w-full object-cover" />
                    ) : (
                      <span className="text-2xl font-bold text-muted-foreground font-serif">
                        {profile.user.full_name.charAt(0)}
                      </span>
                    )}
                  </div>
                  {profile.is_poc && (
                    <Badge className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary">
                      City POC
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-xl font-bold font-serif text-foreground">{profile.user.full_name}</h3>
                <p className="text-primary font-medium text-sm mt-1">{profile.user.profession}</p>
                
                <div className="flex items-center text-muted-foreground text-sm mt-3 gap-2">
                  <MapPin className="h-4 w-4" />
                  {profile.user.location}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {profile.user.skills?.map((skill, i) => (
                    <Badge key={i} variant="outline" className="bg-background border-border text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border/50 flex gap-3">
                  <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    View Profile
                  </Button>
                  <Button variant="outline" size="icon" className="text-primary border-primary hover:bg-primary/10">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

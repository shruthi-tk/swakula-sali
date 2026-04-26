'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Heart, Lock, ShieldCheck, Search, Filter } from 'lucide-react'

export default function MatrimonyPage() {
  const mockProfiles = [
    { id: 1, name: 'S. Bhandari', age: 28, height: '5\'10"', education: 'MS in Computer Science', profession: 'Software Engineer', location: 'Pune, MH', photo: false },
    { id: 2, name: 'A. Sali', age: 26, height: '5\'5"', education: 'MBA Finance', profession: 'Bank Manager', location: 'Bengaluru, KA', photo: true },
    { id: 3, name: 'R. Sali', age: 29, height: '6\'0"', education: 'B.Tech', profession: 'Business Owner', location: 'Hyderabad, TS', photo: false },
  ]

  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        {/* Subtle floral pattern for matrimony */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-floral.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-secondary/20 rounded-full mb-6 text-secondary">
                <Heart className="h-8 w-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Swakula Sali Matrimony</h1>
              <p className="text-xl text-white/90 mb-8 max-w-lg">
                Find your life partner within our community. Trusted, verified, and completely private.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8">
                  Create Bio-Data
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white/20 hover:bg-white/10 text-white gap-2">
                  <Lock className="h-4 w-4" /> Login
                </Button>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="hidden md:flex justify-end">
              <Card className="w-80 bg-white/10 border-white/20 backdrop-blur-md text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <ShieldCheck className="h-6 w-6 text-secondary" /> Why Choose Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">1</div>
                    <p className="text-sm">100% Verified Community Profiles</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">2</div>
                    <p className="text-sm">Strict Privacy Controls for Photos</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">3</div>
                    <p className="text-sm">Direct Family-to-Family Connection</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="w-full md:w-1/4">
            <Card className="border-border/50 sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Filter className="h-5 w-5 text-primary" /> Filter Matches
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Age Range</label>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Min" className="h-9" />
                    <span className="text-muted-foreground">-</span>
                    <Input placeholder="Max" className="h-9" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Marital Status</label>
                  <select className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm">
                    <option>Never Married</option>
                    <option>Divorced</option>
                    <option>Widowed</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Location</label>
                  <Input placeholder="City or State" className="h-9" />
                </div>
                <Button className="w-full bg-primary text-primary-foreground">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>

          {/* Matches Feed */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif font-bold text-foreground">Recent Profiles</h2>
              <div className="text-sm text-muted-foreground">Showing 3 of 150+ matches</div>
            </div>

            <div className="space-y-6">
              {mockProfiles.map((profile) => (
                <Card key={profile.id} className="overflow-hidden border-border/50 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row">
                    {/* Photo Area */}
                    <div className="sm:w-48 h-48 sm:h-auto bg-muted relative flex items-center justify-center border-b sm:border-b-0 sm:border-r border-border/50 shrink-0">
                      {profile.photo ? (
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615813967515-e1838c1c56dc?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center"></div>
                      ) : (
                        <div className="text-center p-4">
                          <Lock className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                          <span className="text-xs text-muted-foreground font-medium">Photo Protected</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Details Area */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold font-serif text-foreground">{profile.name} <span className="text-sm font-normal text-muted-foreground ml-2">(ID: SS{1000 + profile.id})</span></h3>
                          <div className="text-sm text-primary font-medium mt-1">{profile.age} Yrs • {profile.height}</div>
                        </div>
                        <Button variant="outline" size="sm" className="hidden sm:flex border-primary text-primary hover:bg-primary/10">
                          Shortlist
                        </Button>
                      </div>

                      <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-muted-foreground mb-6">
                        <div><span className="font-medium text-foreground">Education:</span> {profile.education}</div>
                        <div><span className="font-medium text-foreground">Profession:</span> {profile.profession}</div>
                        <div><span className="font-medium text-foreground">Location:</span> {profile.location}</div>
                      </div>

                      <div className="mt-auto flex gap-3 pt-4 border-t border-border/50">
                        <Button className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                          Send Interest
                        </Button>
                        <Button variant="secondary" className="flex-1 bg-muted text-foreground hover:bg-muted/80">
                          View Full Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-border text-foreground">Load More Profiles</Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

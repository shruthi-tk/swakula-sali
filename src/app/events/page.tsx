'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { mockEvents } from '@/lib/mock-data'
import { Calendar as CalendarIcon, MapPin, Clock, Users, Plus } from 'lucide-react'

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-muted/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-serif font-bold text-primary mb-2">Community Events</h1>
            <p className="text-muted-foreground">Gatherings, cultural festivals, and professional meetups.</p>
          </div>
          <Button className="bg-primary text-primary-foreground gap-2 shadow-md hover:scale-105 transition-transform">
            <Plus className="h-5 w-5" /> Host an Event
          </Button>
        </div>

        {/* Featured Event */}
        {mockEvents.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-6 font-serif">Featured Event</h2>
            <Card className="overflow-hidden border-border/50 shadow-lg relative">
              <div className="absolute top-0 right-0 p-4 z-20">
                <Badge className="bg-secondary text-secondary-foreground px-3 py-1 text-sm shadow-md">Upcoming</Badge>
              </div>
              <div className="flex flex-col md:flex-row">
                <div 
                  className="w-full md:w-2/5 h-64 md:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${mockEvents[0].image_url})` }}
                />
                <div className="w-full md:w-3/5 p-8 flex flex-col">
                  <h3 className="text-3xl font-bold font-serif text-primary mb-4">{mockEvents[0].title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{mockEvents[0].description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center text-foreground font-medium">
                      <CalendarIcon className="h-5 w-5 text-secondary mr-3" />
                      {new Date(mockEvents[0].date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center text-foreground font-medium">
                      <Clock className="h-5 w-5 text-secondary mr-3" />
                      {new Date(mockEvents[0].date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div className="flex items-center text-foreground font-medium">
                      <MapPin className="h-5 w-5 text-secondary mr-3" />
                      {mockEvents[0].location}
                    </div>
                    <div className="flex items-center text-foreground font-medium">
                      <Users className="h-5 w-5 text-secondary mr-3" />
                      500+ Attending
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-border/50 flex gap-4">
                    <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8">
                      RSVP Now
                    </Button>
                    <Button size="lg" variant="outline" className="border-border text-foreground">
                      Share Event
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* All Events List */}
        <h2 className="text-xl font-bold text-foreground mb-6 font-serif border-b border-border/50 pb-2">All Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEvents.slice(1).map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow border-border/50 flex flex-col">
              <div 
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image_url})` }}
              />
              <CardHeader>
                <div className="text-sm font-semibold text-secondary mb-2 uppercase tracking-wider">
                  {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
                <CardTitle className="text-xl font-serif">{event.title}</CardTitle>
                <CardDescription className="flex items-center mt-2">
                  <MapPin className="h-4 w-4 mr-1 shrink-0" /> {event.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground line-clamp-3 mb-6">{event.description}</p>
                <div className="mt-auto">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    View Details
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

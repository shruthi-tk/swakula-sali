'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { HeartHandshake, GraduationCap, Building2, Stethoscope, ArrowRight } from 'lucide-react'

export default function DonationsPage() {
  const causes = [
    {
      id: 1,
      title: "Weavers' Children Education Fund",
      description: "Supporting the next generation of our community to pursue higher education in engineering, medicine, and arts.",
      icon: GraduationCap,
      goal: 500000,
      raised: 350000,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Swakula Sali Community Hall",
      description: "Building a central headquarters in Pune for cultural events, matrimony meets, and business conventions.",
      icon: Building2,
      goal: 2000000,
      raised: 800000,
      image: "https://images.unsplash.com/photo-1541888048663-718f278c2e39?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Medical Relief & Support",
      description: "Emergency funds for elderly weavers and community members facing severe health crises.",
      icon: Stethoscope,
      goal: 300000,
      raised: 280000,
      image: "https://images.unsplash.com/photo-1538108149393-cebb47acddb2?q=80&w=800&auto=format&fit=crop"
    }
  ]

  return (
    <div className="min-h-screen bg-muted/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-primary to-[#5a1b12] rounded-3xl p-10 md:p-16 text-center text-primary-foreground mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center p-4 bg-secondary/20 rounded-full mb-6">
              <HeartHandshake className="h-10 w-10 text-secondary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Community Welfare & Donations</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              "Giving is not just about making a donation. It is about making a difference." Help us uplift our fellow Swakula Sali brethren.
            </p>
            <Button size="lg" className="h-14 rounded-full px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold shadow-lg text-lg">
              Donate Now
            </Button>
          </div>
        </div>

        <div className="mb-10 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground">Active Campaigns</h2>
          <p className="text-muted-foreground mt-2">100% of your contributions go directly to the cause.</p>
        </div>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {causes.map((cause) => {
            const percentRaised = Math.round((cause.raised / cause.goal) * 100);
            
            return (
              <Card key={cause.id} className="overflow-hidden hover:shadow-xl transition-shadow border-border/50 flex flex-col group bg-card">
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${cause.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground p-2 rounded-lg shadow-md">
                    <cause.icon className="h-6 w-6" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-foreground line-clamp-1">{cause.title}</CardTitle>
                  <CardDescription className="line-clamp-2 text-muted-foreground mt-2">
                    {cause.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 mt-4">
                  <Progress value={percentRaised} className="h-2 mb-3 bg-muted" />
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-foreground">₹{cause.raised.toLocaleString('en-IN')} raised</span>
                    <span className="text-muted-foreground">of ₹{cause.goal.toLocaleString('en-IN')}</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 border-t border-border/50 mt-4">
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                    Contribute
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
        
        {/* Transparency Banner */}
        <div className="bg-card border border-border/50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-sm">
          <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
            <h3 className="text-2xl font-bold font-serif text-foreground mb-2">Our Promise of Transparency</h3>
            <p className="text-muted-foreground max-w-2xl">
              Every donation is tracked via a blockchain-inspired public ledger. Regular audit reports are published on our blog to ensure total accountability to our community.
            </p>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 whitespace-nowrap gap-2">
            View Audit Reports <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

      </div>
    </div>
  )
}

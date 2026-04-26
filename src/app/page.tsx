'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { HeartHandshake, Users, Heart, Briefcase, Calendar, ChevronRight, ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { mockEvents, mockBusinesses } from '@/lib/mock-data'
import Image from 'next/image'

export default function Home() {
  const quickAccess = [
    { title: 'Matrimony', icon: Heart, href: '/matrimony', desc: 'Find your life partner within the community with verified profiles and strict privacy.', image: 'https://images.unsplash.com/photo-1583160247711-2191776b4b91?q=80&w=800&auto=format&fit=crop' },
    { title: 'Directory', icon: Users, href: '/directory', desc: 'Connect with community members worldwide and find local City POCs.', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop' },
    { title: 'Business', icon: Briefcase, href: '/business', desc: 'Explore and support community-owned enterprises.', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop' },
    { title: 'Events', icon: Calendar, href: '/events', desc: 'Discover cultural networking events.', image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=800&auto=format&fit=crop' },
    { title: 'Donations', icon: HeartHandshake, href: '/donations', desc: 'Contribute to education and welfare funds.', image: 'https://images.unsplash.com/photo-1538108149393-cebb47acddb2?q=80&w=800&auto=format&fit=crop' },
  ]

  const stats = [
    { label: 'Registered Members', value: '12,500+' },
    { label: 'Families Connected', value: '3,200+' },
    { label: 'Business Listed', value: '450+' },
    { label: 'Active City Chapters', value: '54' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium Indian Hero Section */}
      <section className="relative w-full py-24 md:py-36 bg-gradient-to-br from-primary via-[#6b2518] to-primary overflow-hidden">
        {/* Subtle Mandala / Indian Floral Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-secondary/50 bg-secondary/10 backdrop-blur-sm"
          >
            <span className="text-secondary font-medium tracking-wide uppercase text-sm flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
              Om Sri Jihveshwaraya Namaha
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-primary-foreground tracking-tight mb-6 font-serif"
          >
            The Global Digital Home for the <br className="hidden md:block" />
            <span className="text-secondary drop-shadow-md">Swakula Sali</span> Community
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-2xl text-xl text-primary-foreground/90 mx-auto mb-10 leading-relaxed"
          >
            Honoring our weaving heritage, empowering our future. Join the exclusive ecosystem designed for modern networking, matrimony, and cultural preservation.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="/auth" tabIndex={-1}>
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-lg px-8 shadow-lg shadow-secondary/20 transition-all hover:scale-105 w-full sm:w-auto">
                Register Now
              </Button>
            </Link>
            <Link href="/directory" tabIndex={-1}>
              <Button size="lg" variant="outline" className="bg-white/5 border-white/20 text-primary-foreground hover:bg-white/10 backdrop-blur-sm text-lg px-8 w-full sm:w-auto">
                Explore Directory
              </Button>
            </Link>
          </motion.div>
        </div>
        
        {/* Decorative Indian border at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-30"></div>
      </section>

      {/* Quick Access Grid - Premium Cards */}
      <section className="py-20 bg-background relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {quickAccess.map((item, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  key={index}
                >
                  <Link href={item.href} className="block h-full">
                    <div className="group relative overflow-hidden h-64 md:h-[280px] rounded-3xl bg-black cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/10">
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                        style={{ backgroundImage: `url(${item.image})` }} 
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent group-hover:from-black/90 transition-colors duration-500" />
                      
                      {/* Content */}
                      <div className="absolute inset-0 p-5 flex flex-col items-center justify-center text-center mt-4">
                        <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-lg group-hover:scale-110">
                          <item.icon className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-white mb-2">{item.title}</h3>
                        <div className="overflow-hidden">
                          <p className="text-white/80 text-xs leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      
                      {/* Hover Border Glow */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-3xl transition-colors duration-500 pointer-events-none" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cultural Spotlight & Heritage */}
      <section className="py-20 bg-muted/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-6">Our Rich Heritage</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Tracing our origins to the mythological figure Jihveshwara, the Swakula Sali community has a profound legacy of craftsmanship, textile design, and weaving spanning centuries across Maharashtra, Karnataka, and Telangana.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Preserving traditional weaving techniques',
                  'Fostering community entrepreneurship',
                  'Connecting generations across the globe'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-foreground">
                    <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                      <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <BookOpen className="h-4 w-4" /> Read our History
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
                {/* Traditional Weaving Image placeholder */}
                <img 
                  src="https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=1000&auto=format&fit=crop" 
                  alt="Traditional Indian Textile Weaving" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent flex items-start p-8">
                  <div className="text-white pt-2">
                    <h3 className="text-2xl font-bold font-serif">The Art of Silk</h3>
                    <p className="text-white/80 mt-1">A legacy passed down through generations.</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-card p-6 rounded-xl shadow-xl border border-border z-10">
                <div className="text-primary font-bold text-3xl font-serif">500+</div>
                <div className="text-sm text-muted-foreground font-medium">Years of Legacy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Community Businesses */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 border-b border-border/50 pb-4">
            <div>
              <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Support Local</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mt-2">Community Businesses</h2>
            </div>
            <Link href="/business" className="hidden md:flex items-center text-primary font-medium hover:text-secondary transition-colors group">
              View Directory <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockBusinesses.map((business) => (
              <Card key={business.id} className="overflow-hidden hover:shadow-xl transition-all border-border/50 group">
                <CardHeader className="bg-muted/30 border-b border-border/50 relative overflow-hidden">
                  {/* Subtle pattern */}
                  <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/woven.png')]"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start">
                      <div className="p-3 bg-primary text-primary-foreground rounded-lg shadow-md mb-4">
                        <Briefcase className="h-6 w-6" />
                      </div>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary-foreground text-xs font-medium rounded-full">
                        {business.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-serif text-foreground">{business.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-6 line-clamp-2">{business.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-medium hover:underline cursor-pointer">Contact Owner</span>
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats with Premium Parallax effect */}
      <section className="py-24 relative overflow-hidden">
        {/* Background image of a temple or gathering */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514222325250-70590a56216d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed bg-center"></div>
        <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-3 font-serif">{stat.value}</div>
                <div className="text-sm md:text-base font-medium text-white/90 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'

export default function AuthPage() {
  const [step, setStep] = useState(1)

  return (
    <div className="min-h-screen bg-muted/20 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-96 bg-primary">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex justify-center mb-6">
          <span className="text-5xl text-secondary tracking-tight font-ethnic">Swakula Sali</span>
        </div>
        
        <Card className="shadow-2xl border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-serif">
              {step === 1 ? 'Welcome to the Community' : 'Enter Verification Code'}
            </CardTitle>
            <CardDescription>
              {step === 1 ? 'Enter your phone number to login or register.' : 'We sent a 6-digit OTP to your phone.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">+91</span>
                    <Input type="tel" placeholder="98765 43210" className="pl-12 h-12 text-lg" />
                    <Phone className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  </div>
                </div>
                <Button 
                  className="w-full h-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                  onClick={() => setStep(2)}
                >
                  Send OTP <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">OTP</label>
                  <div className="flex justify-between gap-2">
                    {[1,2,3,4,5,6].map((i) => (
                      <Input key={i} className="h-12 w-12 text-center text-xl font-bold" maxLength={1} placeholder="•" />
                    ))}
                  </div>
                </div>
                <Link href="/directory" className="block">
                  <Button className="w-full h-12 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Verify & Login
                  </Button>
                </Link>
                <div className="text-center">
                  <Button variant="link" className="text-primary" onClick={() => setStep(1)}>
                    Change Phone Number
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-center border-t border-border/50 pt-6">
            <p className="text-xs text-muted-foreground text-center">
              By continuing, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

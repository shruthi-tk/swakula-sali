'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { MessageCircle, Bell, Users, Clock, Send, Smartphone } from 'lucide-react'
import { toast } from 'sonner'

export default function AdminBroadcast() {
  const [message, setMessage] = useState('')
  const [targetAudience, setTargetAudience] = useState('all')
  const [useWhatsApp, setUseWhatsApp] = useState(true)
  const [usePush, setUsePush] = useState(true)
  const [isSending, setIsSending] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleBroadcast = () => {
    if (!message) return
    setIsSending(true)
    setProgress(0)

    // Simulate sending progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsSending(false)
            toast.success('Broadcast dispatched successfully!')
            setMessage('')
            setProgress(0)
          }, 500)
          return 100
        }
        return prev + 5
      })
    }, 100)
  }

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-foreground">Broadcast Center</h1>
        <p className="text-muted-foreground mt-1">Send immediate updates to the community via WhatsApp and Push Notifications.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Composer Column */}
        <div className="space-y-6">
          <Card className="border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle className="font-serif flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" /> Compose Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Message Body</label>
                <Textarea 
                  placeholder="Type your announcement here. E.g. 'Join us for the Pune Chapter meet this Sunday...'"
                  className="min-h-[150px] resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-2 text-right">
                  {message.length}/1000 characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Target Audience</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'all', label: 'All Registered Members', count: '12.5k' },
                    { id: 'business', label: 'Business Owners', count: '452' },
                    { id: 'pune', label: 'Pune Chapter Only', count: '2.1k' },
                    { id: 'youth', label: 'Youth / Unmarried', count: '4.3k' },
                  ].map((aud) => (
                    <div 
                      key={aud.id}
                      onClick={() => setTargetAudience(aud.id)}
                      className={`
                        p-3 rounded-lg border cursor-pointer transition-all
                        ${targetAudience === aud.id 
                          ? 'border-primary bg-primary/10 text-primary' 
                          : 'border-border/50 hover:border-primary/50 text-muted-foreground'}
                      `}
                    >
                      <p className="font-semibold text-sm">{aud.label}</p>
                      <p className="text-xs opacity-80 mt-1 flex items-center gap-1">
                        <Users className="h-3 w-3" /> {aud.count}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border/50 pt-6 space-y-4">
                <label className="block text-sm font-medium">Delivery Channels</label>
                
                <div className="flex items-center justify-between p-3 rounded-lg border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#25D366]/10 text-[#25D366] rounded-md">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">WhatsApp Business API</p>
                      <p className="text-xs text-muted-foreground">Deliver directly to WhatsApp inbox</p>
                    </div>
                  </div>
                  <Switch checked={useWhatsApp} onCheckedChange={setUseWhatsApp} />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 text-primary rounded-md">
                      <Bell className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">In-App Push Notification</p>
                      <p className="text-xs text-muted-foreground">Alert users on their mobile devices</p>
                    </div>
                  </div>
                  <Switch checked={usePush} onCheckedChange={setUsePush} />
                </div>
              </div>

              <Button 
                onClick={handleBroadcast}
                disabled={isSending || !message || (!useWhatsApp && !usePush)}
                className="w-full h-12 text-lg gap-2"
              >
                {isSending ? (
                  `Dispatching... ${progress}%`
                ) : (
                  <><Send className="h-5 w-5" /> Send Broadcast Now</>
                )}
              </Button>

              {isSending && (
                <div className="w-full bg-muted rounded-full h-2 mt-2 overflow-hidden">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-100" 
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}

            </CardContent>
          </Card>
        </div>

        {/* Preview Column */}
        <div className="space-y-6">
          <Card className="border-border/50 shadow-sm bg-muted/10 overflow-hidden h-full">
            <CardHeader>
              <CardTitle className="font-serif flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-muted-foreground" /> Device Preview
              </CardTitle>
              <CardDescription>How it looks to your members.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center p-8">
              {/* WhatsApp Chat Simulation */}
              <div className="w-full max-w-[320px] h-[500px] border-[6px] border-black/80 rounded-[2.5rem] bg-[#EFEAE2] relative shadow-2xl overflow-hidden flex flex-col">
                
                {/* Status Bar Mock */}
                <div className="h-7 w-full bg-[#008069] text-white/90 text-[10px] flex items-center justify-between px-5 font-medium z-20">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <span className="w-3 h-3 rounded-full bg-white/80"></span>
                    <span className="w-3 h-3 rounded-full bg-white/80"></span>
                  </div>
                </div>

                {/* WhatsApp Header */}
                <div className="bg-[#008069] p-3 flex items-center gap-3 text-white shadow-md z-10">
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-primary font-serif font-bold text-lg">S</div>
                  <div>
                    <p className="font-bold text-sm leading-tight">Swakula Sali Official <span className="text-[10px] bg-green-500/20 px-1 rounded ml-1 text-green-100">✓</span></p>
                    <p className="text-[10px] opacity-80">Community Updates</p>
                  </div>
                </div>

                {/* WhatsApp Chat Body */}
                <div className="flex-1 p-3 bg-[url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')] bg-cover relative flex flex-col justify-end gap-2 pb-4">
                  {/* Overlay for readability */}
                  <div className="absolute inset-0 bg-white/40"></div>
                  
                  {message ? (
                    <div className="bg-white p-2.5 rounded-lg rounded-tl-none shadow-sm max-w-[85%] relative z-10 self-start">
                      <p className="text-sm text-gray-800 whitespace-pre-wrap">{message}</p>
                      <p className="text-[10px] text-gray-400 text-right mt-1">9:42 AM</p>
                    </div>
                  ) : (
                    <div className="text-center w-full z-10 opacity-50">
                      <p className="text-xs bg-black/10 inline-block px-3 py-1 rounded-full backdrop-blur-sm">Waiting for input...</p>
                    </div>
                  )}
                </div>

              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  )
}

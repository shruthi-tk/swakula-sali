'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Lock, UserCog } from 'lucide-react'
import { toast } from 'sonner'

export default function AdminLogin() {
  const router = useRouter()
  const [adminId, setAdminId] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Mock validation
    setTimeout(() => {
      if (adminId === 'admin' && password === 'admin') {
        toast.success('Successfully logged in as Super Admin')
        router.push('/admin')
      } else {
        toast.error('Invalid credentials. Hint: use admin/admin')
        setLoading(false)
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-muted/20 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-primary/5"></div>
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
            <UserCog className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>
        <h2 className="text-center text-3xl font-serif font-bold text-foreground">
          Admin Portal
        </h2>
        <p className="text-center text-muted-foreground mt-2">
          Restricted access for Swakula Sali administrators
        </p>
        
        <Card className="mt-8 shadow-2xl border-border/50">
          <CardContent className="pt-6">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Admin ID</label>
                <Input 
                  type="text" 
                  value={adminId}
                  onChange={(e) => setAdminId(e.target.value)}
                  placeholder="Enter your admin ID" 
                  className="h-12"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Security Key / Password</label>
                <div className="relative">
                  <Input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••" 
                    className="pl-10 h-12"
                    required
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                </div>
              </div>
              <Button 
                type="submit"
                disabled={loading}
                className="w-full h-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {loading ? 'Authenticating...' : 'Secure Login'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

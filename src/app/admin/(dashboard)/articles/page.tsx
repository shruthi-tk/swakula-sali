'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Plus, Image as ImageIcon, Save, Send } from 'lucide-react'
import { toast } from 'sonner'

export default function AdminArticles() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [pushNotify, setPushNotify] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      toast.success('Article published successfully!')
      if (pushNotify) {
        toast.info('Push notification queued for all members.')
      }
      setIsSubmitting(false)
      setTitle('')
      setContent('')
    }, 1500)
  }

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-serif font-bold text-foreground">Publish Content</h1>
          <p className="text-muted-foreground mt-1">Write articles, announcements, and updates.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Editor Area */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border/50 shadow-sm">
            <CardContent className="p-6">
              <form onSubmit={handlePublish} className="space-y-6">
                <div>
                  <Input 
                    placeholder="Article Title" 
                    className="text-2xl font-serif font-bold h-14 border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                
                <div className="flex gap-2">
                  <Button type="button" variant="outline" size="sm" className="gap-2">
                    <ImageIcon className="h-4 w-4" /> Add Cover Image
                  </Button>
                </div>

                <Textarea 
                  placeholder="Write your article content here..." 
                  className="min-h-[400px] text-lg resize-y bg-transparent border-border/50 p-4 focus-visible:ring-primary/20"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar / Publishing Options */}
        <div className="space-y-6">
          <Card className="border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle className="font-serif">Publish Settings</CardTitle>
              <CardDescription>Configure visibility and alerts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Push Notification</label>
                  <p className="text-xs text-muted-foreground">Alert users on their devices</p>
                </div>
                <Switch 
                  checked={pushNotify}
                  onCheckedChange={setPushNotify}
                />
              </div>
              
              <div className="pt-4 border-t border-border/50 space-y-3">
                <Button 
                  onClick={handlePublish}
                  disabled={isSubmitting || !title || !content}
                  className="w-full gap-2 text-primary-foreground"
                >
                  {isSubmitting ? 'Publishing...' : <><Send className="h-4 w-4" /> Publish Now</>}
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <Save className="h-4 w-4" /> Save as Draft
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

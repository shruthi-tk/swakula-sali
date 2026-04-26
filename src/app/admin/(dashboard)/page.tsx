'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, FileText, Send, Building2, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AdminDashboard() {
  const stats = [
    { title: 'Total Members', value: '12,543', icon: Users, trend: '+12% this month' },
    { title: 'Active Businesses', value: '452', icon: Building2, trend: '+5% this month' },
    { title: 'Published Articles', value: '89', icon: FileText, trend: '+12 new' },
    { title: 'Broadcasts Sent', value: '1,204', icon: Send, trend: '4 this week' },
  ]

  const recentActivity = [
    { action: 'New Article Published', detail: 'The Future of Swakula Sali Weavers', time: '2 hours ago' },
    { action: 'Broadcast Sent', detail: 'Pune Chapter Monthly Meetup', time: '5 hours ago' },
    { action: 'New Business Registered', detail: 'Sri Textiles & Co.', time: '1 day ago' },
    { action: 'Event Created', detail: 'Annual Youth Convention 2026', time: '2 days ago' },
  ]

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-foreground">Overview</h1>
          <p className="text-muted-foreground mt-1">Welcome back to the admin portal.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/articles">
            <Button variant="outline" className="gap-2">
              <FileText className="h-4 w-4" />
              New Article
            </Button>
          </Link>
          <Link href="/admin/broadcast">
            <Button className="gap-2">
              <Send className="h-4 w-4" />
              Send Broadcast
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-border/50 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                  <h3 className="text-3xl font-bold font-serif text-foreground">{stat.value}</h3>
                </div>
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <stat.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-emerald-600 font-medium">
                <TrendingUp className="h-4 w-4 mr-1" />
                {stat.trend}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <Card className="lg:col-span-2 border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle className="font-serif">Platform Analytics</CardTitle>
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center bg-muted/20 border border-dashed border-border/50 rounded-lg mx-6 mb-6">
            <p className="text-muted-foreground">Chart integration pending.</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle className="font-serif">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{activity.action}</p>
                    <p className="text-sm text-muted-foreground line-clamp-1">{activity.detail}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

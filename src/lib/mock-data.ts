import { Database } from '@/database.types'

type Event = Database['public']['Tables']['events']['Row']
type Business = Database['public']['Tables']['businesses']['Row']
type DirectoryProfile = Database['public']['Tables']['directory_profiles']['Row'] & {
  user: Database['public']['Tables']['users']['Row']
}

export const mockEvents: Event[] = [
  {
    id: '1',
    created_at: new Date().toISOString(),
    title: 'Annual Weavers Meet 2026',
    description: 'Join us for the annual gathering of Swakula Sali weavers. Share techniques, network with buyers, and celebrate our rich heritage.',
    date: '2026-05-15T10:00:00Z',
    location: 'Pune, Maharashtra',
    image_url: 'https://images.unsplash.com/photo-1606148386616-5e5812d8a5de?q=80&w=800&auto=format&fit=crop',
    organizer_id: 'org1'
  },
  {
    id: '2',
    created_at: new Date().toISOString(),
    title: 'Youth Mentorship Drive',
    description: 'A networking event connecting young professionals with experienced mentors from our community.',
    date: '2026-06-02T14:00:00Z',
    location: 'Bengaluru, Karnataka',
    image_url: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=800&auto=format&fit=crop',
    organizer_id: 'org2'
  },
  {
    id: '3',
    created_at: new Date().toISOString(),
    title: 'Textile Business Expo',
    description: 'Showcase your textile business, find new suppliers, and expand your market reach.',
    date: '2026-07-20T09:00:00Z',
    location: 'Hyderabad, Telangana',
    image_url: 'https://images.unsplash.com/photo-1558024920-b41e1887dc32?q=80&w=800&auto=format&fit=crop',
    organizer_id: 'org3'
  }
]

export const mockBusinesses: Business[] = [
  {
    id: 'b1',
    user_id: 'u1',
    created_at: new Date().toISOString(),
    name: 'Heritage Silks',
    category: 'Textiles',
    description: 'Authentic handwoven silk sarees directly from the weavers of Narayanpet.',
    services: ['Sarees', 'Dress Materials', 'Custom Orders'],
    contact_email: 'hello@heritagesilks.example.com',
    contact_phone: '+91 98765 43210',
    website_url: 'https://example.com/heritagesilks'
  },
  {
    id: 'b2',
    user_id: 'u2',
    created_at: new Date().toISOString(),
    name: 'TechWeave Solutions',
    category: 'Technology',
    description: 'Software solutions for modern textile businesses and inventory management.',
    services: ['Web Development', 'Inventory Software', 'Consulting'],
    contact_email: 'contact@techweave.example.com',
    contact_phone: '+91 98765 43211',
    website_url: 'https://example.com/techweave'
  }
]

export const mockDirectory: DirectoryProfile[] = [
  {
    id: 'd1',
    user_id: 'u1',
    is_public: true,
    is_poc: true,
    poc_city: 'Pune',
    user: {
      id: 'u1',
      created_at: new Date().toISOString(),
      full_name: 'Anand Bhandari',
      phone: null,
      email: null,
      location: 'Pune, Maharashtra',
      profession: 'Master Weaver',
      skills: ['Silk Weaving', 'Mentorship', 'Business'],
      verification_status: 'verified',
      language_preference: 'mr',
      avatar_url: null
    }
  },
  {
    id: 'd2',
    user_id: 'u2',
    is_public: true,
    is_poc: false,
    poc_city: null,
    user: {
      id: 'u2',
      created_at: new Date().toISOString(),
      full_name: 'Sneha Sali',
      phone: null,
      email: null,
      location: 'Bengaluru, Karnataka',
      profession: 'Software Engineer',
      skills: ['React', 'Node.js', 'Career Guidance'],
      verification_status: 'verified',
      language_preference: 'kn',
      avatar_url: null
    }
  }
]

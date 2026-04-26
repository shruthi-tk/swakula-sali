export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          created_at: string
          full_name: string
          phone: string | null
          email: string | null
          location: string | null
          profession: string | null
          skills: string[] | null
          verification_status: 'pending' | 'verified' | 'rejected'
          language_preference: string
          avatar_url: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          full_name: string
          phone?: string | null
          email?: string | null
          location?: string | null
          profession?: string | null
          skills?: string[] | null
          verification_status?: 'pending' | 'verified' | 'rejected'
          language_preference?: string
          avatar_url?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          full_name?: string
          phone?: string | null
          email?: string | null
          location?: string | null
          profession?: string | null
          skills?: string[] | null
          verification_status?: 'pending' | 'verified' | 'rejected'
          language_preference?: string
          avatar_url?: string | null
        }
      }
      directory_profiles: {
        Row: {
          id: string
          user_id: string
          is_public: boolean
          is_poc: boolean
          poc_city: string | null
        }
        Insert: {
          id?: string
          user_id: string
          is_public?: boolean
          is_poc?: boolean
          poc_city?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          is_public?: boolean
          is_poc?: boolean
          poc_city?: string | null
        }
      }
      matrimony_profiles: {
        Row: {
          id: string
          user_id: string
          created_at: string
          bio: string | null
          height: string | null
          education: string | null
          occupation: string | null
          income: string | null
          marital_status: string | null
          preferences: Json | null
          is_active: boolean
        }
        Insert: {
          id?: string
          user_id: string
          created_at?: string
          bio?: string | null
          height?: string | null
          education?: string | null
          occupation?: string | null
          income?: string | null
          marital_status?: string | null
          preferences?: Json | null
          is_active?: boolean
        }
        Update: {
          id?: string
          user_id?: string
          created_at?: string
          bio?: string | null
          height?: string | null
          education?: string | null
          occupation?: string | null
          income?: string | null
          marital_status?: string | null
          preferences?: Json | null
          is_active?: boolean
        }
      }
      businesses: {
        Row: {
          id: string
          user_id: string
          created_at: string
          name: string
          category: string
          description: string | null
          services: string[] | null
          contact_email: string | null
          contact_phone: string | null
          website_url: string | null
        }
        Insert: {
          id?: string
          user_id: string
          created_at?: string
          name: string
          category: string
          description?: string | null
          services?: string[] | null
          contact_email?: string | null
          contact_phone?: string | null
          website_url?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          created_at?: string
          name?: string
          category?: string
          description?: string | null
          services?: string[] | null
          contact_email?: string | null
          contact_phone?: string | null
          website_url?: string | null
        }
      }
      events: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string
          date: string
          location: string
          image_url: string | null
          organizer_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description: string
          date: string
          location: string
          image_url?: string | null
          organizer_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string
          date?: string
          location?: string
          image_url?: string | null
          organizer_id?: string | null
        }
      }
      event_attendees: {
        Row: {
          event_id: string
          user_id: string
          status: 'attending' | 'maybe' | 'declined'
        }
        Insert: {
          event_id: string
          user_id: string
          status?: 'attending' | 'maybe' | 'declined'
        }
        Update: {
          event_id?: string
          user_id?: string
          status?: 'attending' | 'maybe' | 'declined'
        }
      }
    }
  }
}

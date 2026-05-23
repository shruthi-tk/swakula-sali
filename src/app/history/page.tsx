import { BookOpen, Star, ArrowLeft, Sun, Feather, Heart, Globe, Users, Building } from 'lucide-react'
import Link from 'next/link'

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-primary/10 to-background border-b border-border/50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] -ml-20 -mb-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
          </Link>
          <div className="inline-flex items-center justify-center p-4 bg-secondary/10 text-secondary rounded-2xl mb-6 shadow-inner border border-secondary/20">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight mb-6 font-serif">
            The Swakula Sali <span className="text-primary">Legacy</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A profound heritage tracing back to the divine creation of Bhagwan Sri Jihveshwara. We are the custodians of a sacred weaving tradition across India.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            <div className="flex items-center justify-center mb-16">
              <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full opacity-50"></div>
            </div>
            
            {/* 1. Divine Creation */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div className="order-2 md:order-1 relative rounded-3xl overflow-hidden shadow-2xl aspect-square border border-border/50">
                <img src="https://images.unsplash.com/photo-1605810753066-e3d1a84c8a24?q=80&w=800&auto=format&fit=crop" alt="Traditional Weaving" className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                  <p className="text-white font-serif text-xl opacity-90">The divine art of weaving</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center px-3 py-1 bg-secondary/10 text-secondary font-semibold rounded-full text-sm mb-4">
                  <Sun className="w-4 h-4 mr-2" /> Mythology
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">The Divine Creation</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  Before creation, the universe was <em>shunya</em> (void) except for the Omkar Parabramha. Through the supreme tejas of Parabramha, the Adimaya took birth. As time passed, humanity suffered from the extremities of nature, initially covering themselves with leaves and barks. Recognizing the need for proper clothing, Adimaya requested Lord Shiva to create a <em>Punya Purusha</em> who could weave exquisite garments.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  On Shravan Masa, Trayodashi, early Monday morning at sunrise, Lord Shiva created a radiant child from his tongue (<em>Jihve</em>). Godess Parvati named his kula as <strong>Swakula</strong>, and because of his origin, he was named <strong>Sri Jihveshwara</strong>. Born at sunrise, his lineage is known as the <em>Suryavamshi Gotra</em>.
                </p>
              </div>
            </div>

            {/* 2. Lineage and Kashi */}
            <div className="bg-gradient-to-br from-muted/50 to-background border border-border/50 rounded-[2.5rem] p-8 md:p-16 mb-24 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 p-8 opacity-5 transform rotate-12 scale-150">
                <Star className="h-64 w-64 text-primary" />
              </div>
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                  <Feather className="w-4 h-4 mr-2" /> Heritage
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">Sri Jihveshwara & The Lineage</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                  Sri Jihveshwara married <strong>Ankini</strong> (created by Lord Brahma) and <strong>Dashankini</strong> (created by Goddess Saraswathi). Ankini gave birth to four children, and Dashankini gave birth to six children. These ten sons propagated the Swakulasali lineage, taking their ancestral craft across the lands and weaving for royalty under names like Ahersali and Sanathan Sali.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Later in his life, Sri Jihveshwara traveled to Kashi (Varanasi) with Lord Shiva and Goddess Parvati. Desiring a life of asceticism, he became a Sanyasi, receiving the power of Bhairava from Lord Shiva. He was subsequently worshipped as <strong>Kalabhairava</strong>. To this day, a temple dedicated to Bhagwan Sri Jihveshwara stands in Goghat near Kashi.
                </p>
              </div>
            </div>

            {/* 3. Migration and Culture */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent-foreground font-semibold rounded-full text-sm mb-4">
                  <Globe className="w-4 h-4 mr-2" /> Migration
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">The Weaving Journey</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  The Swakulasalis are also known as <em>Vastrakarma Brahmanas</em>. Originally settling in Devagiri and Pratistanpur (Paithan) in Maharashtra, the community became renowned for weaving the magnificent <strong>Paithani sarees</strong>. Marathi became our primary language.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  During the era of Chhatrapati Shivaji Maharaj, when Shahajirao Bhonsle and Ghorpade warriors journeyed south, many Swakulasalis accompanied them, settling deeply into the Karnataka and Andhra (Telangana) regions. While retaining Marathi as a mother tongue, we warmly embraced the regional languages, cultures, and traditions, resulting in the diverse pan-Indian presence we see today.
                </p>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square border border-border/50">
                <img src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=800&auto=format&fit=crop" alt="Indian Culture" className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                  <p className="text-white font-serif text-xl opacity-90">A pan-Indian legacy</p>
                </div>
              </div>
            </div>

            {/* 4. Sri Ananth Maharaj */}
            <div className="bg-secondary/5 border border-secondary/20 rounded-[2.5rem] p-8 md:p-16 mb-24 relative overflow-hidden shadow-lg">
              <div className="relative z-10">
                <div className="inline-flex items-center px-3 py-1 bg-secondary/10 text-secondary font-semibold rounded-full text-sm mb-4">
                  <Heart className="w-4 h-4 mr-2" /> Spiritual Leader
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">Saint Sri Ananth Maharaj</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                    Born in Bangalore to Swakula parents Eswarappa and Rudrabai, Sri Ananth Maharaj was a beacon of light for the community. Renouncing worldly affairs, he walked to Pandharpur annually, spreading the <em>Pandari Varakari</em> culture, conducting Bhagavat Sapthah, and preaching selflessness through the chant of "Ramakrishna Hari".
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                    His profound compassion was most visible during the plague epidemic in Bangalore, where he personally nursed the sick, believing that serving humankind is God's true work. He sought no wealth or grandeur, and passed away peacefully in 1901. His legacy lives on at the Anantha Ashrama in Gandhinagar, Bangalore, a sanctuary of peace established over 85 years ago.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Modern Network & Sanghas */}
            <div className="mb-24">
              <div className="flex flex-col items-center text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                  <Users className="w-4 h-4 mr-2" /> Community
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground">Sanghas & Our Modern Network</h2>
                <p className="text-muted-foreground text-lg mt-4 max-w-3xl">
                  To preserve our identity in a globalized world, the community has formed strong networks, foundations, and associations across India.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Akhil Bharatiya Swakula Sali Samaj",
                  "Akila Karnataka Swakulasali Sangha",
                  "Samyuktha Swakulasali (Mahila & General)",
                  "World Sali Foundation",
                  "Sri Jihveshwara Vidyabhirudhi Trust",
                  "Ankini Mahila Sangha",
                  "Baghwan Sri Jihveshwara Sports & Cultural Assoc.",
                  "Swakula Chetana & Supersalis",
                  "Swakulasali Samaj (Weaver) Hyderabad"
                ].map((sangha, i) => (
                  <div key={i} className="flex items-center p-4 rounded-xl border border-border/50 bg-card hover:shadow-md transition-shadow">
                    <Building className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                    <span className="font-medium text-foreground">{sangha}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. The Modern Era */}
            <div className="text-center max-w-4xl mx-auto bg-muted/30 p-12 rounded-[3rem] border border-border/50">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">The Swakula Sali Today</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Over centuries, our families have carried surnames like <em>Divate, Hukkarde, Sarode, Ekbote, Kalburgi, Pissey, Tagare, Bhandare</em> and many more—often honoring our native villages, family deities, or professions. Today, the rapid pace of industrialization has challenged the traditional handloom weaving profession, prompting our youth to diversify into education, technology, medicine, and business.
              </p>
              
              <div className="bg-background rounded-2xl p-6 border border-border shadow-sm mb-8">
                <h3 className="text-xl font-bold font-serif text-primary mb-2">Upcoming: The 14th Mahaparishat</h3>
                <p className="text-muted-foreground">
                  Continuing our tradition of unity, the Akhil Bharatiya Swakula Sali Samaj will be hosting the 14th Mahaparishat in Hyderabad. This grand gathering will take place over three days, from <strong>November 13th to 15th, 2026</strong>, bringing together Samaj Bandhus from all over the country.
                </p>
              </div>

              <p className="text-primary font-medium text-xl italic font-serif">
                "Our digital ecosystem is a testament to this evolution—a bridge connecting our interwoven past with a brilliant, collaborative future."
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

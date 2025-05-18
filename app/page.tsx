import HeroSection from '@/components/sections/hero-section'
import PromotorSection from '@/components/sections/promotor-section'
import ActivitiesSection from '@/components/sections/activities-section'
import StatsSection from '@/components/sections/stats-section'
import GallerySection from '@/components/sections/gallery-section'
import TestimonialsSection from '@/components/sections/testimonials-section'
import BlogSection from '@/components/sections/blog-section'
import AmbassadorsSection from '@/components/sections/ambassadors-section'
import PartnersSection from '@/components/sections/partners-section'
import NewsletterSection from '@/components/sections/newsletter-section'
import FaqSection from '@/components/sections/faq-section'

export default function HomePage() {
  return (
    <main className='overflow-hidden'>
      <HeroSection />
      <PromotorSection />
      <ActivitiesSection />
      <StatsSection />
      <GallerySection />
      <TestimonialsSection />
      <BlogSection />
      <AmbassadorsSection />
      <PartnersSection />
      <NewsletterSection />
      <FaqSection />
    </main>
  )
}

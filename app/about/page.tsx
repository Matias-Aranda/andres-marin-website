import AboutCarousel from '@/components/About/AboutCarousel'
import AboutHero from '@/components/About/AboutHero'
import AboutStats from '@/components/About/AboutStats'
import Newsletter from '@/components/Utils/Newsletter'
import SocialSidebar from '@/components/Utils/SocialSidebar'
import AboutGallery from '@/components/About/AboutGallery'
import React from 'react'

const page = () => {
  return (
    <div>
        <SocialSidebar />
        <AboutHero />
        <AboutCarousel />
        <AboutStats />
        <AboutGallery />
        <Newsletter />
    </div>
  )
}

export default page
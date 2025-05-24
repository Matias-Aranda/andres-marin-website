import AboutCarousel from '@/components/About/AboutCarousel'
import AboutHero from '@/components/About/AboutHero'
import AboutStats from '@/components/About/AboutStats'
import Newsletter from '@/components/Utils/Newsletter'
import SocialSidebar from '@/components/Utils/SocialSidebar'
import AboutGallery from '@/components/About/AboutGallery'
import React from 'react'
import SocialsVideos from '@/components/Socials/SocialsVideos'

const page = () => {
  return (
    <div>
        <SocialSidebar />
        <AboutHero />
        <AboutCarousel />
        <AboutStats />
        <AboutGallery />
        <SocialsVideos />
        <Newsletter />
    </div>
  )
}

export default page
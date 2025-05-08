import AboutCarousel from '@/components/About/AboutCarousel'
import AboutHero from '@/components/About/AboutHero'
import SocialSidebar from '@/components/Utils/SocialSidebar'
import React from 'react'

const page = () => {
  return (
    <div>
        <SocialSidebar />
        <AboutHero />
        <AboutCarousel />
    </div>
  )
}

export default page
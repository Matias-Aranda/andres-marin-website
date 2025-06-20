import SocialsStats from '@/components/Courses/SocialsStats'
import SponsorsContact from '@/components/Sponsors/SponsorsContact'
import SponsorsHelmet from '@/components/Sponsors/SponsorsHelmet'
import SponsorsHero from '@/components/Sponsors/SponsorsHero'
import SponsorsInstagram from '@/components/Sponsors/SponsorsInstagram'
import Newsletter from '@/components/Utils/Newsletter'
import React from 'react'

const page = () => {
  return (
    <div>
        <SponsorsHero/>
        <SponsorsHelmet/>
        <SocialsStats/>
        <SponsorsContact/>
        <Newsletter/>
    </div>
  )
}

export default page
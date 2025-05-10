import SponsorsHelmet from '@/components/Sponsors/SponsorsHelmet'
import SponsorsHero from '@/components/Sponsors/SponsorsHero'
import SponsorsInstagram from '@/components/Sponsors/SponsorsInstagram'
import React from 'react'

const page = () => {
  return (
    <div>
        <SponsorsHero/>
        <SponsorsHelmet/>
        <SponsorsInstagram/>
    </div>
  )
}

export default page
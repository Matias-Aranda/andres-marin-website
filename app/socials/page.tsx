import SocialsHero from '@/components/Socials/SocialsHero'
import SocialsStats from '@/components/Socials/SocialsStats'
import SocialsVideos from '@/components/Socials/SocialsVideos'
import Newsletter from '@/components/Utils/Newsletter'
import React from 'react'

const page = () => {
  return (
    <div>
        <SocialsHero />
        <SocialsVideos />
        <Newsletter />
    </div>
  )
}

export default page
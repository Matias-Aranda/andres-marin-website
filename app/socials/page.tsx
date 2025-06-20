import Courses from '@/components/Courses/Courses'
import SocialsHero from '@/components/Courses/SocialsHero'
import SocialsStats from '@/components/Courses/SocialsStats'
import SocialsVideos from '@/components/Courses/SocialsVideos'
import Newsletter from '@/components/Utils/Newsletter'
import React from 'react'

const page = () => {
  return (
    <div>
        <SocialsHero />
        <Courses/>
        <Newsletter />
    </div>
  )
}

export default page
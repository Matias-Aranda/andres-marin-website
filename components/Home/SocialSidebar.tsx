import React from 'react'
import Link from 'next/link'

const SocialSidebar = () => {
  return (
    <div className='fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col gap-4 p-4 bg-transparent rounded-lg shadow-lg z-10'>
        <Link href="#">
            <img className='h-6 w-6' src="/instagram_logo.svg" alt="logo" />
        </Link>
        <Link href="#">
            <img className='h-6 w-6' src="/youtube_logo.svg" alt="logo" />
        </Link>
        <Link href="#">
            <img className='h-6 w-6' src="/tiktok_logo.svg" alt="logo" />
        </Link>
        <Link href="#">
            <img className='h-6 w-6' src="/discord_logo.svg" alt="logo" />
        </Link>
    </div>
  )
}

export default SocialSidebar
import React from 'react'
import Link from 'next/link'

const SocialSidebar = () => {
  return (
    <div className='fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col gap-4 p-4 bg-transparent z-[3]'>
        <Link target='_blank' href="https://www.instagram.com/andr3smarin8/">
            <img className='h-6 w-6' src="/instagram_logo.svg" alt="logo" />
        </Link>
        <Link target='_blank' href="https://www.youtube.com/@Andr3smarin8">
            <img className='h-6 w-6' src="/youtube_logo.svg" alt="logo" />
        </Link>
        <Link target='_blank' href="https://www.tiktok.com/@andr3smarin8">
            <img className='h-6 w-6' src="/tiktok_logo.svg" alt="logo" />
        </Link>
        <Link target='_blank' href="https://discord.gg/EDAPX2YYcw">
            <img className='h-6 w-6' src="/discord_logo.svg" alt="logo" />
        </Link>
    </div>
  )
}

export default SocialSidebar
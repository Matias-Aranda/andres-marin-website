import React from 'react'
import Link from 'next/link';

interface VideoProps {
  thumbnail: string;
  title: string;
  link: string;
}

const Video: React.FC<VideoProps> = ({thumbnail, title, link}) => {
  return (
    <Link href={link} target='_blank' className='flex flex-col justify-start items-start gap-4 w-[80%] md:w-[30%] cursor-pointer'>
        <div className='relative'>
            <img src="/play_btn.svg" className='top-1/2 left-1/2 absolute w-[25%] h-[25%] -translate-x-1/2 -translate-y-1/2'/>
            <img src={thumbnail} className='border-b border-b-primary w-[100%] object-cover aspect-video'/>
        </div>
        <p className='text-white'>{title}</p>
    </Link>
  )
}

export default Video
import React from 'react'
import Link from 'next/link';

interface VideoProps {
  thumbnail: string;
  title: string;
  link: string;
}

const Video: React.FC<VideoProps> = ({thumbnail, title, link}) => {
  return (
    <Link href={link} target='_blank' className='cursor-pointer flex flex-col items-start justify-start gap-4 w-[80%] md:w-[30%] '>
        <div className='relative'>
            <img src="/play_btn.svg" className='h-[25%] w-[25%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'/>
            <img src={thumbnail} className='border-b border-b-primary object-cover w-[100%] aspect-video'/>
        </div>
        <p className='text-white'>{title}</p>
    </Link>
  )
}

export default Video
import React from 'react'

interface VideoProps {
  thumbnail: string;
  title: string;
}

const Video: React.FC<VideoProps> = ({thumbnail, title}) => {
  return (
    <div className='cursor-pointer flex flex-col items-start justify-start gap-4 w-[460px]'>
        <div className='relative'>
            <img src="/play_btn.svg" className='h-[56px] w-[56px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'/>
            <img src={thumbnail} className='border-b border-b-primary'/>
        </div>
        <p className='text-white'>{title}</p>
    </div>
  )
}

export default Video
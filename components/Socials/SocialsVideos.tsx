import React from 'react'
import Video from './Video'

const SocialsVideos = () => {
  return (
    <div className='pt-20'>
        <h3 className='text-[64px] font-display text-center text-white mb-10'>Mira mis <span className='text-primary'>ultimos</span> videos</h3>
        <div className='flex items-start justify-center flex-wrap gap-5'>
            <Video thumbnail='/sponsors_bg.png' title='Lo Que Hay Detrás De Los Pies - Todo Lo Que Necesitas Saber Sobre Los Pedales' />
            <Video thumbnail='/sponsors_bg.png' title='Mi primer video' />
            <Video thumbnail='/sponsors_bg.png' title='Mi primer video' />
        </div>
    </div>
  )
}

export default SocialsVideos
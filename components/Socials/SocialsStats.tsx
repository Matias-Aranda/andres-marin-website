import Link from 'next/link'
import React from 'react'

const SocialsStats = () => {
  return (
    <div>
        <h2 className='text-white text-[128px] text-center font-display-condensed leading-[0.9] uppercase'>Publicita tu <span className='text-primary'>Marca</span></h2>
        <div className='flex items-center justify-center gap-20 px-0 2xl:px-20 mb-20'>
            <div className='flex flex-col w-[30%] gap-10'>
                <div className='flex items-center justify-between border-b border-white pb-10'>
                    <Link target='_blank' href="https://www.instagram.com/andr3smarin8/">
                        <img className='h-[120px] ml-5' src="/instagram_logo_white.svg" alt="logo" />
                    </Link>
                    <Link target='_blank' href="https://www.youtube.com/@Andr3smarin8">
                        <img className='h-[120px]' src="/youtube_logo_white.svg" alt="logo" />
                    </Link>
                    <Link target='_blank' href="https://www.tiktok.com/@andr3smarin8">
                        <img className='h-[100px] mr-5' src="/tiktok_logo_white.svg" alt="logo" />
                    </Link>
                </div>
                <div className='flex items-center justify-between text-white'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <p className='font-display text-[64px] leading-[.9]'>10M</p>
                        <p className='text-primary'>Visitas Totales</p>
                    </div>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <p className='font-display text-[64px] leading-[.9]'>20k</p>
                        <p className='text-primary'>Seguidores</p>
                    </div>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <p className='font-display text-[64px] leading-[.9]'>200</p>
                        <p className='text-primary'>Publicaciones</p>
                    </div>
                </div>
            </div>
            <img className='w-[40%]' src="/socials_pfp.png" alt="logo" />
        </div>
    </div>
  )
}

export default SocialsStats
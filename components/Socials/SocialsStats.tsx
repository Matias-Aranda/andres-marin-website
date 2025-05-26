import Link from 'next/link'
import React from 'react'

const SocialsStats = () => {
  return (
    <div>
        <h2 className='text-white text-[clamp(3rem,10vw,8rem)] md:text-[92px] 2xl:text-[128px] text-center font-display-condensed leading-[0.9] uppercase'>Publicita tu <span className='text-primary'>Marca</span></h2>
        <div className='flex flex-col flex-col-reverse xl:flex-row items-center justify-center xl:gap-20 mb-20'>
            <div className='flex flex-col w-[85%] sm:w-[80%] xl:w-[30%] xl:min-w-[500px] gap-10'>
                <div className='flex items-center justify-between border-b border-white gap-10 pb-5 sm:pb-10'>
                    <Link target='_blank' href="https://www.instagram.com/andr3smarin8/">
                        <img className='h-30' src="/instagram_logo_white.svg" alt="logo" />
                    </Link>
                    <Link target='_blank' href="https://www.youtube.com/@Andr3smarin8">
                        <img className='h-30 ' src="/youtube_logo_white.svg" alt="logo" />
                    </Link>
                    <Link target='_blank' href="https://www.tiktok.com/@andr3smarin8">
                        <img className='h-30' src="/tiktok_logo_white.svg" alt="logo" />
                    </Link>
                </div>
                <div className='flex items-center justify-between text-white'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <p className='font-display text-[clamp(2rem,6vw,5rem)] leading-[.9]'>10M</p>
                        <p className='text-primary text-[clamp(.6rem,3vw,1.5rem)]'>Visitas Totales</p>
                    </div>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <p className='font-display text-[clamp(2rem,6vw,5rem)] leading-[.9]'>20k</p>
                        <p className='text-primary text-[clamp(.6rem,3vw,1.5rem)]'>Seguidores</p>
                    </div>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <p className='font-display text-[clamp(2rem,6vw,5rem)] leading-[.9]'>200</p>
                        <p className='text-primary text-[clamp(.6rem,3vw,1.5rem)]'>Publicaciones</p>
                    </div>
                </div>
            </div>
            <img className='w-[70%] xl:w-[40%]' src="/socials_pfp.png" alt="logo" />
        </div>
    </div>
  )
}

export default SocialsStats
import Link from 'next/link'
import React from 'react'

const SocialsStats = () => {
  return (
    <div>
        <h2 className='font-display-condensed text-[clamp(3rem,10vw,8rem)] text-white md:text-[92px] 2xl:text-[128px] text-center uppercase leading-[0.9]'>Publicita tu <span className='text-primary'>Marca</span></h2>
        <div className='flex xl:flex-row flex-col flex-col-reverse justify-center items-center xl:gap-20 mb-20'>
            <div className='flex flex-col gap-10 w-[85%] sm:w-[80%] xl:w-[30%] xl:min-w-[500px]'>
                <div className='flex justify-between items-center gap-10 pb-5 sm:pb-10 border-white border-b'>
                    <Link target='_blank' href="https://www.instagram.com/andr3smarin8/">
                        <img className='h-30' src="/instagram_logo_white.svg" alt="logo" />
                    </Link>
                    <Link target='_blank' href="https://www.youtube.com/@Andr3smarin8">
                        <img className='h-30' src="/youtube_logo_white.svg" alt="logo" />
                    </Link>
                    <Link target='_blank' href="https://www.tiktok.com/@andr3smarin8">
                        <img className='h-30' src="/tiktok_logo_white.svg" alt="logo" />
                    </Link>
                </div>
                <div className='flex justify-between items-center text-white'>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <p className='font-display text-[clamp(2rem,6vw,5rem)] leading-[.9]'>10M</p>
                        <p className='text-[clamp(.6rem,3vw,1.5rem)] text-primary'>Visitas Totales</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <p className='font-display text-[clamp(2rem,6vw,5rem)] leading-[.9]'>20k</p>
                        <p className='text-[clamp(.6rem,3vw,1.5rem)] text-primary'>Seguidores</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <p className='font-display text-[clamp(2rem,6vw,5rem)] leading-[.9]'>200</p>
                        <p className='text-[clamp(.6rem,3vw,1.5rem)] text-primary'>Publicaciones</p>
                    </div>
                </div>
            </div>
            <img className='w-[70%] xl:w-[40%]' src="/socials_pfp.png" alt="logo" />
        </div>
    </div>
  )
}

export default SocialsStats
import React from 'react'

const Hero = () => {
  return (
    <div className='relative flex flex-col justify-end items-center pb-15 w-full h-screen overflow-hidden text-center'>
        <video className="top-0 left-0 z-[-1] absolute w-full h-full object-cover" autoPlay loop muted>
            <source src="./hero_bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <h1 className='mx-8 font-display text-[72px] text-primary lg:text-[96px] leading-none'><span className='text-neutral-50'>Andrés</span> Marín</h1>
        <div className='mt-3 mb-4 border-primary border-b-1 w-40'></div>
        <p className='text-neutral-50'>"La realidad detrás de un simple juego"</p>
    </div>
  )
}

export default Hero
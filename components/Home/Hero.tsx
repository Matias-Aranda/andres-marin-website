import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden flex flex-col items-center justify-end text-center pb-15'>
        <video className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" autoPlay loop muted>
            <source src="./hero_bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <h1 className='text-primary text-[72px] lg:text-[96px] font-display mx-8 leading-none'><span className='text-neutral-50'>Andrés</span> Marín</h1>
        <div className='w-40 border-b-1 border-primary mb-4 mt-3'></div>
        <p className='text-neutral-50'>"La realidad detrás de un simple juego"</p>
    </div>
  )
}

export default Hero
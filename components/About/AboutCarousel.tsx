"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

const AboutCarousel = () => {

    const [count, setCount] = useState(0);
    const limit = 1;

    useEffect(() => {
        const interval = setInterval(() => {
          setCount((prev) => (prev < limit ? prev + 1 : 0));
        }, 5000); // every 5 seconds
    
        return () => clearInterval(interval); // cleanup on unmount
    }, []);



  return (
    <div className='relative flex flex-col justify-center items-center bg-neutral-50 h-screen overflow-hidden text-center'>
        <div className={`flex flex-col lg:flex-row items-center justify-center gap-[10%] transition-opacity duration-1000 absolute ${count == 0 ? "opacity-100" : "opacity-0"}`}>
            <img src="/sign.svg"  className='w-[80%] sm:w-[70%] md:w-[50%] lg:w-[30%]'/>
            <div className='flex flex-col gap-6 w-[90%] sm:w-[80%] lg:w-[40%] text-left'>
                <h3 className='mx-0 my-0 lg:my-4 mt-10 font-display text-[48px] text-neutral-900 sm:text-[64px] leading-none'>Sobre <span className='text-primary'>Mí</span></h3>
                <p>Compitiendo en una de las series más desafiantes de iRacing, la Porsche Cup (Fixed), busco consolidarme entre los mejores del mundo, compartiendo el proceso y la realidad detrás del Simracing competitivo.</p>
                <div className='mt-0 lg:mt-15 border-primary border-b-1 w-40'></div>
                <p className='font-base font-body-light uppercase tracking-[.6em] sm:tracking-[.8em]'>Simracing Coach</p>
            </div>
        </div>
        <div className={`flex flex-col lg:flex-row items-center justify-center gap-10 xl:gap-20 transition-opacity duration-1000 absolute ${count == 1 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <img src="/steering_wheel.png" className='rounded-md w-[90%] sm:w-[80%] lg:w-[35%] h-[400px] md:h-[500px] lg:h-[initial] object-cover' />
            <div className='flex flex-col gap-6 w-[90%] sm:w-[80%] lg:w-[40%] text-left'>
                <h3 className='mx-0 my-0 lg:my-4 font-display text-[48px] text-neutral-900 sm:text-[64px] leading-none'>Porsche <span className='text-primary'>Cup</span></h3>
                <p>Compitiendo en una de las series más desafiantes de iRacing, la Porsche Cup (Fixed), busco consolidarme entre los mejores del mundo, compartiendo el proceso y la realidad detrás del Simracing competitivo.</p>
                <Link href="https://www.iracing.com/series/porsche-cup/" target='_blank' className='flex items-center gap-4 lg:mt-15 w-fit text-neutral-900 text-2xl xl-:text-3xl font-body-light-italic'>LEER MÁS <img src="/arrow_icon_black.svg"/></Link>
            </div>
        </div>
    </div>
  )
}

export default AboutCarousel
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
    <div className='h-screen flex flex-col items-center justify-center text-center bg-neutral-50 relative overflow-hidden'>
        <div className={`flex flex-col lg:flex-row items-center justify-center gap-[10%] transition-opacity duration-1000 absolute ${count == 0 ? "opacity-100" : "opacity-0"}`}>
            <img src="/sign.svg"  className='w-[80%] sm:w-[70%] md:w-[50%] lg:w-[30%]'/>
            <div className='w-[90%] sm:w-[80%] lg:w-[40%] text-left flex flex-col gap-6'>
                <h3 className='text-neutral-900 text-[48px] sm:text-[64px] font-display mx-0 my-0 mt-10 lg:my-4 leading-none'>Sobre <span className='text-primary'>Mí</span></h3>
                <p>Compitiendo en una de las series más desafiantes de iRacing, la Porsche Cup (Fixed), busco consolidarme entre los mejores del mundo, compartiendo el proceso y la realidad detrás del Simracing competitivo.</p>
                <div className='w-40 mt-0 lg:mt-15 border-b-1 border-primary'></div>
                <p className='uppercase font-body-light tracking-[.6em]  sm:tracking-[.8em] font-base'>Simracing Coach</p>
            </div>
        </div>
        <div className={`flex flex-col lg:flex-row items-center justify-center gap-10 xl:gap-20 transition-opacity duration-1000 absolute ${count == 1 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <img src="/steering_wheel.png" className='w-[90%] sm:w-[80%] h-[400px] md:h-[500px] lg:h-[initial] object-cover lg:w-[35%] rounded-md' />
            <div className='w-[90%] sm:w-[80%] lg:w-[40%] text-left flex flex-col gap-6'>
                <h3 className='text-neutral-900 text-[48px] sm:text-[64px] font-display mx-0 my-0 lg:my-4 leading-none'>Porsche <span className='text-primary'>Cup</span></h3>
                <p>Compitiendo en una de las series más desafiantes de iRacing, la Porsche Cup (Fixed), busco consolidarme entre los mejores del mundo, compartiendo el proceso y la realidad detrás del Simracing competitivo.</p>
                <Link href="https://www.iracing.com/series/porsche-cup/" target='_blank' className='text-neutral-900 text-2xl xl-:text-3xl font-body-light-italic flex gap-4 items-center lg:mt-15 w-fit'>LEER MÁS <img src="/arrow_icon_black.svg"/></Link>
            </div>
        </div>
    </div>
  )
}

export default AboutCarousel
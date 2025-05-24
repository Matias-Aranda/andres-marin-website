import Link from 'next/link'
import React from 'react'

const SeriesOverview = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center pb-30 p-15 sm:px-30 overflow-hidden gap-6 bg-gradient-to-t from-slate-500/5 to-background to-70% px-10 border-b border-primary/50'>
        <div className='flex flex-col items-center lg:items-start'>
            <h1 className='text-primary text-[48px] sm:text-[72px] 2xl:text-[96px] font-display text-center lg:text-left leading-none'><span className='text-neutral-50'>Porsche</span> Cup</h1>
            <img src="/porsche_cup_fixed_badge.png" className='w-[80%] lg:hidden'/>
            <p className='text-neutral-50 leading-relaxed w-full 2xl:w-4/5 my-6 '>
                Compitiendo en una de las series más desafiantes de iRacing, la Porsche Cup (Fixed), 
                busco consolidarme entre los mejores del mundo, compartiendo el proceso y 
                la realidad detrás del Simracing competitivo.
            </p>
            <Link href="/porsche_cup" className='text-primary text-base sm:text-xl lg:text-3xl font-body-light-italic flex gap-2 lg:gap-4 items-center self-start'>
              LEER MÁS 
              <img src="/arrow_icon.svg" className=''/>
            </Link>
        </div>
        <img src="/porsche_cup_fixed_badge.png" className='hidden lg:block lg:w-[50%]'/>
    </div>
  )
}

export default SeriesOverview
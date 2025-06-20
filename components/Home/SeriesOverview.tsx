import Link from 'next/link'
import React from 'react'

const SeriesOverview = () => {
  return (
    <div className='flex lg:flex-row flex-col justify-center items-center gap-6 bg-gradient-to-t from-slate-500/5 to-70% to-background p-15 px-10 sm:px-30 pb-30 border-primary/50 border-b overflow-hidden'>
        <div className='flex flex-col items-center lg:items-start'>
            <h1 className='font-display text-[48px] text-primary sm:text-[72px] 2xl:text-[96px] lg:text-left text-center leading-none'><span className='text-neutral-50'>Porsche</span> Cup</h1>
            <img src="/porsche_cup_fixed_badge.png" className='lg:hidden w-[80%]'/>
            <p className='my-6 w-full 2xl:w-4/5 text-neutral-50 leading-relaxed'>
                Compitiendo en una de las series más desafiantes de iRacing, la Porsche Cup (Fixed), 
                busco consolidarme entre los mejores del mundo, compartiendo el proceso y 
                la realidad detrás del Simracing competitivo.
            </p>
            <Link href="/porsche_cup" className='flex items-center self-start gap-2 lg:gap-4 text-primary text-base sm:text-xl lg:text-3xl font-body-light-italic'>
              LEER MÁS 
              <img src="/arrow_icon.svg" className=''/>
            </Link>
        </div>
        <img src="/porsche_cup_fixed_badge.png" className='hidden lg:block lg:w-[50%]'/>
    </div>
  )
}

export default SeriesOverview
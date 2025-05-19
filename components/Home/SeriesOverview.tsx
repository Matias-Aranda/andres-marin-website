import Link from 'next/link'
import React from 'react'

const SeriesOverview = () => {
  return (
    <div className='flex items-center justify-center h-screen p-30 overflow-hidden'>
        <div className=''>
            <h1 className='text-primary text-[96px] font-display mx-0 my-12 leading-none'><span className='text-neutral-50'>Porsche</span> Cup</h1>
            <p className='text-neutral-50 leading-relaxed w-4/5 my-12'>
                Compitiendo en una de las series más desafiantes de iRacing, la Porsche Cup (Fixed), 
                busco consolidarme entre los mejores del mundo, compartiendo el proceso y 
                la realidad detrás del Simracing competitivo.
            </p>
            <Link href="/porsche_cup" className='text-primary text-3xl font-body-light-italic flex gap-4 items-center'>LEER MÁS <img src="/arrow_icon.svg"/></Link>
        </div>
        <img src="/porsche_cup_fixed_badge.png"/>
    </div>
  )
}

export default SeriesOverview
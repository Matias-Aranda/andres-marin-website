import React from 'react'

const CurrentSeries = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-radial from-slate-900 to-70% to-background mt-10 p-30 px-10 sm:h-screen'>
        <h1 className='m-0 font-display text-[48px] text-primary md:text-[72px] lg:text-[96px] text-center leading-none'><span className='text-neutral-50'>Porsche</span> Cup</h1>
        <p className='text-neutral-50'>(Actualmente Compitiendo)</p>
        <img src="/porsche_cup.png" className='mt-10 md:mt-0'/>
    </div>
  )
}

export default CurrentSeries
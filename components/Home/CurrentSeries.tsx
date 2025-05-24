import React from 'react'

const CurrentSeries = () => {
  return (
    <div className='mt-10 p-30 sm:h-screen flex flex-col items-center justify-center bg-radial from-slate-900 to-background to-70% px-10'>
        <h1 className='text-primary text-[48px] md:text-[72px] lg:text-[96px] font-display m-0 leading-none text-center'><span className='text-neutral-50'>Porsche</span> Cup</h1>
        <p className='text-neutral-50'>(Actualmente Compitiendo)</p>
        <img src="/porsche_cup.png" className='mt-10 md:mt-0'/>
    </div>
  )
}

export default CurrentSeries
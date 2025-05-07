import React from 'react'

const CurrentSeries = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-radial from-slate-900 to-gray-950'>
        <h1 className='text-primary text-[96px] font-display m-0 leading-none'><span className='text-neutral-50'>Porsche</span> Cup</h1>
        <p className='text-neutral-50'>(Actualmente Compitiendo)</p>
        <img src="/porsche_cup.png"/>
    </div>
  )
}

export default CurrentSeries
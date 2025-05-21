import React from 'react'

const AboutStats = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 py-20 text-white h-screen overflow-hidden'>
        <h2 className='text-[96px] font-display'>Estadísticas</h2>
        <img src="/porsche_cup.png" className='w-[800px] mb-10'/>
        <div className='flex items-center justify-center gap-10'>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-[96px] font-display leading-[.9]'><span className='text-primary'>+</span>1000</h3>
                <p>Horas de experiencia</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-[96px] font-display leading-[.9]'><span className='text-primary'>+</span>1000</h3>
                <p>Horas de experiencia</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-[96px] font-display leading-[.9]'><span className='text-primary'>+</span>1000</h3>
                <p>Horas de experiencia</p>
            </div>
        </div>
    </div>
  )
}

export default AboutStats
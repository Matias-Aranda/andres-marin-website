import React from 'react'

const AboutStats = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 px-10 sm:px-20 py-20 h-screen overflow-hidden text-white'>
        <h2 className='font-display text-[36px] sm:text-[48px] md:text-[72px] lg:text-[96px]'>Estadísticas</h2>
        <img src="/porsche_cup.png" className='mb-10 w-[800px]'/>
        <div className='flex sm:flex-row flex-col justify-center items-center gap-10 w-full'>
            <div className='flex flex-col justify-center items-center self-start sm:self-center'>
                <h3 className='font-display text-[72px] sm:text-[48px] md:text-[72px] lg:text-[96px] leading-[.9]'><span className='text-primary'>+</span>1000</h3>
                <p className='text-center'>Horas de experiencia</p>
            </div>
            <div className='flex flex-col justify-center items-center self-end sm:self-center'>
                <h3 className='font-display text-[72px] sm:text-[48px] md:text-[72px] lg:text-[96px] leading-[.9]'><span className='text-primary'>+</span>1000</h3>
                <p className='text-center'>Horas de experiencia</p>
            </div>
            <div className='flex flex-col justify-center items-center self-start sm:self-center'>
                <h3 className='font-display text-[72px] sm:text-[48px] md:text-[72px] lg:text-[96px] leading-[.9]'><span className='text-primary'>+</span>1000</h3>
                <p className='text-center'>Horas de experiencia</p>
            </div>
        </div>
    </div>
  )
}

export default AboutStats
import React from 'react'
import Link from 'next/link'

const ServicesGuide = () => {
  return (
    <div className='relative flex flex-col justify-center bg-[url(/guide_bg.png)] bg-cover bg-no-repeat lg:bg-center bg-right p-[8%] h-screen'>
        <div className='top-0 left-0 z-1 absolute backdrop-brightness-40 xl:backdrop-brightness-100 w-full h-full'></div>
        <div className='z-2 flex flex-col justify-center items-start w-[70%] md:w-[650px]'>
            <h1 className='mx-0 my-4 font-display-condensed text-[72px] text-neutral-50 sm:text-[92px] md:text-[150px] uppercase leading-[0.9]'>Nuevo en el <span className='text-primary'>Simracing?</span></h1>
            <p className='my-6 w-[60%] md:w-[450px] text-neutral-50'>Descarga mi Guía <span className='text-primary'>GRATUITA</span> para encontrar tu camino y orientar tu dinero de manera correcta.</p>
            <Link href="#" className='bg-primary my-2 px-20 py-2.5 rounded-md text-background text-base'>Descargar</Link>
        </div>
    </div>
  )
}

export default ServicesGuide
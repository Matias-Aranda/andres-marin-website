import React from 'react'
import Link from 'next/link'

const ServicesGuide = () => {
  return (
    <div className='h-screen bg-[url(/guide_bg.png)] bg-right flex flex-col justify-center bg-cover lg:bg-center bg-no-repeat p-[8%] relative'>
        <div className='absolute top-0 left-0 h-full w-full backdrop-brightness-40 xl:backdrop-brightness-100 z-1'></div>
        <div className='flex flex-col items-start justify-center w-[70%] md:w-[650px] z-2'>
            <h1 className='text-neutral-50 text-[72px] sm:text-[92px] md:text-[150px] font-display-condensed mx-0 my-4 leading-[0.9] uppercase'>Nuevo en el <span className='text-primary'>Simracing?</span></h1>
            <p className='text-neutral-50 w-[60%] md:w-[450px] my-6'>Descarga mi Guía <span className='text-primary'>GRATUITA</span> para encontrar tu camino y orientar tu dinero de manera correcta.</p>
            <Link href="#" className='text-base text-background my-2 px-20 py-2.5 bg-primary rounded-md'>Descargar</Link>
        </div>
    </div>
  )
}

export default ServicesGuide
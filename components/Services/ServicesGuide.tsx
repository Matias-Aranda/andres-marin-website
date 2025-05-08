import React from 'react'
import Link from 'next/link'

const ServicesGuide = () => {
  return (
    <div className='h-screen bg-[url(/guide_bg.png)] flex flex-col justify-center bg-cover bg-center bg-no-repeat p-40'>
        <div className='flex flex-col items-start justify-center w-[50%]'>
            <h1 className='text-neutral-50 text-[150px] font-display-condensed mx-0 my-4 leading-[0.9] uppercase'>Nuevo en el <span className='text-primary'>Simracing?</span></h1>
            <p className='text-neutral-50 w-[450px] my-6'>Descarga mi Guía <span className='text-primary'>GRATUITA</span> para encontrar tu camino y orientar tu dinero de manera correcta.</p>
            <Link href="#" className='text-base text-background my-2 px-20 py-2.5 bg-primary rounded-md'>Descargar</Link>
        </div>
    </div>
  )
}

export default ServicesGuide
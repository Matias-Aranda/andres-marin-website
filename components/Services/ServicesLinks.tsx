import React from 'react'
import Link from 'next/link'

const ServicesLinks = () => {
  return (
    <div className='grid grid-cols-2 gap-0'>
      <div className='h-[700px] flex flex-col items-center justify-center text-center pb-15 bg-[url(/fast_bg.png)] bg-cover bg-center bg-no-repeat'>
        <h3 className='text-neutral-50 text-[96px] font-display mx-0 my-4 leading-none'>Be <span className='text-primary'>Fast.</span></h3>
      </div>
      <div className='h-[700px] flex flex-col items-start justify-center text-left px-40 py-15 bg-background bg-cover bg-center bg-no-repeat gap-6'>
        <h3 className='text-neutral-50 text-[80px] text-left font-display-condensed mx-0 my-4 leading-none uppercase'><span className='text-primary'>Coaching</span> session 1v1</h3>
        <p className='text-neutral-50 font-body-light-italic'>"Nadie llega solo a la cima; a veces necesitamos una mano que nos ayude a ver lo que no queremos admitir."</p>
        <ul className='flex flex-col items-start text-left my-6 gap-3'>
            <li className='text-neutral-50 font-body-light-italic flex items-start gap-2 leading-relaxed'><img src="/check_icon.svg" className='mt-1'/> Sesión personalizada de aproximadamente 1 hora</li>
            <li className='text-neutral-50 font-body-light-italic flex items-start gap-2 leading-relaxed'><img src="/check_icon.svg" className='mt-1'/> Coaching Session a través de Discord, con ejemplos prácticos</li>
            <li className='text-neutral-50 font-body-light-italic flex items-start gap-2 leading-relaxed'><img src="/check_icon.svg" className='mt-1'/> Trabajamos en iRacing, Assetto Corsa, Automobilista 2, y KartKraft</li>
        </ul>
        <Link href="#" className='text-base text-background my-2 px-30 py-2.5 bg-primary rounded-md self-center'>Book Now</Link>
      </div>
      <div className='h-[700px] flex flex-col items-start justify-center text-left px-40 py-15 bg-background bg-cover bg-center bg-no-repeat gap-6'>
        <h3 className='text-neutral-50 text-[80px] text-left font-display-condensed mx-0 my-4 leading-none uppercase'>Lap <span className='text-primary'>Analysis</span></h3>
        <p className='text-neutral-50 font-body-light-italic'>"La teoría es el mapa, la práctica es el viaje. Solo cuando ambos se unen, encontramos el verdadero camino al éxito." </p>
        <ul className='flex flex-col items-start text-left my-6 gap-3'>
            <li className='text-neutral-50 font-body-light-italic flex items-start gap-2 leading-relaxed'><img src="/check_icon.svg" className='mt-1'/> Estudio sobre Setups y/o Tiempos por Vuelta</li>
            <li className='text-neutral-50 font-body-light-italic flex items-start gap-2 leading-relaxed'><img src="/check_icon.svg" className='mt-1'/> Entre 1 a 2 días de análisis</li>
            <li className='text-neutral-50 font-body-light-italic flex items-start gap-2 leading-relaxed'><img src="/check_icon.svg" className='mt-1'/> Herramienta: Motec i2 Pro, Custom Worksheet</li>
        </ul>
        <Link href="#" className='text-base text-background my-2 px-30 py-2.5 bg-primary rounded-md self-center'>Book Now</Link>
      </div>
      <div className='h-[700px] flex flex-col items-center justify-center text-center pb-15 bg-[url(/precise_bg.png)] bg-cover bg-center bg-no-repeat'>
        <h3 className='text-neutral-50 text-[96px] font-display mx-0 my-4 leading-none'>Be<span className='text-primary'>Precise.</span></h3>
      </div>
    </div>
  )
}

export default ServicesLinks
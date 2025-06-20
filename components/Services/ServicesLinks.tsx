import React from 'react'
import Link from 'next/link'

const ServicesLinks = () => {
  return (
    <div className='flex flex-col gap-0 lg:grid grid-cols-2'>
      <div className='flex flex-col justify-center items-center bg-[url(/fast_bg.png)] bg-cover bg-no-repeat bg-center py-15 text-center aspect[4/3]'>
        <h3 className='mx-0 my-4 font-display text-[clamp(4rem,12vw,6rem)] text-neutral-50 leading-none'>Be <span className='text-primary'>Fast.</span></h3>
      </div>
      <div className='flex flex-col justify-center items-start gap-1 sm:gap-6 bg-background bg-cover bg-no-repeat bg-center px-[8%] 2xl:px-[15%] py-15 text-left aspect[4/3]'>
        <h3 className='mx-0 my-4 font-display-condensed text-[64px] text-neutral-50 xl:text-[80px] text-left uppercase leading-none'><span className='text-primary'>Coaching</span> session 1v1</h3>
        <p className='text-neutral-50 text-base xl:text-xl font-body-light-italic'>"Nadie llega solo a la cima; a veces necesitamos una mano que nos ayude a ver lo que no queremos admitir."</p>
        <ul className='flex flex-col items-start gap-3 my-6 text-left'>
            <li className='flex items-start gap-2 text-neutral-50 text-base xl:text-xl font-body-light-italic leading-relaxed'><img src="/check_icon.svg" className='mt-1'/> Sesión personalizada de aproximadamente 1 hora</li>
            <li className='flex items-start gap-2 text-neutral-50 text-base xl:text-xl font-body-light-italic leading-relaxed'><img src="/check_icon.svg" className='mt-1'/> Coaching Session a través de Discord, con ejemplos prácticos</li>
            <li className='flex items-start gap-2 text-neutral-50 text-base xl:text-xl font-body-light-italic leading-relaxed'><img src="/check_icon.svg" className='mt-1'/> Trabajamos en iRacing, Assetto Corsa, Automobilista 2, y KartKraft</li>
        </ul>
        <Link href="/plans" className='self-center bg-primary my-2 px-30 py-2.5 rounded-md text-background text-base'>Book Now</Link>
      </div>
      <div className='flex flex-col justify-center items-start gap-1 sm:gap-6 order-4 lg:order-3 bg-background bg-cover bg-no-repeat bg-center px-[8%] xl:px-[15%] py-15 text-left aspect[4/3]'>
        <h3 className='mx-0 my-4 font-display-condensed text-[64px] text-neutral-50 xl:text-[80px] text-left uppercase leading-none'>Lap <span className='text-primary'>Analysis</span></h3>
        <p className='text-neutral-50 font-body-light-italic'>"La teoría es el mapa, la práctica es el viaje. Solo cuando ambos se unen, encontramos el verdadero camino al éxito." </p>
        <ul className='flex flex-col items-start gap-3 my-6 text-left'>
            <li className='flex items-start gap-2 text-neutral-50 font-body-light-italic leading-relaxed'><img src="/check_icon.svg" className='mt-1'/> Estudio sobre Setups y/o Tiempos por Vuelta</li>
            <li className='flex items-start gap-2 text-neutral-50 font-body-light-italic leading-relaxed'><img src="/check_icon.svg" className='mt-1'/> Entre 1 a 2 días de análisis</li>
            <li className='flex items-start gap-2 text-neutral-50 font-body-light-italic leading-relaxed'><img src="/check_icon.svg" className='mt-1'/> Herramienta: Motec i2 Pro, Custom Worksheet</li>
        </ul>
        <Link href="#" className='self-center bg-primary my-2 px-30 py-2.5 rounded-md text-background text-base'>Book Now</Link>
      </div>
      <div className='flex flex-col justify-center items-center order-3 lg:order-4 bg-[url(/precise_bg.png)] bg-cover bg-no-repeat bg-center py-15 text-center aspect[4/3]'>
        <h3 className='mx-0 my-4 font-display text-[clamp(4rem,12vw,6rem)] text-neutral-50 leading-none'>Be <span className='text-primary'>Precise.</span></h3>
      </div>
    </div>
  )
}

export default ServicesLinks
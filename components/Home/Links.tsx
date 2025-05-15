import React from 'react'
import Link from 'next/link'

const Links = () => {
  return (
    <div className='grid grid-cols-2 gap-0'>
      <div className='group h-[700px] flex flex-col items-center justify-end text-center pb-15 relative overflow-hidden'>
        <img
          src="/about_bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
        />
        <p className='text-neutral-50 z-2'>Sobre Mí</p>
        <h3 className='text-neutral-50 text-[48px] font-display mx-0 my-4 leading-none z-2'>Andrés Marín</h3>
        <Link href="/porsche_cup" className='text-primary font-body-light-italic flex gap-2 items-center z-2'>LEER MÁS <img className='h-5' src="/arrow_icon.svg"/></Link>
      </div>
      <div className='group h-[700px] flex flex-col items-center justify-end text-center pb-15 relative overflow-hidden'>
        <img
          src="/services_bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
        />
        <p className='text-neutral-50 z-2'>Ofrezco</p>
        <h3 className='text-neutral-50 text-[48px] font-display mx-0 my-4 leading-none z-2'>Servicios</h3>
        <Link href="/porsche_cup" className='text-primary font-body-light-italic flex gap-2 items-center z-2'>LEER MÁS <img className='h-5' src="/arrow_icon.svg"/></Link>
      </div>
      <div className='group h-[700px] flex flex-col items-center justify-end text-center pb-15 relative overflow-hidden'>
        <img
          src="/socials_bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
        />
        <p className='text-neutral-50 z-2'>Sígueme en</p>
        <h3 className='text-neutral-50 text-[48px] font-display mx-0 my-4 leading-none z-2'>Redes Sociales</h3>
        <Link href="/porsche_cup" className='text-primary font-body-light-italic flex gap-2 items-center z-2'>LEER MÁS <img className='h-5' src="/arrow_icon.svg"/></Link>
      </div>
      <div className='group h-[700px] flex flex-col items-center justify-end text-center pb-15 relative overflow-hidden'>
        <img
          src="/sponsors_bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
        />
        <p className='text-neutral-50 z-2'>Apóyame</p>
        <h3 className='text-neutral-50 text-[48px] font-display mx-0 my-4 leading-none z-2'>Sponsor Me</h3>
        <Link href="/porsche_cup" className='text-primary font-body-light-italic flex gap-2 items-center z-2'>LEER MÁS <img className='h-5' src="/arrow_icon.svg"/></Link>
      </div>

    </div>
  )
}

export default Links
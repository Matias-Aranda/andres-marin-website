import React from 'react'
import Link from 'next/link'

const Links = () => {
  return (
    <div className='gap-0 grid grid-cols-1 sm:grid-cols-2 border-primary border-t'>
      <div className='group relative flex flex-col justify-end items-center pb-[10%] aspect-[4/3] overflow-hidden text-center'>
        <img
          src="/about_bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 transform"
        />
        <p className='text-neutral-50'>Sobre Mí</p>
        <h3 className='z-2 mx-0 my-[1%] font-display text-[clamp(1.5rem,4vw,6rem)] text-neutral-50 leading-none'>Andrés Marín</h3>
        <Link href="/about" className='z-2 flex items-center gap-2 text-primary font-body-light-italic'>LEER MÁS <img className='h-5' src="/arrow_icon.svg"/></Link>
      </div>
      <div className='group relative flex flex-col justify-end items-center pb-[10%] aspect-[4/3] overflow-hidden text-center'>
        <img
          src="/services_bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 transform"
        />
        <p className='text-neutral-50'>Ofrezco</p>
        <h3 className='z-2 mx-0 my-[3%] font-display text-[clamp(1.5rem,4vw,6rem)] text-neutral-50 leading-none'>Servicios</h3>
        <Link href="/services" className='z-2 flex items-center gap-2 text-primary font-body-light-italic'>LEER MÁS <img className='h-5' src="/arrow_icon.svg"/></Link>
      </div>
      <div className='group relative flex flex-col justify-end items-center pb-[10%] aspect-[4/3] overflow-hidden text-center'>
        <img
          src="/socials_bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 transform"
        />
        <p className='text-neutral-50'>Sígueme en</p>
        <h3 className='z-2 mx-0 my-[3%] font-display text-[clamp(1.5rem,4vw,6rem)] text-neutral-50 leading-none'>Cursos</h3>
        <Link href="/socials" className='z-2 flex items-center gap-2 text-primary font-body-light-italic'>LEER MÁS <img className='h-5' src="/arrow_icon.svg"/></Link>
      </div>
      <div className='group relative flex flex-col justify-end items-center pb-[10%] aspect-[4/3] overflow-hidden text-center'>
        <img
          src="/sponsors_bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 transform"
        />
        <p className='text-neutral-50'>Apóyame</p>
        <h3 className='z-2 mx-0 my-[3%] font-display text-[clamp(1.5rem,4vw,6rem)] text-neutral-50 leading-none'>Sponsor Me</h3>
        <Link href="/sponsors" className='z-2 flex items-center gap-2 text-primary font-body-light-italic'>LEER MÁS <img className='h-5' src="/arrow_icon.svg"/></Link>
      </div>

    </div>
  )
}

export default Links
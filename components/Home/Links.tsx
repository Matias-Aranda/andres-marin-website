import React from 'react'
import Link from 'next/link'

const Links = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-primary'>
      <div className='group aspect-[4/3] flex flex-col items-center justify-end text-center pb-[10%] relative overflow-hidden'>
        <img
          src="/about_bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
        />
        <p className='text-neutral-50'>Sobre Mí</p>
        <h3 className='text-neutral-50 text-[clamp(1.5rem,4vw,6rem)] font-display mx-0 my-[1%] leading-none z-2'>Andrés Marín</h3>
        <Link href="/about" className='text-primary font-body-light-italic flex gap-2 items-center z-2'>LEER MÁS <img className='h-5' src="/arrow_icon.svg"/></Link>
      </div>
      <div className='group aspect-[4/3] flex flex-col items-center justify-end text-center pb-[10%] relative overflow-hidden'>
        <img
          src="/services_bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
        />
        <p className='text-neutral-50'>Ofrezco</p>
        <h3 className='text-neutral-50 text-[clamp(1.5rem,4vw,6rem)] font-display mx-0 my-[3%] leading-none z-2'>Servicios</h3>
        <Link href="/services" className='text-primary font-body-light-italic flex gap-2 items-center z-2'>LEER MÁS <img className='h-5' src="/arrow_icon.svg"/></Link>
      </div>
      <div className='group aspect-[4/3] flex flex-col items-center justify-end text-center pb-[10%] relative overflow-hidden'>
        <img
          src="/socials_bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
        />
        <p className='text-neutral-50'>Sígueme en</p>
        <h3 className='text-neutral-50 text-[clamp(1.5rem,4vw,6rem)] font-display mx-0 my-[3%] leading-none z-2'>Redes Sociales</h3>
        <Link href="/socials" className='text-primary font-body-light-italic flex gap-2 items-center z-2'>LEER MÁS <img className='h-5' src="/arrow_icon.svg"/></Link>
      </div>
      <div className='group aspect-[4/3] flex flex-col items-center justify-end text-center pb-[10%] relative overflow-hidden'>
        <img
          src="/sponsors_bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
        />
        <p className='text-neutral-50 z-2'>Apóyame</p>
        <h3 className='text-neutral-50 text-[clamp(1.5rem,4vw,6rem)] font-display mx-0 my-[3%] leading-none z-2'>Sponsor Me</h3>
        <Link href="/sponsors" className='text-primary font-body-light-italic flex gap-2 items-center z-2'>LEER MÁS <img className='h-5' src="/arrow_icon.svg"/></Link>
      </div>

    </div>
  )
}

export default Links
import React from 'react'
import Link from 'next/link'

const Links = () => {
  return (
    <div className='grid grid-cols-2 gap-0'>
      <div className='h-[700px] flex flex-col items-center justify-end text-center pb-15 bg-[url(/about_bg.png)] bg-cover bg-center bg-no-repeat'>
        <p className='text-neutral-50'>Sobre Mí</p>
        <h3 className='text-neutral-50 text-[48px] font-display mx-0 my-4 leading-none'>Andrés Marín</h3>
        <Link href="/porsche_cup" className='text-primary font-body-light-italic flex gap-2 items-center'>LEER MÁS <img className='h-5' src="/arrow_icon.svg"/></Link>
      </div>
      <div className='h-[700px] flex flex-col items-center justify-end text-center pb-15 bg-[url(/services_bg.png)] bg-cover bg-center bg-no-repeat'>
        <p className='text-neutral-50'>Ofrezco</p>
        <h3 className='text-neutral-50 text-[48px] font-display mx-0 my-4 leading-none'>Servicios</h3>
        <Link href="/porsche_cup" className='text-primary font-body-light-italic flex gap-2 items-center'>LEER MÁS <img className='h-5' src="/arrow_icon.svg"/></Link>
      </div>
      <div className='h-[700px] flex flex-col items-center justify-end text-center pb-15 bg-[url(/socials_bg.png)] bg-cover bg-center bg-no-repeat'>
        <p className='text-neutral-50'>Sígueme en</p>
        <h3 className='text-neutral-50 text-[48px] font-display mx-0 my-4 leading-none'>Redes Sociales</h3>
        <Link href="/porsche_cup" className='text-primary font-body-light-italic flex gap-2 items-center'>LEER MÁS <img className='h-5' src="/arrow_icon.svg"/></Link>
      </div>
      <div className='h-[700px] flex flex-col items-center justify-end text-center pb-15 bg-[url(/sponsors_bg.png)] bg-cover bg-center bg-no-repeat'>
        <p className='text-neutral-50'>Apóyame</p>
        <h3 className='text-neutral-50 text-[48px] font-display mx-0 my-4 leading-none'>Sponsor Me</h3>
        <Link href="/porsche_cup" className='text-primary font-body-light-italic flex gap-2 items-center'>LEER MÁS <img className='h-5' src="/arrow_icon.svg"/></Link>
      </div>
    </div>
  )
}

export default Links
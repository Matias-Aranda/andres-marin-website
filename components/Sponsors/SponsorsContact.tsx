import React from 'react'
import Link from 'next/link'

const SponsorsContact = () => {
  return (
    <div id='contact' className='relative flex lg:flex-row flex-col justify-center items-center gap-10 lg:gap-20 bg-[url(/contact_bg.png)] bg-cover bg-center sm:p-30 py-30 lg:h-screen'>
        <h1 className='w-[80%] lg:w-[50%] font-display text-[clamp(2rem,6vw,6rem)] text-white lg:text-left text-center leading-[1]'>Estamos en <br/><span className='text-[clamp(3rem,7vw,8rem)] text-primary'>contacto</span></h1>
        <form action="mailto:arandamatias849@gmail.com" method="POST" className='flex flex-col gap-6 bg-background/50 bg-opacity-50 backdrop-blur-lg px-10 2xl:px-20 py-10 2xl:py-15 border border-primary rounded-md w-[90%] lg:w-[40%] sm:min-w-[450px]'>
            <label className='flex flex-col gap-4 text-white text-base leading-none'>
                Nombre
                <input type="text" className='p-2 border border-primary rounded h-[55px] text-white' />
            </label>
            <label className='flex flex-col gap-4 text-white text-base leading-none'>
                Email
                <input type="email" className='p-2 border border-primary rounded h-[55px] text-white' />
            </label>
            <label className='flex flex-col gap-4 text-white text-base leading-none'>
                Mensaje
                <textarea name="message" className='p-2 border border-primary rounded h-[200px] text-white resize-none' />
            </label>
            <button className='bg-primary px-8 py-4 rounded-md text-background text-base cursor-pointer'>Enviar</button>
        </form>
        <div className='bottom-0 absolute bg-linear-0 from-background to-transparent w-full h-[10%]'></div>
    </div>
  )
}

export default SponsorsContact
import React from 'react'
import Link from 'next/link'

const SponsorsContact = () => {
  return (
    <div id='contact' className='h-screen flex items-center justify-center p-30 gap-20 bg-[url(/contact_bg.png)] bg-cover bg-center relative'>
        <h1 className='text-[96px] text-white font-display leading-[1]'>Estamos en <br/><span className='text-[128px] text-primary'>contacto</span></h1>
        <form action="mailto:arandamatias849@gmail.com" method="POST" className='w-[40%] py-15 px-20 border border-primary rounded-md bg-background/50 bg-opacity-50 backdrop-blur-lg flex flex-col gap-6'>
            <label className='text-base text-white leading-none flex flex-col gap-4'>
                Nombre
                <input type="text" className='h-[55px] border border-primary p-2 rounded text-white' />
            </label>
            <label className='text-base text-white leading-none flex flex-col gap-4'>
                Email
                <input type="email" className='h-[55px] border border-primary p-2 rounded text-white' />
            </label>
            <label className='text-base text-white leading-none flex flex-col gap-4'>
                Mensaje
                <textarea name="message" className='h-[200px] border border-primary p-2 rounded text-white resize-none' />
            </label>
            <button className='text-base text-background px-8 py-4 bg-primary rounded-md cursor-pointer'>Enviar</button>
        </form>
        <div className='absolute bottom-0 w-full h-[10%] bg-linear-0 from-background to-transparent'></div>
    </div>
  )
}

export default SponsorsContact
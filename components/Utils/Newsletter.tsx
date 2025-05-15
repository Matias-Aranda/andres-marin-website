"use client"
import React, { useState } from 'react'
import NewsletterModal from './NewsletterModal'

const Newsletter = () => {

  const [shown, setShown] = useState(false)

  return (
    <div className='h-[700px] flex flex-col items-center justify-center'>
        {shown && <NewsletterModal setShown={setShown}/>}
        <h3 className='text-neutral-50 text-[48px] font-display mx-0 leading-none'>Newsletter</h3>
        <p className='text-neutral-50 text-base w-[450px] text-center my-6'>Regístrate para tener actualizaciones y noticias sobre nosotros a tu Email.</p>
        <button className='text-base text-background my-2 px-8 py-2.5 px-25 bg-primary rounded-md cursor-pointer' onClick={() => setShown(true)}>Suscribirse</button>
    </div>
  )
}

export default Newsletter
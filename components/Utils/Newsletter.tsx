"use client"
import React, { useState, useEffect } from 'react'
import NewsletterModal from './NewsletterModal'

const Newsletter = () => {

  const [shown, setShown] = useState(false)

  useEffect(() => {
    shown ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden')
  }, [shown])

  return (
    <div className='flex flex-col justify-center items-center h-[700px]'>
        {shown && <NewsletterModal setShown={setShown}/>}
        <h3 className='mx-0 font-display text-[32px] text-neutral-50 sm:text-[48px] leading-none'>Newsletter</h3>
        <p className='my-6 w-[450px] max-w-[80%] text-neutral-50 text-base text-center'>Regístrate para tener actualizaciones y noticias sobre nosotros a tu Email.</p>
        <button className='bg-primary my-2 px-15 px-8 sm:px-25 py-2.5 rounded-md text-background text-base cursor-pointer' onClick={() => setShown(true)}>Suscribirse</button>
    </div>
  )
}

export default Newsletter
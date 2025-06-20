"use client"
import React from 'react'
import TransitionLink from '../Utils/TransitionLink'
import LoadingScreen from '../Utils/LoadingScreen';
import { useState } from 'react';

const Footer = () => {

  const [loading, setLoading] = React.useState(false);

  return (
    <div className='flex justify-between items-center px-10 sm:px-15 lg:px-25 py-10 sm:py-15 border-primary border-t'>
      {loading && <LoadingScreen />}
      <div className='flex flex-col justify-center items-start'>
        <img src="/footer_logo.svg"  className='h-[40]'/>
        <p className='my-6 md:my-12 w-4/5 text-neutral-50 leading-relaxed'>Las explicaciones más completas del Simracing en Habla Hispana.</p>
        <p className='text-[rgba(255,255,255,0.3)] text-base'>Copyright © 2025 P1 Academy. All Rights Reserved.</p>
      </div>
      <div className='hidden md:block flex flex-col justify-center items-center text-left'>
        <h4 className='mb-5 font-body text-primary'>NAVEGAR</h4>
        <ul className='flex flex-col justify-center items-start gap-6 m-0 p-0 list-none'>
          <li className='text-neutral-50 text-base leading-relaxed'>
            <TransitionLink href="/" setLoading={setLoading}>Home</TransitionLink>
          </li>
          <li className='text-neutral-50 text-base leading-relaxed'>
            <TransitionLink href="/services" setLoading={setLoading}>Servicios</TransitionLink>
          </li>
          <li className='text-neutral-50 text-base leading-relaxed'>
            <TransitionLink href="/sponsors#contact" setLoading={setLoading}>Contacto</TransitionLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
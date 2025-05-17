"use client"
import React from 'react'
import TransitionLink from '../Utils/TransitionLink'
import LoadingScreen from '../Utils/LoadingScreen';
import { useState } from 'react';

const Footer = () => {

  const [loading, setLoading] = React.useState(false);

  return (
    <div className='flex items-center justify-between py-20 px-25 border-t border-primary'>
      {loading && <LoadingScreen />}
      <div className='flex flex-col items-start justify-center'>
        <img src="/footer_logo.svg"  className='h-[40]'/>
        <p className='text-neutral-50 leading-relaxed w-4/5 my-12'>Las explicaciones más completas del Simracing en Habla Hispana.</p>
        <p className='text-base text-[rgba(255,255,255,0.3)]'>Copyright © 2025 P1 Academy. All Rights Reserved.</p>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h4 className='text-primary font-body mb-5'>NAVEGAR</h4>
        <ul className='flex flex-col items-start justify-center p-0 m-0 list-none gap-6 '>
          <li className='text-neutral-50 leading-relaxed ml-[-1.5rem] text-base'>
            <TransitionLink href="/" setLoading={setLoading}>Home</TransitionLink>
          </li>
          <li className='text-neutral-50 leading-relaxed ml-[-1.5rem] text-base'>
            <TransitionLink href="/services" setLoading={setLoading}>Servicios</TransitionLink>
          </li>
          <li className='text-neutral-50 leading-relaxed ml-[-1.5rem] text-base'>
            <TransitionLink href="/sponsors#contact" setLoading={setLoading}>Contacto</TransitionLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
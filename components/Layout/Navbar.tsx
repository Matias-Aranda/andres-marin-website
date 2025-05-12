"use client"
import React from 'react'
import Link from 'next/link'
import TransitionLink from '../Utils/TransitionLink';
import gsap from 'gsap';
import LoadingScreen from '../Utils/LoadingScreen';



const Navbar = () => {

  const [loading, setLoading] = React.useState(false);

  return (
    <div className='flex items-center justify-between px-15 py-4 bg-transparent fixed top-0 left-0 right-0 z-9 text-white'>
        {loading && <LoadingScreen />}
        <div className='flex items-center gap-18'>
            <TransitionLink setLoading={setLoading} href="/">
              <img className='h-8' src="/nav_logo.svg" alt="logo" />
            </TransitionLink>
            <TransitionLink setLoading={setLoading} href="/">Inicio</TransitionLink>
            <TransitionLink setLoading={setLoading} href="/about">Sobre Mí</TransitionLink>
            <TransitionLink setLoading={setLoading} href="/services">Servicios</TransitionLink>
            <TransitionLink setLoading={setLoading} href="/socials">Redes Sociales</TransitionLink>
            <TransitionLink setLoading={setLoading} href="/sponsors">Sponsor Me</TransitionLink>
        </div>
        <div className='flex items-center gap-6'>
            <TransitionLink setLoading={setLoading} href="/login">Login</TransitionLink>
            <TransitionLink setLoading={setLoading} href="/register" className='text-base text-background px-8 py-2.5 bg-primary rounded-md'>Registrarse</TransitionLink>
        </div>
    </div>
  )
}

export default Navbar
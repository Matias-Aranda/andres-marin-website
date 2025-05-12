import React from 'react'
import Link from 'next/link'



const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-15 py-4 bg-transparent fixed top-0 left-0 right-0 z-9 text-white'>
        <div className='flex items-center gap-18'>
            <Link href="/">
              <img className='h-8' src="/nav_logo.svg" alt="logo" />
            </Link>
            <Link href="/">Inicio</Link>
            <Link href="/about">Sobre Mí</Link>
            <Link href="/services">Servicios</Link>
            <Link href="/socials">Redes Sociales</Link>
            <Link href="/sponsors">Sponsor Me</Link>
        </div>
        <div className='flex items-center gap-6'>
            <Link href="/login">Login</Link>
            <Link href="/register" className='text-base text-background px-8 py-2.5 bg-primary rounded-md'>Registrarse</Link>
        </div>
    </div>
  )
}

export default Navbar
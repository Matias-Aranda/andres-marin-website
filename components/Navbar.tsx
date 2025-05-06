import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-15 py-4 bg-transparent fixed top-0 left-0 right-0 z-10'>
        <div className='flex items-center gap-18'>
            <img className='h-8' src="/nav_logo.svg" alt="logo" />
            <Link href="#" className='text-xl text-neutral-50'>TEST</Link>
            <Link href="#" className='text-xl text-neutral-50'>About</Link>
            <Link href="#" className='text-xl text-neutral-50'>Contact</Link>
        </div>
        <div className='flex items-center gap-6'>
            <Link href="#" className='text-xl text-neutral-50'>Login</Link>
            <Link href="#" className='text-xl text-background px-6 py-3 bg-primary rounded-md'>Registrarse</Link>
        </div>
    </div>
  )
}

export default Navbar
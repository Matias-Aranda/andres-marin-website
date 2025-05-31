"use client"
import React, { useRef } from 'react'
import Link from 'next/link'
import TransitionLink from '../Utils/TransitionLink';
import gsap from 'gsap';
import LoadingScreen from '../Utils/LoadingScreen';
import { useEffect } from 'react';
import { useAuth } from '@/context/auth-context';
import { logout } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import HamburgerButton from './HamburgerButton';
import NavMenu from './NavMenu';
import NavOptions from './NavOptions';



const Navbar = () => {

  const { user } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [showClass, setShowClass] = React.useState("");
  const [scrollPos, setScrollPos] = React.useState(0);
  const [count, setCount] = React.useState("");
  const [mobile, setMobile] = React.useState(false);
  const [shown, setShown] = React.useState(false);
  const [openOptions, setOpenOptions] = React.useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    scrollPos < 100 ? setShowClass("border-transparent") : {}
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const visible = currentScrollPos < 100 || scrollPos > currentScrollPos;

    setScrollPos(currentScrollPos);
    visible ? setShowClass("bg-background/95 backdrop-blur-lg shadow-[0px_5px_15px_rgba(0,0,0,.6)] border-b") : setShowClass("translate-y-[-100%]");
  };

  useEffect(() => {
    setCount(prevCount => prevCount + 1)
  }, [router])

  useEffect(() => {
    shown ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden')
  }, [shown])

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 1024);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function toggleOptions() {
    setOpenOptions(!openOptions);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
        toggleOptions();
      }
    };

    if (openOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openOptions]);

  return (
    <div className={`flex items-center justify-between px-8 lg-px-10 xl:px-15 py-4 fixed top-0 left-0 right-0 z-9 text-white border-primary/50 transition-all duration-400 ${showClass} xl:text-xl text-base`}>
        {loading && <LoadingScreen />}
        <div className='flex items-center 2xl:gap-18 xl:gap-12 lg:gap-10 gap-6 '>
            <TransitionLink className='text-shadow-lg' setLoading={setLoading} href="/">
              <img className='lg:h-8 h-7' src="/nav_logo.svg" alt="logo" />
            </TransitionLink>
            {!mobile && <>
              <TransitionLink className='text-shadow-lg' setLoading={setLoading} href="/">Inicio</TransitionLink>
              <TransitionLink className='text-shadow-lg' setLoading={setLoading} href="/about">Sobre Mí</TransitionLink>
              <TransitionLink className='text-shadow-lg' setLoading={setLoading} href="/services">Servicios</TransitionLink>
              <TransitionLink className='text-shadow-lg' setLoading={setLoading} href="/socials">Redes Sociales</TransitionLink>
              <TransitionLink className='text-shadow-lg' setLoading={setLoading} href="/sponsors">Sponsor Me</TransitionLink>
            </>}
        </div>
        {!mobile && <>
        {user ? 
        <div ref={optionsRef} className={`flex flex-col items-start gap-4 cursor-pointer select-none relative ${openOptions}`}>
              <div className='flex items-center gap-4 z-10 px-5' onClick={toggleOptions}>
                <p>{user.displayName}</p>
                <img src="/user_pfp.svg" className='h-[35px]'/>
              </div>
              {openOptions && <NavOptions toggleOptions={toggleOptions} logout={logout} />}
        </div>
        :
        <div className='flex items-center gap-6'>
                <TransitionLink className='text-shadow-lg' setLoading={setLoading} href="/login">Login</TransitionLink>
                <TransitionLink setLoading={setLoading} href="/register" className='text-base text-background px-8 py-2.5 bg-primary rounded-md'>Registrarse</TransitionLink>
        </div>}
        </>}
        {mobile && <HamburgerButton shown={shown} setShown={setShown}/>}
        {shown && <NavMenu shown={shown} setShown={setShown} setLoading={setLoading}/>}
    </div>
  )
}

export default Navbar
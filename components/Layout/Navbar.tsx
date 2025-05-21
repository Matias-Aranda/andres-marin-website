"use client"
import React from 'react'
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



const Navbar = () => {

  const { user } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [showClass, setShowClass] = React.useState("");
  const [scrollPos, setScrollPos] = React.useState(0);
  const [count, setCount] = React.useState("");
  const [mobile, setMobile] = React.useState(false);
  const [shown, setShown] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    scrollPos < 100 ? setShowClass("") : {}
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const visible = currentScrollPos < 100 || scrollPos > currentScrollPos;

    setScrollPos(currentScrollPos);
    visible ? setShowClass("bg-background/35 backdrop-blur-xl shadow-[0px_5px_15px_rgba(0,0,0,.4)]") : setShowClass("translate-y-[-100%]");
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

  console.log(mobile)

  return (
    <div className={`flex items-center justify-between px-8 lg-px-10 xl:px-15 py-4 fixed top-0 left-0 right-0 z-9 text-white transition-all duration-400 ${showClass} xl:text-xl text-base`}>
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
        <div className='flex items-center gap-4 cursor-pointer' onClick={logout}>
              <p>{user.displayName}</p>
              <img src="/user_pfp.svg" className='h-[35px]'/>
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
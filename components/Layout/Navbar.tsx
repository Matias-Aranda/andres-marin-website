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



const Navbar = () => {

  const { user } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [showClass, setShowClass] = React.useState("");
  const [scrollPos, setScrollPos] = React.useState(0);
  const [count, setCount] = React.useState("");
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
    visible ? setShowClass("bg-background shadow-2xl") : setShowClass("translate-y-[-100%]");
  };

  useEffect(() => {
    setCount(prevCount => prevCount + 1)
  }, [router])

  return (
    <div className={`flex items-center justify-between px-15 py-4 fixed top-0 left-0 right-0 z-9 text-white transition-all duration-400 ${showClass}`}>
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
        {user ? 
        <div className='flex items-center gap-6 cursor-pointer' onClick={logout}>
              <p>{user.displayName}</p>
              <img src="/user_pfp.svg"/>
        </div>
        :
        <div className='flex items-center gap-6'>
                <TransitionLink setLoading={setLoading} href="/login">Login</TransitionLink>
                <TransitionLink setLoading={setLoading} href="/register" className='text-base text-background px-8 py-2.5 bg-primary rounded-md'>Registrarse</TransitionLink>
        </div>
        }
    </div>
  )
}

export default Navbar
"use client"
import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingScreen = () => {

  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      loadingRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
    )
    .to(
      loadingRef.current,
      { opacity: 0, duration: 0.3, ease: 'power2.in' },
      "+=1" // optional wait time between in and out
    );
  }, []);

  return (
    <div ref={loadingRef} className='fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-background z-[999]'>
        <img src="/loading.svg" alt="Loading..." className='animate-pulse object-cover' />
    </div>
  )
}

export default LoadingScreen
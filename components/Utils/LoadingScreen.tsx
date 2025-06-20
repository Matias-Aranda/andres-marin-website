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
    <div ref={loadingRef} className='top-0 left-0 z-[999] fixed flex justify-center items-center bg-background w-full h-screen'>
        <img src="/loading.svg" alt="Loading..." className='object-cover animate-pulse' />
    </div>
  )
}

export default LoadingScreen
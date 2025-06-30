"use client"
import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTransitionContext } from './TransitionContext';

const Transition = () => {

  const transitionRef = useRef<HTMLDivElement>(null);
  const { transitioning } = useTransitionContext();

  useEffect(() => {
    if(transitioning){
      const tl = gsap.timeline();
  
      tl.fromTo(
        transitionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      )
      .to(
        transitionRef.current,
        { opacity: 0, duration: 0.3, ease: 'power2.in' },
        "+=1" // optional wait time between in and out
      );
    }
  }, [transitioning]);

  console.log("Transitioning:", transitioning);

  return (
    <div ref={transitionRef} className={`top-0 left-0 fixed z-[-1] flex justify-center items-center bg-background w-full h-screen ${transitioning ? 'z-[999]' : "opacity-0 pointer-events-none"}`}>
        <img src="/loading.svg" alt="Loading..." className='object-cover animate-pulse' />
    </div>
  )
}

export default Transition
"use client"
import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TransitionLink from '../Utils/TransitionLink';

type NavMenuProps = {
    shown: boolean;
    setShown: React.Dispatch<React.SetStateAction<boolean>>;
    setLoading?: (loading: boolean) => void;
};

const NavMenu: React.FC<NavMenuProps> = ({ setShown, setLoading, shown }) => {

    const modalRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.set(modalRef.current, { xPercent: 100 });
        gsap.set(bgRef.current, { autoAlpha: 0 });

        // Animate to original position (xPercent: 0 by default)
        gsap.to(modalRef.current, {
            xPercent: 0,
            opacity: 1,
            duration: .4,
            ease: "power3.out"
        });
        gsap.to(bgRef.current, {
            autoAlpha: 1,
            ease: "power3.out"
        });
    }, []);

    const closeModal = async () => {
        await Promise.all([
            gsap.fromTo(
                modalRef.current,
                { xPercent: 0, autoAlpha: 1 }, // from
                { xPercent: 100, autoAlpha: 0, duration: .4 } // to
            ),
            gsap.fromTo(
                bgRef.current,
                { autoAlpha: 1 }, // from
                { autoAlpha: 0, duration: .4 } // to
            ),

        ])
        setShown(false)
    }
    

  return (
    <div className='h-screen w-full flex fixed justify-end top-0 left-0 z-10'>
        <div ref={bgRef} onClick={closeModal} className='bg-[#0C0C1D]/90 absolute w-full h-full z-10'></div>
        <div ref={modalRef} className='bg-background/50 min-w-[250px  ] w-[40vw] backdrop-blur flex flex-col items-start justify-center gap-6 border-l border-l-primary p-10 z-10 relative'>
            <button onClick={closeModal} className='absolute top-2 right-9 w-[40px] h-[40px] z-13'></button>
            <div onClick={closeModal} className='flex flex-col items-start justify-center gap-6'>
                <TransitionLink setLoading={setLoading} className='w-full' href="/">Inicio</TransitionLink>
                <TransitionLink setLoading={setLoading} className='w-full' href="/about">Sobre Mí</TransitionLink>
                <TransitionLink setLoading={setLoading} className='w-full' href="/services">Servicios</TransitionLink>
                <TransitionLink setLoading={setLoading} className='w-full' href="/socials">Redes Sociales</TransitionLink>
                <TransitionLink setLoading={setLoading} className='w-full' href="/sponsors">Sponsor Me</TransitionLink>
            </div>
        </div>
    </div>
  )
}

export default NavMenu
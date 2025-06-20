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
    <div className='top-0 left-0 z-10 fixed flex justify-end w-full h-screen'>
        <div ref={bgRef} onClick={closeModal} className='z-10 absolute bg-[#0C0C1D]/90 w-full h-full'></div>
        <div ref={modalRef} className='z-10 relative flex flex-col justify-center items-start gap-6 bg-background/50 backdrop-blur p-10 border-l border-l-primary w-[40vw] min-w-[250px]'>
            <button onClick={closeModal} className='top-2 right-9 z-13 absolute w-[40px] h-[40px]'></button>
            <div onClick={closeModal} className='flex flex-col justify-center items-start gap-6'>
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
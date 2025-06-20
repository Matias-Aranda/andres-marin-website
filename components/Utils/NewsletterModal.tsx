"use client"
import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type NewsletterModalProps = {
  setShown: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewsletterModal: React.FC<NewsletterModalProps> = ({ setShown }) => {

    const modalRef = useRef<HTMLFormElement>(null);
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
    <div className='top-0 z-10 fixed flex justify-end w-full h-screen'>
        <div ref={bgRef} onClick={closeModal} className='z-10 absolute bg-[#0C0C1D]/90 w-full h-full'></div>
        <form ref={modalRef} className='z-10 relative flex flex-col justify-center items-start gap-6 bg-background/50 backdrop-blur p-[5%] sm:border border-l-primary w-[100%] sm:w-[40%] sm:min-w-100'>
            <h3 className='self-center font-display text-[24px] text-white'>suscribirse al <span className='text-primary'>newsletter</span></h3>
            <label className='flex flex-col gap-4 w-full text-white text-base leading-none'>
                Email
                <input type="email" className='p-2 border border-primary rounded h-[55px] text-white' />
            </label>
            <p className='text-white/50 text-xs font-body-light-italic leading-relaxed'>
                Aviso de consentimiento*<br/>
                Al suscribirte a nuestro newsletter, aceptas recibir comunicaciones periódicas por correo electrónico con novedades, promociones, 
                contenidos exclusivos y actualizaciones sobre nuestros productos y servicios.<br/>
                Nos comprometemos a proteger tu información personal y a utilizarla únicamente con fines relacionados a nuestras actividades. 
                Puedes darte de baja en cualquier momento a través del enlace disponible en cada correo que enviamos.
            </p>
            <button  className='bg-primary my-2 px-25 sm:px-8 py-2.5 rounded-md w-full text-background text-base text-center cursor-pointer'>Suscribirse</button>
            <div onClick={closeModal} className='top-5 sm:top-[unset] right-5 sm:right-0 sm:left-[-100px] absolute flex justify-center items-center bg-primary rounded-full w-[33px] h-[33px] cursor-pointer'>
                <img src="/close_icon.svg" className='select-none'/>
            </div>
        </form>
    </div>
  )
}

export default NewsletterModal
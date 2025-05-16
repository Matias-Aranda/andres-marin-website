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
    <div className='h-screen w-full flex fixed justify-end top-0 z-10'>
        <div ref={bgRef} onClick={closeModal} className='bg-[#0C0C1D]/90 absolute w-full h-full z-10'></div>
        <form ref={modalRef} className='bg-background/50 w-[40%] backdrop-blur flex flex-col items-start justify-center gap-6 border border-l-primary p-30 z-10 relative'>
            <h3 className='text-[24px] font-display text-white self-center'>suscribirse al <span className='text-primary'>newsletter</span></h3>
            <label className='text-base text-white leading-none flex flex-col gap-4 w-full'>
                Email
                <input type="email" className='h-[55px] border border-primary p-2 rounded text-white' />
            </label>
            <p className='text-base text-white/50 font-body-light-italic leading-relaxed'>
                Privacy and Marketing Consent*<br/>
                I have read the <span>Privacy Policy</span> and confirm I want to receive marketing communications 
                from Ferrari S.p.A. regarding the world of Ferrari, as described in the notice. 
                If you select “I do not consent”, you will no longer be kept up-to-date about our latest news, 
                launches of new vehicle models and event invitations.
            </p>
            <button  className='text-base text-background my-2 px-8 py-2.5 px-25 bg-primary rounded-md cursor-pointer'>Suscribirse</button>
            <div onClick={closeModal} className='bg-primary w-[33px] h-[33px] rounded-full absolute left-[-100px] cursor-pointer flex items-center justify-center'>
                <img src="/close_icon.svg" className='select-none'/>
            </div>
        </form>
    </div>
  )
}

export default NewsletterModal
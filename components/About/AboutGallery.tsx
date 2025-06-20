'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import InertiaPlugin from 'gsap/InertiaPlugin';
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

gsap.registerPlugin(Draggable, InertiaPlugin);

const DraggableSlider = () => {

  const [mode, setMode] = useState<"snap" | "free" | "free-snap">("snap");

  useEffect(() => {
    const handleResize = () => {
      setMode(window.innerWidth < 768 ? "snap" : "free-snap");
    }

    // Set on mount
    handleResize()

    // Listen for resize
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: mode,
    slides: {
      origin: "center",
      perView: () => (window.innerWidth > 1600 ? 2 : window.innerWidth < 768 ? 1 : 1.5),
      spacing: () => (window.innerWidth < 1280 ? 20 : 50),
    },
  })

  return (
    <div className="relative bg-white mx-auto py-40 w-full overflow-hidden">
      <h3 className='top-30 left-[5%] md:left-[17%] absolute text-[28px] font-body-light-italic uppercase'>Galería</h3>
      <div ref={sliderRef} className="my-10 keen-slider">
        <img src="/gallery/1.png" className="h-[500px] xl:h-[600px] object-cover keen-slider__slide" />
        <img src="/gallery/2.png" className="h-[500px] xl:h-[600px] object-cover keen-slider__slide" />
        <img src="/gallery/3.png" className="h-[500px] xl:h-[600px] object-cover keen-slider__slide" />
        <img src="/gallery/4.png" className="h-[500px] xl:h-[600px] object-cover keen-slider__slide" />
      </div>
    </div>
  );
};

export default DraggableSlider;

'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import InertiaPlugin from 'gsap/InertiaPlugin';
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

gsap.registerPlugin(Draggable, InertiaPlugin);

const DraggableSlider = () => {

  const [mode, setMode] = useState("snap");

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
    <div className="overflow-hidden w-full mx-auto bg-white py-40 relative">
      <h3 className='absolute font-body-light-italic uppercase top-30 left-[5%] md:left-[17%] text-[28px]'>Galería</h3>
      <div ref={sliderRef} className="keen-slider my-10">
        <img src="/gallery/1.png" className="keen-slider__slide h-[500px] xl:h-[600px] object-cover" />
        <img src="/gallery/2.png" className="keen-slider__slide h-[500px] xl:h-[600px] object-cover" />
        <img src="/gallery/3.png" className="keen-slider__slide h-[500px] xl:h-[600px] object-cover" />
        <img src="/gallery/4.png" className="keen-slider__slide h-[500px] xl:h-[600px] object-cover" />
      </div>
    </div>
  );
};

export default DraggableSlider;

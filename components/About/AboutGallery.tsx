'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import InertiaPlugin from 'gsap/InertiaPlugin';

gsap.registerPlugin(Draggable, InertiaPlugin);

const DraggableSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const images = [
    "/gallery/1.png",
    "/gallery/2.png",
    "/gallery/3.png",
    "/gallery/1.png",
    "/gallery/2.png",
    "/gallery/3.png",
    "/gallery/1.png",
    "/gallery/2.png",
    "/gallery/3.png",
    "/gallery/3.png",
  ]

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;

    const containerWidth = container.offsetWidth;
    const itemWidth = 1000 + 50; // item + gap
    const totalItems = content.children.length;

    const totalWidth = itemWidth * totalItems;

    const centerOffset = (containerWidth - itemWidth) / 2;

    const minX = -(itemWidth * totalItems - containerWidth + centerOffset);
    const maxX = centerOffset;

    Draggable.create(content, {
      type: 'x',
      inertia: true,
      cursor: 'grab',
      activeCursor: 'grabbing',
      bounds: { minX, maxX },
      snap: {
        x: (endValue) => {
          const index = Math.round((endValue - centerOffset) / itemWidth);
          return index * itemWidth + centerOffset;
        },
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden w-full mx-auto bg-white py-40 relative">
      <h3 className='absolute font-body-light-italic uppercase top-30 left-105 text-[28px]'>Galería</h3>
      <div ref={contentRef} className="flex gap-[50px] w-max p-4">
        {images.map((image, i) => (
          <img src={image}
            key={i}
            className="w-[1000px] h-[600px] bg-blue-500 text-white flex items-center justify-center shadow-md text-2xl object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default DraggableSlider;

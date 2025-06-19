import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <div className='text-center mt-30 text-white flex flex-col items-center'>
            <h1 className='uppercase text-[64px] font-display text-shadow-lg'>Elige tu <span className='text-primary'>plan</span></h1>
            <div className='h-0 w-50 mb-5 border-b border-white/10 border-white/10'></div>
            <p className='text-base leading-relaxed text-white/60 pb-3 max-w-[800px]'>
                Sesiones extendidas para un trabajo completo y detallado. Ideal para preparación de eventos, 
                análisis en profundidad y mejora de aspectos avanzados del pilotaje.
            </p>
        </div>
        <div className='flex gap-6 items-center justify-center mt-10 mb-30'>
            <div className='flex flex-col items-start border border-primary/50 rounded-xl w-[430px] text-white bg-black/30 px-10 py-10 gap-4'>
                <div className='flex justify-between items-center w-full'>
                    <p>70 horas</p>
                    <div className='h-0 w-[15px] border-b border-white/10'></div>
                    <p className='text-base text-white/30'>Introducción al SimRacing</p>
                </div>
                <h2 className='uppercase text-[64px] text-primary font-display text-shadow-lg -mb-2'>$6 <span className='text-[24px] text-white/30 -ml-2'>usd</span></h2>
                <p className='text-base leading-relaxed text-white/60 pb-3'>
                    Sesiones extendidas para un trabajo completo y detallado. Ideal para preparación de eventos, 
                    análisis en profundidad y mejora de aspectos avanzados del pilotaje.
                </p>
                <div className='h-0 w-full border-b border-white/10'></div>
                <ul className='list-disc pl-6 flex flex-col gap-4 mt-4'>
                    <li className='text-base [&::marker]:text-primary'>Evaluación completa de desempeño</li>
                    <li className='text-base [&::marker]:text-primary'>Estrategias de carrera y gestión de neumáticos</li>
                    <li className='text-base [&::marker]:text-primary'>Simulación de condiciones reales de competencia</li>
                    <li className='text-base [&::marker]:text-primary'>Adaptación a diferentes coches y circuitos</li>
                </ul>
                <Link href="/booking" className='mt-4 text-center text-base text-black px-8 py-4 bg-primary w-full rounded-md cursor-pointer'>Reservar</Link>
            </div>
            <div className='flex flex-col items-start border border-primary/50 rounded-xl w-[430px] text-white bg-black/30 px-10 py-10 gap-4'>
                <div className='flex justify-between items-center w-full'>
                    <p>70 horas</p>
                    <div className='h-0 w-[15px] border-b border-white/10'></div>
                    <p className='text-base text-white/30'>Introducción al SimRacing</p>
                </div>
                <h2 className='uppercase text-[64px] text-primary font-display text-shadow-lg -mb-2'>$12 <span className='text-[24px] text-white/30 -ml-2'>usd</span></h2>
                <p className='text-base leading-relaxed text-white/60 pb-3'>
                    Sesiones extendidas para un trabajo completo y detallado. Ideal para preparación de eventos, 
                    análisis en profundidad y mejora de aspectos avanzados del pilotaje.
                </p>
                <div className='h-0 w-full border-b border-white/10'></div>
                <ul className='list-disc pl-6 flex flex-col gap-4 mt-4'>
                    <li className='text-base [&::marker]:text-primary'>Evaluación completa de desempeño</li>
                    <li className='text-base [&::marker]:text-primary'>Estrategias de carrera y gestión de neumáticos</li>
                    <li className='text-base [&::marker]:text-primary'>Simulación de condiciones reales de competencia</li>
                    <li className='text-base [&::marker]:text-primary'>Adaptación a diferentes coches y circuitos</li>
                </ul>
                <Link href="/booking" className='mt-4 text-center text-base text-black px-8 py-4 bg-primary w-full rounded-md cursor-pointer'>Reservar</Link>
            </div>
            <div className='flex flex-col items-start border border-primary/50 rounded-xl w-[430px] text-white bg-black/30 px-10 py-10 gap-4'>
                <div className='flex justify-between items-center w-full'>
                    <p>70 horas</p>
                    <div className='h-0 w-[15px] border-b border-white/10'></div>
                    <p className='text-base text-white/30'>Introducción al SimRacing</p>
                </div>
                <h2 className='uppercase text-[64px] text-primary font-display text-shadow-lg -mb-2'>$20 <span className='text-[24px] text-white/30 -ml-2'>usd</span></h2>
                <p className='text-base leading-relaxed text-white/60 pb-3'>
                    Sesiones extendidas para un trabajo completo y detallado. Ideal para preparación de eventos, 
                    análisis en profundidad y mejora de aspectos avanzados del pilotaje.
                </p>
                <div className='h-0 w-full border-b border-white/10'></div>
                <ul className='list-disc pl-6 flex flex-col gap-4 mt-4'>
                    <li className='text-base [&::marker]:text-primary'>Evaluación completa de desempeño</li>
                    <li className='text-base [&::marker]:text-primary'>Estrategias de carrera y gestión de neumáticos</li>
                    <li className='text-base [&::marker]:text-primary'>Simulación de condiciones reales de competencia</li>
                    <li className='text-base [&::marker]:text-primary'>Adaptación a diferentes coches y circuitos</li>
                </ul>
                <Link href="/booking" className='mt-4 text-center text-base text-black px-8 py-4 bg-primary w-full rounded-md cursor-pointer'>Reservar</Link>
            </div>
        </div>
    </div>
  )
}

export default page
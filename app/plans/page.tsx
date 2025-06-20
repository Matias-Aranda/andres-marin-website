import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <div className='flex flex-col items-center mt-30 text-white text-center'>
            <h1 className='text-shadow-lg font-display text-[64px] uppercase'>Elige tu <span className='text-primary'>plan</span></h1>
            <div className='mb-5 border-white/10 border-white/10 border-b w-50 h-0'></div>
            <p className='pb-3 max-w-[850px] text-white/60 text-base leading-relaxed'>
                Tanto si estás dando tus primeros pasos en el SimRacing como si buscas 
                perfeccionar tu técnica o prepararte para la competición, contamos con 
                sesiones diseñadas para ayudarte a avanzar de forma estructurada y efectiva.
            </p>
        </div>
        <div className='flex justify-center gap-6 mt-10 mb-30'>
            <div className='flex flex-col items-start gap-4 bg-black/30 px-10 py-10 border border-primary/50 rounded-xl w-[430px] text-white'>
                <div className='flex justify-between items-center w-full'>
                    <p>30 minutos</p>
                    <div className='border-white/10 border-b w-[15px] h-0'></div>
                    <p className='text-white/30 text-base'>Introducción al SimRacing</p>
                </div>
                <h2 className='text-shadow-lg -mb-2 font-display text-[64px] text-primary uppercase'>$6 <span className='-ml-2 text-[24px] text-white/30'>usd</span></h2>
                <p className='pb-3 text-white/60 text-base leading-relaxed'>
                    Ideal para quienes se inician en el mundo del SimRacing. 
                    Sesiones breves y enfocadas para adquirir las bases técnicas y 
                    comenzar a desarrollar confianza en pista.
                </p>
                <div className='border-white/10 border-b w-full h-0'></div>
                <ul className='flex flex-col gap-4 my-4 pl-6 list-disc'>
                    <li className='[&::marker]:text-primary text-base'>Enfoque en fundamentos básicos</li>
                    <li className='[&::marker]:text-primary text-base'>Corrección de errores iniciales</li>
                    <li className='[&::marker]:text-primary text-base'>Adaptación al simulador y al equipo</li>
                    <li className='[&::marker]:text-primary text-base'>Consejos prácticos para progresar desde el primer día</li>
                </ul>
                <Link href="/booking" className='bg-primary mt-auto px-8 py-4 rounded-md w-full text-black text-base text-center cursor-pointer'>Reservar</Link>
            </div>
            <div className='flex flex-col items-start gap-4 bg-black/30 px-10 py-10 border border-primary/50 rounded-xl w-[430px] text-white'>
                <div className='flex justify-between items-center w-full'>
                    <p>60 minutos</p>
                    <div className='border-white/10 border-b w-[15px] h-0'></div>
                    <p className='text-white/30 text-base'>Entrenamiento Estándar</p>
                </div>
                <h2 className='text-shadow-lg -mb-2 font-display text-[64px] text-primary uppercase'>$12 <span className='-ml-2 text-[24px] text-white/30'>usd</span></h2>
                <p className='pb-3 text-white/60 text-base leading-relaxed'>
                    El plan más equilibrado. Permite profundizar en técnica de conducción, optimización del rendimiento y preparación para competencias.
                    Recomendado para pilotos con algo de experiencia que buscan avanzar de manera constante.
                </p>
                <div className='border-white/10 border-b w-full h-0'></div>
                <ul className='flex flex-col gap-4 my-4 pl-6 list-disc'>
                    <li className='[&::marker]:text-primary text-base'>Análisis técnico de la conducción</li>
                    <li className='[&::marker]:text-primary text-base'>Trabajo sobre trazadas ideales y referencias de frenado</li>
                    <li className='[&::marker]:text-primary text-base'>Desarrollo de consistencia en tiempos de vuelta</li>
                    <li className='[&::marker]:text-primary text-base'>Identificación y corrección de malos hábitos</li>
                </ul>
                <Link href="/booking" className='bg-primary mt-auto px-8 py-4 rounded-md w-full text-black text-base text-center cursor-pointer'>Reservar</Link>
            </div>
            <div className='flex flex-col items-start gap-4 bg-black/30 px-10 py-10 border border-primary/50 rounded-xl w-[430px] text-white'>
                <div className='flex justify-between items-center w-full'>
                    <p>120 minutos</p>
                    <div className='border-white/10 border-b w-[15px] h-0'></div>
                    <p className='text-white/30 text-base'>Entrenamiento Intensivo</p>
                </div>
                <h2 className='text-shadow-lg -mb-2 font-display text-[64px] text-primary uppercase'>$20 <span className='-ml-2 text-[24px] text-white/30'>usd</span></h2>
                <p className='pb-3 text-white/60 text-base leading-relaxed'>
                    Sesiones extendidas para un trabajo completo y detallado. Ideal para preparación de eventos, 
                    análisis en profundidad y mejora de aspectos avanzados del pilotaje.
                </p>
                <div className='border-white/10 border-b w-full h-0'></div>
                <ul className='flex flex-col gap-4 my-4 pl-6 list-disc'>
                    <li className='[&::marker]:text-primary text-base'>Evaluación completa de desempeño</li>
                    <li className='[&::marker]:text-primary text-base'>Estrategias de carrera y gestión de neumáticos</li>
                    <li className='[&::marker]:text-primary text-base'>Simulación de condiciones reales de competencia</li>
                    <li className='[&::marker]:text-primary text-base'>Adaptación a diferentes coches y circuitos</li>
                </ul>
                <Link href="/booking" className='bg-primary mt-auto px-8 py-4 rounded-md w-full text-black text-base text-center cursor-pointer'>Reservar</Link>
            </div>
        </div>
    </div>
  )
}

export default page
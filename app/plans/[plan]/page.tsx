"use client"
import BookingCalendar from '@/components/Calendar/BookingCalendar'
import { notFound } from 'next/navigation';
import React, { use } from 'react'

const page = ({ params }: { params: Promise<{ plan: string }> }) => {

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const { plan } = use(params);
  let title: string = "";
  let duration: string = "";
  let desc: string = "";

  console.log("params", plan)

  switch (plan) {
  case 'half-session':
    title = `Coaching Session 1v1`
    duration = '30 minutos'
    desc = `Sesión de coaching 1 a 1 de 30 minutos, ideal para pilotos que están dando sus primeros pasos en los simuladores.
            A través de Discord, trabajamos en conceptos clave como trazadas, frenado, control del coche y hábitos de conducción.
            Aplicamos ejemplos prácticos en iRacing, Assetto Corsa, Automobilista 2 y KartKraft.
            Perfecta para establecer una base técnica sólida y empezar a construir confianza al volante.`
    break
  case 'full-session':
    title = `Coaching Session 1v1`
    duration = '60 minutos'
    desc = `Sesión de coaching 1 a 1 de aproximadamente 1 hora, realizada a través de Discord con ejemplos prácticos. 
            El objetivo es ayudarte a identificar y mejorar aspectos técnicos y estratégicos de tu conducción en simuladores. 
            Trabajamos en iRacing, Assetto Corsa, Automobilista 2 y KartKraft. Ideal para pilotos que buscan optimizar su 
            rendimiento y progresar de manera efectiva.`
    break
  case 'membership':
    title = `Acompañamiento Continuo`
    duration = 'Mensual'
    desc = `Programa de coaching continuo pensado para pilotos que buscan progresar de forma estructurada y sostenida.
            Incluye sesiones 1 a 1 periódicas, seguimiento personalizado, análisis de telemetría, y soporte vía Discord entre prácticas.
            Nos enfocamos en mejorar tu rendimiento técnico y estratégico en iRacing, Assetto Corsa, Automobilista 2 y KartKraft.
            Ideal si querés mantener una evolución constante, con el respaldo de un coach en cada etapa de tu desarrollo como piloto.`
    break
    default:
    notFound()
}

  const handleSelect = (value: string) => {
    setSelectedTime(value)
  }

  return (
    <div className='flex justify-center bg-background p-50 min-h-screen text-white'>
      <div className='flex gap-40'>
        <div className='flex flex-col w-full max-w-[600px]'>
          <h1 className='mt-2 mb-4 font-display font-bold text-white text-5xl tracking-wide'>
            <span className='text-primary'>{title.split(" ")[0]} </span>
            {title && title.split(" ").length > 0 ? title.split(" ").slice(1).join(" ") : ""}
          </h1>
          <p className='bg-black/30 px-4 py-2 border border-primary/50 rounded-3xl w-fit text-white/80 text-base'>{duration}</p>
          <p className='my-5 text-base leading-relaxed'>
            {desc}
          </p>
          <h3 className='pt-10'>Selecciona uno de los horarios disponibles</h3>
          <div className='flex flex-wrap gap-4 mt-4'>
            <p onClick={() => handleSelect('9:00 AM')} className={`${selectedTime === '9:00 AM' ? 'border-primary bg-primary/30 text-white' : 'border-white/50 text-white/80'} py-2 px-4 text-base rounded-3xl border w-fit bg-black/30 cursor-pointer`}>9:00 AM</p>
            <p onClick={() => handleSelect('10:00 AM')} className={`${selectedTime === '10:00 AM' ? 'border-primary bg-primary/30 text-white' : 'border-white/50 text-white/80'} py-2 px-4 text-base rounded-3xl border w-fit bg-black/30 cursor-pointer`}>10:00 AM</p>
            <p onClick={() => handleSelect('11:00 AM')} className={`${selectedTime === '11:00 AM' ? 'border-primary bg-primary/30 text-white' : 'border-white/50 text-white/80'} py-2 px-4 text-base rounded-3xl border w-fit bg-black/30 cursor-pointer`}>11:00 AM</p>
            <p onClick={() => handleSelect('12:00 AM')} className={`${selectedTime === '12:00 AM' ? 'border-primary bg-primary/30 text-white' : 'border-white/50 text-white/80'} py-2 px-4 text-base rounded-3xl border w-fit bg-black/30 cursor-pointer`}>12:00 AM</p>
          </div>
          <div className='flex flex-wrap gap-4 mt-4'>
            <p onClick={() => handleSelect('2:00 PM')} className={`${selectedTime === '2:00 PM' ? 'border-primary bg-primary/30 text-white' : 'border-white/50 text-white/80'} py-2 px-4 text-base rounded-3xl border  w-fit bg-black/30 cursor-pointer`}>2:00 PM</p>
            <p onClick={() => handleSelect('4:00 PM')} className={`${selectedTime === '4:00 PM' ? 'border-primary bg-primary/30 text-white' : 'border-white/50 text-white/80'} py-2 px-4 text-base rounded-3xl border w-fit bg-black/30 cursor-pointer`}>4:00 PM</p>
            <p onClick={() => handleSelect('5:00 PM')} className={`${selectedTime === '5:00 PM' ? 'border-primary bg-primary/30 text-white' : 'border-white/50 text-white/80'} py-2 px-4 text-base rounded-3xl border w-fit bg-black/30 cursor-pointer`}>5:00 PM</p>
            <p onClick={() => handleSelect('7:00 PM')} className={`${selectedTime === '7:00 PM' ? 'border-primary bg-primary/30 text-white' : 'border-white/50 text-white/80'} py-2 px-4 text-base rounded-3xl border w-fit bg-black/30 cursor-pointer`}>7:00 PM</p>
          </div>
          <button disabled={!selectedDate || !selectedTime} className='bg-primary disabled:bg-black/30 mt-auto px-8 py-4 rounded-md text-black disabled:text-white/20 text-base cursor-pointer'>Reservar</button>
        </div>
        <BookingCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>
    </div>
  )
}

export default page
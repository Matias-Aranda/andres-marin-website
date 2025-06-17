"use client"
import BookingCalendar from '@/components/Calendar/BookingCalendar'
import React from 'react'

const page = () => {

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelectedTime(value)
  }

  return (
    <div className='p-50 flex justify-center text-white bg-background min-h-screen gap-40'>
      <div className='flex flex-col w-full max-w-[600px] mt-10'>
        <h1 className='text-5xl tracking-wide text-white font-bold mb-4 font-display'><span className='text-primary'>Coaching</span> Session 1v1</h1>
        <p className='py-2 px-4 text-base text-white/80 rounded-3xl border border-primary/50 w-fit bg-black/30'>60 minutos</p>
        <p className='text-base my-5 leading-relaxed'>
          Sesión de coaching 1 a 1 de aproximadamente 1 hora, realizada a través de Discord con ejemplos prácticos. 
          El objetivo es ayudarte a identificar y mejorar aspectos técnicos y estratégicos de tu conducción en simuladores. 
          Trabajamos en iRacing, Assetto Corsa, Automobilista 2 y KartKraft. Ideal para pilotos que buscan optimizar su 
          rendimiento y progresar de manera efectiva.
        </p>
        <h3 className='pt-10'>Selecciona uno de los horarios disponibles</h3>
        <div className='flex flex-wrap gap-4 mt-4'>
          <p onClick={() => handleSelect('9:00 AM')} className={`${selectedTime === '9:00 AM' ? 'border-primary bg-primary/30' : 'border-white/50'} py-2 px-4 text-base text-white/80 rounded-3xl border w-fit bg-black/30 cursor-pointer`}>9:00 AM</p>
          <p onClick={() => handleSelect('10:00 AM')} className={`${selectedTime === '10:00 AM' ? 'border-primary bg-primary/30' : 'border-white/50'} py-2 px-4 text-base text-white/80 rounded-3xl border w-fit bg-black/30 cursor-pointer`}>10:00 AM</p>
          <p onClick={() => handleSelect('11:00 AM')} className={`${selectedTime === '11:00 AM' ? 'border-primary bg-primary/30' : 'border-white/50'} py-2 px-4 text-base text-white/80 rounded-3xl border w-fit bg-black/30 cursor-pointer`}>11:00 AM</p>
          <p onClick={() => handleSelect('12:00 AM')} className={`${selectedTime === '12:00 AM' ? 'border-primary bg-primary/30' : 'border-white/50'} py-2 px-4 text-base text-white/80 rounded-3xl border w-fit bg-black/30 cursor-pointer`}>12:00 AM</p>
        </div>
        <div className='flex flex-wrap gap-4 mt-4'>
          <p onClick={() => handleSelect('2:00 PM')} className={`${selectedTime === '2:00 PM' ? 'border-primary bg-primary/30' : 'border-white/50'} py-2 px-4 text-base text-white/80 rounded-3xl border  w-fit bg-black/30 cursor-pointer`}>2:00 PM</p>
          <p onClick={() => handleSelect('4:00 PM')} className={`${selectedTime === '4:00 PM' ? 'border-primary bg-primary/30' : 'border-white/50'} py-2 px-4 text-base text-white/80 rounded-3xl border w-fit bg-black/30 cursor-pointer`}>4:00 PM</p>
          <p onClick={() => handleSelect('5:00 PM')} className={`${selectedTime === '5:00 PM' ? 'border-primary bg-primary/30' : 'border-white/50'} py-2 px-4 text-base text-white/80 rounded-3xl border w-fit bg-black/30 cursor-pointer`}>5:00 PM</p>
          <p onClick={() => handleSelect('7:00 PM')} className={`${selectedTime === '7:00 PM' ? 'border-primary bg-primary/30' : 'border-white/50'} py-2 px-4 text-base text-white/80 rounded-3xl border w-fit bg-black/30 cursor-pointer`}>7:00 PM</p>
        </div>
        <button disabled={!selectedDate || !selectedTime} className='mt-25 text-base disabled:text-white/20 text-black px-8 py-4 bg-primary rounded-md cursor-pointer disabled:bg-black/30'>Reservar</button>
      </div>
      <BookingCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  )
}

export default page
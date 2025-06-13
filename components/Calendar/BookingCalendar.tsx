"use client";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Days available: Monday = 1, Wednesday = 3
  const availableWeekdays = [1, 3 , 5, 6];

  const isDateAvailable = (date: Date) => {
    const dayOfWeek = date.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
    return availableWeekdays.includes(dayOfWeek);
  };

  const handleDateChange = (date: Date) => {
    if (isDateAvailable(date)) {
      setSelectedDate(date);
    }
  };

  const isBeforeToday = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
    };

  return (
    <div className='select-none text-white'>
      <h2>Book a Class</h2>
      <Calendar
        onClickDay={handleDateChange}
        value={selectedDate}
        minDate={new Date()}
        className="bg-background p-4 border border-primary/50 w-150 rounded-xl text-center shadow-lg grid gap-2 text-sm"
        prev2Label={null}
        next2Label={null}
        prevLabel={<span className="text-white text-xl px-2 hover:text-primary py-2 px-4 cursor-pointer rounded hover:bg-white/10">‹</span>}
        nextLabel={<span className="text-white text-xl px-2 hover:text-primary py-2 px-4 cursor-pointer rounded hover:bg-white/10">›</span>}
        // 👇 Prevent changing the view when clicking the month label
        navigationLabel={({ label }) => (
            <div className="text-primary font-semibold select-none cursor-default w-full uppercase text-center">
            {label}
            </div>
        )}
        view="month"
        maxDetail="month" // prevents switching views
        // 👇 Disable view change on label click
        tileDisabled={({ date }) => isBeforeToday(date)}
        tileClassName={({ date }) => {
          const isToday = new Date().toDateString() === date.toDateString();
          const isSelected = selectedDate?.toDateString() === date.toDateString();
          const isAvailable = isDateAvailable(date);

          return [
            'rounded-md aspect-square text-center transition-colors duration-150',
            isAvailable
              ? `${!isSelected && "hover:bg-white/10 hover:text-primary"} cursor-pointer`
              : 'text-white/30 cursor-not-allowed pointer-events-none',
            isSelected ? 'bg-primary text-black' : '',
            isToday != isSelected ? 'bg-primary/10 text-white' : '',
            isBeforeToday(date) ? 'text-white/20 pointer-events-none' : '',
          ].join(' ');
        }}
      />
      {selectedDate && (
        <p>Selected date: {selectedDate.toDateString()}</p>
      )}
    </div>
  );
};

export default BookingCalendar;

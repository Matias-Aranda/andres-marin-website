"use client";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';

type BookingCalendarProps = {
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
  selectedDate: Date | null;
};

const BookingCalendar: React.FC<BookingCalendarProps> = ({ setSelectedDate, selectedDate }) => {

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
    <div className='flex flex-col gap-4 text-white select-none'>
      <h2>Selecciona una fecha</h2>
      <Calendar
        onClickDay={handleDateChange}
        value={selectedDate}
        minDate={new Date()}
        className="gap-2 grid bg-background shadow-lg p-4 border border-primary/50 rounded-xl w-150 text-sm text-center"
        prev2Label={null}
        next2Label={null}
        prevLabel={<span className="hover:bg-white/10 px-2 px-4 py-2 rounded text-white hover:text-primary text-xl cursor-pointer">‹</span>}
        nextLabel={<span className="hover:bg-white/10 px-2 px-4 py-2 rounded text-white hover:text-primary text-xl cursor-pointer">›</span>}
        // 👇 Prevent changing the view when clicking the month label
        navigationLabel={({ label }) => (
            <div className="w-full font-semibold text-primary text-center uppercase cursor-default select-none">
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

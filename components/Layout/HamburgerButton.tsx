import React, { useState } from 'react'


type HamburgerButtonProps = {
  shown: boolean;
  setShown: React.Dispatch<React.SetStateAction<boolean>>;
};

const HamburgerButton = ({ shown, setShown }: HamburgerButtonProps) => {

  return (
    <button
      onClick={() => setShown(true)}
      disabled={shown}
      className={`flex flex-col justify-between w-[33px] h-[25px] relative z-11 ${shown ? "pointer-events-none" : ""}`}
    >
      <div
        className={`h-[3px] w-full bg-primary rounded transition-transform duration-300 origin-top-left ${
          shown ? 'rotate-45 w-[24px]' : ''
        }`}
      />
      <div
        className={`h-[3px] w-full bg-primary rounded transition-all duration-300 ${
          shown ? 'opacity-0' : ''
        }`}
      />
      <div
        className={`h-[3px] w-full bg-primary rounded transition-transform duration-300 origin-bottom-left ${
          shown ? '-rotate-45 w-[24px]' : ''
        }`}
      />
    </button>
  );
}

export default HamburgerButton
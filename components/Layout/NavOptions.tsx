import React from 'react'

interface NavOptionsProps {
  logout: () => Promise<void>;
}

const NavOptions: React.FC<NavOptionsProps> = ({ logout }) => {

  return (
    <div className='flex flex-col items-start rounded-b-lg border border-primary/50 border-t-0 pt-17 top-[-16px] bg-background/90 backdrop-blur-lg shadow-[0px_5px_15px_rgba(0,0,0,.6)] w-full justify-center gap-2 absolute text-white'>
        <div className='w-full p-4 hover:bg-primary/50'>Mi cuenta</div>
        <div className='w-full p-4 pb-5 hover:bg-primary/50' onClick={logout}>Cerrar Sesión</div>
    </div>
  )
}

export default NavOptions
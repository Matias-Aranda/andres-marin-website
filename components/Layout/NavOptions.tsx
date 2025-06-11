import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

interface NavOptionsProps {
  logout: () => Promise<void>;
  toggleOptions?: () => void;
}

const NavOptions: React.FC<NavOptionsProps> = ({ logout, toggleOptions }) => {

  const router = useRouter();

  const handleLogout = async (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      await logout();
      toggleOptions && toggleOptions();
      router.push("/");
  }

  return (
    <div className='flex flex-col items-start rounded-b-lg border border-primary/50 border-t-0 pt-17 top-[-16px] bg-background/90 backdrop-blur-lg shadow-[0px_5px_15px_rgba(0,0,0,.6)] w-full justify-center gap-2 absolute text-white'>
        <Link onClick={toggleOptions} href="/account" className='w-full p-4 hover:bg-primary/50'>Mi cuenta</Link>
        <div className='w-full p-4 pb-5 hover:bg-primary/50 rounded-b-lg' onClick={handleLogout}>Cerrar Sesión</div>
    </div>
  )
}

export default NavOptions
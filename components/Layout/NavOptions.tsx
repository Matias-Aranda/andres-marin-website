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
    <div className='top-[-16px] absolute flex flex-col justify-center items-start gap-2 bg-background/90 shadow-[0px_5px_15px_rgba(0,0,0,.6)] backdrop-blur-lg pt-17 border border-primary/50 border-t-0 rounded-b-lg w-full text-white'>
        <Link onClick={toggleOptions} href="/account" className='hover:bg-primary/50 p-4 w-full'>Mi cuenta</Link>
        <div className='hover:bg-primary/50 p-4 pb-5 rounded-b-lg w-full' onClick={handleLogout}>Cerrar Sesión</div>
    </div>
  )
}

export default NavOptions
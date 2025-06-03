"use client"
import UploadPfpModal from '@/components/Account/UploadPfpModal';
import { useAuth } from '@/context/auth-context';
import { changeUsername } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const page = () => {

    const { user } = useAuth();
    const router = useRouter();
    const [showUploadModal, setShowUploadModal] = React.useState(false);
    const [showConfirm, setShowConfirm] = React.useState(false);
    const [username, setUsername] = React.useState(user?.displayName || "");

    useEffect(() => {
        if (user) {
            setUsername(user.displayName || "");
        }
    },[user])

    const toggleModal = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault();
        setShowUploadModal(!showUploadModal);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setShowConfirm(true);
        setUsername(e.target.value);
    }

    const handleConfirm = async (e: React.MouseEvent<HTMLElement>): Promise<void> => {
        e.preventDefault();
        setShowConfirm(false);
        await changeUsername(username);
        window.location.reload()
    }

    const handleCancel = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault();
        setShowConfirm(false);
        setUsername(user?.displayName || "");
    }

  return (
    <div className='p-20 relative z-5'>
        {showUploadModal && <UploadPfpModal toggleModal={toggleModal} setShowUploadModal={setShowUploadModal}/>}
        <img src="/account_bg.png" className='absolute h-full w-[50%] object-cover top-0 right-0 z-5'/>
        <form className='text-white bg-background/50 bg-opacity-50 backdrop-blur-lg ml-20 mt-20 w-[60%] border border-primary rounded-md py-12 px-15 z-8 relative'>
            <div className='flex justify-between border-b border-primary/50 py-6 gap-2'>
                <div className='flex items-center gap-8'>
                    <img src={user?.photoURL ? user.photoURL : "/user_pfp.svg" } className='rounded-full w-30 h-30 object-cover border border-primary border-2'/>
                    <div className=''>
                        <h3 className="">Foto de Perfil</h3>
                        <p className='text-sm text-white/50'>PNG, JPG, JPEG, WEBP</p>
                    </div>
                </div>
                <button onClick={toggleModal} className='bg-primary text-black hover:bg-primary/70 cursor-pointer text-base py-[6px] px-10 w-50 self-center rounded'>Cambiar</button>
            </div>
            <div className='flex flex-col border-b border-primary/50 py-4 gap-2'>
                <div className=''>
                    <h3 className="">Nombre de usuario</h3>
                    <p className='text-base text-white/50'>Modifica tu Nombre de Usuario actual.</p>
                </div>
                <label className='text-base text-white leading-none flex flex-col gap-4 mt-3'>
                    Nombre
                    <div className='flex itms-center gap-4'>
                        <input type="text" value={username} onChange={(e) => handleChange(e)} required className='h-[55px] border border-primary p-2 rounded text-white self-start w-100'/>
                        {showConfirm && <div onClick={(e) => handleConfirm(e)} className={`self-center text-sm text-primary/80 hover:text-primary cursor-pointer`}>Confirmar</div>}
                        {showConfirm && <div onClick={(e) => handleCancel(e)} className={`self-center text-sm text-[#D2392D]/80 hover:text-[#D2392D] cursor-pointer`}>Cancelar</div>}
                    </div>
                </label>
            </div>
            <div className='flex flex-col border-b border-primary/50 py-4 gap-2'>
                <div className=''>
                    <h3 className="">Email</h3>
                    <p className='text-base text-white/50'>Dirección de email asociada a tu cuenta.</p>
                </div>
                <div className='flex justify-between items-end'>
                    <label className='text-base text-white leading-none flex flex-col gap-4 mt-3'>
                        Email
                        <input value={user && user.email ? user.email : ""} disabled={true} type="text" required className='h-[55px] border border-primary p-2 rounded text-white self-start w-100 disabled:bg-white/5 disabled:border-primary/20 disabled:text-white/40'/>
                    </label>
                    <button className='bg-primary text-black hover:bg-primary/70 cursor-pointer text-base py-[6px] px-10 w-50 rounded'>Cambiar</button>
                </div>
            </div>
            <div className='flex flex-col border-b border-primary/50 py-4 gap-2'>
                <div className=''>
                    <h3 className="">Seguridad</h3>
                    <p className='text-base text-white/50'>Modifica tu contraseña o activa la verificación de 2 factores.</p>
                </div>
                <div className='flex justify-between items-end'>
                    <label className='text-base text-white leading-none flex flex-col gap-4 mt-3'>
                        Contraseña
                        <input type="password" value={"secretpassword"} disabled={true} required className='h-[55px] tracking-[.2rem] border border-primary p-2 rounded text-white self-start w-100 disabled:bg-white/5 disabled:border-primary/20 disabled:text-white/40'/>
                    </label>
                    <button className='bg-primary text-black hover:bg-primary/70 cursor-pointer text-base py-[6px] px-10 w-50 rounded'>Cambiar</button>
                </div>
            </div>
            <div className='flex flex-col py-4 gap-6'>
                <div className=''>
                    <h3 className="">Seguridad</h3>
                    <p className='text-base text-white/50'>Modifica tu contraseña o activa la verificación de 2 factores.</p>
                </div>
                <div className='flex justify-between items-end'>
                    <div className=''>
                        <p className=" text-base">Cerrar sesión</p>
                        <p className='text-sm text-white/50'>Salir de la sesión actual y volver a la página de inicio.</p>
                    </div>
                    <button className='bg-primary text-black hover:bg-primary/70 cursor-pointer text-base py-[6px] px-10 w-50 rounded'>Cambiar</button>
                </div>
                <div className='flex justify-between items-end'>
                    <div className=''>
                        <p className=" text-base text-[#D2392D]">Eliminar mi cuenta</p>
                        <p className='text-sm text-white/50'>Eliminar permanentemente mi cuenta y todos los datos asociados.</p>
                    </div>
                    <button className='bg-[#A93A32] text-white hover:bg-[#A93A32]/70 cursor-pointer text-base py-[6px] px-10 w-50 rounded'>Eliminar cuenta</button>
                </div>
            </div>
            
        </form>
    </div>
  )
}

export default page
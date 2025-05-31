import React from 'react'

const page = () => {
  return (
    <div className='p-20 relative'>
        <img src="/sponsors_bg.png" className='absolute h-full w-[50%] object-cover top-0 right-0 z-5'/>
        <form className='text-white bg-background/50 bg-opacity-50 backdrop-blur-lg ml-20 w-[50%] border border-primary rounded-md p-10 z-10 relative'>
            <div className='flex justify-between border-b border-primary/50 p-2 gap-2'>
                <div className='flex items-center gap-8'>
                    <img src="/about_bg.png" className='rounded-full w-40 h-40 object-cover'/>
                    <div className=''>
                        <h3>Foto de Perfil</h3>
                        <p className='text-base text-white/50'>Foto de Perfil</p>
                    </div>
                </div>
                <button className='bg-primary text-black hover:bg-primary/70 cursor-pointer text-base py-2 px-6 self-center rounded-md'>Cambiar foto</button>
            </div>
            <div className='flex flex-col border-b border-primary/50 py-4 gap-2'>
                <div className=''>
                    <h3>Nombre de usuario</h3>
                    <p className='text-base text-white/50'>Foto de Perfil</p>
                </div>
                <label className='text-base text-white leading-none flex flex-col gap-4'>
                    Nombre
                    <input type="text" required className='h-[55px] border border-primary p-2 rounded text-white self-start w-100'/>
                </label>
            </div>
            <div className='flex flex-col border-b border-primary/50 py-4 gap-2'>
                <div className=''>
                    <h3>Nombre de usuario</h3>
                    <p className='text-base text-white/50'>Foto de Perfil</p>
                </div>
                <div className='flex justify-between items-end'>
                    <label className='text-base text-white leading-none flex flex-col gap-4'>
                        Nombre
                        <input type="text" required className='h-[55px] border border-primary p-2 rounded text-white self-start w-100'/>
                    </label>
                    <button className='bg-primary text-black hover:bg-primary/70 cursor-pointer text-base py-2 px-6 rounded-md'>Cambiar foto</button>
                </div>
            </div>
            <div className='flex border-b border-primary/50 p-2 gap-2'>
                
            </div>
            <div className='flex border-b border-primary/50 p-2 gap-2'>
                
            </div>
            
        </form>
    </div>
  )
}

export default page
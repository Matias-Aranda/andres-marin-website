import React from 'react'

const SponsorsInstagram = () => {
  return (
    <div className='flex flex-col items-center justify-center p-30'>
        <div className='flex flex-col items-center justify-center  text-center'>
          <h2 className='text-white text-[128px] font-display-condensed leading-[0.9] uppercase'>Publicita tu <span className='text-primary'>Marca</span></h2>
          <p className='text-white max-w-[700px] my-6'>
              En de mi cuenta de instagram con más de 
              <span className='text-primary'> 10.000 seguidores.</span>
          </p>
        </div>
        <div className='flex items-center bg-black rounded-md border border-primary px-12 py-20 mt-10 text-white gap-12'>
          <div className='bg-linear-45 from-[#FBBC04] via-[#E94235] to-[#FF00DD] rounded-full p-2 self-center'>
            <div className='bg-black rounded-full p-2'>
              <img src='/instagram_pfp.png' alt='Instagram Profile Picture' className='w-[420px] h-[420px] rounded-md' />
            </div>
          </div>
          <div className='flex flex-col gap-8'>
            <div className='flex items-center gap-4'>
              <h3 className='text-[32px]'>@andr3smarin8</h3>
              <button className='bg-primary text-black py-2 px-4 rounded-md px-25 text-base'>
                Seguir
              </button>
            </div>
            <div className='flex items-center gap-4'>
              <p className='font-body-light'><span className='font-body'>79</span> publicaciones</p>
              <p className='font-body-light'><span className='font-body'>10 mil</span> seguidores</p>
            </div>
            <div className='flex flex-col gap-1 text-white'>
              <p>Andrés Marín</p>
              <p className='font-body-light'>Entrenador</p>
              <p>🇨🇴 Simracing Driver and Coach 🇪🇸</p>
              <p>🔥 Racing Technique Explained 🔥</p>
              <p>📽 +20k Subs on Social Media 📽</p>
              <p className='text-primary text-[28px]'>Tu marca aquí</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SponsorsInstagram
import React from 'react'

const SponsorsInstagram = () => {
  return (
    <div className='flex flex-col justify-center items-center p-30'>
        <div className='flex flex-col justify-center items-center text-center'>
          <h2 className='font-display-condensed text-[128px] text-white uppercase leading-[0.9]'>Publicita tu <span className='text-primary'>Marca</span></h2>
          <p className='my-6 max-w-[700px] text-white'>
              En de mi cuenta de instagram con más de 
              <span className='text-primary'> 10.000 seguidores.</span>
          </p>
        </div>
        <div className='flex items-center gap-12 bg-black mt-10 px-12 py-20 border border-primary rounded-md text-white'>
          <div className='self-center bg-linear-45 from-[#FBBC04] via-[#E94235] to-[#FF00DD] p-2 rounded-full'>
            <div className='bg-black p-2 rounded-full'>
              <img src='/instagram_pfp.png' alt='Instagram Profile Picture' className='rounded-md w-[420px] h-[420px]' />
            </div>
          </div>
          <div className='flex flex-col gap-8'>
            <div className='flex items-center gap-4'>
              <h3 className='text-[32px]'>@andr3smarin8</h3>
              <button className='bg-primary px-25 px-4 py-2 rounded-md text-black text-base'>
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
              <p className='text-[28px] text-primary'>Tu marca aquí</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SponsorsInstagram
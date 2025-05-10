import React from 'react'

const SponsorsInstagram = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center p-30'>
        <div className='flex flex-col items-center justify-center  text-center'>
            <h2 className='text-white text-[128px] font-display-condensed leading-[0.9] uppercase'>Publicita tu <span className='text-primary'>Marca</span></h2>
            <p className='text-white max-w-[700px] my-6'>
                En de mi cuenta de instagram con más de 
                <span className='text-primary'> 10.000 seguidores.</span>
            </p>
        </div>
        <img src="/sponsors_helmet.png" />
    </div>
  )
}

export default SponsorsInstagram
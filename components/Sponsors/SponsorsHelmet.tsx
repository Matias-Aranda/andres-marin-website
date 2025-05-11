import React from 'react'
import Link from 'next/link'

const SponsorsHelmet = () => {
  return (
    <div className='flex items-center justify-center px-30 pt-30'>
        <div className='flex flex-col items-start justify-center w-[50%]'>
            <h2 className='text-white text-[128px] font-display-condensed leading-[0.9] uppercase'><span className='text-primary'>Patrocíname</span> a través de mi logo </h2>
            <p className='text-white max-w-[700px] my-6'>
                Consigue difusión para tu marca colocándola en la imagen principal de mis <Link href="/socials" className='text-primary underline'>redes sociales</Link> con alcance de más de 
                <span className='text-primary'> 20.000 usuarios.</span>
            </p>
        </div>
        <img src="/sponsors_helmet.png" />
    </div>
  )
}

export default SponsorsHelmet
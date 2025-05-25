import React from 'react'
import Link from 'next/link'

const SponsorsHelmet = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center px-5 md:px-20 2xl:px-30 py-30 gap-0 md:gap-10'>
        <div className='flex flex-col items-start justify-center w-[90%] lg:w-[50%] order-2 lg:order-1'>
            <h2 className='text-white text-[64px] md:text-[72px] xl:text-[92px] 2xl:text-[128px] font-display-condensed leading-[1] md:leading-[0.9] uppercase'><span className='text-primary'>Patrocíname</span> a través de mi logo </h2>
            <p className='text-white max-w-[700px] my-6 text-base xl:text-lg'>
                Consigue difusión para tu marca colocándola en la imagen principal de mis <Link href="/socials" className='text-primary underline'>redes sociales</Link> con alcance de más de 
                <span className='text-primary'> 20.000 usuarios.</span>
            </p>
        </div>
        <img src="/sponsors_helmet.png" className='w-[90%] lg:w-[60%] xl:w-[50%] order-1 lg:order-2'/>
    </div>
  )
}

export default SponsorsHelmet
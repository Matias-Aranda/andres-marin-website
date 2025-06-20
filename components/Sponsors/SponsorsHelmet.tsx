import React from 'react'
import Link from 'next/link'

const SponsorsHelmet = () => {
  return (
    <div className='flex lg:flex-row flex-col justify-center items-center gap-0 md:gap-10 px-5 md:px-20 2xl:px-30 py-30'>
        <div className='flex flex-col justify-center items-start order-2 lg:order-1 w-[90%] lg:w-[50%]'>
            <h2 className='font-display-condensed text-[64px] text-white md:text-[72px] 2xl:text-[128px] xl:text-[92px] uppercase leading-[1] md:leading-[0.9]'><span className='text-primary'>Patrocíname</span> a través de mi logo </h2>
            <p className='my-6 max-w-[700px] text-white text-base xl:text-lg'>
                Consigue difusión para tu marca colocándola en la imagen principal de mis <Link href="/socials" className='text-primary underline'>redes sociales</Link> con alcance de más de 
                <span className='text-primary'> 20.000 usuarios.</span>
            </p>
        </div>
        <img src="/sponsors_helmet.png" className='order-1 lg:order-2 w-[90%] lg:w-[60%] xl:w-[50%]'/>
    </div>
  )
}

export default SponsorsHelmet
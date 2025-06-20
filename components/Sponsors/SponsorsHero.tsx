import React from 'react'

const SponsorsHero = () => {
  return (
    <div className='flex flex-col justify-end items-center bg-[url(/sponsors_bg.png)] bg-cover bg-no-repeat bg-center pb-15 border-primary border-b h-[90vh] text-center'>
        <h1 className='m-0 font-display text-[clamp(2rem,12vw,6rem)] text-neutral-50 sm:text-[72px] lg:text-[96px] xl:text-[128px]'>Sponsor <span className='text-primary'>Me</span></h1>
    </div>
  )
}

export default SponsorsHero
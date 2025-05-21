import React from 'react'

const AboutHero = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-end text-center bg-[url(/about_bg.png)] bg-center bg-no-repeat'>
        <h1 className='text-neutral-50 text-[72px] lg:text-[96px] xl:text-[128px] font-display mx-10 mb-10 leading-none'>Andrés <span className='text-primary'>Marín</span></h1>
    </div>
  )
}

export default AboutHero
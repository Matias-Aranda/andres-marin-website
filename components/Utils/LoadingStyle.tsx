import React from 'react'

const LoadingScreen = () => {
  return (
    <div className='absolute w-full h-screen flex items-center justify-center bg-background z-10'>
        <img src="/loading.svg" alt="Loading..." className='animate-pulse object-cover' />
    </div>
  )
}

export default LoadingScreen
"use client"
import React from 'react'
import Video from './Video'
import { useEffect, useState } from 'react'

type Video = {
  title: string
  link: string
  thumbnail: string
}

export default function SocialsVideos() {

  const [videos, setVideos] = useState<Video[]>([])

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await fetch('/api/youtube')
      const data = await res.json()
      setVideos(data)
    }

    fetchVideos()
  }, [])


  videos ? console.log(videos) : {}

  return (
    <div className='bg-gradient-to-t from-slate-500/5 to-70% to-background px-[10%] py-20 sm:py-40 border-primary/50 border-b'>
        <h3 className='mb-10 font-display text-[clamp(2rem,4vw,64px)] text-white text-center'>Mira mis <span className='text-primary'>ultimos</span> videos</h3>
        <div className='flex md:flex-row flex-col flex-wrap justify-center items-center md:items-start gap-5'>
            {videos && videos.map(({title, thumbnail, link}, index) =>(
              <Video key={index} title={title} thumbnail={thumbnail} link={link}/>
            ))}
        </div>
    </div>
  )
}

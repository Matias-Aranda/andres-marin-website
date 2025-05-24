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
    <div className='bg-gradient-to-t from-slate-500/5 to-background to-70% p-40 border-b border-primary/50'>
        <h3 className='text-[64px] font-display text-center text-white mb-10'>Mira mis <span className='text-primary'>ultimos</span> videos</h3>
        <div className='flex items-start justify-center flex-wrap gap-5'>
            {videos && videos.map(({title, thumbnail, link}, index) =>(
              <Video key={index} title={title} thumbnail={thumbnail} link={link}/>
            ))}
        </div>
    </div>
  )
}

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTransitionContext } from './TransitionContext';

interface VideoPlayerProps {
  videoUrl: string;
}

export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [skipped, setSkipped] = useState(false);
  const [ended, setEnded] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const {transitioning} = useTransitionContext();

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      const percentage = (video.currentTime / video.duration) * 100;
      setProgress(percentage);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    const progressBar = progressRef.current;

    if (video && progressBar) {
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const seekTime = (clickX / width) * video.duration;
      video.currentTime = seekTime;
    }
  };

  const playVideo = () => {
    videoRef.current?.play()
    setShowPlayButton(false);
  }

  useEffect(() => {
  if (!transitioning) {
    videoRef.current?.play().catch((err) => {
      // optionally show a play button or retry
      setShowPlayButton(true);
    });
  } else {
    setShowPlayButton(false);
  }
}, [transitioning]);

  return (
    <div className={"absolute top-0 left-0 w-full h-screen mx-auto transition-all duration-400 z-12" + (skipped || ended ? " opacity-0 pointer-events-none" : "")}>
      <video
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        className="w-full h-full object-cover"
        controls={false}
        src={videoUrl}
        onEnded={() => setEnded(true)}
      />

      <div
        ref={progressRef}
        onClick={handleSeek}
        className="relative h-3 rounded cursor-pointer"
      >
        <div
          className="absolute bottom-3 left-0 h-full bg-primary transition-all duration-300 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <button
          onClick={() => setSkipped(true)}
          className="absolute bottom-10 right-5 text-primary px-4 py-2 rounded-md cursor-pointer"
        >
          Skip  
        </button>

      <div className="mt-4 flex justify-center gap-4">
        {showPlayButton && <img src={"/play_btn.svg"} alt="Play"
          onClick={playVideo}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer"
        />}
        <button
          onClick={() => videoRef.current?.pause()}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Pause
        </button>
      </div>
    </div>
  );
}

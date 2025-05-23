"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'

const SocialSidebar = () => {

    const [showClass, setShowClass] = React.useState("");
    const [scrollPos, setScrollPos] = React.useState(0);

    useEffect(() => {
        scrollPos < 100 ? setShowClass("") : {}
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPos]);
    
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const visible = currentScrollPos < 100 || scrollPos > currentScrollPos;

        setScrollPos(currentScrollPos);
        visible ? setShowClass("bg-background/60 backdrop-blur-md shadow-[0px_5px_15px_rgba(0,0,0,.8)] sm:shadow-[none] sm:backdrop-blur-none ") : setShowClass("translate-y-[100%]");
    };

  return (
    <div className={"fixed sm:bg-transparent bottom-0 sm:bottom-1/2 left-1/2 sm:left-auto translate-y-0 sm:translate-y-1/2 -translate-x-1/2 sm:-translate-x-0 sm:right-0 transform flex flex-row sm:flex-col gap-4 p-4 z-[3] rounded-t-lg transition-all duration-400" + " " + showClass}>
        <Link target='_blank' href="https://www.instagram.com/andr3smarin8/">
            <img className='h-6 w-6' src="/instagram_logo.svg" alt="logo" />
        </Link>
        <Link target='_blank' href="https://www.youtube.com/@Andr3smarin8">
            <img className='h-6 w-6' src="/youtube_logo.svg" alt="logo" />
        </Link>
        <Link target='_blank' href="https://www.tiktok.com/@andr3smarin8">
            <img className='h-6 w-6' src="/tiktok_logo.svg" alt="logo" />
        </Link>
        <Link target='_blank' href="https://discord.gg/EDAPX2YYcw">
            <img className='h-6 w-6' src="/discord_logo.svg" alt="logo" />
        </Link>
    </div>
  )
}

export default SocialSidebar
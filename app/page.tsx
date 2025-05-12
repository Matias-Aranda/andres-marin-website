"use client"
import CurrentSeries from "@/components/Home/CurrentSeries";
import Hero from "@/components/Home/Hero";
import Links from "@/components/Home/Links";
import SeriesOverview from "@/components/Home/SeriesOverview";
import SocialSidebar from "@/components/Utils/SocialSidebar";
import Newsletter from "@/components/Utils/Newsletter";
import { useEffect } from "react";
import gsap from "gsap";

export default function Home() {

  return (
    <div>
      <SocialSidebar />
      <Hero />
      <CurrentSeries />
      <SeriesOverview />
      <Links />
      <Newsletter />
    </div>
  );
}

import CurrentSeries from "@/components/Home/CurrentSeries";
import Hero from "@/components/Home/Hero";
import Links from "@/components/Home/Links";
import SeriesOverview from "@/components/Home/SeriesOverview";
import SocialSidebar from "@/components/Home/SocialSidebar";
import Newsletter from "@/components/Utils/Newsletter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <SocialSidebar />
      <Hero />
      <CurrentSeries />
      <SeriesOverview />
      <Links />
      <Newsletter />
    </div>
  );
}

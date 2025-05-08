import CurrentSeries from "@/components/Home/CurrentSeries";
import Hero from "@/components/Home/Hero";
import Links from "@/components/Home/Links";
import SeriesOverview from "@/components/Home/SeriesOverview";
import SocialSidebar from "@/components/Utils/SocialSidebar";
import Newsletter from "@/components/Utils/Newsletter";
import Image from "next/image";

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

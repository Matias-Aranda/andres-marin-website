import SocialSidebar from '@/components/Utils/SocialSidebar';
import ServicesGuide from '@/components/Services/ServicesGuide';
import ServicesHero from '@/components/Services/ServicesHero';
import ServicesLinks from '@/components/Services/ServicesLinks';
import Newsletter from '@/components/Utils/Newsletter';
import React from 'react'

export default function Services() {
    return (
      <div>
        <SocialSidebar />
        <ServicesHero />
        <ServicesLinks />
        <ServicesGuide />
        <Newsletter />
      </div>
    );
  }

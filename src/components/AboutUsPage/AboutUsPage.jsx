import React, { useEffect, useState } from 'react'
import WhoWeAre from '../WhoWeAre/WhoWeAre'
import OurStory from '../OurStory/OurStory'
import OurMission from '../OurMission/OurMission'
import OurCore from '../OurCore/OurCore'
import WhyUs from '../WhyUs/WhyUs'
import AboutUsFooter from '../AboutUsFooter/AboutUsFooter'
export default function AboutUsPage() {
    
  return <>
      <WhoWeAre />
      <OurStory />
      <OurMission />
      <OurCore />
      <WhyUs />
      <AboutUsFooter />
    </>
}
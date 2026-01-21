import React, { useEffect, useState } from 'react'
import WhoWeAre from '../WhoWeAre/WhoWeAre'
import OurStory from '../OurStory/OurStory'
export default function AboutUsPage() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <WhoWeAre />
      <OurStory />
    </>
}
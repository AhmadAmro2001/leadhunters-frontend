import React, { useEffect, useState } from 'react'
import OfferFirstSection from '../OfferFirstSection/OfferFirstSection'
import OfferSecondSection from '../OfferSecondSection/OfferSecondSection'
import OfferFourthSection from '../OfferFourthSection/OfferFourthSection'
import OfferthirdSection from '../OfferthirdSection/OfferthirdSection'
import OfferFooter from '../OfferFooter/OfferFooter'
export default function OffersPage() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <OfferFirstSection/>
      <OfferSecondSection/>
      <OfferthirdSection/>
      <OfferFourthSection/>
      <OfferFooter/>
    </>
}
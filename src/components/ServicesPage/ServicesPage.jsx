import React, { useEffect, useState } from 'react'
import ServiceFirstSection from '../ServiceFirstSection/ServiceFirstSection'
import ServiceSecondSection from '../ServiceSecondSection/ServiceSecondSection'
import ServiceThirdSection from '../ServiceThirdSection/ServiceThirdSection'
import ServicesFooter from '../ServicesFooter/ServicesFooter'
export default function ServicesPage() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <ServiceFirstSection/>
      <ServiceSecondSection/>
      <ServiceThirdSection/>
      <ServicesFooter/>
    </>
}
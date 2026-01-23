import React, { useEffect, useState } from 'react'
import ContactFirstSection from '../ContactFirstSection/ContactFirstSection'
import ContactSecondSection from '../ContactSecondSection/ContactSecondSection'
import ContactFooter from '../ContactFooter/ContactFooter'
export default function ContactPage() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
       <ContactFirstSection/>
       <ContactSecondSection/>
       
       <ContactFooter/>
    </>
}
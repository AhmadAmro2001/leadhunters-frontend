import React, { useEffect, useState } from 'react'
export default function OurStory() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className='flex flex-col justify-center items-center py-24 max-w-4xl mx-auto '>
        <h1 className='text-4xl text-blue-900 font-extrabold mb-5 '>Our Story</h1>
        <p className='text-xl text-gray-600 mb-4'>Lead Hunters was founded with a singular mission: to revolutionize how real estate professionals connect with potential clients. We recognized that in today's competitive market, brokers and agencies need more than just quantity—they need quality leads that convert into actual business.</p>
        <p className='text-xl text-gray-600 mb-4'>With years of experience in both real estate and lead generation, our team has developed proven strategies that consistently deliver results. We combine cutting-edge technology with the personal touch of trained professionals to create a lead generation system that truly works.</p>
        <p className='text-xl text-gray-600 '>Today, we're proud to serve real estate professionals across the nation, helping them grow their businesses one quality lead at a time. Our commitment to excellence and results-driven approach has made us a trusted name in the industry.</p>
      </div>
    </>
}
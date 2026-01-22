import React, { useEffect, useState } from 'react'
export default function WhoWeAre() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className='flex flex-col justify-center items-center py-32 max-w-4xl mx-auto text-center'>
        <h1 className='text-4xl text-blue-900 font-extrabold mb-5'>Who We Are</h1>
        <p className='text-xl text-gray-600 mb-4'>Lead Hunters is a lead generation partner built for real estate teams who want predictable growth. We combine smart targeting, multi-channel outreach, and real human qualification to connect brokers with prospects who are ready to talk — not just random leads.</p>
        <p className='text-xl text-gray-600 '>We focus on quality over quantity: verifying intent, filtering out time-wasters, and delivering opportunities your agents can actually convert. Our goal is simple: help you spend less time chasing, and more time closing.</p>
      </div>
    </>
}
import React, { useEffect, useState } from 'react'
export default function ContactFooter() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className='text-center py-24  '>
          <h1 className='text-3xl font-bold mb-5'>Prefer to Talk Directly?</h1>
          <p className='md:w-2xl mx-auto text-lg mb-6'>Give us a call and speak with one of our lead generation specialists. We're here to answer your questions and help you get started.</p>
          <div className="border-0  bg-blue-500 w-62.5 mx-auto px-6 text-white py-3 rounded-lg text-sm ">
            <i className="fa-solid fa-phone"></i> Call Us:  +1 (555) 123-4567
          </div>
        </div>
    </>
}
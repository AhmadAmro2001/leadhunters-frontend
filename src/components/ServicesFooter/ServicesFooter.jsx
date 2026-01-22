import React, { useEffect, useState } from 'react'
export default function ServicesFooter() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className='text-center py-24 bg-blue-900 text-white'>
          <h1 className='text-3xl font-bold mb-5'>Ready to Get Started?</h1>
          <p className='md:w-2xl mx-auto text-lg mb-6'>Let's discuss which services are right for your business and create a customized plan to achieve your lead generation goals.</p>
          <div className='flex flex-col md:flex-row justify-around w-[50%] md:w-[20%] mx-auto'>
            <button className="border-0 bg-white mb-4 md:mb-0 text-blue-900  px-6 py-3 rounded-lg text-sm cursor-pointer ">
            View Pricing <i className="fa-solid fa-arrow-right text-blue-900"></i>
          </button>
            <button className="border-0 bg-blue-600 px-6 py-3 rounded-lg text-sm cursor-pointer">
            Contact Us <i className="fa-solid fa-arrow-right"></i>
          </button>
          </div>
        </div>
    </>
}
import React, { useEffect, useState } from 'react'
export default function AboutUsFooter() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className='text-center py-24 bg-blue-900 text-white'>
          <h1 className='text-3xl font-bold mb-5'>Ready to Scale Your Business?</h1>
          <p className='md:w-2xl mx-auto text-lg mb-6'>Join successful real estate professionals who trust Lead Hunters to deliver consistent, quality leads every single day.</p>
          <button className="border-0 bg-blue-600 px-6 py-3 rounded-lg text-sm cursor-pointer">
            Contact Us Now <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        {/* <div className='border-black-600 border-b '></div> */}
    </>
}
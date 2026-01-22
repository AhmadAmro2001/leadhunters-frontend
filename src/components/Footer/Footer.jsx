import React, { useEffect, useState } from 'react'
export default function Footer() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className='w-full text-center bg-blue-900 text-white py-10 '>
        <div>
          <h1 className='text-3xl font-bold mb-5'>Ready to Scale Your Business?</h1>
          <p className='w-2xl mx-auto text-lg mb-6'>Join successful real estate professionals who trust Lead Hunters to deliver consistent, quality leads every single day.</p>
          <button className="border-0 bg-blue-600 px-4 py-2 rounded-lg">
            Contact Us Now <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div>
          <div className='flex justify-around items-center max-w-[10%] mx-auto mt-22'>
            <i className="fa-brands fa-facebook-f text-2xl"></i>
            <i className="fa-brands fa-instagram text-2xl"></i>
            <i className="fa-brands fa-twitter text-2xl"></i>
          </div>
          <p className='text-[14px] my-4'>© 2026 Lead Hunters. All rights reserved.</p>
        </div>
      </div>
    </>
}
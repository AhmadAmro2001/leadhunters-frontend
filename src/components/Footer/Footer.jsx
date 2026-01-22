import React, { useEffect, useState } from 'react'
export default function Footer() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className='text-center bg-blue-900 text-white py-10 '>
        
        <div>
          <div className='flex justify-around items-center max-w-[25%] md:max-w-[10%] mx-auto '>
            <i className="fa-brands fa-facebook-f text-2xl"></i>
            <i className="fa-brands fa-instagram text-2xl"></i>
            <i className="fa-brands fa-twitter text-2xl"></i>
          </div>
          <p className='text-[14px] my-4'>© 2026 Lead Hunters. All rights reserved.</p>
        </div>
      </div>
    </>
}
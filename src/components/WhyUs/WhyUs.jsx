import React, { useEffect, useState } from 'react'
export default function WhyUs() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className='container mx-auto my-18'>
        <div className='w-[80%] bg-blue-900 text-center mx-auto py-14 rounded-2xl'>
          <h1 className='text-white font-bold text-2xl md:text-4xl'>Why Clients Trust Us</h1>
          <div className='flex flex-col md:flex-row justify-around items-center mt-8'>
            <div className='text-white mb-4'>
              <h3 className='text-5xl font-semibold '>50+</h3>
              <p className='text-xl mt-1'>Satisfied Clients</p>
            </div>
            <div className='text-white mb-4'>
              <h3 className='text-5xl font-semibold'>50K+</h3>
              <p className='text-xl mt-1'>Quality Leads Delivered</p>
            </div>
            <div className='text-white mb-4'>
              <h3 className='text-5xl font-semibold'>98%</h3>
              <p className='text-xl mt-1'>Client Satisfaction Rate</p>
            </div>
          </div>
        </div>

      </div>
    </>
}
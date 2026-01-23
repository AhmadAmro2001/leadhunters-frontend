import React, { useEffect, useState } from 'react'
export default function OfferthirdSection() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className='container mx-auto my-24'>
        <h1 className='text-blue-900 text-4xl text-center font-bold'>What's Included in Every Plan</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 mt-10 mx-10 md:mx-0 '>


          <div className='mx-auto flex  gap-3'>
            <i className="fa-solid fa-check mt-1 text-xl text-blue-500"></i>
            <div>
              <h3 className='font-semibold text-blue-900'>No Setup Fees</h3>
              <p className='text-gray-600'>Get started immediately with zero upfront costs</p>
            </div>
          </div>
          <div className='mx-auto flex  gap-3'>
            <i className="fa-solid fa-check mt-1 text-xl text-blue-500"></i>
            <div>
              <h3 className='font-semibold text-blue-900'>Flexible Hours</h3>
              <p className='text-gray-600'>Choose the hours that work best for your business</p>
            </div>
          </div>
          <div className='mx-auto flex  gap-3'>
            <i className="fa-solid fa-check mt-1 text-xl text-blue-500"></i>
            <div>
              <h3 className='font-semibold text-blue-900'>Cancel Anytime</h3>
              <p className='text-gray-600'>No long-term contracts or commitments required</p>
            </div>
          </div>
          <div className='mx-auto flex  gap-3'>
            <i className="fa-solid fa-check mt-1 text-xl text-blue-500"></i>
            <div>
              <h3 className='font-semibold text-blue-900'>Quality Guarantee</h3>
              <p className='text-gray-600'>We stand behind the quality of every lead and call</p>
            </div>
          </div>
          

        </div>
      </div>
    </>
}
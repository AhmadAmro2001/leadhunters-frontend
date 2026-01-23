import React, { useEffect, useState } from 'react'
export default function OfferFourthSection() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className='container mx-auto my-24'>
        <h1 className='text-blue-900 text-4xl text-center font-bold'>Frequently Asked Questions</h1>
        <div className='flex flex-col w-[70%] mx-auto mt-6 '>
          <div className='my-3'>
            <h5 className='text-xl text-blue-900 font-semibold'>How many hours do I need to commit to?</h5>
            <p className='text-gray-600 mt-2'>You can start with as few or as many hours as you need. Most clients start with 20-40 hours per week and scale based on results.</p>
          </div>
          <div className='my-3'>
            <h5 className='text-xl text-blue-900 font-semibold'>Can I mix different plans?</h5>
            <p className='text-gray-600 mt-2'>Absolutely! Many clients combine plans or adjust their caller count based on seasonal needs. We're flexible to accommodate your business.</p>
          </div>
          <div className='my-3'>
            <h5 className='text-xl text-blue-900 font-semibold'>What payment methods do you accept?</h5>
            <p className='text-gray-600 mt-2'>We accept all major credit cards, ACH transfers, and can set up invoicing for established accounts.</p>
          </div>
          <div className='my-3'>
            <h5 className='text-xl text-blue-900 font-semibold'>Is there a discount for long-term commitments?</h5>
            <p className='text-gray-600 mt-2'>Yes! Contact us to discuss volume discounts and special rates for quarterly or annual commitments.</p>
          </div>

          
          

        </div>
      </div>
    </>
}
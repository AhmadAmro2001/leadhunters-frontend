import React, { useEffect, useState } from 'react'
export default function ServiceSecondSection() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className='flex flex-col justify-center items-center py-10 md:py-16 px-10 w-full md:max-w-4xl mx-auto text-center'>
        <h1 className='text-2xl md:text-4xl text-blue-900 font-extrabold mb-5'>What We Do Best</h1>
        <p className='md:text-xl text-gray-600 mb-4'>We offer three core services designed to accelerate your real estate business. Each service can be tailored to your specific needs and goals.</p>
      </div>
    </>
}
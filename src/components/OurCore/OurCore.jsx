import React, { useEffect, useState } from 'react'
export default function OurCore() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div className="container mx-auto my-10 ">
        <h1 className='text-4xl text-center text-blue-900 font-extrabold mb-8'>Our Core Values</h1>
        <div className="flex flex-col md:flex-row justify-between w-[80%] mx-auto  ">
          
          <div className="md:max-w-[20%] w-full border-0 px-5 py-8 text-center rounded-2xl shadow-2xl mb-10 ">
            <div className="border-0 mx-auto w-15 h-15 flex justify-center items-center bg-gray-200 text-blue-600 rounded-full mb-5">
              <i className="fa-solid fa-shield text-3xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Integrity</h3>
            <p className="text-gray-600 ">
              We operate with transparency and honesty in every interaction,
              building trust through consistent delivery and ethical practices.
            </p>
          </div>
          <div className="md:max-w-[20%] w-full border-0 px-5 py-8 text-center rounded-2xl shadow-2xl mb-10 ">
            <div className="border-0 mx-auto w-15 h-15 flex justify-center items-center bg-gray-200 text-blue-600 rounded-full mb-5">
              <i className="fa-solid fa-award text-3xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Excellence</h3>
            <p className="text-gray-600 ">
              We strive for excellence in everything we do, from lead quality to customer service,
              never settling for "good enough."
            </p>
          </div>
          <div className="md:max-w-[20%] w-full border-0 px-5 py-8 text-center rounded-2xl shadow-2xl mb-10 ">
            <div className="border-0 mx-auto w-15 h-15 flex justify-center items-center bg-gray-200 text-blue-600 rounded-full mb-5">
              <i className="fa-regular fa-handshake text-3xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Partnership</h3>
            <p className="text-gray-600 ">
              We view our clients as partners, working collaboratively
              to achieve shared success and long-term growth.
            </p>
          </div>
          <div className="md:max-w-[20%] w-full border-0 px-5 py-8 text-center rounded-2xl shadow-2xl mb-10 ">
            <div className="border-0 mx-auto w-15 h-15 flex justify-center items-center bg-gray-200 text-blue-600 rounded-full mb-5">
              <i className="fa-regular fa-heart text-3xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Dedication</h3>
            <p className="text-gray-600 ">
              We're dedicated to your success, going above and beyond to ensure every lead 
              and every interaction adds value to your business.
            </p>
          </div>
          
          
          
          
          
        </div>
      </div>
    </>
}
import React, { useEffect, useState } from 'react'
export default function ServiceFirstSection() {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
  return <>
      <div
        className="relative mt-24 md:mt-0 md:py-48 py-24  bg-cover bg-center flex  items-center justify-center"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/du4n45qq0/image/upload/v1769057177/service-image-7_rkxczp.webp")`,
        }}
      >
        {/* blue overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 via-blue-900/80 to-blue-900/80" />


        <div className="relative z-10 p-10 text-white text-left  md:max-w-4xl ">
          <h1 className="text-3xl md:text-7xl font-semibold mb-2">Our Services</h1>
          <p className="md:text-2xl mb-6">
           Comprehensive lead generation solutions tailored for real estate professionals
          </p>
          
        </div>
      </div>
    </>
}
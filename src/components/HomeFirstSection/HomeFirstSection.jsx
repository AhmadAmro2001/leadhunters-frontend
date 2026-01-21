import React, { useEffect, useState } from 'react'
export default function HomeFirstSection() {
    
  return <>
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/du4n45qq0/image/upload/v1768953692/samples/cup-on-a-table.jpg")`,
        }}
      >
        {/* blue overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 via-blue-900/80 to-blue-900/80" />


        <div className="relative z-10 p-10 text-white text-left max-w-4xl ">
          <h1 className="text-7xl font-semibold mb-2">Transform Your Real Estate Business with Quality Leads</h1>
          <p className="text-2xl mb-6">
            We connect real estate brokers and agencies with pre-qualified leads
            and professional cold-calling agents to accelerate your growth.
          </p>
          <button className="border-0 bg-blue-600 px-4 py-2 rounded-lg">
            Get Started Today <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
}
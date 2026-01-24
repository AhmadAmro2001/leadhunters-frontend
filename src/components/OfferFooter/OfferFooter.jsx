import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function OfferFooter() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/contact");
    }
  return <>
      <div className='text-center py-24 bg-blue-900 text-white'>
          <h1 className='text-3xl font-bold mb-5'>Ready to Choose Your Plan?</h1>
          <p className='md:w-2xl mx-auto text-lg mb-6'>Contact us today to discuss your needs and get started with the perfect plan for your business.</p>
          <button onClick={handleClick} className="border-0 bg-blue-600 px-6 py-3 rounded-lg text-sm cursor-pointer">
            Contact Us Now <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
    </>
}
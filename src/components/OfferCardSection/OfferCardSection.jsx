import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function OfferCardSection({ data }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center my-10">
          {data.map((items, index) => {
            return (
              <div
                key={index}
                className={items.best ? "border-blue-400 shadow-2xl border-2 relative md:w-[28%] md:h-175 px-5 py-8 mx-8 rounded-2xl " : "border-gray-200 border-2 relative md:w-[25%] md:h-162.5 px-5 py-8 mx-8 rounded-2xl my-10"}
              >
                {items.best && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-1 px-4 rounded-lg">
                    <i className="fa-solid fa-star mr-2"></i>
                     Best Value
                  </div>
                )}
                <h3 className="text-blue-900 mb-3 text-2xl">{items.title}</h3>
                <p className="text-gray-600 mb-3">
                  {items.text}
                </p>
                <p className="text-gray-600 text-xl mb-3">
                  <span className="text-blue-800 text-5xl font-bold">{items.price}</span> /
                  hour
                </p>
                <p className="text-lg text-blue-600">{items.agents}</p>

                <ul className="mt-5">
                  {items.list.map((item,index)=>{
                    return(
                      <li className="mb-3">
                        <i className="fa-solid fa-check text-blue-600 "></i> {item}
                      </li>
                    )
                  })}
                  
                </ul>

                <button onClick={handleClick} className="text-white bg-blue-800 mt-5 py-2 px-5 rounded-lg cursor-pointer">
                  Get Started <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

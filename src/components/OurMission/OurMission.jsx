import React, { useEffect, useState } from "react";
export default function OurMission() {
  const [data, setData] = useState();
  useEffect(() => {}, []);
  return (
    <>
      <div className="container mx-auto my-10 ">
        <div className="flex flex-col md:flex-row justify-between w-[80%] mx-auto ">
          <div className="md:max-w-[40%] w-full border-0 p-7 rounded-2xl shadow-2xl mb-10 ">
            <div className="border-0  w-15 h-15 flex justify-center items-center bg-gray-200 text-blue-600 rounded-full mb-5">
              <i className="fa-regular fa-circle-dot text-3xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To empower real estate professionals with high-quality leads and
              professional calling services that drive growth, increase
              conversions, and build lasting success. We're committed to being
              more than a service provider—we're your partner in growth.
            </p>
          </div>
          <div className="md:max-w-[40%] w-full border-0 p-7 rounded-2xl shadow-2xl mb-10 ">
            <div className="border-0  w-15 h-15 flex justify-center items-center bg-gray-200 text-blue-600 rounded-full mb-5">
              <i className="fa-regular fa-eye text-3xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To become the leading lead generation partner for real estate
              professionals nationwide, known for our integrity, quality, and
              unwavering commitment to client success. We envision a future
              where every real estate professional has access to the tools they
              need to thrive.
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
}

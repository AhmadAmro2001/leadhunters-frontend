import React, { useEffect, useState } from "react";
export default function ServiceThirdSection() {
  const [data, setData] = useState();
  useEffect(() => {}, []);
  return (
    <>
    {/* first section */}
      <div className="container mx-auto my-10">
        <div className="flex flex-col md:flex-row justify-between items-center w-[80%] mx-auto">
        <div className="md:w-[50%]">
          <div className="border-0  w-15 h-15 flex justify-center items-center bg-gray-200 text-blue-600 rounded-full mb-5">
            <i className="fa-solid fa-arrow-trend-up text-3xl"></i>
          </div>
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Real Estate Lead Generation</h1>
          <p className="text-gray-600 mb-6 text-lg">
            We specialize in generating high-quality, pre-qualified leads
            specifically for the real estate industry. Our leads aren't just
            names on a list—they're potential clients who have expressed genuine
            interest in buying, selling, or investing in property.
          </p>
          <ul>
            <li className="mb-2 text-gray-600"><span className="text-blue-500 mr-3"><i class="fa-regular fa-circle-check"></i></span>Pre-qualified prospects ready to engage</li>
            <li className="mb-2 text-gray-600"><span className="text-blue-500 mr-3"><i class="fa-regular fa-circle-check"></i></span>Targeted to your specific market and property types</li>
            <li className="mb-2 text-gray-600"><span className="text-blue-500 mr-3"><i class="fa-regular fa-circle-check"></i></span>Verified contact information and detailed profiles</li>
            <li className="mb-2 text-gray-600"><span className="text-blue-500 mr-3"><i class="fa-regular fa-circle-check"></i></span>Consistent daily delivery based on your goals</li>
          </ul>
        </div>
        <div className="border-0 p-6 rounded-2xl shadow-2xl mt-3 md:mt-0 md:w-[45%]">
          <h2 className="text-xl font-semibold text-blue-900 mb-3">Perfect For :</h2>
          <div className="ml-5">
            <ol className="text-gray-600" style={{ listStyleType: "disc" }}>
            <li className="mb-2">Brokers looking to expand their client base</li>
            <li className="mb-2">Agencies seeking consistent lead flow</li>
            <li className="mb-2">Individual agents wanting quality prospects</li>
            <li className="mb-2">Teams ready to scale their operations</li>
          </ol>
          </div>
        </div>
      </div>
      </div>
    {/* second section */}
      <div className="container mx-auto my-10">
        <div className="flex flex-col md:flex-row justify-between items-center w-[80%] mx-auto">
          <div className="hidden md:block border-0 p-6 rounded-2xl shadow-2xl md:w-[45%]">
          <h2 className="text-xl font-semibold text-blue-900 mb-3">What You Get :</h2>
          <div className="ml-5">
            <ol className="text-gray-600" style={{ listStyleType: "disc" }}>
            <li className="mb-2">Professionally trained cold-calling specialists</li>
            <li className="mb-2">Scripts tailored to your brand and offerings</li>
            <li className="mb-2">Real-time reporting and call analytics</li>
            <li className="mb-2">Flexible scheduling to match your needs</li>
          </ol>
          </div>
        </div>
        <div className="md:w-[50%] ">
          <div className="border-0  w-15 h-15 flex justify-center items-center bg-gray-200 text-blue-600 rounded-full mb-5">
            <i className="fa-regular fa-user text-3xl"></i>
          </div>
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Trained Cold-Calling Agents</h1>
          <p className="text-gray-600 mb-6 text-lg">
            Our team of professional cold-calling agents are specifically trained in real estate outreach. They understand the nuances of the industry, know how to qualify leads effectively, and represent your brand with professionalism and expertise.
          </p>
          <ul>
            <li className="mb-2 text-gray-600"><span className="text-blue-500 mr-3"><i class="fa-regular fa-circle-check"></i></span>Extensive training in real estate terminology and sales</li>
            <li className="mb-2 text-gray-600"><span className="text-blue-500 mr-3"><i class="fa-regular fa-circle-check"></i></span>Professional communication and relationship building</li>
            <li className="mb-2 text-gray-600"><span className="text-blue-500 mr-3"><i class="fa-regular fa-circle-check"></i></span>Quality assurance and performance monitoring</li>
            <li className="mb-2 text-gray-600"><span className="text-blue-500 mr-3"><i class="fa-regular fa-circle-check"></i></span>Seamless handoff of qualified prospects to your team</li>
          </ul>
        </div>
        <div className="md:hidden border-0 p-6 rounded-2xl shadow-2xl mt-3  md:w-[45%]">
          <h2 className="text-xl font-semibold text-blue-900 mb-3">What You Get :</h2>
          <div className="ml-5">
            <ol className="text-gray-600" style={{ listStyleType: "disc" }}>
            <li className="mb-2">Professionally trained cold-calling specialists</li>
            <li className="mb-2">Scripts tailored to your brand and offerings</li>
            <li className="mb-2">Real-time reporting and call analytics</li>
            <li className="mb-2">Flexible scheduling to match your needs</li>
          </ol>
          </div>
        </div>
        
      </div>
      </div>
      {/* third section */}
      <div className="container mx-auto my-10">
        <div className="flex flex-col md:flex-row justify-between items-center w-[80%] mx-auto">
        <div className="md:w-[50%]">
          <div className="border-0  w-15 h-15 flex justify-center items-center bg-gray-200 text-blue-600 rounded-full mb-5">
            <i className="fa-solid fa-phone text-3xl"></i>
          </div>
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Agents Using Your Seats</h1>
          <p className="text-gray-600 mb-6 text-lg">
            Already have a calling system in place? Our agents can seamlessly integrate with your existing infrastructure. They'll use your dialer seats, follow your processes, and work as an extension of your team—all while maintaining the high standards you expect.
          </p>
          <ul>
            <li className="mb-2 text-gray-600"><span className="text-blue-500 mr-3"><i class="fa-regular fa-circle-check"></i></span>Compatible with major dialer systems</li>
            <li className="mb-2 text-gray-600"><span className="text-blue-500 mr-3"><i class="fa-regular fa-circle-check"></i></span>Quick onboarding and minimal setup required</li>
            <li className="mb-2 text-gray-600"><span className="text-blue-500 mr-3"><i class="fa-regular fa-circle-check"></i></span>Full visibility into calling activity and results</li>
            <li className="mb-2 text-gray-600"><span className="text-blue-500 mr-3"><i class="fa-regular fa-circle-check"></i></span>Cost-effective utilization of existing resources</li>
          </ul>
        </div>
        <div className="border-0 p-6 rounded-2xl shadow-2xl mt-4 md:mt-0 md:w-[45%]">
          <h2 className="text-xl font-semibold text-blue-900 mb-3">Key Benefits :</h2>
          <div className="ml-5">
            <ol className="text-gray-600" style={{ listStyleType: "disc" }}>
            <li className="mb-2">Maximize your existing technology investment</li>
            <li className="mb-2">Maintain control over your calling operations</li>
            <li className="mb-2">Scale up or down based on demand</li>
            <li className="mb-2">Reduce overhead while increasing output</li>
          </ol>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

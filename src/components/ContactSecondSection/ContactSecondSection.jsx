import React, { useEffect, useState } from "react";
export default function ContactSecondSection() {
  const [range, setRange] = useState("");
  const [source, setSource] = useState("");

  const options = [
    "1-10 leads per day",
    "11-25 leads per day",
    "26-50 leads per day",
    "51-100 leads per day",
    "100+ leads per day",
  ];

  const options2 = [
    "Social Media",
    "Facebook",
    "Instagram",
    "LinkedIn",
    "Referral from a colleague",
    "Google Search",
    "Other",
  ];
  return (
    <>
      <div className="container mx-auto my-18">
        <div className="flex flex-col md:flex-row  w-[80%] mx-auto">
          <div className="border border-gray-200 rounded-2xl shadow-2xl p-5 md:w-[60%]">
            <h1 className="text-2xl font-semibold mb-2 text-blue-900">
              Send Us a Message
            </h1>
            <p className="text-gray-600 mb-3">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
            <form action="">
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-semibold" htmlFor="">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="border rounded border-gray-300 p-1 outline-none transition-all duration-200 ease-in-out focus:shadow-lg focus:border-gray-400 focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <div className="flex flex-col md:flex-row mb-4 gap-4">
                <div className="flex flex-col w-full">
                  <label className="mb-2 font-semibold" htmlFor="">
                    Email Address
                  </label>
                  <input
                    placeholder="john@example.com"
                    className="border rounded border-gray-300 p-1 outline-none transition-all duration-200 ease-in-out focus:shadow-lg focus:border-gray-400 focus:ring-2 focus:ring-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="mb-2 font-semibold" htmlFor="">
                    Mobile Phone
                  </label>
                  <input
                    placeholder="+1 (555) 000-000"
                    className="border rounded border-gray-300 p-1 outline-none transition-all duration-200 ease-in-out focus:shadow-lg focus:border-gray-400 focus:ring-2 focus:ring-gray-300"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-semibold" htmlFor="">
                  How many leads are you willing to get daily?
                </label>
                <select
                  value={range}
                  onChange={(e) => setRange(e.target.value)}
                  className={`w-full border rounded border-gray-300 p-2 bg-white outline-none
                              transition-all duration-200 ease-in-out
                              focus:shadow-lg focus:border-gray-400 focus:ring-2 focus:ring-gray-300
                              ${range === "" ? "text-gray-500" : "text-gray-900"}`}
                >
                  <option value="" disabled>
                    Select a range
                  </option>

                  {options.map((op) => (
                    <option key={op} value={op}>
                      {op}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-semibold" htmlFor="">
                  Where did you hear about us
                </label>
                <select
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  className={`w-full border rounded border-gray-300 p-2 bg-white outline-none
          transition-all duration-200 ease-in-out
          focus:shadow-lg focus:border-gray-400 focus:ring-2 focus:ring-gray-300
          ${source === "" ? "text-gray-500" : "text-gray-900"}`}
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  {options2.map((op) => (
                    <option key={op} value={op}>
                      {op}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-semibold" htmlFor="">
                  Additional Message (Optional)
                </label>
                <textarea
                  className="border rounded border-gray-300 p-1 outline-none transition-all duration-200 ease-in-out focus:shadow-lg focus:border-gray-400 focus:ring-2 focus:ring-gray-300"
                  type="text"
                  placeholder="Tell us more about your needs..."
                />
              </div>

              <button className="w-full text-white bg-blue-500 py-2 rounded-xl cursor-pointer">
                Submit Message
              </button>
            </form>
          </div>
          <div className="md:w-[35%] mt-10 md:mt-0 mx-auto">
            <div className="border border-gray-200 p-5 rounded-2xl">
              <h3 className="text-lg text-blue-900">Contact Information</h3>
              <p className="text-gray-600 mb-5">
                Reach out to us through any of these channels
              </p>
              <div className="flex align-middle gap-3 mb-5">
                <div className="border-0 p-2 w-10 h-10 flex justify-center items-center bg-gray-200 text-blue-600 rounded-full mt-2">
                  <i className="fa-regular fa-envelope text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg text-blue-900">Email</h3>
                  <p className="text-gray-600">info@leadhunters.com</p>
                </div>
              </div>
              <div className="flex align-middle gap-3 mb-5">
                <div className="border-0 p-2 w-10 h-10 flex justify-center items-center bg-gray-200 text-blue-600 rounded-full mt-2">
                  <i className="fa-solid fa-phone text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg text-blue-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex align-middle gap-3 mb-5">
                <div className="border-0  p-2 w-10 h-10 flex justify-center items-center bg-gray-200 text-blue-600 rounded-full mt-2">
                  <i className="fa-solid fa-location-dot text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg text-blue-900">Office</h3>
                  <p className="text-gray-600 ">
                    123 Business Avenue Suite 456 New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
            <div className="border-0 bg-blue-900 text-white rounded-2xl p-8 mt-8">
                  <h3 className="text-lg mb-3">Business Hours</h3>
                  <div className="flex justify-between">
                    <div>
                      <p className="mb-3">Monday-Friday: </p>
                      <p className="mb-3">Saturday: </p>
                      <p className="mb-3">Sunday: </p>
                    </div>
                    <div>
                      <p className="mb-3">8:00 AM - 6:00 PM</p>
                      <p className="mb-3">9:00 AM - 2:00 PM</p>
                      <p className="mb-3">Closed</p>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

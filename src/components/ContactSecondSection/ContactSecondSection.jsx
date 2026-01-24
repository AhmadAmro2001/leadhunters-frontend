import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
export default function ContactSecondSection() {
  const [range, setRange] = useState("");
  const [source, setSource] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  

  const sendData = (formData)=>{
    setLoading(true);
    setError(null);
    axios.post("https://leadhunters-backend.onrender.com/messages/send-message",formData)
    .then((res)=>{
      let {data} = res;

      if(data.message === "Message sent successfully."){
        setSuccess(true);
        setLoading(false);
      }
    })
    .catch((err)=>{
      setError(true);
      setLoading(false);
    })
  }

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

  let myForm = useFormik({
    initialValues: {
            fullName: "",
            email: "",
            mobile: "",
            leadNo:"",
            hearAboutUs:"",
            message:"",
        },
    validationSchema: Yup.object({
            fullName: Yup.string().min(3, "not less than 3").required("Required"),
            email: Yup.string().email("invalid email").required("Required"),
            mobile: Yup.string().required("Required"),
            leadNo: Yup.string().required("Required"),
            hearAboutUs: Yup.string().required("Required"),
            message: Yup.string()
        }),
    onSubmit: sendData
  })
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
            <form onSubmit={myForm.handleSubmit}>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-semibold flex  items-center" htmlFor="fullName">
                  Full Name {myForm.errors.fullName && myForm.touched.fullName?<div className="pl-2 text-sm  text-red-600 " role="alert">
                    <span className="font-medium">*</span> 
                </div> : null}
                  
                </label>
                <input
                  name="fullName"
                  onBlur={myForm.handleBlur} onChange={myForm.handleChange} value={myForm.values.fullName}
                  type="text"
                  placeholder="John Doe"
                  className="border rounded border-gray-300 p-1 outline-none transition-all duration-200 ease-in-out focus:shadow-lg focus:border-gray-400 focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <div className="flex flex-col md:flex-row mb-4 gap-4">
                <div className="flex flex-col w-full">
                  <label className="mb-2 font-semibold flex  items-center" htmlFor="email">
                    Email Address {myForm.errors.email && myForm.touched.email?<div className="pl-2 text-sm  text-red-600 " role="alert">
                    <span className="font-medium">*</span> 
                </div> : null}
                  </label>
                  <input
                    name="email"
                    onBlur={myForm.handleBlur} onChange={myForm.handleChange} value={myForm.values.email}
                    placeholder="john@example.com"
                    className="border rounded border-gray-300 p-1 outline-none transition-all duration-200 ease-in-out focus:shadow-lg focus:border-gray-400 focus:ring-2 focus:ring-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="mb-2 font-semibold flex  items-center" htmlFor="mobile">
                    Mobile Phone {myForm.errors.mobile && myForm.touched.mobile?<div className="pl-2 text-sm  text-red-600 " role="alert">
                    <span className="font-medium">*</span> 
                </div> : null}
                  </label>
                  <input
                    name="mobile"
                    onBlur={myForm.handleBlur} onChange={myForm.handleChange} value={myForm.values.mobile}
                    placeholder="+1 (555) 000-000"
                    className="border rounded border-gray-300 p-1 outline-none transition-all duration-200 ease-in-out focus:shadow-lg focus:border-gray-400 focus:ring-2 focus:ring-gray-300"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-semibold flex  items-center" htmlFor="leadNo">
                  How many leads are you willing to get daily? {myForm.errors.leadNo && myForm.touched.leadNo?<div className="pl-2 text-sm  text-red-600 " role="alert">
                    <span className="font-medium">*</span> 
                </div> : null}
                </label>
                <select
                  name="leadNo"
                  
                  value={myForm.values.leadNo}
                  onChange={myForm.handleChange}
                  onBlur={myForm.handleBlur}
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
                <label className="mb-2 font-semibold" htmlFor="hearAboutUs">
                  Where did you hear about us? {myForm.errors.hearAboutUs && myForm.touched.hearAboutUs?<div className="p-2 text-sm  text-red-600 " role="alert">
                    <span className="font-medium">*</span> 
                </div> : null} 
                </label>
                <select
                  name="hearAboutUs"
                  value={myForm.values.hearAboutUs}
                  onChange={myForm.handleChange}
                  onBlur={myForm.handleBlur}
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
                <label className="mb-2 font-semibold" htmlFor="message">
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={myForm.values.message}
                  onChange={myForm.handleChange}
                  className="border rounded border-gray-300 p-1 outline-none transition-all duration-200 ease-in-out focus:shadow-lg focus:border-gray-400 focus:ring-2 focus:ring-gray-300"
                  type="text"
                  placeholder="Tell us more about your needs..."
                />
              </div>

              <button type="submit" className="w-full text-white bg-blue-500 py-2 rounded-xl cursor-pointer">
                {loading ? <i className='fa fa-spinner fa-spin mx-3 text-white text-2xl'></i> : "Submit Message"}
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
                      <p className="mb-3">Off</p>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

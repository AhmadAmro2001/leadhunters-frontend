import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
export default function Navbar() {
    const [open, setOpen] = useState(false);
  //   useEffect(() => {
  //   const onResize = () => {
  //     if (window.innerWidht >= 768) setOpen(false);
  //   };
  //   window.addEventListener("resize", onResize);
  //   return () => window.removeEventListener("resize", onResize);
  // }, []);

  const links = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/#aboutus" },
    { name: "Services", href: "#services" },
    { name: "Offer's Price", href: "#offers" },
    { name: "Contact", href: "#contact" },
  ];
    
  return <>
      <nav className='flex justify-between fixed z-50 top-0 left-0 right-0 items-center px-5 md:px- lg:px-40 xl:px-72  py-8 bg-blue-900 text-white'>
        <div className='flex items-center'>
          <div className='border-white border md:border-3 p-1 rounded-full mr-3'>
            <div className='border-white border md:border-3 p-1 rounded-full'>
              <div className='border-white border md:border-3 p-1 rounded-full'>

              </div>
            </div>
          </div>
          <h1 className='md:text-2xl font-semibold'>Lead Hunters</h1>
        </div>
        <ul className='md:flex hidden items-center md:w-[50%]   justify-between'>
          {links.map((link) => (
            <li key={link.name} className='cursor-pointer text-xl'>
              {link.name === "About" ? <HashLink smooth to={link.href}>{link.name}</HashLink> :<Link to={link.href}>{link.name}</Link>}
            </li>
          ))}
        </ul>
        {!open &&<div className='flex md:hidden  '>
          <button onClick={()=>{setOpen(true)}}  className='border p-1 rounded-lg '>
            <span className="text-2xl text-white  ">☰</span>
          </button>
        </div>}
        {open &&<div className='flex md:hidden  '>
          <button onClick={()=>{setOpen(false)}}  className='border p-1 rounded-lg '>
            <span className="text-xl text-white  ">X</span>
          </button>
        </div>}
        
      </nav>
      
        {open && (
          <div className='bg-blue-900 text-white py-3'>
          <ul className='flex flex-col md:hidden items-center    justify-between'>
          {links.map((link) => (
            <li key={link.name} className='cursor-pointer'>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        </div>
        )}
      
      
    </>
}
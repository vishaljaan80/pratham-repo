import React from 'react'
import file from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-[18vw] h-screen border-r-2 p-0 mt-4 md:p-6 ">
      {/* logo Section */}
      <div className="logo flex flex-col items-center px-2 gap-5">
        <div className="w-12 h-12 object-cover">
          <img src={file} className="w-full h-full rounded-lg" alt="" />
        </div>
        <h1 className="text-2xl text-center text-blue-500 font-bold hidden lg:flex">
          Sell Tech Ind. Production
        </h1>
      </div>
      {/* Links */}
      <div className="flex text-md font-semibold flex-col mt-10">
        <NavLink to='#'>
          <div className="text-center flex py-5 gap-4 border-b-2 items-center text-blue-500 justify-start pl-5 md:pl-0">
            <i className="fa-solid fa-house"></i>
            <p className='hidden md:flex'>Dashboard</p>
          </div>
        </NavLink>
        <NavLink to='#'>
          <div className="text-center flex py-5 gap-4 border-b-2 items-center text-gray-700 justify-start pl-5 md:pl-0">
            <i className="fa-solid fa-box"></i>
            <p className='hidden md:flex'>Categories</p>
          </div>
        </NavLink>
        <NavLink to='#'>
          <div className="text-center flex py-5 gap-4 border-b-2 items-center text-gray-700  pl-5 md:pl-0">
            <i className="fa-solid fa-cart-shopping"></i>
            <p className='hidden md:flex'>Product</p>
          </div>
        </NavLink>
        <NavLink to='#'>
          <div className="text-center flex py-5 gap-4 border-b-2 items-center text-gray-700 justify-start pl-5 md:pl-0">
            <i className="fa-solid fa-box"></i>
            <p className='hidden md:flex'>Orders</p>
          </div>
        </NavLink>
        <NavLink to='#'>
          <div className="text-center flex py-5 gap-4 border-b-2 items-center text-gray-700 justify-start pl-5 md:pl-0">
            <i className="fa-regular fa-user"></i>
            <p className='hidden md:flex'>Employee</p>
          </div>
        </NavLink>
        <NavLink to='#'>
          <div className="text-center flex py-5 gap-4 border-b-2 items-center text-gray-700 justify-start pl-5 md:pl-0">
            <i className="fa-solid fa-dollar-sign"></i>
            <p className='hidden md:flex'>Subscription</p>
          </div>
        </NavLink>
      </div>
      {/* last */}
      <div className="text-md font-semibold flex flex-col mt-52">
        <NavLink to='#'>
          <div className="text-center flex py-5 gap-4 border-b-2 items-center text-gray-700 justify-start pl-5 md:pl-0">
            <i className="fa-solid fa-phone"></i>
            <p className='hidden md:flex'>Phone</p>
          </div>
        </NavLink>
        <NavLink to='#'>
          <div className="text-center flex py-5 gap-4 border-b-2 items-center text-gray-700 justify-start pl-5 md:pl-0">
            <i className="fa-solid fa-gear"></i>
            <p className='hidden md:flex'>Settings</p>
          </div>
        </NavLink>
        <NavLink to='#'>
          <div className="text-center flex py-5 gap-4 border-b-2 items-center text-gray-700 justify-start pl-5 md:pl-0">
            <i className="fa-solid fa-right-from-bracket"></i>
            <p className='hidden md:flex'>Log Out</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar
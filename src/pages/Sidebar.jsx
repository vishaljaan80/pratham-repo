import React from 'react'
import file from '../assets/logo.jpg'
// import { a } from 'react-router-dom';
import { images } from '../assets/assets';
const Sidebar = () => {
  return (
    <div className="w-[18vw] h-screen sticky top-0 left-0 border-r-2 p-0  md:p-6 ">
      {/* logo Section */}
      <div className="logo flex cursor-pointer items-center px-2 gap-5">
        <div className="w-[45px] h-[39px] object-cover ">
          <img src={images.logo} className="w-full h-full rounded-lg" alt="" />
        </div>
        <h1 className="text-[20px] text-center text-[#1570EF] font-bold hidden lg:flex">
          Sell Tech Ind. Production
        </h1>
      </div>
      {/* Links */}
      <div className="flex text-md flex-col mt-10 text-[#667085]">
        <a to="#">
          <div className="text-center cursor-pointer flex py-[14px] gap-4 items-center text-[#1570EF] justify-start pl-5 md:pl-0">
            <img src={images.home} alt="" />
            <p className="hidden md:flex">Dashboard</p>
          </div>
        </a>
        <a to="#">
          <div className="text-center cursor-pointer flex py-[14px] gap-4  items-center  justify-start pl-5 md:pl-0">
            <img src={images.grid} alt="" />
            <p className="hidden md:flex">Categories</p>
          </div>
        </a>
        <a to="#">
          <div className="text-center cursor-pointer flex py-[14px] gap-4  items-center   pl-5 md:pl-0">
            <img src={images.Property} alt="" />
            <p className="hidden md:flex">Product</p>
          </div>
        </a>
        <a to="#">
          <div className="text-center cursor-pointer flex py-[14px] gap-4  items-center  justify-start pl-5 md:pl-0">
            <img src={images.Order} alt="" />
            <p className="hidden md:flex">Orders</p>
          </div>
        </a>
        <a to="#">
          <div className="text-center cursor-pointer flex py-[14px] gap-4  items-center  justify-start pl-5 md:pl-0">
            <img src={images.User} alt="" />
            <p className="hidden md:flex">Employee</p>
          </div>
        </a>
        <a to="#">
          <div className="text-center cursor-pointer flex py-[14px] gap-4  items-center justify-start pl-5 md:pl-0">
            <img src={images.dollar} alt="" />
            <p className="hidden md:flex">Subscription</p>
          </div>
        </a>
      </div>
      {/* last */}
      <div className="text-md flex flex-col mt-52 text-[#667085]">
        <a to="#">
          <div className="text-center cursor-pointer flex py-[14px] gap-4  items-center  justify-start pl-5 md:pl-0">
            <img src={images.Phone} alt="" />
            <p className="hidden md:flex">Phone</p>
          </div>
        </a>
        <a to="#">
          <div className="text-center cursor-pointer flex py-[14px] gap-4  items-center  justify-start pl-5 md:pl-0">
            <img src={images.settings} alt="" />
            <p className="hidden md:flex">Settings</p>
          </div>
        </a>
        <a to="#">
          <div className="text-center cursor-pointer flex py-[14px] gap-4  items-center  justify-start pl-5 md:pl-0">
            <img src={images.LogOut} alt="" />
            <p className="hidden md:flex">Log Out</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Sidebar
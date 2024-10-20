import React from 'react'
import file from '../assets/logo.jpg'
// import { a } from 'react-router-dom';
import { images } from '../assets/assets';
const Sidebar = () => {
  return (
    <div className="">
      <div className="w-fit h-screen sticky sm:flex  flex-col hidden top-0 left-0 border-r-2 p-0  md:p-6 ">
        {/* logo Section */}
        <div className="logo flex cursor-pointer items-center md:mt-0 mt-5 px-2 gap-5">
          <div className="w-[45px] h-[39px] object-cover ">
            <img
              src={images.logo}
              className="w-full h-full rounded-lg"
              alt=""
            />
          </div>
          <h1 className="text-[20px] text-center text-[#1570EF] font-bold hidden lg:flex">
            Sell Tech Ind. Production
          </h1>
        </div>
        {/* Links */}
        <div className="flex text-md flex-col mt-4 text-[#667085]">
          <a to="#">
            <div className="text-center cursor-pointer flex py-[12px] gap-4 items-center text-[#1570EF] justify-start pl-5 md:pl-0">
              <img src={images.home} alt="" />
              <p className="hidden md:flex">Dashboard</p>
            </div>
          </a>
          <a to="#">
            <div className="text-center cursor-pointer flex py-[12px] gap-4  items-center  justify-start pl-5 md:pl-0">
              <img src={images.grid} alt="" />
              <p className="hidden md:flex">Categories</p>
            </div>
          </a>
          <a to="#">
            <div className="text-center cursor-pointer flex py-[12px] gap-4  items-center   pl-5 md:pl-0">
              <img src={images.Property} alt="" />
              <p className="hidden md:flex">Product</p>
            </div>
          </a>
          <a to="#">
            <div className="text-center cursor-pointer flex py-[12px] gap-4  items-center  justify-start pl-5 md:pl-0">
              <img src={images.Order} alt="" />
              <p className="hidden md:flex">Orders</p>
            </div>
          </a>
          <a to="#">
            <div className="text-center cursor-pointer flex py-[12px] gap-4  items-center  justify-start pl-5 md:pl-0">
              <img src={images.User} alt="" />
              <p className="hidden md:flex">Employee</p>
            </div>
          </a>
          <a to="#">
            <div className="text-center cursor-pointer flex py-[11px] gap-4  items-center justify-start pl-5 md:pl-0">
              <img src={images.dollar} alt="" />
              <p className="hidden md:flex">Subscription</p>
            </div>
          </a>
        </div>
        {/* last */}
        <div className="text-md flex flex-col mt-52 text-[#667085]">
          <a to="#">
            <div className="text-center cursor-pointer flex py-[11px] gap-4  items-center  justify-start pl-5 md:pl-0">
              <img src={images.Phone} alt="" />
              <p className="hidden md:flex">Phone</p>
            </div>
          </a>
          <a to="#">
            <div className="text-center cursor-pointer flex py-[11px] gap-4  items-center  justify-start pl-5 md:pl-0">
              <img src={images.settings} alt="" />
              <p className="hidden md:flex">Settings</p>
            </div>
          </a>
          <a to="#">
            <div className="text-center cursor-pointer flex py-[11px] gap-4  items-center  justify-start pl-5 md:pl-0">
              <img src={images.LogOut} alt="" />
              <p className="hidden md:flex">Log Out</p>
            </div>
          </a>
        </div>
      </div>
      <div className="fixed w-full h-[70px] rounded-t-lg  bg-white left-0 bottom-0 sm:hidden">
        <div className="flex items-center justify-around w-full h-full">
          <div className="flex flex-col items-center gap-2">
            <img src={images.Property} alt="" className="w-6 h-6" />
            <p className="text-sm">Product</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src={images.grid} alt="" className="w-6 h-6" />
            <p className="text-sm">Categories</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src={images.home} alt="" className="w-6 h-6" />
            <p className="text-sm text-[#1570EF]">Dashboard</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src={images.User} alt="" className="w-6 h-6" />
            <p className="text-sm">Employee</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src={images.LogOut} alt="" className="w-6 h-6" />
            <p className="text-sm">More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
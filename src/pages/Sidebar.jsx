import React from 'react'
import file from '../assets/logo.jpg'

const Sidebar = () => {
  return (
    <div className="w-[20vw] h-screen border-r-2 p-6">
      {/* logo Section */}
      <div className="logo flex gap-5">
        <div className="w-20 h-16 object-cover">
          <img src={file} className="w-full h-full rounded-lg" alt="" />
        </div>
        <h1 className="text-2xl text-center text-blue-500 font-bold">
          Sell Tech Ind. Production
        </h1>
      </div>
      {/* Links */}
      <div className="flex flex-col mt-10">
        <h2 className="text-xl text-center flex py-5 gap-4 border-b-2 items-center text-blue-500 justify-start pl-5">
          <i className="fa-solid fa-house"></i> Dashboard
        </h2>
        <h2 className="text-xl text-center flex py-5 gap-4 border-b-2 items-center text-gray-700 justify-start  pl-5">
          <i className="fa-solid fa-house"></i> Dashboard
        </h2>
        <h2 className="text-xl text-center flex py-5 gap-4 border-b-2 items-center text-gray-700 justify-start  pl-5">
          <i className="fa-solid fa-house"></i> Dashboard
        </h2>
        <h2 className="text-xl text-center flex py-5 gap-4 border-b-2 items-center text-gray-700 justify-start  pl-5">
          <i className="fa-solid fa-house"></i> Dashboard
        </h2>
      </div>
      {/* last */}
      <div className="text-xl flex flex-col mt-52">
        <h2 className="text-xl text-center flex py-5 gap-4 border-b-2 items-center text-gray-700 justify-start  pl-5">
          <i className="fa-solid fa-house"></i> Dashboard
        </h2>
        <h2 className="text-xl text-center flex py-5 gap-4 border-b-2 items-center text-gray-700 justify-start  pl-5">
          <i className="fa-solid fa-house"></i> Dashboard
        </h2>
        <h2 className="text-xl text-center flex py-5 gap-4 border-b-2 items-center text-gray-700 justify-start  pl-5">
          <i className="fa-solid fa-house"></i> Dashboard
        </h2>
      </div>
    </div>
  );
}

export default Sidebar
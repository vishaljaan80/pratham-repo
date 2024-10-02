import React from 'react'
import file from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between  w-[80vw] items-center p-4 bg-slate-200 text-white">
        <div className="w-full flex">
          <input
            type="text"
            className="w-full mr-5 p-2 rounded"
            placeholder="Search..."
          />
        </div>
        <div>
          <img src={file} className="w-12 rounded-full" alt="" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar
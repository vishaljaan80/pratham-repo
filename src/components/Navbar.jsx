import React from 'react'
import file from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between  w-full items-center p-4 bg-slate-50 text-white">
        <div className="w-[400px] items-center justify-center gap-2 bg-slate-100 border text-md px-3 rounded flex">
          <i class="text-gray-700 text-xl fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            className="sm:w-[350px] mr-5 p-2 rounded bg-transparent outline-none text-gray-800 placeholder:font-medium"
            placeholder="Search product, supplier, order"
          />
        </div>
        <div>
          <img src={file} className="w-12 hidden md:flex rounded-full" alt="" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar
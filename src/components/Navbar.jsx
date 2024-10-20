import React, { useState } from "react";
import { images } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between gap-4 sm:w-full items-center sm:m-0 m-4 mx-auto w-[90%] p-4 bg-slate-50 sm:rounded-lg">
        <div className="w-full items-center gap-2 bg-slate-100 border text-sm px-3 rounded flex">
          <i className="text-gray-700 text-xl fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            className="sm:w-[350px] w-full mr-5 p-2 rounded bg-transparent outline-none text-gray-800 placeholder:font-medium"
            placeholder="Search product, supplier, order"
          />
        </div>
        <div>
          <img
            className="flex gap-2 py-2 w-[40px] h-[40px] rounded-full"
            src={images.profile}
            alt=""
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

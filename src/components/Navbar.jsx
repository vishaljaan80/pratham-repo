import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { images } from "../assets/assets";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between gap-4 w-full items-center p-4 bg-slate-50 ">
        <CiMenuBurger
          size={30}
          color="black"
          className="sm:hidden flex"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen && (
          <div className="absolute bg-white w-60 h-screen top-0 left-0">
            <div className="flex">
              <IoMdClose
                size={30}
                color="black"
                className="absolute right-4 top-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
              <p className="text-[20px] text-center text-[#1570EF] font-bold w-2/3 mt-4">
                Sell Tech Ind. Production
              </p>
            </div>
            <div className="flex flex-col h-[88%] justify-between">
              <div className="bg-white pl-4 mt-5 text-[#667085]">
                <NavLink className="flex gap-2 py-2 text-[#]" to="/">
                  <img src={images.home} alt="" />
                  Dashboard
                </NavLink>
                <NavLink className="flex gap-2 py-2" to="/">
                  <img src={images.grid} alt="" />
                  Categories
                </NavLink>
                <NavLink className="flex gap-2 py-2" to="/">
                  <img src={images.Property} alt="" />
                  Product
                </NavLink>
                <NavLink className="flex gap-2 py-2" to="/">
                  <img src={images.Order} alt="" />
                  Orders
                </NavLink>
                <NavLink className="flex gap-2 py-2" to="/">
                  <img src={images.User} alt="" />
                  Employee
                </NavLink>
                <NavLink className="flex gap-2 py-2" to="/">
                  <img src={images.dollar} alt="" />
                  Subscription
                </NavLink>
              </div>
              <div className="bg-white pl-4 mt-5 text-[#667085]">
                <NavLink className="flex gap-2 py-2 text-[#]" to="/">
                  <img src={images.Phone} alt="" />
                  Contact Us
                </NavLink>
                <NavLink className="flex gap-2 py-2" to="/">
                  <img src={images.settings} alt="" />
                  Settings
                </NavLink>
                <NavLink className="flex gap-2 py-2" to="/">
                  <img src={images.LogOut} alt="" />
                  Logout
                </NavLink>
              </div>
            </div>
          </div>
        )}
        <div className="hamburger-menu w-full flex">
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

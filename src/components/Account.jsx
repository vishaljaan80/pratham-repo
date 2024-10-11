import React, { useState } from 'react'
import Vector from '../assets/Vector.png'
import Remove from '../assets/Remove.png'
import User from '../assets/user.jpg'

const Account = () => {
    const [plan, setPlan] = useState('Basic Plan')
  return (
    <>
      <div className="bg-white m-4 border rounded-lg outline-none p-4">
        <h1>Account Details</h1>
        <div className="flex mt-8 gap-10">
          <img
            className="w-24 h-24 rounded-full object-cover"
            src={User}
            alt=""
          />
          <div className="flex  flex-col justify-between gap-5 ">
            <div className="bg-yellow-400 h-8 rounded-full p-2 px-4 w-36 gap-2  flex items-center ">
              <i className=" fa-regular fa-star"></i>
              <p>Basic Plan</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="flex items-center gap-2 border-2 rounded-xl px-4 py-2">
                <img src={Vector} alt="" /> Upload
              </button>
              <button className="flex items-center gap-2 border-2 rounded-xl px-4 py-2">
                <img src={Remove} alt="" /> Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white m-4 border rounded-lg outline-none  p-4">
        <form action="">
          <div className="flex flex-wrap gap-4 text-lg text-gray-700">
            <div className="flex w-[450px]     flex-col gap-2">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                className="border rounded-lg outline-none p-2 px-3"
                placeholder="Name"
              />
            </div>
            <div className="flex w-[450px] flex-col gap-2">
              <label htmlFor="Sub-start">Subscription Start Date:</label>
              <input
                type="date"
                id="Sub-start"
                className="border rounded-lg outline-none p-2 px-3"
              />
            </div>
            <div className="flex w-[450px] flex-col gap-2">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="border rounded-lg outline-none p-2 px-3"
                placeholder="Email"
              />
            </div>
            <div className="flex w-[450px] flex-col gap-2">
              <label htmlFor="Sub-end">Subscription End Date:</label>
              <input
                type="date"
                id="Sub-end"
                className="border rounded-lg outline-none p-2 px-3"
              />
            </div>
            <div className="flex w-[450px] flex-col gap-2">
              <label htmlFor="password">Password:</label>
              <input
                type="text"
                id="password"
                className="border rounded-lg outline-none p-2 px-3"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="btns  flex mt-10 gap-4">
            <button className="bg-blue-500 text-white rounded-lg px-4">Save changes</button>
            <button className="border rounded-lg px-4 py-2">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Account
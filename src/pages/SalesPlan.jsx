import React from "react";
import State from "../components/State";
import User from "../assets/user.jpg";
import { plan } from "../assets/assets";

const SalesPlan = () => {
  return (
    <div>
      <State />
      <div className="m-5 mt-20 flex flex-col gap-5">
        {/* User Info Section */}
        <div className="flex w-fit items-center gap-3 text-blue-500">
          <img
            src={User}
            className="w-12 h-12 rounded-full object-cover"
            alt="User profile"
          />
          <p>Jenny Wilson</p>
        </div>

        {/* Plan Heading */}
        <div>
          <h1 className="text-3xl font-bold">Choose a plan that suits you</h1>
        </div>
      </div>

      {/* Plan Section */}
      <div className="m-5 flex overflow-x-auto gap-11 scrollbar-hide  mb-10 w-[1121px]">
        {plan.map((planItem, index) => (
          <div
            key={index}
            className="min-w-[344px] flex-shrink-0 border rounded-lg bg-white shadow-lg"
          >
            {/* Plan Details */}
            <div className="flex flex-col text-center gap-3 p-7">
              <h1 className="text-2xl font-semibold text-blue-500">
                {planItem.name}
              </h1>
              <p className="text-5xl font-bold">{planItem.price}</p>
              <p className="text-sm text-gray-500">{planItem.brief}</p>
            </div>

            {/* Buy Button */}
            <div className="buy-btn w-[98%] mx-auto border border-black py-2 text-center rounded-lg bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition-colors">
              Buy Now
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-3 p-7">
              <div className="flex flex-col gap-2">
                {planItem.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-green-500"></i>
                    <p className="text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesPlan;

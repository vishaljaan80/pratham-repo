import React from "react";
import State from "../components/State";
import User from "../assets/user.jpg";
import { plan } from "../assets/assets";
const SalesPlan = () => {
  return (
    <div>
      <State />
      <div className="m-5 mt-20 flex flex-col gap-5">
        <div className="flex w-fit items-center gap-3 text-blue-500 ">
          <img
            src={User}
            className="w-12 h-12 rounded-full object-cover "
            alt=""
          />
          <p>Jenny Wilson</p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">
            Choose a plan that suits for you
          </h1>
        </div>
      </div>
      {/* Plan Section */}
      <div className="m-5 flex flex-wrap justify-between ">
        {plan.map((planItem, index) => (
          <div key={index} className="w-[25vw] border rounded-lg bg-white">
            <div className="flex flex-col text-center gap-3 p-7">
              <h1 className="text-2xl font-semibold text-blue-500 ">
                {planItem.name}
              </h1>
              <p className="text-5xl font-bold">{planItem.price}</p>
              <p className="text-sm text-gray-500">{planItem.brief}</p>
            </div>
            <div className="buy-btn mx-1 border border-black py-2 text-center rounded-lg bg-blue-500 text-white">
              Buy Now
            </div>
            <div className="flex flex-col gap-3 p-7">
              <h1 className="text-xl font-semibold">Features</h1>
              <div className="flex flex-col gap-2">
                {planItem.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-green-500"></i>
                    <p>{feature}</p>
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

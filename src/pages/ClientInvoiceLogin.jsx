import React from "react";
import TodaysOrder from "../components/TodaysOrder";
import { data, data2 } from "../assets/assets";

const ClientInvoiceLogin = () => {
  return (
    <div className="bg-slate-100 h-[124vh]">
      <div className="md:flex">
        <TodaysOrder data={data} />
        <TodaysOrder data={data2} />
      </div>
      <div className="h-[85vh] w-full flex justify-center items-center">
        <div className="sm:w-1/2 w-[90vw] flex flex-col gap-4 bg-white mx-auto rounded-xl p-4">
          <h1 className="text-2xl text-gray-800 font-semibold ">
            Client Details
          </h1>
          <form className="flex flex-col gap-4">
            <div className="flex items-center gap-5 border pl-4 rounded-lg text-xl text-gray-500">
              <i class="fa-solid fa-user"></i>
              <input
                type="text"
                id="clientName"
                placeholder="Client Name"
                className="w-full h-full py-4  border-none rounded-md outline-none border-gray-300"
              />
            </div>
            <div className="flex items-center gap-5 border pl-4 rounded-lg text-xl text-gray-500">
              <i class="fa-solid fa-location-dot"></i>
              <input
                type="text"
                id="clientAddress"
                placeholder="Client Address"
                className="w-full h-full py-4  border-none rounded-md outline-none border-gray-300"
              />
            </div>
            <div className="flex items-center gap-5 border pl-4 rounded-lg text-xl text-gray-500">
              <i class="fa-solid fa-envelope"></i>
              <input
                type="email"
                id="name"
                placeholder="Client Email Address"
                className="w-full h-full py-4  border-none rounded-md outline-none border-gray-300"
              />
            </div>
            <div className="flex items-center gap-5 border pl-4 rounded-lg text-xl text-gray-500">
              <i class="fa-solid fa-phone"></i>
              <input
                type="number"
                id="name"
                placeholder="Client Phone Number"
                className="w-full h-full py-4  border-none rounded-md outline-none border-gray-300"
              />
            </div>
            <button className="bg-blue-500 mt-10 text-white py-2 rounded-lg text-xl">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientInvoiceLogin;

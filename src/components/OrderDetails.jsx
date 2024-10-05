import React from "react";
import file from "../assets/logo.jpg";

const OrderDetails = () => {
  return (
    <div className="xl:flex ">
      {/* Today Order and Monthly Order */}
      <div className="flex flex-col gap-1 mt-2 mr-2">
        <div className="p-4 w-full px-0 md:px-2 ml-5 bg-slate-200 overflow-x-auto rounded-lg">
          <h1 className="text-2xl text-gray-800">Today's Orders</h1>
          <div className="flex flex-wrap justify-center pt-5 gap-10">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-slate-100 rounded-lg text-slate-700 flex items-center justify-center text-xl">
                <i class="fa-solid fa-truck"></i>
              </div>
              <div className="flex items-center justify-center gap-4 mt-5">
                <p className="text-base font-bold text-gray-800">$100</p>
                <p className="text-md font-semibold">No. of Orders</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-sky-100 rounded-lg text-slate-700 flex items-center justify-center text-xl">
                <i class="fa-solid fa-dollar-sign"></i>
              </div>
              <div className="flex items-center justify-center gap-4 mt-5">
                <p className="text-base font-bold text-gray-800">$150</p>
                <p className="text-lg font-semibold">Total Amount</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-pink-100 rounded-lg text-slate-700 flex items-center justify-center text-xl">
                <i class="fa-solid fa-bag-shopping"></i>
              </div>
              <div className="flex items-center justify-center gap-4 mt-5">
                <p className="text-base font-bold text-gray-800">$200</p>
                <p className="text-lg font-semibold">No. of Products</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-pink-100 rounded-lg text-slate-700 flex items-center justify-center text-xl">
                <i class="fa-solid fa-bag-shopping"></i>
              </div>
              <div className="flex items-center justify-center gap-4 mt-5">
                <p className="text-base font-bold text-gray-800">$250</p>
                <p className="text-lg font-semibold">No. of Invoices</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 w-full px-10 ml-5 bg-slate-200 rounded-lg">
          <h1 className="text-2xl text-gray-800">Month Orders</h1>
          <div className="flex flex-wrap justify-center pt-5 gap-10">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-slate-100 rounded-lg text-slate-700 flex items-center justify-center text-xl">
                <i class="fa-solid fa-truck"></i>
              </div>
              <div className="flex items-center justify-center gap-4 mt-5">
                <p className="text-base font-bold text-gray-800">$100</p>
                <p className="text-md font-semibold">No. of Orders</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-sky-100 rounded-lg text-slate-700 flex items-center justify-center text-xl">
                <i class="fa-solid fa-dollar-sign"></i>
              </div>
              <div className="flex items-center justify-center gap-4 mt-5">
                <p className="text-base font-bold text-gray-800">$150</p>
                <p className="text-lg font-semibold">Total Amount</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-pink-100 rounded-lg text-slate-700 flex items-center justify-center text-xl">
                <i class="fa-solid fa-bag-shopping"></i>
              </div>
              <div className="flex gap-4 mt-5">
                <p className="text-base font-bold text-gray-800">$200</p>
                <p className="text-lg font-semibold">No. of Products</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-pink-100 rounded-lg text-slate-700 flex items-center justify-center text-xl">
                <i class="fa-solid fa-bag-shopping"></i>
              </div>
              <div className="flex gap-4 mt-5">
                <p className="text-base font-bold text-gray-800">$250</p>
                <p className="text-lg font-semibold">No. of Invoices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Summary */}
      <div className="flex flex-col gap-1 mt-2">
        <div className="p-4 w-full px-8 ml-5 bg-slate-200 rounded-lg">
          <h1 className="text-2xl text-gray-800 text-bold">Summary</h1>
          <div className="flex flex-wrap justify-center pt-5 gap-10">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-pink-100 rounded-lg text-slate-700 flex items-center justify-center text-xl">
                <i class="fa-regular fa-user"></i>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-base font-bold text-gray-800">$100</p>
                <p className="text-md font-semibold">Total No. of Users</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-sky-100 rounded-lg text-slate-700 flex items-center justify-center text-xl">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-base font-bold text-gray-800">$150</p>
                <p className="text-lg font-semibold">Total Categories</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 w-full px-5 ml-5 bg-slate-200 rounded-lg">
          <h1 className="text-2xl text-gray-800">Summary for Month</h1>
          <div className="flex flex-wrap justify-center pt-5 gap-10">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-pink-100 rounded-lg text-slate-700 flex items-center justify-center text-xl">
                <i class="fa-regular fa-user"></i>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-base font-bold text-gray-800">$100</p>
                <p className="text-md font-semibold">Total No. of Users</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-sky-100 rounded-lg text-slate-700 flex items-center justify-center text-xl">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <p className="text-base font-bold text-gray-800">$150</p>
                <p className="text-lg font-semibold">Total Categories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

import React from "react";
import file from "../assets/logo.jpg";


const OrderDetails = () => {
  return (
    <div className="flex p-2">
      {/* Today Order and Monthly Order */}
      <div className="flex flex-col gap-1">
        <div className="p-4 w-fit ml-5  bg-slate-200 rounded-lg">
          <h1 className="text-2xl text-gray-800">Today's Orders</h1>
          <div className="flex flex-wrap justify-center  pt-5 gap-10">
            <div className="flex flex-col items-center">
              <img src={file} className="w-12 rounded-full" alt="" />
              <p className="text-base font-bold text-gray-800">$100</p>
              <p className="text-md font-semibold">No. of Orders</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={file} className="w-12 rounded-full" alt="" />
              <p className="text-base font-bold text-gray-800">$150</p>
              <p className="text-lg font-semibold">Total Amount</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={file} className="w-12 rounded-full" alt="" />
              <p className="text-base font-bold text-gray-800">$200</p>
              <p className="text-lg font-semibold">No. of Products</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={file} className="w-12 rounded-full" alt="" />
              <p className="text-base font-bold text-gray-800">$250</p>
              <p className="text-lg font-semibold">No. of Invoices</p>
            </div>
          </div>
        </div>
        <div className="p-4 w-fit ml-5 bg-slate-200 rounded-lg">
          <h1 className="text-2xl text-gray-800">Month Orders</h1>
          <div className="flex flex-wrap justify-center  pt-5 gap-10">
            <div className="flex flex-col items-center">
              <img src={file} className="w-12 rounded-full" alt="" />
              <p className="text-base font-bold text-gray-800">$100</p>
              <p className="text-md font-semibold">No. of Orders</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={file} className="w-12 rounded-full" alt="" />
              <p className="text-base font-bold text-gray-800">$150</p>
              <p className="text-lg font-semibold">Total Amount</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={file} className="w-12 rounded-full" alt="" />
              <p className="text-base font-bold text-gray-800">$200</p>
              <p className="text-lg font-semibold">No. of Products</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={file} className="w-12 rounded-full" alt="" />
              <p className="text-base font-bold text-gray-800">$250</p>
              <p className="text-lg font-semibold">No. of Invoices</p>
            </div>
          </div>
        </div>
      </div>
      {/* Summary */}
      <div className="flex flex-col gap-1">
        <div className="p-4 w-full ml-5  bg-slate-200 rounded-lg">
          <h1 className="text-2xl text-gray-800 text-bold">Summary</h1>
          <div className="flex flex-wrap justify-center  pt-5 gap-10">
            <div className="flex flex-col items-center">
              <img src={file} className="w-12 rounded-full" alt="" />
              <p className="text-base font-bold text-gray-800">$100</p>
              <p className="text-md font-semibold">No. of Orders</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={file} className="w-12 rounded-full" alt="" />
              <p className="text-base font-bold text-gray-800">$150</p>
              <p className="text-lg font-semibold">Total Amount</p>
            </div>
          </div>
        </div>
        <div className="p-4 w-full ml-5 bg-slate-200 rounded-lg">
          <h1 className="text-2xl text-gray-800">Summary for Month</h1>
          <div className="flex flex-wrap justify-center  pt-5 gap-10">
            <div className="flex flex-col items-center">
              <img src={file} className="w-12 rounded-full" alt="" />
              <p className="text-base font-bold text-gray-800">$100</p>
              <p className="text-md font-semibold">No. of Orders</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={file} className="w-12 rounded-full" alt="" />
              <p className="text-base font-bold text-gray-800">$150</p>
              <p className="text-lg font-semibold">Total Amount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

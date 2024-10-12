import React from "react";
import { images, items } from "../assets/assets";

const OrderInfo = () => {
  return (
    <div className="p-4 bg-white m-4 rounded-lg w-[90%] md:w-[90%]">
      <div className="md:flex justify-between px-8 mt-4">
        <p className="text-[20px] text-[#101828]">Username</p>
        <p className="text-[18px] text-[#101828] mr-10">
          Order Date: 12-10-2024 10:10:10
        </p>
      </div>

      <div className="flex flex-col gap-2 mt-4 w-full">
        <h1 className="text-[20px] text-[#101828]">Order Details</h1>

        <div className="overflow-x-auto w-full">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border border-black py-4 w-1/6">Product Name</th>
                <th className="border border-black py-4 w-1/6">Category</th>
                <th className="border border-black py-4 w-1/6">Quantity</th>
                <th className="border border-black py-4 w-1/6">Unit Price</th>
                <th className="border border-black py-4 w-1/6">Discount</th>
                <th className="border border-black py-4 w-1/6">Total</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="w-full">
                  <td className="border py-4 text-center border-black w-1/6">
                    {item.productName}
                  </td>
                  <td className="border py-4 text-center border-black w-1/6">
                    {item.category}
                  </td>
                  <td className="border py-4 text-center border-black w-1/6">
                    {item.quantity}
                  </td>
                  <td className="border py-4 text-center border-black w-1/6">
                    {item.unitPrice}
                  </td>
                  <td className="border py-4 text-center border-black w-1/6">
                    {item.discount}%
                  </td>
                  <td className="border py-4 text-center border-black w-1/6">
                    {item.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 w-full">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="w-full ">
                <th className="border text-left pl-4 border-black py-4 w-4/5">
                  Originial Total Amount
                </th>
                <th className="border border-black py-4 w-1/4">
                  {"$" + items.reduce((acc, curr) => acc + curr.total, 0)}
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="w-full">
                <td className="border text-left pl-4 py-4 border-black w-1/4">
                  Total Discount
                </td>
                <td className="border py-4 text-center border-black w-1/4">
                  {"-$" + items.reduce((acc, curr) => acc + curr.total * (curr.discount / 100), 0)}
                </td>
              </tr>
              <tr className="w-full">
                <td className="border py-4 text-left pl-4 border-black w-1/4">
                  Total Amount After Discount
                </td>
                <td className="border py-4 text-center border-black w-1/4">
                  {"$" + items.reduce((acc, curr) => acc + curr.total - curr.total * (curr.discount / 100), 0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-end gap-2 items-center mt-4 ">
        Download as PDF 
        <img src={images.download} className="w-6 h-6" alt="" />
      </div>
    </div>
  );
};

export default OrderInfo;

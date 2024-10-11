import React from "react";
import file from "../assets/logo.jpg";
import TodaysOrder from "./TodaysOrder";
import { data, data2, images } from "../assets/assets";

const OrderDetails = () => {
  

  return (
    <div className="flex flex-col gap-1 mt-2">
      {/* Today Order */}
      <div className="lg:flex justify-around gap-2">
        <TodaysOrder data={data} name="Monthly's Orders" />
        <TodaysOrder data={data2} name="Summary" />
      </div>
      <div className="lg:flex justify-around gap-2">
        <TodaysOrder data={data} name="Today's Orders" />
        <TodaysOrder data={data2} name="Summary for Month" />
      </div>
    </div>
  );
};

export default OrderDetails;

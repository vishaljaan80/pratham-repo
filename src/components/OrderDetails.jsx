import React from "react";
import file from "../assets/logo.jpg";
import TodaysOrder from "./TodaysOrder";

const OrderDetails = () => {
  return (
    <div className="flex flex-col gap-1 mt-2">
      {/* Today Order and Monthly Order */}
      <TodaysOrder />
      {/* Summary */}
      <TodaysOrder />
    </div>
  );
};

export default OrderDetails;

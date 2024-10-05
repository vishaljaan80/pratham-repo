import React from "react";
import Navbar from "../components/Navbar.jsx"
import OrderDetails from "../components/OrderDetails.jsx";
import DynamicTable from "./DynamicTable.jsx";
import OrderAmountBarChart from "./OrderAmountBarChart.jsx";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <OrderDetails />
      <OrderAmountBarChart/>
      <DynamicTable />
    </div>
  );
};

export default Hero;

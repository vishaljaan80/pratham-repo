import React from "react";
import Navbar from "../components/Navbar.jsx"
import OrderDetails from "../components/OrderDetails.jsx";
import DynamicTable from "./DynamicTable.jsx";
import OrderAmountBarChart from "./OrderAmountBarChart.jsx";
import OrderCalculator from "../components/OrderCalculator.jsx";

const Hero = () => {

  const user={
    name:"Raju",
    orders: 10
  }
  
  return (
    <div className="w-full mx-">
      <OrderDetails />
     <div className="lg:flex justify-between mx-5 gap-2">
      <OrderAmountBarChart/>
      <OrderCalculator name="No of Orders By each Employee" head1="Employee Name" head2="No of Orders" user={user}/>
     </div>
      <DynamicTable />
    </div>
  );
};

export default Hero;

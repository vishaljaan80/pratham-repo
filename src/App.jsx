import React from "react";
import DynamicTable from "./pages/DynamicTable";
import OrderAmountGraph from "./pages/OrderAmountBarChart";
import Sidebar from "./pages/Sidebar.jsx";
import Hero from "./pages/Hero.jsx";

const App = () => {
  return (
    <div className="bg-slate-100 min-h-screen flex ">
      <DynamicTable />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Orders & Amount Overview
        </h1>
        <OrderAmountGraph />
      </div>
      {/* <Sidebar /> 
      <Hero /> */}
    </div>
  );
};

export default App;

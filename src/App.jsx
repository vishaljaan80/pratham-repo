import React from "react";
import DynamicTable from "./pages/DynamicTable";
import OrderAmountGraph from "./pages/OrderAmountBarChart";
import Sidebar from "./pages/Sidebar.jsx";
import Hero from "./pages/Hero.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Profile from "./pages/Profile.jsx";
import Navbar from "./components/Navbar.jsx";
import SalesPlan from "./pages/SalesPlan.jsx";
import DeveloperLogin from "./pages/DeveloperLogin.jsx";
import State from "./components/State.jsx";
import ClientInvoiceLogin from "./pages/ClientInvoiceLogin.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex bg-slate-100">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dynamic-table" element={<DynamicTable />} />
            <Route path="/order-amount-graph" element={<OrderAmountGraph />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/sales-plan" element={<SalesPlan />} />
            <Route path="/developer-login" element={<DeveloperLogin />} />
            <Route path="/state/:tab" element={<State />} />
            <Route path="/client-invoice-login" element={<ClientInvoiceLogin />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

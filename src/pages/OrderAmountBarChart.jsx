import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const dataWeekly = [
  { name: "Mon", orders: 12000, amount: 50000 },
  { name: "Tue", orders: 15000, amount: 52000 },
  { name: "Wed", orders: 13000, amount: 47000 },
  { name: "Thu", orders: 17000, amount: 54000 },
  { name: "Fri", orders: 11000, amount: 45000 },
  { name: "Sat", orders: 19000, amount: 56000 },
  { name: "Sun", orders: 10000, amount: 42000 },
];

const dataMonthly = [
  { name: "Jan", orders: 30000, amount: 100000 },
  { name: "Feb", orders: 32000, amount: 105000 },
  { name: "Mar", orders: 35000, amount: 110000 },
  { name: "Apr", orders: 40000, amount: 120000 },
  { name: "May", orders: 45000, amount: 130000 },
  { name: "Jun", orders: 46000, amount: 135000 },
];

const dataYearly = [
  { name: "2019", orders: 320000, amount: 1200000 },
  { name: "2020", orders: 350000, amount: 1300000 },
  { name: "2021", orders: 370000, amount: 1400000 },
  { name: "2022", orders: 390000, amount: 1500000 },
];

const OrderAmountBarChart = () => {
  const [timeFrame, setTimeFrame] = useState("weekly");

  const getData = () => {
    if (timeFrame === "weekly") return dataWeekly;
    if (timeFrame === "monthly") return dataMonthly;
    return dataYearly;
  };

  return (
    <div className="p-5 lg:w-[51vw] w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Orders And Amount</h2>
        <select
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-200"
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={getData()}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="orders" fill="#8884d8" name="No of orders per day" />
          <Bar dataKey="amount" fill="#82ca9d" name="Amount" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderAmountBarChart;

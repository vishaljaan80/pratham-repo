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
import { dataMonthly, dataWeekly, dataYearly } from "../assets/assets";



const OrderAmountBarChart = () => {
  const [timeFrame, setTimeFrame] = useState("weekly");

  const getData = () => {
    if (timeFrame === "weekly") return dataWeekly;
    if (timeFrame === "monthly") return dataMonthly;
    return dataYearly;
  };

  return (
    <div className="p-5 lg:w-[47vw] w-[88%] bg-white rounded-lg m-6 my-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-[#101828d4]">Orders And Amount</h2>
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
          margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorOrders" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#817AF3" stopOpacity={1} />
              <stop offset="100%" stopColor="#79D0F1" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="colorAmount" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#46A46C" stopOpacity={1} />
              <stop offset="100%" stopColor="#57DA65" stopOpacity={1} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="10 0" vertical={false} />
          <XAxis dataKey="name" axisLine={false} />
          <YAxis dataKey="amount" axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend iconType="circle" iconSize={20}/>

          <Bar
            dataKey="orders"
            fill="url(#colorOrders)"
            name={
              <span
                style={{
                  color: "#667085",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                No of orders per day
              </span>
            }
            radius={[10, 10, 0, 0]}
            barSize={20}
          />
          <Bar
            dataKey="amount"
            fill="url(#colorAmount)"
            name={
              <span
                style={{
                  color: "#667085",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Amount
              </span>
            }
            radius={[10, 10, 0, 0]}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderAmountBarChart;

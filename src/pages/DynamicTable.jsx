import React from "react";
import DynamicTableComponent from "../components/DynamicTableComponent";

const columns = [
  { Header: "S.No", accessor: "id" },
  { Header: "Employee Name", accessor: "name" },
  { Header: "No. of Products", accessor: "products" },
  { Header: "Discounts", accessor: "discounts" },
  { Header: "Total Amount", accessor: "totalAmount" },
  { Header: "Date", accessor: "date" },
  { Header: "Time", accessor: "time" },
];

const data = Array.from({ length: 200 }, (_, index) => ({
  id: index + 1,
  name: [
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
    "Emily White",
    "Chris Evans",
    "Sarah Connor",
    "Bruce Wayne",
    "Clark Kent",
    "Diana Prince",
    "Barry Allen",
  ][Math.floor(Math.random() * 10)],
  products: Math.floor(Math.random() * 50) + 1,
  discounts: Math.floor(Math.random() * 50) + 5 + " %",
  totalAmount: "$" + (Math.random() * 1000).toFixed(2),
  date: new Date(
    2023,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28) + 1
  ).toLocaleDateString(),
  time: new Date().toLocaleTimeString(),
}));

export { columns, data };

const DynamicTable = () => {

  return (
    <DynamicTableComponent
      columns={columns}
      data={data}
      showButtons={true}
    />
  );
};

export default DynamicTable;

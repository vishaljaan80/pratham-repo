import logo from './logo/logo 1.png';
import address from './logo/address.png';
import alertCircle from './logo/alert-circle.png';
import alertTriangle from './logo/alert-triangle.png';
import calendar from './logo/Calendar.png'
import dollarSign from './logo/dollar-sign.png';
import filterLines from './logo/Filters lines.png';
import grid from './logo/grid.png';
import dollar from './logo/Group 52.png';
import home from './logo/Home.png';
import icons from './logo/icons.png';
import LogOut from './logo/Log Out.png';
import OnTheWay from './logo/On the way.png';
import Order from './logo/Order.png';
import Person from './logo/Person.png';
import Phone from './logo/Phone.png';
import Property from './logo/Property 23.png';
import remove from './logo/Remove.png';
import settings from './logo/Settings.png';
import shoppingBag from './logo/shopping-bag.png';
import trash from './logo/trash-2.png';
import truct from './logo/truck.png';
import Upload from './logo/Upload.png';
import User from './logo/Users.png';
import profile from './logo/profile-image.png';
import download from './logo/Vector.png'


export const images = {
  logo,
  address,
  alertCircle,
  alertTriangle,
  calendar,
  dollarSign,
  filterLines,
  grid,
  download,
  dollar,
  home,
  icons,
  LogOut,
  OnTheWay,
  Order,
  Person,
  Phone,
  Property,
  remove,
  settings,
  shoppingBag,
  trash,
  truct,
  Upload,
  User,
  profile,
};

export const plan = [
  {
    name: "Basic Plan",
    price: "20,000",
    brief: "(Rs 7000 renews per year)",
    features: [
      "3 Employees or Users",
      "1 Admin",
      "3 Best Selling Products",
      "100 Invoices Per Month",
      "3 Monthly Reports Download",
      "4 Form Fields",
      "50 Categories",
      "500 Products",
    ],
  },
  {
    name: "Premium Plan",
    price: "35,000",
    brief: "(12,000 renews per year)",
    features: [
      "10 Employees or Users",
      "3 Admin",
      "5 Best Selling Products",
      "300 Invoices Per Month",
      "5 Monthly Reports Download",
      "7 Form Fields",
      "100 Categories",
      "1000 Products",
    ],
  },
  {
    name: "Master Plan",
    price: "50,000",
    brief: "(18,000 renews per year)",
    features: [
      "50 Employees or Users",
      "5 Admin",
      "10 Best Selling Products",
      "500 Invoices Per Month",
      "10 Monthly Reports Download",
      "12 Form Fields",
      "150 Categories",
      "1500 Products",
    ],
  },
  {
    name: "Bussiness Plan",
    price: "75,000",
    brief: "(24,000 renews per year)",
    features: [
      "100 Employees or Users",
      "10 Admin",
      "15 Best Selling Products",
      "1000 Invoices Per Month",
      "15 Monthly Reports Download",
      "18 Form Fields",
      "250 Categories",
      "Custom Plan according to you",
    ],
  },
];

export const data = [
  {
    value: "₹ 832",
    label: "No. of Orders",
    bgColor: "bg-[#E8F6F3]", // Tailwind CSS background color
    icon: images.truct, // FontAwesome
  },
  {
    value: "₹ 18,300",
    label: "Total Amound",
    bgColor: "bg-[#E8F1FD]",
    icon: images.dollar,
  },
  {
    value: "₹ 868",
    label: "No. of Products",
    bgColor: "bg-[#FFEEDB]",
    icon: images.shoppingBag,
  },
  {
    value: "₹ 17,432",
    label: "No. of Invoices",
    bgColor: "bg-[#FFEEDB]",
    icon: images.shoppingBag,
  },
];
export const dataWeekly = [
  { name: "Mon", orders: 24000, amount: 50000 },
  { name: "Tue", orders: 30000, amount: 52000 },
  { name: "Wed", orders: 26000, amount: 47000 },
  { name: "Thu", orders: 34000, amount: 54000 },
  { name: "Fri", orders: 22000, amount: 45000 },
  { name: "Sat", orders: 38000, amount: 56000 },
  { name: "Sun", orders: 20000, amount: 42000 },
];

export const dataMonthly = [
  { name: "Jan", orders: 60000, amount: 100000 },
  { name: "Feb", orders: 64000, amount: 105000 },
  { name: "Mar", orders: 70000, amount: 110000 },
  { name: "Apr", orders: 80000, amount: 120000 },
  { name: "May", orders: 90000, amount: 130000 },
  { name: "Jun", orders: 92000, amount: 135000 },
  { name: "Jul", orders: 96000, amount: 140000 },
  { name: "Aug", orders: 100000, amount: 145000 },
  { name: "Sep", orders: 104000, amount: 150000 },
  { name: "Oct", orders: 108000, amount: 155000 },
  { name: "Nov", orders: 112000, amount: 160000 },
  { name: "Dec", orders: 116000, amount: 165000 },
];

export const dataYearly = [
  { name: "2019", orders: 640000, amount: 1200000 },
  { name: "2020", orders: 700000, amount: 1300000 },
  { name: "2021", orders: 740000, amount: 1400000 },
  { name: "2022", orders: 780000, amount: 1500000 },
  { name: "2023", orders: 820000, amount: 1600000 },
  { name: "2024", orders: 860000, amount: 1700000 },
];


export const data2 = [
  {
    value: "₹ 832",
    label: "No. of Orders",
    bgColor: "bg-[#E8F6F3]", // Tailwind CSS background color
    icon: images.truct, // FontAwesome
  },
  {
    value: "₹ 18,300",
    label: "Total Amound",
    bgColor: "bg-[#E8F1FD]",
    icon: images.dollar,
  },
];

export const items = [
  {
    productName: "Product 1",
    category: "Electronics",
    quantity: 2,
    unitPrice: 100,
    discount: 10,
    total: 180,
  },
  {
    productName: "Product 2",
    category: "Fashion",
    quantity: 3,
    unitPrice: 50,
    discount: 5,
    total: 135,
  },
  {
    productName: "Product 3",
    category: "Home",
    quantity: 1,
    unitPrice: 200,
    discount: 20,
    total: 160,
  },
];
import React from "react";

const TodaysOrder = ({ data, name }) => {
  return (
    <div className="flex gap-1 mt-2 mr-2">
      <div className="p-4 px-2 lg:w-[100%] w-[90%]  md:px-3 ml-5 sm:bg-white bg-slate-100 overflow-x-auto rounded-lg">
        <h1 className="text-xl text-[#101828d4] bg-white p-3 rounded-lg sm:text-left text-center sm:bg-transparent">
          {name}
        </h1>
        <div className="flex flex-wrap sm:justify-center  justify-around pt-5 gap-2 p-2 lg:px-10 px-0 ">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:items-center sm:gap-0 gap-3 items-start bg-white p-3  rounded-lg sm:px-6 px-2 text-center"
            >
              <div className="flex items-center justify-center gap-4">
                <p className="text-md sm:hidden text-[#667085]">{item.label}</p>
                <div
                  className={`w-10 h-10 ${item.bgColor} rounded-lg text-slate-700  flex items-center justify-center text-xl`}
                >
                  <img src={item.icon} alt="icon" className="w-7 h-7" />
                </div>
              </div>
              <div className="flex flex-col  items-center justify-center mt-3">
                <p className="text-md font-bold sm:p-0 px-2 text-[#667085] ">
                  {item.value}
                </p>
                <p className="text-sm text-[#667085] hidden sm:block">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodaysOrder;

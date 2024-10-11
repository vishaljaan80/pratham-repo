import React from 'react'

const OrderCalculator = ({name,head1,head2,user}) => {
  return (
    <div className="text-center lg:w-fit w-[90%] m-5 flex flex-col bg-white p-4 px-10 rounded-lg text-[#667085] gap-2 md:px-10 md:m-4">
      <h1 className="text-2xl text-[#101828d4] font-semibold my-5">{name}</h1>
      <div className="flex justify-around border-b py-4">
        <h1 className="text-lg md:text-base">{head1}</h1>
        <h1 className="text-lg md:text-base">{head2}</h1>
      </div>
      <div className="flex justify-around border-b py-4">
        <h1 className="text-lg md:text-base">{user.name}</h1>
        <h1 className="text-lg md:text-base">{user.orders}</h1>
      </div>
    </div>
  );
}

export default OrderCalculator
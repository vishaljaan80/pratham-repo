import React from 'react'
import TodaysOrder from '../components/TodaysOrder'
import { data, data2 } from '../assets/assets'
import OrderInfo from '../components/OrderInfo';

const ProductsDetails = ({items}) => {
  return (
    <div>
      <div className="md:flex ">
        <TodaysOrder data={data} />
        <TodaysOrder data={data2} />
      </div>

      <OrderInfo />
    </div>
  );
}

export default ProductsDetails
import React from 'react'
import TodaysOrder from '../components/TodaysOrder'
import { data, data2 } from '../assets/assets'

const ProductsDetails = () => {
  return (
    <div>
      <div className="flex">
        <TodaysOrder data={data} />
        <TodaysOrder data={data2} />
      </div>
    </div>
  );
}

export default ProductsDetails
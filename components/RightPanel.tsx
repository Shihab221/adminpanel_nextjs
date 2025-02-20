import Image from 'next/image'
import React from 'react'
import order from '../public/Images/order.png';
import ship from '../public/Images/ship.png';
import delivered from '../public/Images/delivered.png';
import { MostSellingItems } from '../Constant'
import GoogleChartComponent from './GoogleChartComponent';
import { Map } from './Map';

const RightPanel = () => {
  return (
    <div className='px-4 py-2'>
      {/* <div className=''>
        <h2 className='pb-2'>Recent Activity</h2>
        <div className='mt-2 bg-purple-100 min-w-xm p-4 '>
        <ul className='space-y-2'>
                <li className='flex flex-row bg-purple-50 p-2 space-x-2 justify-between items-center rounded-lg'>
                    <Image src={order} alt='shippingicon' className=' ' width={32} height={32}/>
                    <h4>Order</h4>
                    <h4>52%</h4>
                </li>

                <li className='flex flex-row bg-purple-50 p-2 space-x-2 justify-between items-center rounded-lg'>
                    <Image src={ship} alt='shippingicon' className=' ' width={32} height={32}/>
                    <h4>Shipped</h4>
                    <h4>19%</h4>
                </li>

                <li className='flex flex-row bg-purple-50 p-2 space-x-2 justify-between items-center rounded-lg'>
                    <Image src={delivered} alt='shippingicon' className=' ' width={32} height={32}/>
                    <h4>Delivered</h4>
                    <h4>29%</h4>
                </li>
            </ul>
        </div>
            
        
      </div> */}

        {/* <GoogleChartComponent /> */}
        <Map />

      <div className='min-w-[360px]'>
        <h2 className='pb-2 pt-5'>Most Selling Items</h2>
        <div className='p-4 bg-purple-100 flex flex-col'>
        <ul className='space-y-2 '>
            <div className='flex flex-row justify-between bg-green-400 rounded-lg p-2 text-white'>
            <p>Name</p>
            <p>Quantity</p>
            </div>
        {MostSellingItems.map((item) => (
          <li key={item.id} className='bg-purple-50 px-2 py-3 rounded-lg'>
            <label className='flex flex-row justify-between'>
              {/* <input
                type="checkbox"
                defaultChecked={item.isChecked}
              /> */}
              
              <p>{item.name}</p> 
              <p>{item.quantity}</p>
              {/* {item.aiSuggested && <span style={{ color: "blue" }}> (AI Suggested)</span>} */}
            </label>
          </li>
        ))}
      </ul>
        </div>
      </div>
      
    </div>
  )
}

export default RightPanel

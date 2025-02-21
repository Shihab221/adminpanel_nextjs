import React from 'react'
import { MostSellingItems } from '../Constant'
import { Map } from './Map';

const RightPanel = () => {
  return (
    <div className='px-4 py-2'>
        <Map />

      <div className='min-w-[360px]'>
        <h2 className='pb-2 pt-5'>Most Selling Items</h2>
        <div className='p-4 bg-purple-100 dark:bg-gray-900 flex flex-col'>
        <ul className='space-y-2 '>
            <div className='flex flex-row justify-between bg-green-400 rounded-lg p-2 text-gray-900 dark:text-white'>
            <p>Name</p>
            <p>Quantity</p>
            </div>
        {MostSellingItems.map((item) => (
          <li key={item.id} className='bg-purple-50 dark:bg-gray-900 px-2 py-3 rounded-lg border'>
            <label className='flex flex-row justify-between text-gray-900 dark:text-gray-300 '>
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

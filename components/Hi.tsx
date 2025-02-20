import React from 'react'
import { shipmentData } from "../Constant";
import Image from 'next/image';
const Hi = () => {
  return (
    <div className='px-6 '>
      <h2 className='text-2xl font-bold py-2'>Welcome to <span className='text-orange-500'>Dashboard</span></h2>
      <div className="flex gap-4 justify-between">
      {shipmentData.map((item, index) => (
        <div
          key={index}
          className={`p-4 flex flex-row text-center space-x-4 bg-green-500 ${item.bgColor}`}
        >
          <Image
            src={item.icon}
            alt={item.title}
            className=" mb-2 mx-auto"
            width={64}
            height={64}
          />
          <div className='flex flex-col'>
          <h3 className="text-lg font-medium text-start ">{item.title}</h3>
          <div className='flex  flex-row space-x-2'>
          <p className="text-2xl font-bold my-1">{item.count}</p>
          <div className={`flex flex-row text-sm pt-2 px-2 ${item.percentageColor}`}>
            {item.percentage > 0 ? "↑" : "↓"} <p className='ml-1'>{item.percentage}%</p> 
          </div>
          </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Hi

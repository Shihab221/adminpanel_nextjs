import { OrderData } from '@/Constant'
import React from 'react'

const OrderTable = () => {
  return (
    <div className='py-2 px-2'>
      <h2 className='pb-2 text-xl text-gray-900 dark:text-gray-300'>Order List</h2>
      <div>
      <table className="min-w-full bg-white border rounded-lg">
          <thead className="bg-gray-100 dark:bg-gray-900 text-gray-600">
            <tr className='text-gray-900 dark:text-gray-300'>
              <th className="py-3 px-6 text-left">No</th>
              <th className="py-3 px-6 text-left">Recipient</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Product</th>
              <th className="py-3 px-6 text-left">Fee</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900">
            {OrderData.map((item, index) => (
              <tr key={item.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="py-3 px-6">{String(index + 1).padStart(2, '0')}</td>
                <td className="py-3 px-6 flex items-center space-x-3">
                  {/* <Image src={item.avatar} alt={item.recipient} className=" rounded-full" width={64} height={64}/> */}
                  <div>
                    <p className="font-medium">{item.recipient}</p>
                    <p className="text-gray-500 text-sm">{item.phone}</p>
                  </div>
                </td>
                <td className="py-3 px-6">
                  <span className={`py-1 px-3 rounded-full text-orange-500 text-sm font-medium ${item.statusColor}`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-3 px-6">{item.product}</td>
                <td className="py-3 px-6">{item.fee}</td>
                <td className="py-3 px-6">
                  <button className="text-gray-500 hover:text-gray-700">⋮</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderTable

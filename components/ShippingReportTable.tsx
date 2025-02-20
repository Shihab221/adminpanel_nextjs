// ShippingReportTable.tsx
import React from "react";
import { shippingReportData } from "../Constant";
import Image from "next/image";

const ShippingReportTable = () => {
  return (
    <div className="p-6 text-gray-900 dark:text-gray-300">
      <h2 className="text-xl font-semibold mb-4">Shipping Reports</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-orange-500 rounded-lg">
          <thead className="bg-gray-100 dark:bg-gray-800 border-b border-orange-500">
            <tr>
              <th className="py-3 px-6 text-left">No</th>
              <th className="py-3 px-6 text-left">Recipient</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Product</th>
              <th className="py-3 px-6 text-left">Fee</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {shippingReportData.map((item, index) => (
              <tr key={item.id} className="border-b dark:border-orange-500 dark:text-white hover:bg-gray-50 dark:bg-gray-800">
                <td className="py-3 px-6">{String(index + 1).padStart(2, '0')}</td>
                <td className="py-3 px-6 flex items-center space-x-3">
                  <Image src={item.avatar} alt={item.recipient} className=" rounded-full" width={64} height={64}/>
                  <div>
                    <p className="font-medium">{item.recipient}</p>
                    <p className="text-gray-500 text-sm">{item.phone}</p>
                  </div>
                </td>
                <td className="py-3 px-6">
                  <span className={`py-1 px-3 rounded-full text-sm font-medium ${item.statusColor}`}>
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
  );
};

export default ShippingReportTable;

"use client"
import React from 'react'
import { OrderData } from '@/Constant'
import GoogleChartComponent from '@/components/GoogleChartComponent'
import OrderTable from '@/components/OrderTable'
const page = () => {
  return (
    <div className='px-6 py-4 flex flex-row'>
      <OrderTable />
      <GoogleChartComponent />
    </div>
  )
}

export default page

"use client"
import React from 'react'
import { OrderData } from '@/Constant'
import GoogleChartComponent from '@/components/GoogleChartComponent'
import OrderTable from '@/components/OrderTable'
const page = () => {
  return (
    <div>
      <h2>Order List</h2>
      <OrderTable />
      <GoogleChartComponent />
    </div>
  )
}

export default page

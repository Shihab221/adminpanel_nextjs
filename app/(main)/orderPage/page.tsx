"use client"
import React from 'react'
import { OrderData } from '@/Constant'
import GoogleChartComponent from '@/components/GoogleChartComponent'
import OrderTable from '@/components/OrderTable'
const page = () => {
  return (
    <div>
      <OrderTable />
      <GoogleChartComponent />
    </div>
  )
}

export default page

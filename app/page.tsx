"use client"
import Hi from "@/components/Hi";
import RightPanel from "@/components/RightPanel";
import ShippingReportTable from "@/components/ShippingReportTable";
import Image from "next/image";

export default function Home() {
  return (
    <div className='flex '>
      <div className='flex flex-row'>
        <div className='flex flex-col'>
          <Hi />
          <ShippingReportTable />
          {/* <GoogleChartComponent /> */}
        </div>
        
        <RightPanel />
      </div>
    </div>
  );
}

"use client"
import Hi from "@/components/Hi";
import RightPanel from "@/components/RightPanel";
import ShippingReportTable from "@/components/ShippingReportTable";

export default function Home() {
  return (
    <div className='flex px-2 py-2'>
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

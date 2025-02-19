import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Link from "next/link";

export default function PartnerPage() {
  return (
    <div className="h-screen flex flex-col bg-gray-800">
      {/* Navbar */}
      <Navbar />

      <Link href={'/nav/business'} className="h-1/2 w-full bg-gray-400 text-white text-3xl flex justify-center items-center">
        โฆษณา   
      </Link>

      {/* First Section */}
      <div className="bg-white h-1/2 w-full shadow-md flex flex-col flex-grow">
        <div className="flex justify-around bg-[#1E1B4B] py-8 flex-1 items-center">
          {['บริษัทรับจ้าง', 'เครื่องจักร', 'อุปกรณ์/เครื่องมือ', 'คลังสินค้า'].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-64 h-64 bg-gray-300 rounded-full mb-2"></div>
              <span className="text-white text-2xl mt-8">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second Section */}
      {/* <div className="bg-gray-100 p-8">
        <div className="flex justify-around">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className={`bg-white p-4 rounded-lg shadow-md w-1/4 ${index === 1 ? 'bg-blue-100' : ''}`}>
              <div className="w-full h-32 bg-blue-500 mb-4"></div>
              <h2 className="font-bold text-lg text-center">บริษัทตัวอย่าง {index + 1} จำกัด</h2>
              <p className="text-sm text-gray-600 text-center">รับสร้างโรงงานขนาดเล็ก อันดับหนึ่ง รวดเร็วมีคุณภาพ</p>
              <button className="mt-4 bg-gray-300 w-full py-2 rounded">ติดต่อ 089-xxx-xxxx</button>
              <button className="mt-2 text-blue-500 w-full">เพิ่มเติม</button>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

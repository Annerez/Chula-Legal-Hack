import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Link from "next/link";

export default function BusinessPage() {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Second Section */}
      <div className="p-8 h-full flex items-center justify-center">
        <div className="flex justify-around">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className={`bg-white p-4 rounded-lg shadow-md w-1/4 ${index === 1 ? 'bg-blue-100' : ''}`}>
              <div className="w-full h-32 bg-blue-500 mb-8"></div>
              <h2 className="font-bold text-lg text-center mb-4">บริษัทตัวอย่าง {index + 1} จำกัด</h2>
              <p className="text-sm text-gray-600 text-center mb-5">รับสร้างโรงงานขนาดเล็ก อันดับหนึ่ง รวดเร็วมีคุณภาพ</p>
              <button className="mt-4 bg-gray-300 w-full py-2 rounded">ติดต่อ 089-xxx-xxxx</button>
              <button className="mt-12 text-blue-500 w-full">เพิ่มเติม</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

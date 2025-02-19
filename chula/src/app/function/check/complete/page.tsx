"use client"

import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CompletedPage = () => {
  const router = useRouter();
  
  return (
    <div className="h-screen flex flex-col bg-[#0A0B2E]">
      <Navbar />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center py-8 px-4">
        {/* Title section */}
        <div className="flex flex-col items-center text-center pt-8 pb-6">
          <div className="flex items-end justify-center space-x-2">
            <h2 className="text-white text-xl">ข้อกำหนดการจัดตั้งโรงงาน</h2>
            <span className="text-yellow-400 text-5xl font-bold">ประเภทที่ 2</span>
          </div>
          <div className="w-full h-0.5 bg-white mt-2 my-4"></div>
          <p className="text-white">ตรวจสอบว่าโรงงานของคุณเข้าหลักเกณฑ์หรือไม่</p>
        </div>

        <div className="w-1/2 bg-yellow-400 h-24
     rounded-full flex items-center justify-center text-black font-bold mb-6">
          100%
        </div>
        <p className="text-yellow-400 text-3xl mb-12">สามารถแจ้งประกอบกิจการโรงงานได้ทันที</p>

        {/* Icons grid with full height */}
        <div className="grid grid-cols-5 h-full items-stretch gap-0 w-full border-t-2 border-white">
          {[
            { src: "/category/one.svg", label: "ตำแหน่งโรงงาน" },
            { src: "/category/two.svg", label: "ลักษณะอาคาร" },
            { src: "/category/three.svg", label: "เครื่องจักร" },
            { src: "/category/four.svg", label: "คนงาน" },
            { src: "/category/five.svg", label: "การควบคุมการปล่อย ของเสียและมลพิษ" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-white p-6 relative">
            <span className="text-xl font-bold">100%</span>
            <div className="w-36 h-36 relative my-4">
                    <Image src={item.src} alt={item.label} layout="fill" objectFit="contain" />
                    </div>
                    <span className="text-center text-xl w-48">{item.label}</span>

                    {/* Vertical separator except for the last item */}
                    {index < 4 && <div className="absolute right-0 top-0 h-full w-0.5 bg-white"></div>}
                    </div>
                ))}
        </div>


        {/* Bottom navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white py-4 px-6 flex justify-between items-center shadow-lg">
          <button 
            className="text-blue-600 font-medium hover:underline"
            onClick={() => router.back()}
          >
            BACK
          </button>
          <span className="text-blue-600 font-medium text-center">
            ตรวจสอบหลักเกณฑ์
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompletedPage;
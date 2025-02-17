"use client"

import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const FactoryCheckPage = () => {
  const router = useRouter();
  
  return (
    <div className="h-screen flex flex-col bg-[#0A0B2E]">
      <Navbar />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Title section */}
        <div className="flex flex-col items-center text-center pt-8 pb-12">
          <div className="flex items-end justify-center space-x-2">
            <h2 className="text-white text-xl">ข้อกำหนดการจัดตั้งโรงงาน</h2>
            <span className="text-yellow-400 text-5xl font-bold">ประเภทที่ 1</span>
          </div>
          <div className="w-1/2 h-0.5 bg-white mt-2 my-4"></div>
          <p className="text-white">ตรวจสอบว่าโรงงานของคุณเข้าหลักเกณฑ์หรือไม่</p>
        </div>

        {/* Icons grid with full height */}
        <div className="flex-1 flex justify-center px-8 ">
          <div className="grid grid-cols-5 gap-0 w-full max-w-6xl h-3/4">
            {/* Location icon */}
            <div className="flex items-center justify-center border-r border-white">
              <div className="flex flex-col items-center text-white pb-24">
                <span className="text-xl font-bold text-center">ตำแหน่งโรงงาน</span>
                <button onClick={() => {router.push('/function/classify/question')}} className="w-32 h-32 relative mt-4">
                  <Image 
                    src="/category/one.svg" 
                    alt="ตำแหน่ง" 
                    layout="fill"
                    objectFit="contain"
                    className="transform hover:scale-110 transition-transform duration-200"
                  />
                </button>
              </div>
            </div>

            {/* Building characteristics */}
            <div className="flex items-center justify-center border-r border-white">
              <div className="flex flex-col items-center text-white">
                <div className="w-32 h-32 relative mb-4">
                  <Image 
                    src="/category/two.svg" 
                    alt="ลักษณะอาคาร" 
                    layout="fill"
                    objectFit="contain"
                    className="transform hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <span className="text-xl font-bold text-center">ลักษณะอาคาร</span>
              </div>
            </div>

            {/* Machinery */}
            <div className="flex items-center justify-center border-r border-white">
              <div className="flex flex-col items-center text-white pb-24">
                <span className="text-xl font-bold text-center">เครื่องจักร</span>
                <div className="w-32 h-32 relative mt-4">
                  <Image 
                    src="/category/three.svg" 
                    alt="เครื่องจักร" 
                    layout="fill"
                    objectFit="contain"
                    className="transform hover:scale-110 transition-transform duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Workers */}
            <div className="flex items-center justify-center border-r border-white">
              <div className="flex flex-col items-center text-white">
                <div className="w-32 h-32 relative mb-4">
                  <Image 
                    src="/category/four.svg" 
                    alt="คนงาน" 
                    layout="fill"
                    objectFit="contain"
                    className="transform hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <span className="text-xl font-bold text-center">คนงาน</span>
              </div>
            </div>

            {/* Pollution control */}
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center text-white pb-24">
                <span className="text-xl font-bold text-center">การควบคุมการปล่อย<br/>ของเสียและมลพิษ</span>
                <div className="w-32 h-32 relative mt-4">
                  <Image 
                    src="/category/five.svg" 
                    alt="การควบคุมการปล่อยของเสียและมลพิษ" 
                    layout="fill"
                    objectFit="contain"
                    className="transform hover:scale-110 transition-transform duration-200"
                  />
                </div>
              </div>
            </div>
          </div>
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
            จำแนกประเภทโรงงาน
          </span>
        </div>
      </div>
    </div>
  );
};

export default FactoryCheckPage;
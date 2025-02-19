"use client"

import React from 'react';
import Navbar from '@/components/ui/Navbar';
import { Bottom } from '@/components/ui/Bottom';
import { useRouter } from 'next/navigation';

const FactoryCheckPage = () => {
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0A0B2E] to-[#1A1B4E]">
      <Navbar />

      <main className="container mx-auto px-4 flex-grow flex flex-col items-center justify-center py-12">
        <div className="w-full max-w-lg bg-[#90C1E1] rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-200">
          <div className="flex flex-col items-center justify-center p-8 space-y-8">
            <h1 className="text-3xl font-bold text-[#0A0B2E]">สถานะเอกสารของคุณ</h1>
            
            <div className="w-full space-y-4 px-4">
              <button onClick={() => {router.push('/function/document/some')}} className="w-full rounded-full bg-white hover:bg-gray-50 p-4 font-medium shadow-md transition-colors duration-200">
                ดำเนินการไปบางส่วน
              </button>
              <button  onClick={() => {router.push('/function/document/never')}}  className="w-full rounded-full bg-white hover:bg-gray-50 p-4 font-medium shadow-md transition-colors duration-200">
                ยังไม่ดำเนินการ
              </button>
            </div>
          </div>
        </div>

        <button 
          onClick={() => {router.push('/dashboard')}} 
          className="mt-12 rounded-full bg-[#90C1E1] hover:bg-[#7FB1D1] p-4 w-48 font-medium shadow-lg transition-colors duration-200"
        >
          กลับสู่หน้าหลัก
        </button>
      </main>

      <Bottom centerText="เอกสารที่ใช้ในการจดแจ้ง" />
    </div>
  );
};

export default FactoryCheckPage;
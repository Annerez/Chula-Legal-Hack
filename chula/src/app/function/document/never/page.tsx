"use client"

import React from 'react';
import Navbar from '@/components/ui/Navbar';
import { Bottom } from '@/components/ui/Bottom';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const NeverChoose = () => {
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0A0B2E] to-[#1A1B4E]">
      <Navbar />

      <div className='container mx-auto px-4 flex-grow flex flex-col items-center text-white'>
        <div className='w-screen flex flex-col flex-grow items-center justify-end bg-[#1D1656] pb-8'>
            <h1 className="text-yellow-300 text-7xl font-bold mb-4">
            คุณยังไม่เคยดำเนินการยื่นเอกสาร
            </h1>
            <p className="text-white text-2xl mb-16">
                กรุณาเลือกประเภทโรงงานเพื่อตรวจสอบเอกสารที่ต้องใช้
            </p>
        </div>

        <div className='w-screen h-1/2 flex flex-col flex-grow items-center justify-start pt-8 bg-[#2B2C78]'>
            <div className="flex gap-16 mb-8">
                {/* Circle 1 */}
                <button onClick={() => router.push('/function/document/type/1')} className="w-36 h-36 rounded-full bg-white flex items-center justify-center">
                    <span className="text-[#1a1a47] text-5xl font-bold">1</span>
                </button>
                
                {/* Circle 2 */}
                <button onClick={() => router.push('/function/document/type/2')} className="w-36 h-36 rounded-full bg-[#88c4e6] flex items-center justify-center">
                <span className="text-[#1a1a47] text-5xl font-bold">2</span>
                </button>
                
                {/* Circle 3 */}
                <button onClick={() => router.push('/function/document/type/3')} className="w-36 h-36 rounded-full bg-yellow-300 flex items-center justify-center">
                <span className="text-[#1a1a47] text-5xl font-bold">3</span>
                </button>
            </div>

            {/* Bottom Button */}
            <button className="bg-[#88c4e6] text-[#1a1a47] px-12 py-2 mt-8 rounded-full text-lg font-medium">
                ไม่ทราบ
            </button>
        </div>
      </div>

      <Bottom centerText="เอกสารที่ใช้ในการจดแจ้ง" />
    </div>
  );
};

export default NeverChoose;
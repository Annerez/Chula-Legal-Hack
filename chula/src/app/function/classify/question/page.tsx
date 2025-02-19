"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import { Bottom } from '@/components/ui/Bottom';
import Sidebar from '@/components/ui/Sidebar';

const QuestionPage = () => {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState(1);

  return (
    <div className="min-h-screen bg-[#1E1B4B] flex flex-col">
      <Navbar />
      <div className='flex flex-1 flex-row mb-8'>
        <Sidebar selectedId={selectedMenu} onSelect={setSelectedMenu} />

        {/* Main Content */}
        <div className="flex-1 p-8 flex flex-col">
          {/* Header */}
          <div className="flex justify-end items-center mb-8">
            <div className="w-32"></div>
            <div className="bg-[#B4C6FF] text-[#1E1B4B] px-6 py-2 rounded-full">
              ตำแหน่งโรงงาน
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-6 flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full">
            <button className="w-full bg-[#B4C6FF] text-[#1E1B4B] p-6 rounded-xl text-center hover:bg-[#93A8E5] transition-colors">
              [ 1 ] โรงงานของคุณตั้งอยู่ในบริเวณบ้านจัดสรร อาคารชุด
              <br />
              บ้านแถวเพื่อการพักอาศัยหรือไม่
            </button>

            <button className="w-full bg-[#B4C6FF] text-[#1E1B4B] p-6 rounded-xl text-center hover:bg-[#93A8E5] transition-colors">
              [ 2 ] โรงงานของคุณตั้งอยู่ห่างจากเขตติดต่อสาธารณสถาน &gt; 50 เมตร
              <br />
              (โรงเรียน ศาสนสถาน โรงพยาบาล โบราณสถาน หน่วยงานรัฐ แหล่งอนุรักษ์ทรัพยากรธรรมชาติ)
            </button>
          </div>

          <div className="flex justify-end items-center mb-8">
            <div className="w-32"></div>
            <button 
              className="bg-[#B4C6FF] text-[#1E1B4B] px-6 py-2 rounded-full"
              onClick={() => router.push('/function/classify/picture')}
            >
              ถัดไป
            </button>
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default QuestionPage;
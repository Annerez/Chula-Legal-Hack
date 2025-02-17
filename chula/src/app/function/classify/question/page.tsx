"use client"

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const QuestionPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#1E1B4B] flex">
      {/* Sidebar */}
      <div className="w-24 bg-[#1E1B4B] flex flex-col items-center py-6 border-r border-gray-700">
        <div className="text-white mb-8">MENU</div>
        
        {/* Sidebar Icons */}
        <div className="flex flex-col space-y-6">
          <div className="relative w-16 h-16 flex items-center justify-center border-l-4 border-yellow-400">
            <Image
              src="/dashboard/one.svg"
              alt="Location"
              width={40}
              height={40}
              className="text-white"
            />
          </div>
          <div className="relative w-16 h-16 flex items-center justify-center">
            <Image
              src="/dashboard/two.svg"
              alt="Building"
              width={40}
              height={40}
              className="text-white"
            />
          </div>
          <div className="relative w-16 h-16 flex items-center justify-center">
            <Image
              src="/dashboard/three.svg"
              alt="Machinery"
              width={40}
              height={40}
              className="text-white"
            />
          </div>
          <div className="relative w-16 h-16 flex items-center justify-center">
            <Image
              src="/dashboard/four.svg"
              alt="Workers"
              width={40}
              height={40}
              className="text-white"
            />
          </div>
          <div className="relative w-16 h-16 flex items-center justify-center">
            <Image
              src="/dashboard/company.svg"
              alt="Pollution"
              width={40}
              height={40}
              className="text-white"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="w-32"></div> {/* Spacer */}
          <div className="bg-[#B4C6FF] text-[#1E1B4B] px-6 py-2 rounded-full">
            ตำแหน่งโรงงาน
          </div>
          <button 
            className="bg-[#B4C6FF] text-[#1E1B4B] px-6 py-2 rounded-full"
            onClick={() => router.push('/next-page')}
          >
            ถัดไป
          </button>
        </div>

        {/* Questions */}
        <div className="space-y-6 flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full">
          {/* Question 1 */}
          <button className="w-full bg-[#B4C6FF] text-[#1E1B4B] p-6 rounded-xl text-center hover:bg-[#93A8E5] transition-colors">
            [ 1 ] โรงงานของคุณตั้งอยู่ในบริเวณบ้านจัดสรร อาคารชุด
            <br />
            บ้านแถวเพื่อการพักอาศัยหรือไม่
          </button>

          {/* Question 2 */}
          <button className="w-full bg-[#B4C6FF] text-[#1E1B4B] p-6 rounded-xl text-center hover:bg-[#93A8E5] transition-colors">
            [ 2 ] โรงงานของคุณตั้งอยู่ห่างจากเขตติดต่อสาธารณสถาน &gt; 50 เมตร
            <br />
            (โรงเรียน ศาสนสถาน โรงพยาบาล โบราณสถาน หน่วยงานรัฐ แหล่งอนุรักษ์ทรัพยากรธรรมชาติ)
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
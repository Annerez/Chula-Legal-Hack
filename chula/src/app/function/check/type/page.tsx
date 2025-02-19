"use client"

import React, { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import { Bottom } from '@/components/ui/Bottom';
import { useRouter } from 'next/navigation';

const ChooseType = () => {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<number | null>(null);

  const handleTypeSelect = (type: number) => {
    setSelectedType(type);
    router.push('/function/check/location')
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0A0B2E] to-[#1A1B4E]">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center px-4 py-8  text-white mt-48">
        <div className="w-full max-w-3xl">
          {/* Header */}
          <div className="bg-blue-300 rounded-full py-3 px-8 mb-16">
            <h1 className="text-center  text-white text-3xl font-bold">
              โรงงานของคุณเป็นโรงงานประเภทใด
            </h1>
          </div>

          {/* Number Buttons */}
          <div className="flex justify-center gap-16 mb-12">
            {[1, 2, 3].map((number) => (
              <button
                key={number}
                onClick={() => handleTypeSelect(number)}
                className={`w-32 h-32 rounded-full text-6xl font-bold flex items-center justify-center transition-all
                  ${number === 1 ? 'bg-white text-blue-900' : ''}
                  ${number === 2 ? 'bg-blue-300 text-blue-900' : ''}
                  ${number === 3 ? 'bg-yellow-300 text-blue-900' : ''}
                  ${selectedType === number ? 'ring-4 ring-blue-400' : ''}
                  hover:scale-105`}
              >
                {number}
              </button>
            ))}
          </div>

          {/* Not Sure Button */}
          <div className="flex justify-center">
            <button
              onClick={() => handleTypeSelect(0)}
              className="bg-blue-300 text-blue-900 px-12 py-2 rounded-full text-lg hover:bg-blue-200 transition-colors mt-8 w-48 h-12 font-bold"
            >
              ไม่ทราบ
            </button>
          </div>
        </div>
      </main>

      <Bottom centerText="เอกสารที่ใช้ในการจดแจ้ง" />
    </div>
  );
};

export default ChooseType;
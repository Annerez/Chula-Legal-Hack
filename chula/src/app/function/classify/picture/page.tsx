"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import { Bottom } from '@/components/ui/Bottom';
import Sidebar from '@/components/ui/Sidebar';

const PicturePage = () => {
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
              ลักษณะอาคาร
            </div>
          </div>

          {/* Questions */}
          <div className="space-x-12 flex-1 flex flex-row justify-center max-w-4xl mx-auto w-full mb-24">
            <button className="w-full bg-[#B4C6FF] text-[#1E1B4B] p-6 rounded-xl text-center hover:bg-[#93A8E5] transition-colors">
              อยากได้เลื่อนๆ
            </button>

            <button className="w-full bg-[#B4C6FF] text-[#1E1B4B] p-6 rounded-xl text-center hover:bg-[#93A8E5] transition-colors">
              รูป
            </button>
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default PicturePage;
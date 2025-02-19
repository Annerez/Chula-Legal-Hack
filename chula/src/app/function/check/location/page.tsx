"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import { Bottom } from '@/components/ui/Bottom';
import Sidebar from '@/components/ui/Sidebar';

const LocationPage = () => {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState(1);

  return (
    <div className="min-h-screen bg-[#1E1B4B] flex flex-col">
      <Navbar />
      <div className='flex flex-1 flex-row mb-8'>
        <Sidebar selectedId={selectedMenu} onSelect={setSelectedMenu} />

        {/* Main Content */}
        <div className="flex-1 p-8 flex flex-col justify-between">
          {/* Header */}
          <div className="flex justify-end items-center mb-8">
            <div className="w-32"></div>
            <div className="bg-[#B4C6FF] text-[#1E1B4B] px-6 py-2 rounded-full">
              ตำแหน่งโรงงาน
            </div>
          </div>

          {/* Questions */}
          <div className="space-x-12 flex flex-row justify-center max-w-4xl mx-auto w-full">
            <div className='flex flex-col items-center justify-center space-y-12'>
                <div className='rounded-full bg-white w-72 text-xl text-center p-2'>
                    ที่ตั้งโรงงานของคุณ
                </div>

                <div className='w-96 h-72 bg-[#FCFFE7] flex items-center justify-center'>
                    Map
                </div>
            </div >
            <div className='flex flex-col items-center justify-center space-y-12'>
                <div className='rounded-full bg-white w-72 text-xl text-center p-2'>
                    พื้นที่จัดตั้งโรงงานตามกฏหมาย
                </div>

                <div className='w-96 h-72 bg-[#FCFFE7] flex items-center justify-center'>
                    Map
                </div>
            </div>
          </div>

          <div className="flex justify-end items-center mb-8">
            <div className="w-32"></div>
            <button 
              className="bg-[#B4C6FF] text-[#1E1B4B] px-6 py-2 rounded-full"
              onClick={() => router.push('/function/check/choose')}
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

export default LocationPage;
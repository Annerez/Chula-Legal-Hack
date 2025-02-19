"use client"

import React, { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import { Bottom } from '@/components/ui/Bottom';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ProcedureThree = () => {
  const router = useRouter();
  const [url, setUrl] = useState('');
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0A0B2E] to-[#1A1B4E]">
      <Navbar />
      
      <main className="flex-1 flex flex-col justify-center items-center px-4 py-8">
        <div className="w-full max-w-4xl">
          <h1 className="text-2xl font-bold text-white text-center mb-2">
            ขั้นตอนการรับเอกสารของคุณคือ
          </h1>
          <h2 className="text-5xl text-yellow-400 text-center mb-8">
          ยื่นตรวจสอบเอกสาร
          </h2>
          <div className="w-full h-px bg-white/30 mb-8"></div>
          
          <h1 className="text-white text-center text-5xl mb-4">คุณอยู่ในระหว่างการรอผลการพิจารณา</h1>
          <p className="text-white text-center mb-12">
            คัดสำเนารับรองเอกสารที่เกี่ยวข้องการรับฟังความคิดเห็นประชาชนที่นี่
          </p>
            
            <div className="flex flex-col justify-center items-center gap-8">
              <button
                type="submit"
                className="flex items-center space-x-2 bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg">แจ้งผลการพิจารณา</span>
              </button>
            </div>
        </div>
      </main>

      <Bottom centerText="เอกสารที่ใช้ในการจดแจ้ง" />
    </div>
  );
};

export default ProcedureThree;
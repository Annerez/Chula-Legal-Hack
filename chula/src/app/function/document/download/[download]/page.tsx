"use client"

import { Bottom } from '@/components/ui/Bottom';
import Navbar from '@/components/ui/Navbar';
import React from 'react';
import { Building2 } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

const DownloadPage = () => {
    const params = useParams();
    const type = parseInt(params.download) || 1;
    const router = useRouter();

  const getContent = () => {
    switch (type) {
      case 2:
        return {
          title: 'โรงงานประเภทที่ 2',
        };
      case 3:
        return {
          title: 'โรงงานประเภทที่ 3',
        };
      default:
        return {
          title: 'โรงงานประเภทที่ 2',
        };
    }
  };

  const content = getContent();

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#1e1e4b] flex flex-col items-center justify-center px-4">
        {/* Main Content Container */}
        <div className="flex flex-col items-center text-center max-w-2xl">
          {/* Header */}
          <div className="flex flex-row items-center justify-center text-white text-5xl font-bold mb-2">
                    <Image 
                            src="/dashboard/three.svg"
                            width={140}
                            height={140}
                            alt="tower"
                            className="object-contain mr-8"
                            priority
                          />
            {content.title}
          </div>
          
          {/* Divider Line */}
          <div className="w-full h-px bg-white/30 mb-12"></div>

          <div className='w-[400px] h-[500px] bg-white flex items-center justify-center mb-12'>
            <h1>เอกสาร</h1>
          </div>

          {/* Back Button */}
          <button onClick={() => {router.back()}} className="bg-[#8ccef8] text-[#1e1e4b] px-12 py-2 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity w-[250px]">
            กลับสู่หน้าหลัก
          </button>
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default DownloadPage;
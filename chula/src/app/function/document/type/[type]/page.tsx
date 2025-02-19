"use client"

import { Bottom } from '@/components/ui/Bottom';
import Navbar from '@/components/ui/Navbar';
import React from 'react';
import { Building2 } from 'lucide-react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const FactoryTypePage = () => {
    const params = useParams();
    const type = parseInt(params.type) || 1;
    const router = useRouter();

  const getContent = () => {
    switch (type) {
      case 1:
        return {
          title: 'โรงงานประเภทที่ 1',
          description: 'คุณสามารถจดทะเบียนประกอบกิจการโดย',
          highlight: 'ไม่ต้องยื่นขออนุญาต',
          showBuilding: false,
          type: 1
        };
      case 2:
        return {
          title: 'โรงงานประเภทที่ 2',
          description: 'ในการประกอบกิจการของคุณไม่ต้องยื่นขออนุญาตในการดำเนิน แต่',
          highlight: 'ต้องทำการแจ้งความจำนงในการประกอบกิจการ',
          showBuilding: true,
          type: 2
        };
      case 3:
        return {
          title: 'โรงงานประเภทที่ 3',
          description: 'ในการประกอบกิจการ',
          highlight: 'ต้องยื่นขออนุญาต',
          showBuilding: true,
          type: 3
        };
      default:
        return {
          title: 'โรงงานประเภทที่ 1',
          description: 'คุณสามารถจดทะเบียนประกอบกิจการโดย',
          highlight: 'ไม่ต้องยื่นขออนุญาต',
          showBuilding: false,
          type: 1
        };
    }
  };

  const content = getContent();

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#1e1e4b] flex flex-col items-center justify-center px-4">
        {/* Main Content Container */}
        <div className="text-center max-w-2xl">
          {/* Header */}
          <h1 className="text-white text-5xl font-bold mb-2">
            {content.title}
          </h1>
          
          {/* Divider Line */}
          <div className="w-full h-px bg-white/30 mb-24"></div>
          
          {/* Description Text */}
          <p className="text-white text-xl mb-4">
            {content.description}
          </p>
          
          {/* Highlighted Text */}
          <p className="text-yellow-300 text-6xl font-bold mb-16 w-[700px]">
            {content.highlight}
          </p>

          {/* Building Icon (only for type 2 and 3) */}
          {content.showBuilding && (
            <div className="mb-4 flex flex-col items-center justify-center ">
              <div className="inline-block p-4 rounded-lg w-fit">
                          <Image 
                            src="/dashboard/three.svg"
                            width={192}
                            height={192}
                            alt="tower"
                            className="object-contain"
                            priority
                          />
              </div>
              <button onClick={() => router.push(`/function/document/download/${content.type}`)} className="bg-[#8ccef8] text-[#1e1e4b] px-12 py-2 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity mt-4">
                ดาวน์โหลดเอกสาร
              </button>
            </div>
          )}
          
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

export default FactoryTypePage;
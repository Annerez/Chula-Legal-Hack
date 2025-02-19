"use client"

import React from 'react';
import Navbar from '@/components/ui/Navbar';
import { Bottom } from '@/components/ui/Bottom';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface MenuItem {
    name: string;
    image: string;
    source: string;
}

const menuItems: MenuItem[] = [
    { name: 'ยื่นเอกสารรับฟัง ความคิดเห็นประชาชน', image: '../../dashboard/three.svg', source: 'procedure/one' },
    { name: 'ยื่นขอใบอนุญาต ประกอบกิจการ', image: '../../dashboard/three.svg',  source: 'procedure/two'},
    { name: 'ยื่นตรวจสอบเอกสาร', image: '../../dashboard/three.svg',  source: 'procedure/three' },
    { name: 'ได้รับเอกสารพิจารณา จากเจ้าหน้าที่', image: '../../dashboard/three.svg', source: 'procedure/four' }
];


const ChooseSome = () => {
  const router = useRouter();

    const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => (
      <button className="bg-white/10 backdrop-blur-lg p-8 w-full shadow-xl rounded-xl 
                      flex flex-col items-center justify-center border-4 border-blue-300/20
                      transition-all duration-300 hover:bg-white/20 hover:scale-105" onClick={() => {router.push(`${item.source}`)}}>
        <div className="mb-4">
          <Image 
            src={item.image}
            width={192}
            height={192}
            alt={item.name}
            className="object-contain"
            priority
          />
        </div>
        <h3 className="text-2xl font-bold text-white">{item.name}</h3>
      </button>
    );
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0A0B2E] to-[#1A1B4E]">
      <Navbar />

      <div className='container mx-auto px-4 flex-grow flex flex-col items-center text-white'>
        <div className='w-screen flex flex-col flex-grow items-center justify-end bg-[#1D1656] pb-2'>
            <h1 className="text-yellow-300 text-7xl font-bold mb-4">
                ขั้นตอนการยื่นเอกสารของคุณคือ
            </h1>
            <p className="text-white text-2xl mb-16">
                เลือกสถานะการดำเนินการเอกสารของคุณ
            </p>
        </div>

        <div className='w-screen flex flex-row flex-grow items-center justify-center bg-[#2B2C78]'>
            <div className='flex items-stretch justify-center gap-8 mb-12 px-8'>
                {menuItems.map((item, index) => (
                <MenuCard key={index} item={item} />
                ))}
            </div>
        </div>
      </div>

      <Bottom centerText="เอกสารที่ใช้ในการจดแจ้ง" />
    </div>
  );
};

export default ChooseSome;
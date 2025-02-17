"use client"
import React from 'react';
import Navbar from '@/components/ui/Navbar';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const LandingPage = () => {
    const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1D1656] to-[#2A1F6F]">
        <Navbar />
        
        {/* Main content */}
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
            {/* Top heading */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-white text-xl font-light tracking-wide"
            >
                โรงงานของคุณ คือ
            </motion.h1>
            
            {/* Factory type section with line */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
            >
                <h1 className="mb-4 text-8xl font-bold text-yellow-400 pl-12 tracking-tight">
                    โรงงานประเภทที่ 1
                </h1>
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mb-8 ml-10"></div>
            </motion.div>

            {/* Description */}
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-xl mb-12 text-gray-200 text-lg font-light"
            >
                สามารถดำเนินประกอบกิจการได้โดยไม่ต้องขึ้นอนุญาต
            </motion.p>
            
            {/* Buttons container */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col space-y-4"
            >
                <button onClick={() => {router.push('/function/classify/category')}} className="w-56 px-6 py-3 font-medium text-gray-800 bg-white rounded-full hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                    ตรวจสอบคุณสมบัติ
                </button>
                
                <button onClick={() => {router.back()}} className="w-56 px-6 py-3 font-medium text-white border-2 border-white rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                    กลับหน้าหลัก
                </button>
            </motion.div>
        </div>

        {/* Background decoration */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
        </div>
    </div>
  );
};

export default LandingPage;
"use client"
import React, { useState } from 'react';
import { Navbar } from '../../../components/Navbar';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Info, Shield, Lock } from 'lucide-react';

const MenuPage = () => {
  const router = useRouter();
  const [isHoveredAllow, setIsHoveredAllow] = useState(false);
  const [isHoveredDeny, setIsHoveredDeny] = useState(false);

  const handleAllow = () => {
    router.push('/login');
  };

  const handleDeny = () => {
    router.push('/');
    // alert('คุณจำเป็นต้องอนุญาตการเก็บข้อมูลเพื่อใช้งานแอปพลิเคชัน');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 pt-16 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold text-white mb-4">FACTOLAW</h1>
          <div className="h-1 w-32 bg-yellow-400 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl max-w-md w-full shadow-xl border border-white border-opacity-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-yellow-400" />
            <h2 className="text-xl font-semibold text-white">การอนุญาตเก็บข้อมูลส่วนตัว</h2>
          </div>

          <div className="space-y-4 text-gray-300 mb-8">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 mt-1 text-yellow-400" />
              <p>ข้อมูลของคุณจะถูกใช้เพื่อปรับปรุงประสบการณ์การใช้งานและการให้บริการที่ดียิ่งขึ้น</p>
            </div>
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 mt-1 text-yellow-400" />
              <p>เราให้ความสำคัญกับความปลอดภัยของข้อมูลส่วนบุคคลของคุณ และจะไม่เปิดเผยข้อมูลแก่บุคคลที่สาม</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setIsHoveredAllow(true)}
              onHoverEnd={() => setIsHoveredAllow(false)}
              onClick={handleAllow}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
            >
              อนุญาต
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setIsHoveredDeny(true)}
              onHoverEnd={() => setIsHoveredDeny(false)}
              onClick={handleDeny}
              className="bg-transparent border-2 border-white border-opacity-50 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:bg-opacity-10"
            >
              ไม่อนุญาต
            </motion.button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default MenuPage;
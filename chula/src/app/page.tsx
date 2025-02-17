"use client"

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/ui/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleButtonClick = () => {
    router.push('/menu');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.main 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24"
        >
          <div className="flex flex-col max-w-lg">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
            >
              FACTOLAW
            </motion.h1>
            
            <div className="relative mb-6">
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isVisible ? 1 : 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"
              />
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-lg text-gray-300 text-right pr-1"
            >
              คำอธิบายสั้นนนนนนนนนนน
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-72 w-72 relative mb-8 md:mb-0"
          >
            <Image
              src="/logo.png"
              alt="Building"
              layout="fill"
              objectFit="contain"
              className="drop-shadow-2xl"
            />
          </motion.div>
        </motion.main>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleButtonClick}
          className="px-8 py-3 text-xl text-yellow-400 border-2 border-yellow-400 rounded-lg
                     hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 hover:mt-2
                     focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
        >
          TAP TO START
        </motion.button>
      </div>
    </div>
  );
}
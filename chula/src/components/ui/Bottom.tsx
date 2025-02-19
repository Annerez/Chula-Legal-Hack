"use client"

import React from 'react';
import { BottomProps } from './type';
import { useRouter } from 'next/navigation';


export const Bottom: React.FC<BottomProps> = ({ className = '', centerText='ตรวจสอบหลักเกณฑ์' }) => {
    const router = useRouter();
    return (
        <div className={`fixed bottom-0 left-0 right-0 bg-white py-4 px-6 flex justify-between items-center shadow-lg ${className}`}>
          <button 
            className="text-blue-600 font-medium hover:underline"
            onClick={() => router.back()}
          >
            BACK
          </button>
          <span className="text-blue-600 font-medium text-center">
            {centerText}
          </span>
        </div>
    );
};
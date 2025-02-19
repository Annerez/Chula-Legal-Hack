"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const menuItems = [
  { id: 1, icon: '/dashboard/one.svg', alt: 'Location' },
  { id: 2, icon: '/dashboard/two.svg', alt: 'Building' },
  { id: 3, icon: '/dashboard/three.svg', alt: 'Machinery' },
  { id: 4, icon: '/dashboard/four.svg', alt: 'Workers' },
  { id: 5, icon: '/dashboard/company.svg', alt: 'Pollution' }
];

const Sidebar = ({ selectedId = 1, onSelect }) => {
  return (
    <div className="w-24 bg-[#1E1B4B] flex flex-col items-center py-6 border-r border-gray-700">
      <div className="text-white mb-8 underline">MENU</div>
      
      <div className="flex flex-col space-y-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect?.(item.id)}
            className={`relative w-16 h-16 flex items-center justify-center transition-all
              ${selectedId === item.id ? 'border-l-4 border-yellow-400' : 'hover:bg-gray-800 rounded-lg'}`}
          >
            <Image
              src={item.icon}
              alt={item.alt}
              width={60}
              height={60}
              className="text-white"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
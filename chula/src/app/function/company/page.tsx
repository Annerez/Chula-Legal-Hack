import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/ui/Navbar';

const ProfilePage = () => {
  return (
    <div className='min-h-screen'> 
    <Navbar />
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Navbar placeholder */}
      
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="flex items-start justify-between mb-12">
          <div className="flex items-center gap-8">
            {/* Company Logo */}
            <div className="w-fit h-fit relative">
              <Image
                src="/dashboard/company.svg"
                width={224}
                height={224}
                alt="Company Logo"
                className="object-contain"
              />
            </div>
            
            {/* Company Info */}
            <div className="text-white">
              <h1 className="text-2xl font-bold mb-2">PROFILE</h1>
              <h2 className="text-xl mb-4">NAME COMMANY</h2>
              <p className="text-gray-300">IP: AB.123.456.CD.78.FF</p>
            </div>
          </div>
          
          {/* Type Selector */}
          <div className="bg-white rounded-xl px-8 py-6 flex items-center gap-3 self-center">
            <span className="text-gray-800 font-bold">ประเภทโรงงาน</span>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-3 gap-8">
          {/* Status Section */}
          <div className="text-white">
            <h3 className="text-xl font-bold mb-6">สถานะการจัดตั้ง</h3>
            <div className="flex w-full h-ful">
                <Image
                    src="/dashboard/status.svg"
                    width={0}
                    height={0}
                    alt="Company Logo"
                    className="object-contain w-3/4 h-full"
                />
            </div>
          </div>

          {/* Criteria Section */}
          <div className="text-white border-l border-r border-gray-600 px-8 flex flex-col items-center ">
            <h3 className="text-xl font-bold mb-6 self-center">หลักเกณฑ์</h3>
            <div className="flex flex-col gap-4">
                <span className='flex flex-row gap-4'>
                    {[1, 2].map((item) => (
                        <div key={item} className="w-24 h-24 bg-gray-300 rounded-full" />
                    ))}
                </span>
                <span className='flex flex-row gap-4'>
                    {[1, 2].map((item) => (
                        <div key={item} className="w-24 h-24 bg-gray-300 rounded-full" />
                    ))}
                </span>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-cyan-400 rounded-lg p-4 h-64">
            {/* Placeholder for chart/content */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;
"use client"
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';

const FactoryClassification = () => {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) =>
    {
        e.preventDefault();
        router.push('/function/classify/type');
    }
  return (
    <div className="min-h-screen bg-[#1a1d4d] flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto px-4 py-32 max-w-lg flex-grow justify-center items-center">
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Business Type */}
          <div className="space-y-2">
            <label className="text-white text-lg">ประเภทการประกอบกิจการ</label>
            <Select>
                <SelectTrigger className="w-full h-12 bg-white text-black rounded-lg border border-gray-300 px-4">
                    <SelectValue placeholder="เลือกประเภทการประกอบกิจการ" />
                </SelectTrigger>
                <SelectContent className="bg-white text-black shadow-lg rounded-lg z-50 w-72">
                    <SelectItem className="p-2 flex justify-between items-center hover:bg-gray-100" value="type1">
                        ประเภท 1
                    </SelectItem>
                    <SelectItem className="p-2 flex justify-between items-center hover:bg-gray-100" value="type2">
                        ประเภท 2
                    </SelectItem>
                    <SelectItem className="p-2 flex justify-between items-center hover:bg-gray-100" value="type3">
                        ประเภท 3
                    </SelectItem>
                </SelectContent>
            </Select>
          </div>

          {/* Machine Count */}
          <div className="space-y-2">
            <label className="text-white text-lg">จำนวนเครื่องจักร (แรงม้า)</label>
            <Select>
              <SelectTrigger className="w-full h-12 bg-white text-black rounded-lg flex justify-between px-4">
                <SelectValue placeholder="เลือกจำนวนเครื่องจักร" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black shadow-lg rounded-lg z-50 w-72">
                <SelectItem className="p-2 flex justify-between items-center hover:bg-gray-100" value="range1">0-50</SelectItem>
                <SelectItem className="p-2 flex justify-between items-center hover:bg-gray-100" value="range2">51-100</SelectItem>
                <SelectItem className="p-2 flex justify-between items-center hover:bg-gray-100" value="range3">มากกว่า 100</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Worker Count */}
          <div className="space-y-2">
            <label className="text-white text-lg">จำนวนแรงงาน (คน)</label>
            <Select>
              <SelectTrigger className="w-full h-12 bg-white text-black rounded-lg flex justify-between px-4">
                <SelectValue placeholder="เลือกจำนวนแรงงาน" />
              </SelectTrigger>
              <SelectContent  className="bg-white text-black shadow-lg rounded-lg z-50 w-72">
                <SelectItem  className="p-2 flex justify-between items-center hover:bg-gray-100" value="workers1">1-10</SelectItem>
                <SelectItem  className="p-2 flex justify-between items-center hover:bg-gray-100" value="workers2">11-50</SelectItem>
                <SelectItem  className="p-2 flex justify-between items-center hover:bg-gray-100" value="workers3">มากกว่า 50</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Confirm Button */}
          <div className="flex justify-center pt-6">
            <Button 
              className="bg-cyan-200 hover:bg-cyan-300 text-black px-12 py-3 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg"
              onClick={() => {router.push('/function/classify/type')}}
            >
              CONFIRM
            </Button>
          </div>
        </form>
      </div>

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white py-4 px-6 flex justify-between items-center shadow-lg">
        <button className="text-blue-600 font-medium hover:underline" type="submit">
          BACK
        </button>
        <span className="text-blue-600 font-medium text-center">
          จำแนกประเภทโรงงาน
        </span>
      </div>
    </div>
  );
};

export default FactoryClassification;

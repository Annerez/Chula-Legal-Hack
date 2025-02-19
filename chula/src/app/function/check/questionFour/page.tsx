"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import { Bottom } from '@/components/ui/Bottom';
import Sidebar from '@/components/ui/Sidebar';
import { Check, X } from 'lucide-react';
import Image from 'next/image';

const QuestionPageFour = () => {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState(4);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [textAnswer, setTextAnswer] = useState('');

  const questions = [
    {
      id: 1,
      order: '1',
      text: 'โรงงานของคุณมีผู้ควบคุมดูแล และผู้ปฏิบัติงานประจำสำหรับระบบป้องกันสิ่งแวดล้อมเป็นพิษหรือไม่',
      type: 'boolean'
    },
    {
      id: 2,
      order: '1.1',
      text: 'ผู้ควบคุมดูแล และผู้ปฏิบัติงานประจำสำหรับระบบป้องกันสิ่งแวดล้อมของคุณมีคุณสมบัติดังนี้ หรือไม่',
      type: 'boolean',
    },
    {
      id: 3,
      order: '2',
      text: 'โรงงานของคุณมีการใช้สารกัมมันตรังสีหรือไม่',
      type: 'boolean',
    },
    {
      id: 4,
      order: '2.1',
      text: 'โรงงานของคุณมีเจ้าหน้าที่ที่มีคุณสมบัติดังนี้หรือไม่',
      type: 'boolean',
    }
  ];

  const handleAnswer = (value: boolean) => {
    setAnswer(value);
    setTimeout(() => {
      if (currentQuestion < questions.length) {
        setCurrentQuestion(prev => prev + 1);
        setAnswer(null);
      } else {
        router.push('/function/check/questionFive');
      }
    }, 200);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(prev => prev + 1);
      setAnswer(null);
      setTextAnswer('');
    } else {
      router.push('/function/check/questionFive');
    }
  };

  return (
    <div className="min-h-screen bg-[#1E1B4B] flex flex-col">
      <Navbar />
      <div className='flex flex-1 flex-row mb-8'>
        <Sidebar selectedId={selectedMenu} onSelect={setSelectedMenu} />

        {/* Main Content */}
        <div className="flex-1 p-8 flex flex-col justify-between">
          {/* Header */}
          <div className="flex justify-end items-center mb-8">
            <div className="w-32"></div>
            <div className="bg-[#B4C6FF] text-[#1E1B4B] px-6 py-2 rounded-full">
                คนงาน
            </div>
          </div>

          {/* Questions */}
          <div className="flex-1 flex flex-col items-center">
            {/* Question Box */}
            <div className="flex flex-row gap-8 bg-[#B4C6FF] rounded-2xl p-6 mb-12 max-w-4xl w-full">
              {/* {questions[currentQuestion - 1].image && (
                <div className="w-1/3 flex items-center justify-center">
                  <img 
                    src={questions[currentQuestion - 1].image}
                    alt="Question illustration"
                    className="max-w-full h-auto"
                  />
                </div>
              )} */}
              <div className="w-full">
                <h2 className="text-[#1E1B4B] text-lg">
                  [ {questions[currentQuestion - 1].order} ] {questions[currentQuestion - 1].text}
                </h2>
              </div>
            </div>

            {/* Answer Section */}
            {questions[currentQuestion - 1].type === 'boolean' ? (
              <div className="flex justify-center gap-16 mb-12">
                <button
                  onClick={() => handleAnswer(true)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all
                    ${answer === true ? 'bg-blue-500' : 'bg-white'}
                    hover:bg-blue-400`}
                >
                  <Check className={`w-8 h-8 ${answer === true ? 'text-white' : 'text-blue-500'}`} />
                </button>
                <button
                  onClick={() => handleAnswer(false)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all
                    ${answer === false ? 'bg-red-500' : 'bg-white'}
                    hover:bg-red-400`}
                >
                  <X className={`w-8 h-8 ${answer === false ? 'text-white' : 'text-red-500'}`} />
                </button>
              </div>
            ) : (
              <input
                type="text"
                value={textAnswer}
                onChange={(e) => setTextAnswer(e.target.value)}
                placeholder="คำตอบ"
                className="w-full max-w-md px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500 mb-12"
              />
            )}

            {/* Navigation Dots */}
            <div className="flex justify-center items-center gap-4">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded ${
                    currentQuestion === index + 1 ? 'bg-[#B4C6FF]' : 'bg-white'
                  }`}
                />
              ))}
            </div>
          </div>

          
          <div className="flex justify-end items-center">
              <div className="w-32"></div>
              {(questions[currentQuestion - 1].type === 'text' || currentQuestion === 4) && (
                <button 
                  className="bg-[#B4C6FF] text-[#1E1B4B] px-6 py-2 rounded-full"
                  onClick={handleNext}
                >
                  ถัดไป
                </button>
              )}
            </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default QuestionPageFour;
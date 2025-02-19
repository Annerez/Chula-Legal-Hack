"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import { Bottom } from '@/components/ui/Bottom';
import Sidebar from '@/components/ui/Sidebar';
import { Check, X } from 'lucide-react';

const QuestionPage = () => {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [textAnswer, setTextAnswer] = useState('');

  const questions = [
    {
      id: 1,
      text: 'โรงงานของคุณตั้งอยู่ในบริเวณบ้านจัดสรรหรือหมู่บ้านแถวเพื่อการพักอาศัยหรือไม่',
      type: 'boolean'
    },
    {
      id: 2,
      text: 'โรงงานของคุณตั้งอยู่ห่างจากเขตติดต่อสาธารณสถานที่เพียร',
      subText: '(โรงเรียน สถานศึกษา โรงพยาบาล โบราณสถาน สถานที่ราชุการ และสถานที่ทำการของหน่วยงานของรัฐ)',
      type: 'text'
    }
  ];

  const handleAnswer = (value: boolean) => {
    setAnswer(value);
    
    // Wait briefly for the answer state to update visually
    setTimeout(() => {
      if (currentQuestion < questions.length) {
        setCurrentQuestion(prev => prev + 1);
        setAnswer(null);
        setTextAnswer('');
      } else {
        router.push('/function/check/questionTwo');
      }
    }, 200); // Short delay for visual feedback
  };

  const handleNext = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(prev => prev + 1);
      setAnswer(null);
      setTextAnswer('');
    } else {
      router.push('/function/check/questionTwo');
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
              ตำแหน่งโรงงาน
            </div>
          </div>

          {/* Questions */}
          <div className="flex-1 flex flex-col items-center">
            {/* Question Box */}
            <div className="bg-[#B4C6FF] rounded-2xl p-6 mb-12 max-w-3xl w-full">
              <h2 className="text-[#1E1B4B] text-lg text-center">
                [ {currentQuestion} ] {questions[currentQuestion - 1].text}
                {questions[currentQuestion - 1].subText && (
                  <div className="text-sm mt-2">{questions[currentQuestion - 1].subText}</div>
                )}
              </h2>
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
                className="w-full max-w-md px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}

            {/* Navigation Dots */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <div className={`w-4 h-4 rounded ${currentQuestion === 1 ? 'bg-[#B4C6FF]' : 'bg-white'}`} />
              <div className={`w-4 h-4 rounded ${currentQuestion === 2 ? 'bg-[#B4C6FF]' : 'bg-white'}`} />
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-end items-center">
            <div className="w-32"></div>
            {currentQuestion === 2 && (
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

export default QuestionPage;
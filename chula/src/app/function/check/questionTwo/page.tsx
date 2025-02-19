"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import { Bottom } from '@/components/ui/Bottom';
import Sidebar from '@/components/ui/Sidebar';
import { Check, X } from 'lucide-react';
import Image from 'next/image';

const QuestionPageTwo = () => {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState(2);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [textAnswer, setTextAnswer] = useState('');

  const questions = [
    {
      id: 1,
      order: 3,
      text: 'อาคารโรงงานของคุณมีคำรับรองจากผู้ประกอบวิชาชีพ วิศวกรรมควบคุม หรือบุคคลอื่นตามที่กำหนดในราชกิจจานุเบกษาหรือไม่',
      type: 'boolean'
    },
    {
      id: 2,
      order: 4,
      text: 'มีพื้นที่ประตูหน้าต่างและช่องลมรวมกันโดยไม่นับที่ติดต่อระหว่างห้องไม่น้อยกว่า 1 ใน 10 ส่วนของพื้นที่ของห้อง หรือมีการระบายอากาศไม่น้อยกว่า 0.5 ลูกบาศก์เมตรต่อนาที ต่อคนงานหนึ่งคน ',
      type: 'boolean',
      image: '/question/rect.svg'
    },
    {
      id: 3,
      order: 4,
      text: 'มีประตูหรือทางออกให้พอกับจำนวนคนในโรงงานที่จะหลบหนีภัยออกไปได้ทันท่วงที เมื่อมีเหตุฉุกเฉินขึ้น บานประตูมีขนาดกว้างไม่น้อยกว่ากว่า 110 เซนติเมตร และสูงไม่น้อยกว่า 200 เซนติเมตร แต่ถ้ามีคนในโรงงานที่จะต้องออกตามทางนี้มากกว่า 50 คน ต้องมีขนาดกว้างเพิ่มขึ้นในอัตราส่วนไม่น้อยกว่า 2 เซนติเมตรต่อหนึ่งคน และมีบันไดระหว่างชั้นอย่างน้อยสองแห่งอยู่ห่างกันพอสมควร ',
      type: 'boolean',
      image: '/question/rect.svg'
    },
    {
      id: 4,
      order: 4,
      text: 'บันไดมีช่วงระยะเท่ากันโดยตลอด บันไดและพื้นทางเดินที่อยู่สูงจากระดับพื้นตั้งแต่ 1.50 เมตรขึ้นไปมีราวที่มั่นคง ',
      type: 'boolean',
      image: '/question/stair.svg'
    },
    {
      id: 5,
      order: 4,
      text: 'ไม่น้อยกว่า 3 เมตร เว้นแต่จะมีการจัดระบบปรับอากาศหรือมีการระบายอากาศที่เหมาะสม แต่ระยะดิ่งดังกล่าวไม่น้อยกว่า 2.30 เมตร',
      type: 'boolean',
      image: '/question/house.svg'
    },
    {
      id: 6,
      order: 4,
      text: 'โรงงานของคุณมีพื้นที่ปฏิบัติงานกี่ตารางเมตรเมตรต่อคนงาน 1 คน (การคำนวณพื้นที่ให้นับรวมพื้นที่ที่ใช้วางโต๊ะปฏิบัติงานเครื่องจักร ผลิตภัณฑ์ หรือวัสดุที่เคลื่อนไปตามกระบวนการผลิตด้วย)',
      type: 'text',
    },
    {
      id: 7,
      order: 5,
      text: 'โรงงานของคุณมีวัตถุในการก่อสร้างที่ไม่ก่อให้เกิดการลุกลามของอัคคีภัย',
      type: 'boolean',
    },
    {
      id: 8,
      order: 6,
      text: 'โรงงานของคุณมีสายลิฟต์หรือไม่',
      type: 'boolean',
    },
    {
      id: 9,
      order: 7,
      text: 'ลิฟต์ของคุณมีส่วนปลอดภัยไม่น้อยกว่าสี่เท่าของน้ำหนักที่กำหนดให้ใช้ (กำหนดให้คนที่บรรทุกมีน้ำหนัก 70 กิโลกรัมต่อหนึ่งคน) และเป็นแบบที่จะเคลื่อนที่ได้ก็ต่อเมื่อประตูได้ปิดแล้วหรือไม่',
      type: 'boolean',
    },
    {
      id: 10,
      order: 7.1,
      text: 'ลิฟต์ของคุณมีระบบส่งสัญญาณเมื่อเกิดเหตุฉุกเฉินหรือไม่',
      type: 'boolean',
    },
    {
      id: 11,
      order: 7.2,
      text: 'ลิฟต์ของคุณมีป้ายระบุจำนวนคน หรือน้ำหนักที่จะบรรทุกได้ให้เห็นได้ง่ายและชัดเจน',
      type: 'boolean',
    }
  ];

  const handleAnswer = (value: boolean) => {
    setAnswer(value);
    
    // Wait briefly for the answer state to update visually
    setTimeout(() => {
      if (currentQuestion < questions.length) {
        setCurrentQuestion(prev => prev + 1);
        setAnswer(null);
      } else {
        router.push('/function/check/questionThree');
      }
    }, 200);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(prev => prev + 1);
      setAnswer(null);
      setTextAnswer('');
    } else {
      router.push('/function/check/questionThree');
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
              ลักษณะอาคาร
            </div>
          </div>

          {/* Questions */}
          <div className="flex-1 flex flex-col items-center">
            {/* Question Box */}
            <div className="flex flex-row gap-8 bg-[#B4C6FF] rounded-2xl p-6 mb-12 max-w-4xl w-full">
              {questions[currentQuestion - 1].image && (
                <div className="w-1/3 flex items-center justify-center">
                  <img 
                    src={questions[currentQuestion - 1].image}
                    alt="Question illustration"
                    className="max-w-full h-auto"
                  />
                </div>
              )}
              <div className={questions[currentQuestion - 1].image ? "w-2/3" : "w-full"}>
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
              {(questions[currentQuestion - 1].type === 'text' || currentQuestion === 11) && (
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

export default QuestionPageTwo;
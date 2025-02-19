"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import { Bottom } from '@/components/ui/Bottom';
import Sidebar from '@/components/ui/Sidebar';
import { Check, X } from 'lucide-react';
import Image from 'next/image';

const QuestionPageThree = () => {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState(3);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [textAnswer, setTextAnswer] = useState('');

  const questions = [
    {
      id: 1,
      order: '1',
      text: 'เครื่องจักรและอุปกรณ์ในโรงงานของคุณมีความปลอดภัย และไม่ก่อความสั่นสะเทือนเสียง หรือคลื่นวิทยุรบกวน ผู้อยู่อาศัยใกล้เคียงหรือไม่',
      type: 'boolean'
    },
    {
      id: 2,
      order: '2',
      text: 'เครื่องจักรของคุณสามารถทำให้เกิดอันตราย จากส่วนที่เคลื่อนไหวหรือไม่',
      type: 'boolean',
    },
    {
      id: 3,
      order: '2.1',
      text: 'คุณมีเครื่องป้องกันอันตรายที่เกิดจาก ส่วนที่เคลื่อนไหวของเครื่องจักรหรือไม่',
      type: 'boolean',
    },
    {
      id: 4,
      order: '3',
      text: 'โรงงานของคุณมีบ่อ หรือถังเปิดที่ทำงานสนองกัน กับเครื่องจักรหรือไม่',
      type: 'boolean',
    },
    {
      id: 5,
      order: '3.1',
      text: 'คุณมีขอบหรือราวกั้นระหว่างบ่อหรือถังเปิด และทางเดินด้านที่คนเข้าถึงได้หรือไม่',
      type: 'boolean',
    },
    {
      id: 6,
      order: '3.1.1',
      text: 'ราวกั้นของคุณสูงกี่เซนติเมตรจากระดับพื้นที่ติดกับบ่อหรือถังเปิด',
      type: 'boolean',
    },
    {
      id: 7,
      order: '4',
      text: 'โรงงานของคุณมีภาชนะบรรจุวัตถุอันตราย เช่น วัตถุไวไฟ วัตถุระเบิด หรือของเหลวอื่นใดที่อาจทำให้เกิดอันตรายแก่บุคคลสัตว์ พืช ทรัพย์ หรือสิ่งแวดล้อมที่มีขนาดของภาชนะบรรจุตั้งแต่ 25,000 ลิตรขึ้นไปหรือไม่',
      type: 'boolean',
    },
    {
      id: 8,
      order: '4.1',
      text: 'ภาชนะบรรจุวัตถุอันตรายของคุณอยู่ในที่โล่งแจ้งหรือไม่',
      type: 'boolean',
    },
    {
      id: 9,
      order: '4.1.1',
      text: 'คุณมีสายล่อฟ้าเพื่อป้องกันอันตรายจากภาชนะบรรจุนั้นหรือไม่',
      type: 'boolean',
    },
    {
      id: 10,
      order: '4.2',
      text: 'คุณมีสายดินเพื่อป้องกันอันตราย จากไฟฟ้าสถิตย์ของภาชนะบรรจุนั้นหรือไม่',
      type: 'boolean',
    },
    {
      id: 11,
      order: '4.2.1',
      text: 'คุณมีสายดินเพื่อป้องกันอันตราย จากไฟฟ้าสถิตย์ของภาชนะบรรจุนั้นหรือไม',
      type: 'boolean',
    },
    {
      id: 12,
      order: '4.3',
      text: 'ภาชนะบรรจุวัตถุอันตรายของคุณ มีคำรับรองของผู้ประกอบวิชาชีพวิศวกรรมควบคุมหรือบุคคลอื่นที่รัฐมนตรีกำหนด และมีเขื่อน หรือกำแพงคอนกรีตโดยรอบ ให้มีขนาดที่สามารถจะกัก เก็บปริมาณของวัตถุดังกล่าวได้ทั้งหมด และมีวัตถุหรือเคมีภัณฑ์ที่มีคุณสมบัติเหมาะสมในการระงับ หรือลดความรุนแรงของการแพร่กระจายได้หรือไม่',
      type: 'boolean',
    },
    {
      id: 13,
      order: '5',
      text: 'โรงงานของคุณมีเครื่องยกหรือไม่',
      type: 'boolean',
    },
    {
      id: 14,
      order: '5.1',
      text: 'เครื่องยกของคุณและส่วนที่รับน้ำหนักต่อเนื่องกัน มีความมั่นคง และมีป้ายระบุน้ำหนักปลอดภัยสูงสุดที่จะใช้ยกของได้ให้เห็นได้ง่าย และชัดเจนหรือไม่',
      type: 'boolean',
    },
    {
      id: 15,
      order: '5.2',
      text: 'เครื่องยกของคุณมีที่ห้ามล้อ ซึ่งสามารถจะหยุดน้ำหนักได้ไม่น้อยกว่าหนึ่งเท่าของน้ำหนัก ปลอดภัยสูงสุดหรือไม่',
      type: 'boolean',
    },
    {
      id: 16,
      order: '5.3',
      text: 'เครื่องยกของคุณเป็นเครื่องยกที่ใช้ไฟฟ้าหรือไม่',
      type: 'boolean',
    },
    {
      id: 17,
      order: '5.3.1',
      text: 'เครื่องยกที่ใช้ไฟฟ้าของคุณมีอุปกรณ์สำหรับหยุดยก  และตัดกระแสไฟฟ้าเมื่อยกน้ำหนักถึงตำแหน่งสูงสุดที่กำหนด',
      type: 'boolean',
    },
    {
      id: 18,
      order: '6',
      text: 'โรงงานของคุณมีเครื่องลำเลียงขนส่ง ซึ่งมีสายลำเลียงผ่านเหนือบริเวณที่มีทางเดิน หรือบริเวณที่มีคนปฏิบัติงานหรือไม่',
      type: 'boolean',
    },
    {
      id: 19,
      order: '6.1',
      text: 'เครื่องลำเลียงขนส่งของคุณมีเครื่องป้องกันของตกแบบแผ่นหรือ ตะแกรงกันด้านข้างและรองรับของตกตลอดใต้สายลำเลียงเพื่อความปลอดภัยในการปฏิบัติงานหรือไม่',
      type: 'boolean',
    },
    {
      id: 20,
      order: '6.2',
      text: 'เครื่องลำเลียงขนส่งของคุณ มีสายลำเลียงต่างไปจากแนวระดับหรือไม่',
      type: 'boolean',
    },
    {
      id: 21,
      order: '6.2.1',
      text: 'เครื่องลำเลียงขนส่งของคุณ มีสายลำเลียงต่างไปจากแนวระดับของคุณมีเครื่องบังคับ ที่ทำให้สายลำเลียงหยุดได้เองเมื่อเครื่องหยุดปฏิบัติงานหรือไม่',
      type: 'boolean',
    },
    {
      id: 22,
      order: '7',
      text: ' โรงงานของคุณมีท่อ และอุปกรณ์สำหรับส่งวัตถุทางท่อหรือไม',
      type: 'boolean',
    },
    {
      id: 23,
      order: '7.1',
      text: 'ท่อและอุปกรณ์ขนส่งทางท่อของคุณเป็นไปตามหลัก วิชาการที่ได้รับการยอมรับหรือไม่',
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
        router.push('/function/check/questionFour');
      }
    }, 200);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(prev => prev + 1);
      setAnswer(null);
      setTextAnswer('');
    } else {
      router.push('/function/check/questionFour');
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
                เครื่องจักร
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
              {(questions[currentQuestion - 1].type === 'text' || currentQuestion === 23) && (
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

export default QuestionPageThree;
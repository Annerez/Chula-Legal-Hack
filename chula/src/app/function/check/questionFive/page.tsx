"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import { Bottom } from '@/components/ui/Bottom';
import Sidebar from '@/components/ui/Sidebar';
import { Check, X } from 'lucide-react';
import Image from 'next/image';

const QuestionPageFive = () => {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState(5);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [textAnswer, setTextAnswer] = useState('');

  const questions = [
    {
      id: 1,
      order: '1',
      text: 'โรงงานของคุณมีการกำจัดขยะและสิ่งปฏิกูลดังนี้หรือไม่',
      type: 'boolean'
    },
    {
      id: 2,
      order: '2',
      text: 'โรงงานของคุณมีสิ่งปฏิกูลหรือวัสดุซึ่งไม่ใช้แล้ว ซึ่งมีลักษณะหรือคุณสมบัติดังนี้หรือไม',
      type: 'boolean',
    },
    {
      id: 3,
      order: '2.1',
      text: 'คุณได้มีการนำสิ่งปฏิกูลหรือวัสดุที่ไม่ใช้แล้ว ออกนอกบริเวณโรงงานหรือไม่',
      type: 'boolean',
    },
    {
      id: 4,
      order: '2.1.1',
      text: 'คุณได้รับอนุญาตจากอธิบดีกรมโรงงานอุตสาหกรรมหรือไม่',
      type: 'boolean',
    },
    {
        id: 5,
        order: '2.2',
        text: 'คุณได้มีการแจ้งรายละเอียดเกี่ยวกับชนิด ปริมาณ ลักษณะ คุณสมบัติและสถานที่เก็บ พร้อมทั้งวิธีการกำจัดทำลาย ฝัง เคลื่อนย้าย ขนส่งและการนำกลับไปใช้ประโยชน์ของสิ่งปฏิกูลหรือวัสดุที่ไม่ใช้แล้วหรือไม่',
        type: 'boolean',
    },
    {
        id: 6,
        order: '3',
        text: 'คุณได้มีการระบายน้ำทิ้งออกจากโรงงานหรือไม่',
        type: 'boolean',
    },
    {
        id: 7,
        order: '3.1',
        text: 'คุณได้ทำให้น้ำทิ้งนั้นมีลักษณะดังนี้ หรือไม่',
        type: 'boolean',
    },
    {
        id: 8,
        order: '3.1.1',
        text: 'วิธีการดังกล่าวเป็นวิธีทำให้เจือจาง (dilution) หรือไม่',
        type: 'boolean',
    },
    {
        id: 9,
        order: '4',
        text: 'โรงงานของคุณมีระบบบำบัดน้ำเสียหรือไม่',
        type: 'boolean',
    },
    {
        id: 10,
        order: '4.1',
        text: 'คุณได้มีการติดตั้งมาตรวัดปริมาณการใช้ไฟฟ้า สำหรับระบบบำบัดน้ำเสียโดยเฉพาะไว้ในที่ที่ง่ายต่อการตรวจสอบ และมีการจดบันทึกเลขหน่วยและปริมาณการใช้ไฟฟ้าประจำวันหรือไม่',
        type: 'boolean',
    },
    {
        id: 11,
        order: '4.2',
        text: 'โรงงานของคุณมีการใช้สารเคมี หรือสารชีวภาพในระบบบำบัดน้ำเสียหรือไม่',
        type: 'boolean',
    },
    {
        id: 12,
        order: '4.2.1',
        text: 'คุณได้มีการบันทึกการใช้สารเคมี หรือสารชีวภาพในการบำบัดน้ำเสียประจำวัน และมีหลักฐานในการจัดหาสารเคมีหรือสารชีวภาพดังกล่าวหรือไม่',
        type: 'boolean',
    },
    {
        id: 13,
        order: '5',
        text: 'กรณีที่รัฐมนตรีประกาศในราชกิจจานุเบกษา กำหนดให้โรงงานที่ต้องมีระบบบำบัดน้ำเสีย ต้องติดตั้งเครื่องมือหรืออุปกรณ์พิเศษ',
        type: 'boolean',
    },
    {
        id: 14,
        order: '6',
        text: 'โรงงานของคุณมีการระบายอากาศเสียออกจากโรงงานหรือไม่',
        type: 'boolean',
    },
    {
        id: 15,
        order: '6.1',
        text: 'คุณได้ทำให้อากาศที่ระบายออกมา มีปริมาณของสารเจือปนไม่กินกว่าค่าที่รัฐมนตรีกำหนด ในราชกิจจานุเบกษาหรือไม่',
        type: 'boolean',
    },
    {
        id: 16,
        order: '6.1.1',
        text: 'วิธีการดังกล่าวเป็นวิธีทำให้เจือจาง (Dilution) หรือไม่',
        type: 'boolean',
    },

    {
        id: 17,
        order: '7',
        text: 'โรงงานของคุณมีระบบฟอกอากาศหรือไม่',
        type: 'boolean',
    },
    {
        id: 18,
        order: '7.1',
        text: 'คุณได้มีการติดตั้งมาตรวัดปริมาณการใช้ไฟฟ้า สำหรับระบบฟอกอากาศโดยเฉพาะไว้ในที่ที่ง่ายต่อการตรวจสอบ และมีการจดบันทึกเลขหน่วยและปริมาณการใช้ไฟฟ้าประจำวันหรือไม',
        type: 'boolean',
    },
    {
        id: 19,
        order: '7.2',
        text: 'โรงงานของคุณมีการใช้สารเคมีในระบบฟอกอากาศหรือไม่',
        type: 'boolean',
    },
    {
        id: 20,
        order: '7.2.1',
        text: 'คุณได้มีการบันทึกการใช้สารเคมีในการฟอกอากาศประจำวัน และมีหลักฐานในการจัดหาสารเคมีกล่าวหรือไม่',
        type: 'boolean',
    },
    {
        id: 21,
        order: '8',
        text: 'กรณีที่รัฐมนตรีประกาศในราชกิจจานุเบกษากำหนดให้ โรงงานที่ต้องมีระบบฟอกอากาศต้องติดตั้งเครื่องมือหรืออุปกรณ์พิเศษ',
        type: 'boolean',
    },
    {
        id: 22,
        order: '9',
        text: 'โรงงานของคุณมีเสียงดังที่เกิดจากการประกอบกิจการหรือไม่',
        type: 'boolean',
    },
    {
        id: 23,
        order: '9.1',
        text: 'เสียงจากโรงงานของคุณเกินมาตรฐานดังนี้หรือไม่',
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
        router.push('/function/check/complete');
      }
    }, 200);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(prev => prev + 1);
      setAnswer(null);
      setTextAnswer('');
    } else {
      router.push('/function/check/complete');
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
                การควบคุมการปล่อยของเสียและมลพิษ
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

            {(currentQuestion === 1) && (
                <div className="flex flex-col text-start gap-2 bg-white/10 backdrop-blur-lg text-white rounded-2xl p-6 mb-12 max-w-4xl w-full">
                    <h3>1. มีที่รองรับหรือที่กำจัดขยะและสิ่งปฏิกูล</h3>
                    <h3>2. แยกเก็บสิ่งปฏิกูลหรือวัสดุที่ไม่ใช้แล้ว ซึ่งมีวัตถุมีพิษปนอยู่ด้วย หรือสำลีผ้า หรือเศษด้ายที่เปื้อนวัตถุไวไฟ ไว้ในที่รองรับต่างหากที่มีฝาปิดมิดชิด และมีการกำจัดสิ่งดังกล่าวโดยเฉพาะด้วยวิธีการที่ปลอดภัยและไม่ก่อให้เกิดความเดือนร้อนรำคาญ</h3>
                </div>
              )}

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

export default QuestionPageFive;
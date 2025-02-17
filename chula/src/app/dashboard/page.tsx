"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/ui/Navbar';
import { useRouter } from 'next/navigation';

// Define types
interface Slide {
  title: string;
  secondary?: string;
  subtitle: string;
  imagePath: string;
}

interface MenuItem {
  name: string;
  image: string;
  description: string;
  source: string;
}

// Constants
const SLIDE_INTERVAL = 5000;

const slides: Slide[] = [
  {
    title: "จำแนก ตรวจสอบ เอกสาร",
    secondary: "ประเภทโรงงาน  หลักเกณฑ์  สำหรับการจดและแจ้ง",
    subtitle: "อธิบายยยยยยยยยย",
    imagePath: "/dashboard/one.svg"
  },
  {
    title: "จำแนกประเภทโรงงาน",
    subtitle: "อธิบายยยยยยยยยย",
    imagePath: "/dashboard/two.svg"
  },
  {
    title: "ตรวจสอบหลักเกณฑ์โรงงาน",
    subtitle: "อธิบายยยยยยยยยย",
    imagePath: "/dashboard/three.svg"
  },
  {
    title: "เอกสารสำหรับการจดและแจ้ง",
    subtitle: "อธิบายยยยยยยยยย",
    imagePath: "/dashboard/four.svg"
  }
];

const menuItems: MenuItem[] = [
  { name: 'จำแนก', image: 'dashboard/two.svg', description: 'ประเภทโรงงาน', source: 'function/classify/select' },
  { name: 'ตรวจสอบ', image: 'dashboard/three.svg', description: 'หลักเกณฑ์', source: 'function/classify/select'},
  { name: 'เอกสาร', image: 'dashboard/four.svg', description: 'สำหรับการจดและแจ้ง', source: 'function/classify/select' }
];

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleSlideChange = (direction: 'next' | 'prev') => {
    setIsAutoPlaying(false);
    if (direction === 'next') {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const CarouselSlide: React.FC<{ slide: Slide }> = ({ slide }) => (
    <div className="min-w-full h-full relative">
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <div className="text-white space-y-4 ml-8 w-1/2 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-center">{slide.title}</h2>
          {slide.secondary && (
            <h3 className="text-2xl text-center">{slide.secondary}</h3>
          )}
          <p className="text-lg text-center">{slide.subtitle}</p>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <Image 
            src={slide.imagePath}
            width={400}
            height={400}
            alt={slide.title}
            className="object-contain max-h-full w-2/6"
            priority
          />
        </div>
      </div>
    </div>
  );

  const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => (
    <button className="bg-white/10 backdrop-blur-lg p-8 w-full shadow-xl rounded-xl 
                    flex flex-col items-center justify-center border-4 border-blue-300/20
                    transition-all duration-300 hover:bg-white/20 hover:scale-105" onClick={() => {router.push(`${item.source}`)}}>
      <div className="mb-4">
        <Image 
          src={item.image}
          width={192}
          height={192}
          alt={item.name}
          className="object-contain"
          priority
        />
      </div>
      <h3 className="text-4xl font-bold text-white">{item.name}</h3>
      <p className="text-sm font-bold text-white/80 mt-2">{item.description}</p>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#1a1d4d]">
      <Navbar />
      
      {/* Carousel Section */}
      <section className="relative w-full h-96">
        <div className="relative h-full overflow-hidden">
          <div 
            className="flex transition-transform duration-500 h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <CarouselSlide key={index} slide={slide} />
            ))}
          </div>
        </div>
        
        {/* Carousel Controls */}
        <button 
          onClick={() => handleSlideChange('prev')}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full
                     transition-colors hover:bg-white/30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="text-white" />
        </button>
        <button 
          onClick={() => handleSlideChange('next')}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full
                     transition-colors hover:bg-white/30"
          aria-label="Next slide"
        >
          <ChevronRight className="text-white" />
        </button>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors
                         ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Company and Menu Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-stretch gap-8">
          {/* Company Info */}
          <button className="text-white w-full" onClick={() => {router.push('/function/company')}}>
            <div className="mb-4">
              <Image 
                src="dashboard/company.svg"
                width={288}
                height={288}
                alt="Company logo"
                className="object-contain"
                priority
              />
            </div>
            <h3 className="text-3xl font-bold">NAME COMPANY</h3>
            <p className="text-xl font-bold text-gray-300">location</p>
          </button>

          <div className="mx-8 w-px bg-gray-600 self-stretch" />

          {/* Menu Cards */}
          {menuItems.map((item, index) => (
            <MenuCard key={index} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
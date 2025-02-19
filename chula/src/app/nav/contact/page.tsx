"use client"
import React from 'react';
import Navbar from '@/components/ui/Navbar';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 pt-16 flex flex-row  w-screen flex-grow h-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-1/2 mx-auto flex items-center justify-center flex-1"
            >
                <h1 className="bg-white w-72 h-72 mx-auto"></h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-1/2 flex flex-col text-white items-center"
            >
               <div className='flex flex-col items-center mb-48'>
                <h1 className="text-6xl font-bold text-white mb-4 mx-auto">Conatct us</h1>
                <div className="h-1 w-96 bg-yellow-400 mx-auto rounded-full mb-24" />
                </div>

                <div className='flex flex-col gap-4 text-2xl'>
                  <h1>Tel. XXX-XXX-XXXX </h1>
                  <h1>Email XXXXXXX@GMAIL.COM </h1>
                </div>
            </motion.div>
        </main>
    </div>
  )
}

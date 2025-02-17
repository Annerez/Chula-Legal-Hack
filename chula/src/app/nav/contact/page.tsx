"use client"
import React from 'react';
import Navbar from '@/components/ui/Navbar';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 pt-16 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h1 className="text-6xl font-bold text-white mb-4">Location</h1>
                <div className="h-1 w-32 bg-yellow-400 mx-auto rounded-full" />
            </motion.div>
        </main>
    </div>
  )
}

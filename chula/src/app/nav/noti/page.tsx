"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotificationPage() {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white p-4 flex justify-between items-center shadow-md">
        <Link href="/" className="text-blue-500 font-semibold">BACK</Link>
        <h1 className="text-xl font-bold">NOTIFICATION</h1>
      </header>

      {/* Notification Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 * 0.2 }} 
        className="flex-grow flex items-center justify-center">
        <div className="bg-[#1E1B4B] p-8 rounded-lg w-3/4 shadow-xl relative">
          {/* Notification Box */}
          {[1, 2].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-4 rounded-2xl shadow-md flex justify-between items-start my-4"
            >
              <div>
                <h2 className="font-bold text-lg">NEW MESSAGE</h2>
                <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare eget dui non tincidunt.
                </p>
              </div>
              <span className="text-sm text-gray-500">13.25 u.</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

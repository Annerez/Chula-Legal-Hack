"use client"
import Navbar from '@/components/ui/Navbar';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Confirm = () => {
    const router = useRouter();
    return(
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

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="bg-white bg-opacity-10 backdrop-blur-lg p-8 max-w-[1000px] w-full shadow-xl border border-white border-opacity-20"
                >
                    <div className='h-[500px] w-full'></div>
                </motion.div>


                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-3 rounded-lg my-12 p-8 font-bold w-[200px]
                     'hover:shadow-lg hover:shadow-yellow-400/20'}`}
                    type="submit"
                    onClick={() => {router.push('/auth/login')}}
                >
                <span className="flex items-center justify-center gap-2">
                    CONFIRM
                </span>
                </motion.button>
            </main>
        </div>
);};

export default Confirm;
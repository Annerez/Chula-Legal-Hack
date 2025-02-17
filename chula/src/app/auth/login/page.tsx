"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import Navbar from '@/components/ui/Navbar';
import { InputField } from '@/components/ui/InputField';

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1500);
  };

  const socialProviders = [
    { icon: '/google-icon.png', name: 'Google', bgColor: 'bg-white' },
    { icon: '/facebook-icon.png', name: 'Facebook', bgColor: 'bg-blue-600 text-white' },
    { icon: '/apple-icon.png', name: 'Apple', bgColor: 'bg-black text-white' }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          {/* Auth Toggle */}
          <div className="flex rounded-2xl bg-gray-700 bg-opacity-30 mb-8 p-1">
            <Link 
              href="/auth/signup" 
              className="w-1/2 py-3 text-center rounded-xl text-gray-400 transition-all duration-300"
            >
              SIGN UP
            </Link>
            <Link 
              href="/auth/login" 
              className="w-1/2 py-3 text-center rounded-xl bg-white text-gray-900 shadow-lg transition-all duration-300"
            >
              LOGIN
            </Link>
          </div>
          
          {/* Login Form */}
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <InputField
                label="EMAIL ADDRESS"
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="pl-14"
              />
              <Mail className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
            </div>
            
            <div className="relative">
              <InputField
                label="PASSWORD"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="PASSWORD"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="pl-10"
              />
              <Lock className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            
            <Link 
              href="/forgot-password" 
              className="text-yellow-400 text-right text-sm hover:text-yellow-300 transition-colors"
            >
              FORGET PASSWORD?
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`bg-gradient-to-r from-cyan-400 to-cyan-500 text-white py-3 rounded-lg mt-4 font-medium
                ${isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-cyan-400/20'}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full inline-block"
                  />
                  LOGGING IN...
                </span>
              ) : (
                'LOGIN'
              )}
            </motion.button>
            
            {/* Social Login */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-400 bg-gray-900">Or continue with</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {socialProviders.map((provider) => (
                <motion.button
                  key={provider.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`${provider.bgColor} p-3 rounded-lg flex items-center justify-center gap-3 transition-shadow duration-300 hover:shadow-lg`}
                >
                  <Image 
                    src={provider.icon} 
                    alt={provider.name} 
                    width={24} 
                    height={24}
                    className="object-contain" 
                  />
                  <span>Continue with {provider.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.form>
        </motion.div>
      </main>
    </div>
  );
};

export default LoginPage;
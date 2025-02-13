"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Lock, User, MapPin, Earth, Building2 } from 'lucide-react';
import { Navbar } from '../../../components/Navbar';
import { InputField } from '../../../components/InputField';

const SignUpPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postal: '',
    country: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postal: '',
    country: ''
  });

  const validateForm = () => {
    const tempErrors = {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      postal: '',
      country: ''
    };
    let isValid = true;

    // Email validation
    if (!formData.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email format';
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      tempErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      tempErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    // Name validation
    if (!formData.firstName.trim()) {
      tempErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      tempErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!formData.address.trim()) {
      tempErrors.address = 'Address is required';
      isValid = false;
    }

    if (!formData.city.trim()) {
      tempErrors.city = 'City is required';
      isValid = false;
    }

    if (!formData.postal.trim()) {
      tempErrors.postal = 'Postal code is required';
      isValid = false;
    }

    if (!formData.country.trim()) {
      tempErrors.country = 'Country is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <main className="container mx-auto px-4 pt-8 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          {/* Auth Toggle */}
          <div className="flex rounded-2xl bg-gray-700 bg-opacity-30 mb-8 p-1">
            <Link 
              href="/signup" 
              className="w-1/2 py-3 text-center rounded-xl bg-white text-gray-900 shadow-lg transition-all duration-300"
            >
              SIGN UP
            </Link>
            <Link 
              href="/login" 
              className="w-1/2 py-3 text-center rounded-xl text-gray-400 transition-all duration-300"
            >
              LOGIN
            </Link>
          </div>
          
          {/* Sign Up Form */}
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
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                icon={<Mail className="w-5 h-5" />}
              />
            </div>
            
            <div className="relative">
              <InputField
                label="PASSWORD"
                type="password"
                name="password"
                placeholder="Create password"
                required
                value={formData.password}
                onChange={handleInputChange}
                error={errors.password}
                icon={<Lock className="w-5 h-5" />}
              />
            </div>

            <div className="relative">
              <InputField
                label="CONFIRM PASSWORD"
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                error={errors.confirmPassword}
                icon={<Lock className="w-5 h-5" />}
              />
            </div>

            <div className="flex gap-4">
              <InputField
                label="FIRST NAME"
                type="text"
                name="firstName"
                placeholder="First name"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                error={errors.firstName}
                icon={<User className="w-5 h-5" />}
              />
              
              <InputField
                label="LAST NAME"
                type="text"
                name="lastName"
                placeholder="Last name"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                error={errors.lastName}
              />
            </div>

            <div className="relative">
              <InputField
                label="ADDRESS"
                type="text"
                name="address"
                placeholder="Enter your address"
                required
                value={formData.address}
                onChange={handleInputChange}
                error={errors.address}
                icon={<MapPin className="w-5 h-5" />}
              />
            </div>

            <div className="flex gap-4">
              <InputField
                  label="ADDRESS"
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  error={errors.address}
                  icon={<MapPin className="w-5 h-5" />}
                />
              
              <InputField
                label="CITY"
                type="text"
                name="city"
                placeholder="City"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                error={errors.lastName}
                icon={<Building2 className="w-5 h-5" />}
              />
            </div>

            <div className="flex gap-4">
              <InputField
                  label="POSTAL"
                  type="text"
                  name="postal"
                  placeholder="Postal"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  error={errors.address}
                  icon={<Mail className="w-5 h-5" />}
                />
              
              <InputField
                label="COUNTRY"
                type="text"
                name="country"
                placeholder="Country"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                error={errors.lastName}
                icon={<Earth className="w-5 h-5" />}
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-3 rounded-lg mt-4 font-medium
                ${isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-yellow-400/20'}`}
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full inline-block"
                  />
                  CREATING ACCOUNT...
                </span>
              ) : (
                'CREATE ACCOUNT'
              )}
            </motion.button>

            <p className="text-center text-gray-400 text-sm mt-4">
              Already have an account?{' '}
              <Link href="/login" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                Login here
              </Link>
            </p>
          </motion.form>
        </motion.div>
      </main>
    </div>
  );
};

export default SignUpPage;
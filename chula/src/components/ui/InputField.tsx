"use client"

import React, { useState } from 'react';
import { InputFieldProps } from './type';

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  name,
  required = false,
  value,
  onChange,
  error,
  className = '',
  icon: Icon,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setTouched(true);
  };

  return (
    <div className="flex flex-col gap-2">
      <label 
        htmlFor={name}
        className={`text-sm font-medium transition-colors duration-200
          ${isFocused ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {Icon}
          </div>
        )}
        
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`
            w-full p-3 rounded-lg
            bg-gray-800 text-white placeholder-gray-400
            border-2 transition-all duration-200
            focus:outline-none
            pl-[36px]
            ${Icon ? 'pl-10' : 'pl-4'}
            ${error && touched ? 'border-red-400' : isFocused ? 'border-yellow-400' : 'border-gray-700'}
            ${error && touched ? 'bg-red-400 bg-opacity-5' : ''}
            hover:border-gray-600
            ${className}
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      </div>

      {error && touched && (
        <p 
          id={`${name}-error`} 
          className="text-sm text-red-400 mt-1 flex items-center gap-1"
        >
          {error}
        </p>
      )}
    </div>
  );
};
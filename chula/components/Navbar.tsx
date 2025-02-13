import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavbarProps } from './type';

export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  return (
    <nav className={`w-full bg-white p-4 flex justify-between items-center ${className}`}>
      <Link href="/">
        <div className="cursor-pointer">
          <Image src="/logo.png" alt="FactoLaw Logo" width={40} height={40} className="w-10 h-10" />
        </div>
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/about" className="text-blue-600">ABOUT US</Link>
        <Link href="/contact" className="text-blue-600">CONTACT</Link>
        <button className="text-blue-600">
          <Image src="/bell-icon.svg" alt="Notifications" width={24} height={24} />
        </button>
        <button className="text-blue-600">
          <Image src="/globe-icon.svg" alt="Language" width={24} height={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
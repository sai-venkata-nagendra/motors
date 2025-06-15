// components/Header.js
import React from 'react';
import { User, Menu } from 'lucide-react';
import { useRouter } from 'next/router';

export default function Header({ user, onMenuClick, className = '' }) {
  const router = useRouter();

  const handleLogout = () => {
    // Clear user session data here
    router.push('/signin');
  };

  return (
    <header className={`w-full bg-gradient-to-b from-[#6495ED] to-[#B0C4DE] text-white p-4 flex justify-between items-center ${className}`}>
      <div className="flex items-center">
        <button onClick={onMenuClick} className="text-black mr-4">
          <Menu size={28} />
        </button>
        <h1 className="text-3xl font-bold font-sans text-black px-6">Rajhans Motor Investment Co.</h1>
      </div>
      <div className="flex items-center space-x-4 px-6">
        <span>{user?.name || 'User'}</span>
        <button onClick={handleLogout} className="bg-white text-blue-600 rounded-full p-2">Logout</button>
        <div className="bg-white rounded-full p-2">
          <User className="text-blue-600" size={20} />
        </div>
      </div>
    </header>
  );
}
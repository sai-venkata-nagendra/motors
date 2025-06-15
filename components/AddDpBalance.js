import React, { useState } from 'react';
import CustomerSearchModal from './CustomerSearchModal';

export default function AddDpBalance() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = () => {
    setIsModalOpen(true);
    // After selecting a customer, the rest of the form would be displayed.
  };

  return (
    <>
      <div className="animate-fade-in-up max-w-5xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
        <div className="flex justify-between items-center mb-6 border-b-4 border-teal-200 pb-4">
          <h1 className="text-2xl font-extrabold text-blue-900 tracking-wider drop-shadow-lg uppercase">Add Down Payment Balance</h1>
          <button
            onClick={handleSearch}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-8 rounded-lg shadow-md transition-colors border border-gray-400"
          >
            Search
          </button>
        </div>
        
        {/* This container will hold the content that appears after a search */}
        <div className="h-96 flex items-center justify-center text-gray-400">
          <p>Search for a customer to add down payment balance.</p>
        </div>
        
      </div>
      <CustomerSearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </>
  );
} 
import React, { useState } from 'react';
import CustomerSearchModal from './CustomerSearchModal';

export default function TrackVehDocs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="animate-fade-in-up max-w-7xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
        <div className="flex justify-between items-center border-b-4 border-teal-200 pb-2 mb-8">
          <h2 className="text-3xl font-extrabold text-blue-900 tracking-wider drop-shadow-lg uppercase">
            Track / Update Vehicle Documents
          </h2>
          <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md border border-blue-700 transition-all duration-200"
          >
            Search Customer
          </button>
        </div>

        <div className="text-center text-gray-500 mt-20">
          <p>Search for a customer to see their document status.</p>
        </div>
      </div>
      <CustomerSearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
} 
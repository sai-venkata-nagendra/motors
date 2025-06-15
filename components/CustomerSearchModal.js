import React from 'react';

export default function CustomerSearchModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center animate-fade-in">
      <div className="bg-gray-100 rounded-lg shadow-2xl w-full max-w-3xl h-[80vh] flex flex-col">
        <div className="p-4 border-b bg-blue-900 text-white rounded-t-lg">
          <h2 className="text-xl font-bold">Search Customer</h2>
        </div>
        
        <div className="p-6 flex-grow">
            <div className="flex items-center gap-4">
                <label className="font-semibold">Search By:</label>
                <select className="input-glass w-48">
                    <option>Regn No.</option>
                    <option>Engine No</option>
                    <option>Chasis No.</option>
                    <option>Loan Ac No.</option>
                    <option>Ledger No.</option>
                    <option>Customer Name</option>
                    <option>Customer ID</option>
                    <option>Phone No.</option>
                    <option>Email</option>
                </select>
                <label className="font-semibold">Search Text:</label>
                <input 
                    type="text" 
                    placeholder="Type And Press 'Enter'" 
                    className="input-glass w-64 bg-yellow-100 placeholder-gray-500"
                />
            </div>
            {/* Results will be displayed here */}
            <div className="mt-8 text-center text-gray-400">
                <p>Search results will appear here.</p>
            </div>
        </div>

        <div className="p-4 border-t bg-gray-200 flex justify-end gap-4 rounded-b-lg">
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded-lg shadow-md transition-all"
          >
            Select
          </button>
          <button 
            onClick={onClose}
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold px-8 py-2 rounded-lg shadow-md transition-all"
          >
            Close
          </button>
        </div>
      </div>
      <style jsx>{`
        .input-glass {
          @apply border border-blue-300 rounded-lg px-4 py-2 shadow-inner focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
} 
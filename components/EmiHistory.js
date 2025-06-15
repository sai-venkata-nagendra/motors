import React, { useState } from 'react';
import CustomerSearchModal from './CustomerSearchModal';

export default function EmiHistory() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customer, setCustomer] = useState(null);

  const handleSearch = () => {
    setIsModalOpen(true);
    // In a real app, selecting a customer would populate the fields
    // For now, we'll simulate this after search.
    setCustomer({
        name: 'Ashok Kumar',
        id: 'CUST-00123',
        loanAcNo: 'AC001',
        extAcNo: 'EXT-98765'
    });
  };
  
  const handleClear = () => {
      setCustomer(null);
  }

  return (
    <>
      <div className="animate-fade-in-up max-w-5xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
        <div className="flex justify-between items-center mb-8 border-b-4 border-teal-200 pb-4">
            <h2 className="text-2xl font-extrabold text-blue-900 tracking-wider drop-shadow-lg uppercase">
                Paid EMI History
            </h2>
            <button
                onClick={handleSearch}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-8 rounded-lg shadow-md transition-colors border border-gray-400"
            >
                Search
            </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="space-y-4">
                <div className="flex items-center">
                    <label className="w-32 font-semibold text-gray-700">Customer Name:</label>
                    <input type="text" value={customer ? customer.name : ''} readOnly className="input-field flex-grow bg-gray-100" />
                </div>
                <div className="flex items-center">
                    <label className="w-32 font-semibold text-gray-700">Customer ID:</label>
                    <span className="font-bold text-gray-800">{customer ? customer.id : ''}</span>
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex items-center">
                    <label className="w-32 font-semibold text-gray-700">Loan Ac No:</label>
                    <select value={customer ? customer.loanAcNo : ''} readOnly className="input-field flex-grow bg-gray-100">
                        <option value="">{customer ? customer.loanAcNo : 'Select Account'}</option>
                    </select>
                </div>
                <div className="flex items-center">
                    <label className="w-32 font-semibold text-gray-700">Ext Ac No:</label>
                    <span className="font-bold text-gray-800">{customer ? customer.extAcNo : ''}</span>
                </div>
            </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t-2 border-gray-200 pt-8">
            <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline font-semibold transition-colors">
            Export to Excel
            </a>
            <div className="flex gap-4">
            <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
                Get Report
            </button>
            <button
                onClick={handleClear}
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
                Clear All
            </button>
            </div>
        </div>
      </div>
      <CustomerSearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <style jsx>{`
        .input-field {
          @apply bg-white border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all;
        }
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
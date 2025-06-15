import React, { useState } from 'react';
import CustomerSearchModal from './CustomerSearchModal';

export default function SpoiledPdc() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    loanAcNo: '',
    noOfSpoiledPDCs: '',
    reason: '',
  });

  // Placeholder data - in a real app, this would come from an API after search
  const customerData = {
    customerName: 'Ashok Kumar',
    customerId: 'CUST-00123',
    disbursalDate: '2023-01-15',
    loanAmount: '500000.00',
    tenure: '36',
    lastEmiDate: '2026-01-15',
    extAcNo: 'EXT-98765',
    ledgerNo: 'LEDG-456',
    emiAmt: '15000.00',
    emisLeft: '24',
  };

  const handleSearch = () => {
    setIsModalOpen(true);
    // In a real app, on selecting a customer from the modal,
    // you would populate the form and customerData.
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log('Saving spoiled PDC data:', { ...customerData, ...formData });
    alert('Spoiled PDC data saved!');
  };

  const handleCancel = () => {
    setFormData({
      loanAcNo: '',
      noOfSpoiledPDCs: '',
      reason: '',
    });
    // Also clear customerData if needed
  };

  return (
    <>
      <div className="animate-fade-in-up max-w-5xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
        <div className="flex justify-between items-center mb-8 border-b-4 border-teal-200 pb-4">
          <h1 className="text-2xl font-extrabold text-blue-900 tracking-wider drop-shadow-lg uppercase">Update Spoiled PDC</h1>
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {/* Left Column */}
          <div className="space-y-3">
            <div className="flex items-center">
              <label className="w-40 text-gray-600 font-semibold">Customer Name:</label>
              <span className="font-medium text-gray-800">{customerData.customerName}</span>
            </div>
            <div className="flex items-center">
              <label className="w-40 text-gray-600 font-semibold">Customer ID:</label>
              <span className="font-medium text-gray-800">{customerData.customerId}</span>
            </div>
            <div className="flex items-center">
              <label className="w-40 text-gray-600 font-semibold">Disbursal Date:</label>
              <span className="font-medium text-gray-800">{customerData.disbursalDate}</span>
            </div>
            <div className="flex items-center">
              <label className="w-40 text-gray-600 font-semibold">Loan Amount:</label>
              <span className="font-medium text-gray-800">{customerData.loanAmount}</span>
            </div>
            <div className="flex items-center">
              <label className="w-40 text-gray-600 font-semibold">Tenure In Mths:</label>
              <span className="font-medium text-gray-800">{customerData.tenure}</span>
            </div>
            <div className="flex items-center">
              <label className="w-40 text-gray-600 font-semibold">Last EMI Date:</label>
              <span className="font-medium text-gray-800">{customerData.lastEmiDate}</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            <div className="flex items-center">
              <label className="w-32 text-gray-600 font-semibold" htmlFor="loanAcNo">Loan Ac No.:</label>
              <select
                id="loanAcNo"
                name="loanAcNo"
                value={formData.loanAcNo}
                onChange={handleChange}
                className="flex-grow bg-white border border-gray-300 rounded-md px-3 py-1 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Account</option>
                <option value="AC001">AC001</option>
                <option value="AC002">AC002</option>
              </select>
            </div>
            <div className="flex items-center">
              <label className="w-32 text-gray-600 font-semibold">Ext Ac No.:</label>
              <span className="font-medium text-gray-800">{customerData.extAcNo}</span>
            </div>
            <div className="flex items-center">
              <label className="w-32 text-gray-600 font-semibold">Ledger No:</label>
              <span className="font-medium text-gray-800">{customerData.ledgerNo}</span>
            </div>
            <div className="flex items-center">
              <label className="w-32 text-gray-600 font-semibold">EMI Amt.:</label>
              <span className="font-medium text-gray-800">{customerData.emiAmt}</span>
            </div>
            <div className="flex items-center">
              <label className="w-32 text-gray-600 font-semibold">EMIs Left:</label>
              <span className="font-medium text-gray-800">{customerData.emisLeft}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <div className="flex items-center">
              <label className="w-40 text-gray-600 font-semibold" htmlFor="noOfSpoiledPDCs">No. Of Spoiled PDCs:</label>
              <input
                type="number"
                id="noOfSpoiledPDCs"
                name="noOfSpoiledPDCs"
                value={formData.noOfSpoiledPDCs}
                onChange={handleChange}
                className="w-40 bg-white border border-gray-300 rounded-md px-3 py-1 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
             <div className="flex items-center">
              <label className="w-24 text-gray-600 font-semibold" htmlFor="reason">Reason:</label>
              <input
                type="text"
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="flex-grow bg-white border border-gray-300 rounded-md px-3 py-1 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Cancel
          </button>
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
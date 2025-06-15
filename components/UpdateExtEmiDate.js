import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

export default function UpdateExtEmiDate() {
  const [loanAcNo, setLoanAcNo] = useState('');
  const [firstExtEmiDate, setFirstExtEmiDate] = useState(null);

  // Placeholder data - in a real app, this would be fetched based on the selected loanAcNo
  const customerData = {
    customerName: 'Customer Name',
    customerId: 'Customer ID',
    vehRegnNo: 'Veh Regn No.',
    firstEmiDate: 'First EMI Date',
    extPartyName: 'Ext Party Name',
    extAcNo: 'Ext Ac No.',
    loanDate: 'Loan Date',
  };

  const handleSearch = () => {
    // Logic to search and populate data based on loanAcNo
    console.log('Searching for Loan Ac No:', loanAcNo);
  };

  const handleSave = () => {
    // Logic to save the new First Ext EMI Date
    console.log('Saving First Ext EMI Date:', firstExtEmiDate);
    alert('Data Saved!');
  };

  const handleCancel = () => {
    setLoanAcNo('');
    setFirstExtEmiDate(null);
  };

  return (
    <div className="animate-fade-in-up max-w-4xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
      <div className="flex justify-between items-center border-b-4 border-teal-200 pb-2 mb-8">
        <h2 className="text-3xl font-extrabold text-blue-900 tracking-wider drop-shadow-lg uppercase">
          Update Ext EMI Date
        </h2>
        <button 
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-lg shadow-md border border-blue-700 transition-all duration-200"
        >
          Search
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-lg">
        {/* Left Column */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center">
            <label className="w-48 font-semibold text-blue-900">Customer Name:</label>
            <span className="font-medium text-gray-700">{customerData.customerName}</span>
          </div>
          <div className="flex items-center">
            <label className="w-48 font-semibold text-blue-900">Customer ID:</label>
            <span className="font-medium text-gray-700">{customerData.customerId}</span>
          </div>
          <div className="flex items-center">
            <label className="w-48 font-semibold text-blue-900">Veh Regn No.:</label>
            <span className="font-medium text-gray-700">{customerData.vehRegnNo}</span>
          </div>
          <div className="flex items-center">
            <label className="w-48 font-semibold text-blue-900">First EMI Date:</label>
            <span className="font-medium text-gray-700">{customerData.firstEmiDate}</span>
          </div>
          <div className="flex items-center">
            <label className="w-48 font-semibold text-blue-900">Ext Party Name:</label>
            <span className="font-medium text-gray-700">{customerData.extPartyName}</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center">
            <label className="w-48 font-semibold text-blue-900">Loan Ac No.:</label>
            <select 
              value={loanAcNo} 
              onChange={(e) => setLoanAcNo(e.target.value)} 
              className="input-glass flex-grow"
            >
              <option value="">Select Loan Ac No.</option>
              {/* Add loan account number options here */}
            </select>
          </div>
          <div className="flex items-center">
            <label className="w-48 font-semibold text-blue-900">Ext Ac No.:</label>
            <span className="font-medium text-gray-700">{customerData.extAcNo}</span>
          </div>
          <div className="flex items-center">
            <label className="w-48 font-semibold text-blue-900">Loan Date:</label>
            <span className="font-medium text-gray-700">{customerData.loanDate}</span>
          </div>
          <div className="flex items-center">
            <label className="w-48 font-semibold text-blue-900">First Ext EMI Date:</label>
            <DatePicker 
              selected={firstExtEmiDate}
              onChange={(date) => setFirstExtEmiDate(date)}
              dateFormat="dd-MM-yyyy"
              placeholderText="DD-MM-YYYY"
              className="input-glass flex-grow"
              showYearDropdown
              showMonthDropdown
              dropdownMode="select"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-8 mt-12">
        <button 
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-3 rounded-lg shadow-xl border-2 border-blue-700 transition-all duration-200"
        >
          Save
        </button>
        <button 
          onClick={handleCancel}
          className="bg-gray-400 hover:bg-gray-500 text-white font-bold px-10 py-3 rounded-lg shadow-xl border-2 border-gray-500 transition-all duration-200"
        >
          Cancel
        </button>
      </div>

      <style jsx>{`
        .input-glass {
          @apply bg-white/90 border border-blue-300 rounded-lg px-4 py-2 shadow-inner focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all placeholder-gray-400;
        }
      `}</style>
    </div>
  );
} 
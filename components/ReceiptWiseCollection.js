import React, { useState } from 'react';

const ReceiptWiseCollection = () => {
  const [loanType, setLoanType] = useState('Vehicle Loan');
  const [reportDuration, setReportDuration] = useState('Monthly');
  const [fromMonth, setFromMonth] = useState('Jun');
  const [fromYear, setFromYear] = useState('2025');
  const [toMonth, setToMonth] = useState('Jun');
  const [toYear, setToYear] = useState('2025');
  const [hpName, setHpName] = useState('Hinduja Leyland Finance Limited, Gurgaon');

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const handleClear = () => {
    setLoanType('Vehicle Loan');
    setReportDuration('Monthly');
    setFromMonth('Jun');
    setFromYear('2025');
    setToMonth('Jun');
    setToYear('2025');
    setHpName('Hinduja Leyland Finance Limited, Gurgaon');
  };

  const handleExport = () => {
    // Logic for exporting to Excel would go here
    alert('Exporting report...');
  };

  return (
    <div className="animate-fade-in-up max-w-5xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
      <h1 className="text-3xl font-extrabold text-blue-900 tracking-wider drop-shadow-lg uppercase border-b-4 border-teal-200 pb-4 mb-8">
        Loan-wise Receipts
      </h1>
      
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <label className="w-40 text-right font-semibold text-gray-700">Loan Type:</label>
          <select
            value={loanType}
            onChange={(e) => setLoanType(e.target.value)}
            className="w-80 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option>Vehicle Loan</option>
            <option>Personal Loan</option>
          </select>
        </div>

        <div className="flex items-center space-x-4">
            <label className="w-40 text-right font-semibold text-gray-700">Report Duration:</label>
            <select
              value={reportDuration}
              onChange={(e) => setReportDuration(e.target.value)}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Monthly</option>
              <option>Daily</option>
              <option>Custom</option>
            </select>
          </div>

        <div className="flex items-center space-x-4">
          <label className="w-40 text-right font-semibold text-gray-700">From:</label>
          <select
            value={fromMonth}
            onChange={(e) => setFromMonth(e.target.value)}
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            {months.map(m => <option key={`from-${m}`} value={m}>{m}</option>)}
          </select>
          <input
            type="text"
            value={fromYear}
            onChange={(e) => setFromYear(e.target.value)}
            className="w-24 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Year"
          />
          <label className="ml-8 font-semibold text-gray-700">To:</label>
          <select
            value={toMonth}
            onChange={(e) => setToMonth(e.target.value)}
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            {months.map(m => <option key={`to-${m}`} value={m}>{m}</option>)}
          </select>
          <input
            type="text"
            value={toYear}
            onChange={(e) => setToYear(e.target.value)}
            className="w-24 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Year"
          />
        </div>

        <div className="flex items-center space-x-4">
          <label className="w-40 text-right font-semibold text-gray-700">HP Name:</label>
          <select
            value={hpName}
            onChange={(e) => setHpName(e.target.value)}
            className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option>Hinduja Leyland Finance Limited, Gurgaon</option>
            <option>Bajaj Finance Ltd</option>
            <option>HDFC Bank</option>
          </select>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center space-x-4">
        <button
          onClick={handleExport}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
        >
          Export to Excel
        </button>
        <button
          onClick={handleClear}
          className="px-8 py-3 bg-gray-200 text-gray-800 font-bold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-all"
        >
          Clear All
        </button>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ReceiptWiseCollection; 
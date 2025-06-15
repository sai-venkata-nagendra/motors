import React, { useState } from 'react';
import OtherChgsCollectionTable from './OtherChgsCollectionTable';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const OtherChgsCollection = () => {
  const [reportDuration, setReportDuration] = useState('Day-Wise');
  const [fromDate, setFromDate] = useState(new Date('2025-06-12'));
  const [toDate, setToDate] = useState(new Date('2025-06-12'));
  const [showReport, setShowReport] = useState(false);

  const handleClear = () => {
    setReportDuration('Day-Wise');
    setFromDate(new Date('2025-06-12'));
    setToDate(new Date('2025-06-12'));
    setShowReport(false);
  };

  const handleGetReport = () => {
    setShowReport(true);
  };

  return (
    <>
      <div className="animate-fade-in-up max-w-5xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
        <h1 className="text-3xl font-extrabold text-blue-900 tracking-wider drop-shadow-lg uppercase border-b-4 border-teal-200 pb-4 mb-8">
          Other Charges Collection Report
        </h1>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <label className="w-40 text-right font-semibold text-gray-700">Report Duration:</label>
            <select
              value={reportDuration}
              onChange={(e) => setReportDuration(e.target.value)}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Day-Wise</option>
              <option>Monthly</option>
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <label className="w-40 text-right font-semibold text-gray-700">From Date:</label>
            <DatePicker
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                dateFormat="dd-MM-yyyy"
                className="w-48 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            <label className="ml-8 font-semibold text-gray-700">To Date:</label>
            <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                dateFormat="dd-MM-yyyy"
                className="w-48 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
          </div>
        </div>

        <div className="mt-10 flex items-center justify-start space-x-6">
           <a href="#" className="text-blue-600 hover:underline font-semibold">
            Export to Excel
          </a>
          <button
            onClick={handleGetReport}
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
          >
            Get Report
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
      {showReport && <OtherChgsCollectionTable />}
    </>
  );
};

export default OtherChgsCollection; 
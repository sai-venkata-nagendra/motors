import React, { useState } from 'react';
import CancelledReceiptsTable from './CancelledReceiptsTable';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CancelledReceipts = () => {
  const [reportDuration, setReportDuration] = useState('Day-Wise');
  const [fromDate, setFromDate] = useState(new Date('2025-06-12'));
  const [toDate, setToDate] = useState(new Date('2025-06-12'));
  const [cancelledBy, setCancelledBy] = useState('Select');
  const [allUsers, setAllUsers] = useState(true);
  const [showReport, setShowReport] = useState(false);

  const handleClear = () => {
    setReportDuration('Day-Wise');
    setFromDate(new Date('2025-06-12'));
    setToDate(new Date('2025-06-12'));
    setCancelledBy('Select');
    setAllUsers(true);
    setShowReport(false);
  };

  const handleGetReport = () => {
    setShowReport(true);
  };

  return (
    <>
      <div className="animate-fade-in-up max-w-5xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
        <h1 className="text-3xl font-extrabold text-blue-900 tracking-wider drop-shadow-lg uppercase border-b-4 border-teal-200 pb-4 mb-8">
          Receipt Cancellation Report
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

          <div className="flex items-center space-x-4">
            <label className="w-40 text-right font-semibold text-gray-700">Cancelled By:</label>
            <select
              value={cancelledBy}
              onChange={(e) => setCancelledBy(e.target.value)}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-48"
              disabled={allUsers}
            >
              <option>Select</option>
              <option>Admin</option>
              <option>User1</option>
            </select>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="allUsers"
                    checked={allUsers}
                    onChange={(e) => setAllUsers(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="allUsers" className="ml-2 block text-sm text-gray-900">
                    All Users
                </label>
            </div>
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
      {showReport && <CancelledReceiptsTable />}
    </>
  );
};

export default CancelledReceipts; 
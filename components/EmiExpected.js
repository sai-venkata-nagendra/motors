import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import EmiExpectedReportView from './EmiExpectedReportView';

export default function EmiExpected() {
  const [fromDate, setFromDate] = useState(new Date('2025-06-12'));
  const [toDate, setToDate] = useState(new Date('2025-06-12'));
  const [showSummary, setShowSummary] = useState(true);
  const [showReport, setShowReport] = useState(false);

  const handleClear = () => {
    setFromDate(null);
    setToDate(null);
    setShowSummary(false);
    setShowReport(false);
  };

  const handleGetReport = () => {
      setShowReport(true);
  }
  
  if (showReport) {
    return <EmiExpectedReportView fromDate={fromDate} toDate={toDate} onBack={() => setShowReport(false)} />;
  }

  return (
    <div className="animate-fade-in-up max-w-5xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
      <h2 className="text-3xl font-extrabold text-blue-900 border-b-4 border-teal-200 pb-4 mb-8 tracking-wider uppercase">
        EMI Expected Report
      </h2>

      <div className="space-y-6">
        <div className="flex items-center gap-12">
            <div className="flex items-center gap-4">
                <label className="font-semibold text-lg text-gray-700">From:</label>
                <DatePicker
                    selected={fromDate}
                    onChange={(date) => setFromDate(date)}
                    dateFormat="dd-MM-yyyy"
                    className="input-field w-40 bg-yellow-100 border-yellow-300"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                />
            </div>
            <div className="flex items-center gap-4">
                <label className="font-semibold text-lg text-gray-700">To:</label>
                <DatePicker
                    selected={toDate}
                    onChange={(date) => setToDate(date)}
                    dateFormat="dd-MM-yyyy"
                    className="input-field w-40"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                />
            </div>
        </div>
        <div className="flex items-center">
            <input
                type="checkbox"
                id="showSummary"
                checked={showSummary}
                onChange={() => setShowSummary(!showSummary)}
                className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="showSummary" className="ml-3 text-md font-medium text-gray-800">
                Show Day-wise summary
            </label>
        </div>
      </div>
      

      <div className="mt-12 flex items-center justify-between border-t-2 border-gray-200 pt-8">
        <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline font-semibold transition-colors">
          Export to Excel
        </a>
        <div className="flex gap-4">
          <button
            onClick={handleGetReport}
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

      <style jsx>{`
        .input-field {
          @apply bg-white border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all text-center;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .react-datepicker-wrapper {
          width: auto;
        }
      `}</style>
    </div>
  );
} 
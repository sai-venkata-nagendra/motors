import React, { useState } from 'react';
import CollectionAgentReportTable from './CollectionAgentReportTable';

const CollectionAgentReport = () => {
  const [agentName, setAgentName] = useState('ALL AGENTS');
  const [reportDuration, setReportDuration] = useState('Monthly');
  const [forMonth, setForMonth] = useState('Jun');
  const [forYear, setForYear] = useState('2025');
  const [showReport, setShowReport] = useState(false);

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const handleClear = () => {
    setAgentName('ALL AGENTS');
    setReportDuration('Monthly');
    setForMonth('Jun');
    setForYear('2025');
    setShowReport(false);
  };

  const handleGetReport = () => {
    setShowReport(true);
  };

  return (
    <>
      <div className="animate-fade-in-up max-w-5xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
        <h1 className="text-3xl font-extrabold text-blue-900 tracking-wider drop-shadow-lg uppercase border-b-4 border-teal-200 pb-4 mb-8">
          Collection Agent Reports
        </h1>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <label className="w-40 text-right font-semibold text-gray-700">Agent Name:</label>
            <select
              value={agentName}
              onChange={(e) => setAgentName(e.target.value)}
              className="w-80 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option>ALL AGENTS</option>
              <option>Ramesh Kumar</option>
              <option>Suresh Singh</option>
              <option>Amit Sharma</option>
              <option>Sunita Devi</option>
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
            <label className="w-40 text-right font-semibold text-gray-700">For:</label>
            <select
              value={forMonth}
              onChange={(e) => setForMonth(e.target.value)}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              {months.map(m => <option key={`for-${m}`} value={m}>{m}</option>)}
            </select>
            <input
              type="text"
              value={forYear}
              onChange={(e) => setForYear(e.target.value)}
              className="w-24 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Year"
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
      {showReport && <CollectionAgentReportTable />}
    </>
  );
};

export default CollectionAgentReport; 
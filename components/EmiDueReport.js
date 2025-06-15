import React, { useState } from 'react';
import ErrorModal from './ErrorModal';
import EmiDueReportView from './EmiDueReportView';

const reportTypes = [
  'EMI due in next 2 days',
  'EMI due today',
  'EMI overdue upto 7 days',
  'EMI overdue more than 7 days upto 15 days',
  'EMI overdue more than 15 days upto 30 days',
  'EMI overdue more than 30 days upto 60 days',
  'EMI overdue more than 60 days upto 90 days',
  'EMI overdue more than 90 days',
  'All due EMIs'
];

export default function EmiDueReport() {
  const [selectedReport, setSelectedReport] = useState('EMI due today');
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isExportClicked, setIsExportClicked] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const handleClear = () => {
    setSelectedReport('');
    setIsExportClicked(false);
  };

  const handleGetReport = () => {
    if (!selectedReport) {
      alert('Please select a report type.');
      return;
    }
    if (isExportClicked) {
      setShowReport(true);
    } else {
      setIsErrorModalOpen(true);
    }
  };
  
  const handleExportClick = () => {
    setIsExportClicked(true);
    // In a real app, this would trigger a download.
    // For now, it just enables the Get Report button.
  }

  if (showReport) {
    return <EmiDueReportView reportType={selectedReport} onBack={() => setShowReport(false)} />;
  }

  return (
    <>
    <div className="animate-fade-in-up max-w-5xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
      <h2 className="text-3xl font-extrabold text-blue-900 border-b-4 border-teal-200 pb-4 mb-8 tracking-wider uppercase">
        EMI Due Report
      </h2>
      
      <div className="flex">
        <div className="w-1/4 font-semibold text-lg text-gray-700">Select Report Type:</div>
        <div className="w-3/4 space-y-4">
          {reportTypes.map(type => (
            <div key={type} className="flex items-center">
              <input
                type="radio"
                id={type}
                name="reportType"
                value={type}
                checked={selectedReport === type}
                onChange={() => setSelectedReport(type)}
                className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor={type} className="ml-3 block text-md font-medium text-gray-800">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex items-center justify-between border-t-2 border-gray-200 pt-8">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            handleExportClick();
          }}
          className={`font-semibold transition-colors ${isExportClicked ? 'text-green-600 hover:text-green-800' : 'text-blue-600 hover:text-blue-800 hover:underline'}`}
        >
          {isExportClicked ? 'Ready to Get Report' : 'Export to Excel'}
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
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        input[type="radio"] {
            appearance: none;
            border: 2px solid #ccc;
            border-radius: 50%;
            width: 1.25rem;
            height: 1.25rem;
            position: relative;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
        }
        input[type="radio"]:checked {
            border-color: #2563eb; /* blue-600 */
            background-color: #3b82f6; /* blue-500 */
        }
        input[type="radio"]:checked::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background: white;
            transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
    <ErrorModal 
        isOpen={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
        title="Error"
        message="This report is only available as 'Excel file'. Click 'Export to Excel' to download."
    />
    </>
  );
} 
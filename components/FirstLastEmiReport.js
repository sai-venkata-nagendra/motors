import React, { useState } from 'react';
import FirstEmiReportView from './FirstEmiReportView';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 20 }, (_, i) => currentYear - 10 + i);

export default function FirstLastEmiReport() {
  const [emiStatus, setEmiStatus] = useState('non-starter');
  const [reportType, setReportType] = useState('first-emi-report');
  const [fromMonth, setFromMonth] = useState('Jun');
  const [fromYear, setFromYear] = useState('2025');
  const [toMonth, setToMonth] = useState('Jun');
  const [toYear, setToYear] = useState('2025');
  const [showReport, setShowReport] = useState(false);

  const handleStatusChange = (e) => {
    setEmiStatus(e.target.value);
  };

  const handleGetReport = () => {
    setShowReport(true);
  };
  
  const handleBackToForm = () => {
    setShowReport(false);
  };

  const handleClearAll = () => {
    setEmiStatus('non-starter');
    setReportType('first-emi-report');
    setFromMonth('Jun');
    setFromYear('2025');
    setToMonth('Jun');
    setToYear('2025');
    setShowReport(false);
  };

  if (showReport) {
    return (
      <FirstEmiReportView
        reportType={reportType}
        fromMonth={fromMonth}
        fromYear={fromYear}
        toMonth={toMonth}
        toYear={toYear}
        onBack={handleBackToForm}
      />
    );
  }

  return (
    <div 
      id="firstLastEmiReport" 
      className="animate-fade-in-up max-w-4xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80"
    >
      <h2 className="text-3xl font-extrabold mb-10 text-blue-900 border-b-4 border-teal-200 pb-4 tracking-wider drop-shadow-lg text-center uppercase">
        First / Last EMI Report
      </h2>

      <div className="space-y-8">
        <div className="bg-white/80 rounded-2xl shadow-lg p-8 border border-blue-100 space-y-6">
          <div className="flex items-start gap-6">
            <label className="w-40 text-lg font-semibold text-blue-900 pt-2">EMI Status:</label>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Non Starter Loans', 'Pending', 'Paid', 'All'].map((status) => {
                const value = status.toLowerCase().replace(/ /g, '-');
                return (
                  <label key={status} className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 border-2 ${emiStatus === value ? 'bg-blue-200 border-blue-400 shadow-sm' : 'bg-white hover:bg-blue-50 border-gray-200'}`}>
                    <input
                      type="radio"
                      name="emiStatus"
                      value={value}
                      checked={emiStatus === value}
                      onChange={handleStatusChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-md font-medium text-gray-800">{status}</span>
                  </label>
                );
              })}
            </div>
          </div>
          
          {emiStatus === 'pending' && (
            <div className="animate-fade-in-up space-y-6 pt-6 border-t border-blue-200">
              <div className="flex items-center gap-6">
                <label className="w-40 text-lg font-semibold text-blue-900">Report Type:</label>
                <select 
                  value={reportType} 
                  onChange={(e) => setReportType(e.target.value)}
                  className="flex-grow border border-blue-200 rounded-lg px-3 py-2 bg-white shadow-sm"
                >
                  <option value="first-emi-report">First EMI Report</option>
                  <option value="last-emi-report">Last EMI Report</option>
                </select>
              </div>

              <div className="flex items-center gap-6">
                <label className="w-40 text-lg font-semibold text-blue-900">From:</label>
                <div className="flex items-center gap-2">
                  <select value={fromMonth} onChange={(e) => setFromMonth(e.target.value)} className="border border-blue-200 rounded-lg px-3 py-2 bg-white shadow-sm">
                    {months.map(m => <option key={`from-${m}`} value={m}>{m}</option>)}
                  </select>
                  <input value={fromYear} onChange={(e) => setFromYear(e.target.value)} className="w-24 border border-blue-200 rounded-lg px-3 py-2 shadow-sm" placeholder="Year" />
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <label className="w-40 text-lg font-semibold text-blue-900">To:</label>
                <div className="flex items-center gap-2">
                  <select value={toMonth} onChange={(e) => setToMonth(e.target.value)} className="border border-blue-200 rounded-lg px-3 py-2 bg-white shadow-sm">
                    {months.map(m => <option key={`to-${m}`} value={m}>{m}</option>)}
                  </select>
                  <input value={toYear} onChange={(e) => setToYear(e.target.value)} className="w-24 border border-blue-200 rounded-lg px-3 py-2 shadow-sm" placeholder="Year" />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between pt-6 border-t border-teal-200">
          <a href="#" className="text-blue-700 hover:text-blue-900 font-bold transition-colors">
            Export to Excel
          </a>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={handleGetReport}
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-200 border-2 border-blue-700 text-lg"
            >
              Get Report
            </button>
            <button
              onClick={handleClearAll}
              className="bg-gradient-to-r from-gray-100 to-blue-100 hover:from-gray-200 hover:to-blue-200 text-blue-700 font-bold px-8 py-3 rounded-xl shadow-lg border-2 border-blue-300 transition-all duration-200 text-lg"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out;
        }
      `}</style>
    </div>
  );
} 
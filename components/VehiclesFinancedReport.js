import React from 'react';

const VehiclesFinancedReport = ({ fromDate, toDate }) => {
  const reportData = [
    { no: 1, delDate: '02-06-25', customerName: 'VIKASH CHAUHAN', regnNo: '', make: 'Baxy Express G Cng60788', chNo: '', engNo: '31777', loanAmount: '2,87,000.00' },
    { no: 2, delDate: '06-06-25', customerName: 'MUKESH SINGH', regnNo: '', make: 'Baxy Express G Cng61313', chNo: '', engNo: '52721', loanAmount: '2,80,000.00' },
  ];

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(num).replace('₹', '');
  };

  const totalForMonth = reportData.reduce((acc, item) => acc + parseFloat(item.loanAmount.replace(/,/g, '')), 0);
  const grandTotal = totalForMonth;

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg mt-8 animate-fade-in-up">
      <div className="flex justify-between items-start mb-4">
        <div className="text-left">
          <h1 className="text-2xl font-bold text-gray-800">Vehicles Financed</h1>
          <p className="text-gray-600">All</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600">12-Jun-2025</p>
        </div>
      </div>
      <div className="text-center mb-6">
        <p className="font-semibold text-gray-700">From 01-Jun-2025 - To - 30-Jun-2025</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-sm">
          <thead className="border-t-2 border-b-2 border-gray-400">
            <tr>
              <th className="px-4 py-2 text-left font-bold text-gray-700">No.</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Del. Date</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Customer Name</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Regn No.</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Make</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Ch No.</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Eng No.</th>
              <th className="px-4 py-2 text-right font-bold text-gray-700">Loan Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
                <td colSpan="8" className="px-4 py-1 font-semibold text-gray-800">Jun-2025</td>
            </tr>
            {reportData.map((row, index) => (
              <tr key={row.no} className={`border-b ${index % 2 === 1 ? 'bg-gray-100' : ''}`}>
                <td className="px-4 py-2">{row.no}</td>
                <td className="px-4 py-2">{row.delDate}</td>
                <td className="px-4 py-2">{row.customerName}</td>
                <td className="px-4 py-2">{row.regnNo}</td>
                <td className="px-4 py-2">{row.make}</td>
                <td className="px-4 py-2">{row.chNo}</td>
                <td className="px-4 py-2">{row.engNo}</td>
                <td className="px-4 py-2 text-right">{row.loanAmount}</td>
              </tr>
            ))}
            <tr className="border-t-2 border-gray-400">
              <td colSpan="7" className="px-4 py-2 text-right font-bold">Total For Jun-2025:</td>
              <td className="px-4 py-2 text-right font-bold">{formatNumber(totalForMonth)}</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td colSpan="7" className="px-4 py-2 text-right font-extrabold text-lg">Grand Total:</td>
              <td className="px-4 py-2 text-right font-extrabold text-lg">{formatNumber(grandTotal)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8 text-left text-sm text-gray-600">
        <p>Rajhans Motor Investment Co.</p>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default VehiclesFinancedReport; 
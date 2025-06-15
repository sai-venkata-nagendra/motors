import React from 'react';

const MoneyInMarketTable = () => {
  const data = [
    // Sample data - replace with actual data from API
    { particular: 'Total Loan Disbursed', amount: 5000000 },
    { particular: 'Total EMI Received', amount: 2500000 },
    { particular: 'Total DP Received', amount: 1000000 },
    { particular: 'Money in Market', amount: 1500000 },
  ];

  return (
    <div className="animate-fade-in-up mt-8 max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Money in Market Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Particulars</th>
              <th className="py-3 px-4 text-right">Amount (₹)</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((row, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4 font-semibold">{row.particular}</td>
                <td className="py-3 px-4 text-right">{row.amount.toLocaleString('en-IN')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MoneyInMarketTable; 
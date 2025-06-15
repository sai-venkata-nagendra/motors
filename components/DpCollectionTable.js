import React from 'react';

const DpCollectionTable = () => {
  const data = [
    // Sample data - replace with actual data from API
    { sno: 1, receiptNo: 'DP001', date: '2024-07-26', custName: 'John Doe', loanNo: 'L001', amount: 10000 },
    { sno: 2, receiptNo: 'DP002', date: '2024-07-26', custName: 'Jane Smith', loanNo: 'L002', amount: 15000 },
  ];

  return (
    <div className="animate-fade-in-up mt-8 max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">DP Collection Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">S.No.</th>
              <th className="py-3 px-4 text-left">Receipt No.</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Cust. Name</th>
              <th className="py-3 px-4 text-left">Loan No.</th>
              <th className="py-3 px-4 text-left">Amount</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((row) => (
              <tr key={row.sno} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">{row.sno}</td>
                <td className="py-3 px-4">{row.receiptNo}</td>
                <td className="py-3 px-4">{row.date}</td>
                <td className="py-3 px-4">{row.custName}</td>
                <td className="py-3 px-4">{row.loanNo}</td>
                <td className="py-3 px-4">{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DpCollectionTable; 
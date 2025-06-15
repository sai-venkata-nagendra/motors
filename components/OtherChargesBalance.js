import React, { useState } from 'react';

const dummyData = [
  { sr: 1, loanAcNo: 'RAM-1802MG-000358', customerName: 'AADIL ALI', extAcNo: 'RAM1802MG000358', regnNo: 'HR54GAK447', balanceAmt: 8500 },
  { sr: 2, loanAcNo: 'RMC-2017-000541', customerName: 'AAIS MOHAMMAD', extAcNo: 'DLGUJSVY0020', regnNo: 'HR54GA4137', balanceAmt: 9500 },
  { sr: 3, loanAcNo: 'RAM-1915-000104', customerName: 'ABHAY SINGH', extAcNo: 'DHGUJSVY0028', regnNo: 'HR54GA4107', balanceAmt: 5000 },
  { sr: 4, loanAcNo: 'RAM-1915-000105', customerName: 'ABHISHEK', extAcNo: 'DHGUJSVY0048', regnNo: 'HR54GA4108', balanceAmt: 6000 },
  { sr: 5, loanAcNo: 'RAM-1915-000106', customerName: 'ABHISHEK KUMAR', extAcNo: 'DHGUJSVY0047', regnNo: 'HR54GA4109', balanceAmt: 8000 },
  { sr: 6, loanAcNo: 'RAM-1915-000107', customerName: 'AJAY', extAcNo: 'DHGUJSVY0046', regnNo: 'HR54GA4110', balanceAmt: 5000 },
  { sr: 7, loanAcNo: 'RAM-1915-000108', customerName: 'AJAY', extAcNo: 'DLGUJSVY0023', regnNo: 'DL1AP4037', balanceAmt: 7000 },
  { sr: 8, loanAcNo: 'RMC-2017-000587', customerName: 'AKASH', extAcNo: 'DLGUJSVY0024', regnNo: 'HR54GA4111', balanceAmt: 9000 },
  { sr: 9, loanAcNo: 'RAM-1915-000109', customerName: 'AKSHAY', extAcNo: 'DLGUJSVY0025', regnNo: 'HR54GA4112', balanceAmt: 11000 },
  { sr: 10, loanAcNo: 'RAM-1915-000110', customerName: 'AMAN', extAcNo: 'DLGUJSVY0026', regnNo: 'HR54GA4113', balanceAmt: 12000 },
  // More dummy rows for a big table
  { sr: 11, loanAcNo: 'RAM-1915-000111', customerName: 'AMIT', extAcNo: 'DLGUJSVY0027', regnNo: 'HR54GA4114', balanceAmt: 13000 },
  { sr: 12, loanAcNo: 'RAM-1915-000112', customerName: 'ANIL', extAcNo: 'DLGUJSVY0028', regnNo: 'HR54GA4115', balanceAmt: 14000 },
  { sr: 13, loanAcNo: 'RAM-1915-000113', customerName: 'ANKIT', extAcNo: 'DLGUJSVY0029', regnNo: 'HR54GA4116', balanceAmt: 15000 },
  { sr: 14, loanAcNo: 'RAM-1915-000114', customerName: 'ARJUN', extAcNo: 'DLGUJSVY0030', regnNo: 'HR54GA4117', balanceAmt: 16000 },
  { sr: 15, loanAcNo: 'RAM-1915-000115', customerName: 'ASHISH', extAcNo: 'DLGUJSVY0031', regnNo: 'HR54GA4118', balanceAmt: 17000 },
  { sr: 16, loanAcNo: 'RAM-1915-000116', customerName: 'AVINASH', extAcNo: 'DLGUJSVY0032', regnNo: 'HR54GA4119', balanceAmt: 18000 },
  { sr: 17, loanAcNo: 'RAM-1915-000117', customerName: 'DEEPAK', extAcNo: 'DLGUJSVY0033', regnNo: 'HR54GA4120', balanceAmt: 19000 },
  { sr: 18, loanAcNo: 'RAM-1915-000118', customerName: 'GAURAV', extAcNo: 'DLGUJSVY0034', regnNo: 'HR54GA4121', balanceAmt: 20000 },
  { sr: 19, loanAcNo: 'RAM-1915-000119', customerName: 'KARAN', extAcNo: 'DLGUJSVY0035', regnNo: 'HR54GA4122', balanceAmt: 21000 },
  { sr: 20, loanAcNo: 'RAM-1915-000120', customerName: 'MANISH', extAcNo: 'DLGUJSVY0036', regnNo: 'HR54GA4123', balanceAmt: 22000 },
  { sr: 21, loanAcNo: 'RAM-1915-000121', customerName: 'MOHIT', extAcNo: 'DLGUJSVY0037', regnNo: 'HR54GA4124', balanceAmt: 23000 },
  { sr: 22, loanAcNo: 'RAM-1915-000122', customerName: 'RAHUL', extAcNo: 'DLGUJSVY0038', regnNo: 'HR54GA4125', balanceAmt: 24000 },
];

const sortOptions = [
  { value: 'customerName', label: 'Customer Name' },
  { value: 'balanceAmt', label: 'Balance Amt' },
  { value: 'loanAcNo', label: 'Loan Ac No' },
];

const orderOptions = [
  { value: 'asc', label: 'Ascending' },
  { value: 'desc', label: 'Descending' },
];

function sortData(data, sortBy, order) {
  const sorted = [...data].sort((a, b) => {
    if (sortBy === 'balanceAmt') {
      return order === 'asc' ? a.balanceAmt - b.balanceAmt : b.balanceAmt - a.balanceAmt;
    } else {
      return order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy]);
    }
  });
  return sorted;
}

const OtherChargesBalance = () => {
  const [sortBy, setSortBy] = useState('customerName');
  const [order, setOrder] = useState('asc');

  const sortedData = sortData(dummyData, sortBy, order);
  const totalBalance = dummyData.reduce((sum, row) => sum + row.balanceAmt, 0);

  return (
    <div className="max-w-7xl mx-auto mt-10 p-6 bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl border border-blue-200 backdrop-blur-xl bg-opacity-80 animate-fade-in-up">
      <h2 className="text-2xl font-extrabold text-blue-900 mb-4 border-b-4 border-teal-200 pb-2 tracking-wider drop-shadow-lg">Other Charges Balance</h2>
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <span className="font-semibold text-blue-800">Sorted By:</span>
        <select
          className="bg-white border border-blue-300 rounded-lg px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition-all"
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          {sortOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <select
          className="bg-white border border-blue-300 rounded-lg px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition-all"
          value={order}
          onChange={e => setOrder(e.target.value)}
        >
          {orderOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto rounded-2xl shadow-lg border border-blue-100 bg-white/80">
        <table className="min-w-full text-sm text-blue-900">
          <thead className="sticky top-0 z-10 bg-gradient-to-r from-blue-200 via-white to-teal-100 border-b-2 border-blue-200">
            <tr>
              <th className="px-3 py-3 text-left font-bold uppercase tracking-wider">Sr.</th>
              <th className="px-3 py-3 text-left font-bold uppercase tracking-wider">Loan Ac No</th>
              <th className="px-3 py-3 text-left font-bold uppercase tracking-wider">Customer Name</th>
              <th className="px-3 py-3 text-left font-bold uppercase tracking-wider">Ext Ac No</th>
              <th className="px-3 py-3 text-left font-bold uppercase tracking-wider">Regn No</th>
              <th className="px-3 py-3 text-right font-bold uppercase tracking-wider">Balance Amt</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, idx) => (
              <tr
                key={row.sr}
                className={
                  idx % 2 === 0
                    ? 'bg-white/90 hover:bg-blue-50 transition'
                    : 'bg-blue-50/80 hover:bg-blue-100 transition'
                }
              >
                <td className="px-3 py-2 font-semibold text-blue-700">{row.sr}</td>
                <td className="px-3 py-2 text-blue-800 underline cursor-pointer hover:text-blue-600 transition">{row.loanAcNo}</td>
                <td className="px-3 py-2">{row.customerName}</td>
                <td className="px-3 py-2">{row.extAcNo}</td>
                <td className="px-3 py-2">{row.regnNo}</td>
                <td className="px-3 py-2 text-right font-bold text-blue-900">{row.balanceAmt.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5} className="px-3 py-3 text-right font-bold text-blue-900 bg-gradient-to-r from-teal-100 via-white to-blue-100 rounded-bl-2xl">Total Other Charges Balance</td>
              <td className="px-3 py-3 text-right font-extrabold text-teal-700 bg-gradient-to-r from-teal-100 via-white to-blue-100">{totalBalance.toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
};

export default OtherChargesBalance; 
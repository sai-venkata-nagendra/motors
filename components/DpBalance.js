import React, { useState } from 'react';

const dummyData = [
  { sr: 1, loanAcNo: 'RAM-171225-000017', customerName: 'AMIT', extAcNo: 'DELF020730002', regnNo: 'DELF020730002', vehDelDt: '2023-01-10', balanceAmt: 21700, lastPymtOn: '2023-02-01' },
  { sr: 2, loanAcNo: 'RAM-171226-000174', customerName: 'ANIL KUMAR', extAcNo: 'DELF020780001', regnNo: 'DELF020780001', vehDelDt: '2023-01-12', balanceAmt: 22000, lastPymtOn: '2023-02-03' },
  { sr: 3, loanAcNo: 'RAM-171226-000245', customerName: 'AMIT', extAcNo: 'NFLAONRM00011', regnNo: 'NFLAONRM00011', vehDelDt: '2023-01-15', balanceAmt: 13150, lastPymtOn: '2023-02-05' },
  { sr: 4, loanAcNo: 'RAM-171226-000256', customerName: 'AMIT SINGH', extAcNo: 'RAMT017000015', regnNo: 'RAMT017000015', vehDelDt: '2023-01-18', balanceAmt: 18700, lastPymtOn: '2023-02-07' },
  { sr: 5, loanAcNo: 'RAM-171226-000258', customerName: 'AVIR ISHAN', extAcNo: 'DELF020780002', regnNo: 'DELF020780002', vehDelDt: '2023-01-20', balanceAmt: 15000, lastPymtOn: '2023-02-09' },
  { sr: 6, loanAcNo: 'RAM-171226-000261', customerName: 'AASIF', extAcNo: 'DELT205781013', regnNo: 'DELT205781013', vehDelDt: '2023-01-22', balanceAmt: 5000, lastPymtOn: '2023-02-11' },
  { sr: 7, loanAcNo: 'RAM-171226-000274', customerName: 'AASHU', extAcNo: 'NFLAONRM00013', regnNo: 'NFLAONRM00013', vehDelDt: '2023-01-25', balanceAmt: 12000, lastPymtOn: '2023-02-13' },
  { sr: 8, loanAcNo: 'RAM-171226-000541', customerName: 'ALI MOHAMMAD', extAcNo: 'DHGUJSVY0045', regnNo: 'DHGUJSVY0045', vehDelDt: '2023-01-28', balanceAmt: 10000, lastPymtOn: '2023-02-15' },
  { sr: 9, loanAcNo: 'RAM-171226-000720', customerName: 'ANIL', extAcNo: 'DHGUJSVY0047', regnNo: 'DHGUJSVY0047', vehDelDt: '2023-01-30', balanceAmt: 40000, lastPymtOn: '2023-02-17' },
  { sr: 10, loanAcNo: 'RAM-1101F68-000230', customerName: 'AKASH SAKSENA', extAcNo: 'DHGUJSVJ0068', regnNo: 'DHGUJSVJ0068', vehDelDt: '2023-02-02', balanceAmt: 10400, lastPymtOn: '2023-02-19' },
  // More dummy rows for a big table
  { sr: 11, loanAcNo: 'RAM-171226-000800', customerName: 'RAHUL', extAcNo: 'NFLAONRM00014', regnNo: 'NFLAONRM00014', vehDelDt: '2023-02-05', balanceAmt: 9000, lastPymtOn: '2023-02-21' },
  { sr: 12, loanAcNo: 'RAM-171226-000801', customerName: 'SUMIT', extAcNo: 'NFLAONRM00015', regnNo: 'NFLAONRM00015', vehDelDt: '2023-02-07', balanceAmt: 8500, lastPymtOn: '2023-02-23' },
  { sr: 13, loanAcNo: 'RAM-171226-000802', customerName: 'PRIYA', extAcNo: 'NFLAONRM00016', regnNo: 'NFLAONRM00016', vehDelDt: '2023-02-09', balanceAmt: 12000, lastPymtOn: '2023-02-25' },
  { sr: 14, loanAcNo: 'RAM-171226-000803', customerName: 'VIKAS', extAcNo: 'NFLAONRM00017', regnNo: 'NFLAONRM00017', vehDelDt: '2023-02-11', balanceAmt: 11000, lastPymtOn: '2023-02-27' },
  { sr: 15, loanAcNo: 'RAM-171226-000804', customerName: 'NEHA', extAcNo: 'NFLAONRM00018', regnNo: 'NFLAONRM00018', vehDelDt: '2023-02-13', balanceAmt: 9500, lastPymtOn: '2023-03-01' },
  { sr: 16, loanAcNo: 'RAM-171226-000805', customerName: 'ROHAN', extAcNo: 'NFLAONRM00019', regnNo: 'NFLAONRM00019', vehDelDt: '2023-02-15', balanceAmt: 10500, lastPymtOn: '2023-03-03' },
  { sr: 17, loanAcNo: 'RAM-171226-000806', customerName: 'SNEHA', extAcNo: 'NFLAONRM00020', regnNo: 'NFLAONRM00020', vehDelDt: '2023-02-17', balanceAmt: 9800, lastPymtOn: '2023-03-05' },
  { sr: 18, loanAcNo: 'RAM-171226-000807', customerName: 'MANISH', extAcNo: 'NFLAONRM00021', regnNo: 'NFLAONRM00021', vehDelDt: '2023-02-19', balanceAmt: 11200, lastPymtOn: '2023-03-07' },
  { sr: 19, loanAcNo: 'RAM-171226-000808', customerName: 'KAVITA', extAcNo: 'NFLAONRM00022', regnNo: 'NFLAONRM00022', vehDelDt: '2023-02-21', balanceAmt: 10100, lastPymtOn: '2023-03-09' },
  { sr: 20, loanAcNo: 'RAM-171226-000809', customerName: 'RAJESH', extAcNo: 'NFLAONRM00023', regnNo: 'NFLAONRM00023', vehDelDt: '2023-02-23', balanceAmt: 11500, lastPymtOn: '2023-03-11' },
  { sr: 21, loanAcNo: 'RAM-171226-000810', customerName: 'SONIA', extAcNo: 'NFLAONRM00024', regnNo: 'NFLAONRM00024', vehDelDt: '2023-02-25', balanceAmt: 10800, lastPymtOn: '2023-03-13' },
  { sr: 22, loanAcNo: 'RAM-171226-000811', customerName: 'VIVEK', extAcNo: 'NFLAONRM00025', regnNo: 'NFLAONRM00025', vehDelDt: '2023-02-27', balanceAmt: 9900, lastPymtOn: '2023-03-15' },
];

const sortOptions = [
  { value: 'vehDelDt', label: 'Veh Del Date' },
  { value: 'balanceAmt', label: 'Balance Amt' },
  { value: 'customerName', label: 'Customer Name' },
];

const orderOptions = [
  { value: 'asc', label: 'Ascending' },
  { value: 'desc', label: 'Descending' },
];

function sortData(data, sortBy, order) {
  const sorted = [...data].sort((a, b) => {
    if (sortBy === 'balanceAmt') {
      return order === 'asc' ? a.balanceAmt - b.balanceAmt : b.balanceAmt - a.balanceAmt;
    } else if (sortBy === 'vehDelDt') {
      return order === 'asc'
        ? new Date(a.vehDelDt) - new Date(b.vehDelDt)
        : new Date(b.vehDelDt) - new Date(a.vehDelDt);
    } else {
      return order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy]);
    }
  });
  return sorted;
}

const DpBalance = () => {
  const [sortBy, setSortBy] = useState('vehDelDt');
  const [order, setOrder] = useState('asc');

  const sortedData = sortData(dummyData, sortBy, order);
  const totalBalance = dummyData.reduce((sum, row) => sum + row.balanceAmt, 0);

  return (
    <div className="max-w-7xl mx-auto mt-10 p-6 bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl border border-blue-200 backdrop-blur-xl bg-opacity-80 animate-fade-in-up">
      <h2 className="text-2xl font-extrabold text-blue-900 mb-4 border-b-4 border-teal-200 pb-2 tracking-wider drop-shadow-lg">Down Payment Balance</h2>
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
              <th className="px-3 py-3 text-left font-bold uppercase tracking-wider">Veh Del Dt</th>
              <th className="px-3 py-3 text-right font-bold uppercase tracking-wider">Balance Amt</th>
              <th className="px-3 py-3 text-left font-bold uppercase tracking-wider">Last Pymt On</th>
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
                <td className="px-3 py-2">{row.vehDelDt}</td>
                <td className="px-3 py-2 text-right font-bold text-blue-900">{row.balanceAmt.toLocaleString()}</td>
                <td className="px-3 py-2">{row.lastPymtOn}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6} className="px-3 py-3 text-right font-bold text-blue-900 bg-gradient-to-r from-teal-100 via-white to-blue-100 rounded-bl-2xl">Total DP Balance</td>
              <td className="px-3 py-3 text-right font-extrabold text-teal-700 bg-gradient-to-r from-teal-100 via-white to-blue-100">{totalBalance.toLocaleString()}</td>
              <td className="bg-gradient-to-r from-teal-100 via-white to-blue-100 rounded-br-2xl"></td>
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

export default DpBalance; 
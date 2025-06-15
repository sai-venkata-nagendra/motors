import React, { useState } from 'react';

const data = [
  { sr: 1, loanAcNo: 'RMC-24J12A2-004864', customerName: 'ANIK PAL', regnNo: 'DL1LAK4854', insUpto: '28-05-1996', insCo: 'TATA AIG', chasisNo: '17093' },
  { sr: 2, loanAcNo: 'RAM-17M27CE-000001', customerName: 'DHANI RAM', regnNo: 'HR55AB3965', insUpto: '21-04-2017', insCo: 'ICICI LOMBARD', chasisNo: '07953' },
  { sr: 3, loanAcNo: 'RAM-17M2F0D-000004', customerName: 'PINTI', regnNo: 'HHR55AB8078', insUpto: '24-04-2018', insCo: 'ICICI LOMBARD', chasisNo: '07957' },
  { sr: 4, loanAcNo: 'RAM-17M292A-000016', customerName: 'PAWAN', regnNo: 'HONDACITY', insUpto: '09-05-2018', insCo: 'BHARTI AXA', chasisNo: '33561' },
  { sr: 5, loanAcNo: 'RAM-17M23BB-000018', customerName: 'RAVI KUMAR', regnNo: 'HHR55AB6681', insUpto: '21-05-2018', insCo: 'LIBERTY', chasisNo: '07663' },
  { sr: 6, loanAcNo: 'RAM-17M2E81-000011', customerName: 'RAJEEV YADAV', regnNo: 'HR55AB1170', insUpto: '21-05-2018', insCo: 'LIBERTY', chasisNo: '07217' },
  { sr: 7, loanAcNo: 'RAM-17J2232-000026', customerName: 'DINESH', regnNo: 'HH55AB9371', insUpto: '21-05-2018', insCo: 'Liberty', chasisNo: '08090' },
  { sr: 8, loanAcNo: 'RAM-17M2214-000008', customerName: 'DHEERAJ KUMAR YADAV', regnNo: 'HR55AB3358', insUpto: '24-05-2018', insCo: 'LIBERTY', chasisNo: '07075' },
  { sr: 9, loanAcNo: 'RMC-22M2C61-003267', customerName: 'SUNIL KUMAR', regnNo: 'HR55AC6064', insUpto: '02-06-2018', insCo: 'LIBERTY', chasisNo: '07983' },
  { sr: 10, loanAcNo: 'RAM-17J2CA8-000040', customerName: 'SARJEET', regnNo: 'HHR55AB9525', insUpto: '02-06-2018', insCo: 'LIBERTY', chasisNo: '08295' },
];

const PageNumbers = () => {
  const pages = Array.from({ length: 43 }, (_, i) => i + 1);
  return (
    <div className="flex flex-wrap">
      {pages.map(page => (
        <span key={page} className="mr-2 cursor-pointer hover:text-blue-600">{page}</span>
      ))}
    </div>
  );
};

export default function UpdateInsDetails() {
  const [recordsPerPage, setRecordsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('insuranceUpto');
  const [sortOrder, setSortOrder] = useState('Ascending');

  const totalRecords = 2130;

  return (
    <div className="animate-fade-in-up max-w-7xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
      <h2 className="text-3xl font-extrabold mb-8 text-blue-900 border-b-4 border-teal-200 pb-2 tracking-wider drop-shadow-lg text-left uppercase">
        Update Vehicle Insurance Details
      </h2>
      
      <div className="flex justify-between items-center mb-4 text-sm font-semibold text-blue-800">
        <div className="flex items-center space-x-2">
          <span>Records / Page:</span>
          <select value={recordsPerPage} onChange={(e) => setRecordsPerPage(Number(e.target.value))} className="input-glass">
            <option>50</option>
            <option>100</option>
            <option>200</option>
          </select>
        </div>
        <div>Page: {currentPage}</div>
        <div>Showing Records: 1 - {Math.min(recordsPerPage, data.length)} of {totalRecords}</div>
        <div className="flex items-center space-x-2">
          <span>Sorted By:</span>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="input-glass">
            <option value="insuranceUpto">Insurance Upto</option>
            <option value="customerName">Customer Name</option>
            <option value="loanAcNo">Loan Ac No</option>
          </select>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="input-glass">
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-md border border-blue-200">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-800 text-white uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Sr.</th>
              <th className="py-3 px-6 text-left">Loan Ac No</th>
              <th className="py-3 px-6 text-left">Customer Name</th>
              <th className="py-3 px-6 text-left">Regn No</th>
              <th className="py-3 px-6 text-left">Ins Upto</th>
              <th className="py-3 px-6 text-left">Ins Co</th>
              <th className="py-3 px-6 text-left">Chasis No</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {data.map((row, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-blue-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{row.sr}</td>
                <td className="py-3 px-6 text-left">
                  <span className="font-medium text-blue-600 hover:text-blue-800 cursor-pointer">{row.loanAcNo}</span>
                </td>
                <td className="py-3 px-6 text-left">{row.customerName}</td>
                <td className="py-3 px-6 text-left">{row.regnNo}</td>
                <td className="py-3 px-6 text-left">{row.insUpto}</td>
                <td className="py-3 px-6 text-left">{row.insCo}</td>
                <td className="py-3 px-6 text-left">{row.chasisNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm font-semibold text-blue-800">
        <div className="flex items-center">
            <span className="mr-2">First</span>
            <PageNumbers />
            <span className="ml-2">Last</span>
        </div>
        <div>
          <span className="cursor-pointer hover:text-blue-600">Next &gt;&gt;</span>
        </div>
      </div>

       <style jsx>{`
        .input-glass {
          @apply bg-white/90 border border-blue-200 rounded-lg px-2 py-1 shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all placeholder-blue-300;
        }
      `}</style>
    </div>
  );
} 
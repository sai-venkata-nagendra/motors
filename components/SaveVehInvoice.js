import React, { useState } from 'react';

const data = [
  { sr: 1, loanAcNo: 'RAM-18O1A3D-000706', customerName: 'AAJAM KHAN TEMPO SER', regnNo: 'HR55AF3897', vehDelDt: '12-10-2018', vehMake: 'Continental Engines Ltd', chasisNo: '16279' },
  { sr: 2, loanAcNo: 'RAM-18O1D45-000707', customerName: 'AAJAM KHAN TEMPO SER', regnNo: 'HR55AF8823', vehDelDt: '12-10-2018', vehMake: 'Continental Engines Ltd', chasisNo: '16384' },
  { sr: 3, loanAcNo: 'RAM-20J3485-002355', customerName: 'AAJAM KHAN TEMPO SER', regnNo: 'HR55AJ2782', vehDelDt: '23-03-2020', vehMake: 'Continental Engines Ltd', chasisNo: '29315' },
  { sr: 4, loanAcNo: 'RMC-23M2665-004337', customerName: 'AAKASH', regnNo: 'HR55AQ1206', vehDelDt: '15-05-2023', vehMake: 'Continental Engines Ltd', chasisNo: '46837' },
  { sr: 5, loanAcNo: 'RMC-24D188C-005443', customerName: 'AAKASH', regnNo: 'DL1LAK9475', vehDelDt: '05-12-2024', vehMake: 'Bajaj Maxima Cng', chasisNo: '22973' },
  { sr: 6, loanAcNo: 'RMC-22O1953-003792', customerName: 'AAMIR', regnNo: 'DL1LAK0408', vehDelDt: '03-10-2022', vehMake: 'Continental Engines Ltd', chasisNo: '41715' },
  { sr: 7, loanAcNo: 'RMC-24D1E1E-005444', customerName: 'AAMIR CHOUDHARY', regnNo: 'DL1LAK9383', vehDelDt: '27-11-2024', vehMake: 'Bajaj Maxima Cng', chasisNo: '22543' },
  { sr: 8, loanAcNo: 'RMC-25M1B9B-005757', customerName: 'AAMIR CHOUDHARY', regnNo: 'DL1LAP1571', vehDelDt: '28-02-2025', vehMake: 'Bajaj Maxima Cng', chasisNo: '01632' },
  { sr: 9, loanAcNo: 'RMC-25M2BBB-005865', customerName: 'AANAND KUMAR', regnNo: 'HR55AB3965', vehDelDt: '24-04-2025', vehMake: 'Continental Engines Ltd', chasisNo: '61389' },
  { sr: 10, loanAcNo: 'RMC-22N111F-003877', customerName: 'AARIF BEG', regnNo: 'HR55AM2792', vehDelDt: '20-10-2022', vehMake: 'Bajaj Re Compact 4s', chasisNo: '74516' },
];

const PageNumbers = () => {
  const totalRecords = 3447;
  const recordsPerPage = 50;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  return (
    <div className="flex flex-wrap">
      {pages.map(page => (
        <span key={page} className="mr-2 cursor-pointer hover:text-blue-600">{page}</span>
      ))}
    </div>
  );
};

export default function SaveVehInvoice() {
  const [recordsPerPage, setRecordsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('customerName');
  const [sortOrder, setSortOrder] = useState('Ascending');

  const totalRecords = 3447;

  return (
    <div className="animate-fade-in-up max-w-7xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
      <h2 className="text-3xl font-extrabold mb-8 text-blue-900 border-b-4 border-teal-200 pb-2 tracking-wider drop-shadow-lg text-left uppercase">
        Upload Vehicle Invoice
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
            <option value="customerName">Customer Name</option>
            <option value="loanAcNo">Loan Ac No</option>
            <option value="vehDelDt">Veh Del Dt</option>
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
              <th className="py-3 px-6 text-left">Veh Del Dt</th>
              <th className="py-3 px-6 text-left">Veh Make</th>
              <th className="py-3 px-6 text-left">Chasis No</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {data.map((row) => (
              <tr key={row.sr} className="border-b border-gray-200 hover:bg-blue-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{row.sr}</td>
                <td className="py-3 px-6 text-left">
                  <span className="font-medium text-blue-600 hover:text-blue-800 cursor-pointer">{row.loanAcNo}</span>
                </td>
                <td className="py-3 px-6 text-left">{row.customerName}</td>
                <td className="py-3 px-6 text-left">{row.regnNo}</td>
                <td className="py-3 px-6 text-left">{row.vehDelDt}</td>
                <td className="py-3 px-6 text-left">{row.vehMake}</td>
                <td className="py-3 px-6 text-left">{row.chasisNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-start mt-4 text-sm font-semibold text-blue-800">
        <div className="flex items-center flex-wrap">
            <span className="mr-2 cursor-pointer hover:text-blue-600">First</span>
            <PageNumbers />
            <span className="ml-2 cursor-pointer hover:text-blue-600">Last</span>
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
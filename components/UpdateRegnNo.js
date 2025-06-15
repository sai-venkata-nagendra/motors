import React, { useState } from 'react';

const data = [
  { sr: 1, loanAcNo: 'RMC-25M2BBB-005865', customerName: 'AANAND KUMAR', fatherName: 'Vijay Sah', vehDelDt: '24-04-2025', vehMake: 'Continental Engines Ltd', chasisNo: '61389' },
  { sr: 2, loanAcNo: 'RMC-25M2965-005868', customerName: 'AJAY', fatherName: 'Inder Pal', vehDelDt: '25-04-2025', vehMake: 'Continental Engines Ltd', chasisNo: '61371' },
  { sr: 3, loanAcNo: 'RMC-25J2A81-005925', customerName: 'AMANJEET SINGH', fatherName: 'Daljeet Singh', vehDelDt: '21-05-2025', vehMake: 'Bajaj Maxima Cng', chasisNo: '03942' },
  { sr: 4, loanAcNo: 'RMC-25J2BEF-005922', customerName: 'ANUJ KUMAR', fatherName: 'Jagdeesh Chandra', vehDelDt: '28-05-2025', vehMake: 'Continental Engines Ltd', chasisNo: '60852' },
  { sr: 5, loanAcNo: 'RMC-25M2C52-005902', customerName: 'BHARAT', fatherName: 'Hari Singh', vehDelDt: '16-05-2025', vehMake: 'Continental Engines Ltd', chasisNo: '60175' },
  { sr: 6, loanAcNo: 'RMC-25M2EC8-005905', customerName: 'BUNISH KUMAR', fatherName: 'Ram Autar Singh', vehDelDt: '19-05-2025', vehMake: 'Continental Engines Ltd', chasisNo: '61370' },
  { sr: 7, loanAcNo: 'RMC-25J2CD9-005924', customerName: 'BILAL', fatherName: 'Dilshad', vehDelDt: '21-05-2025', vehMake: 'Bajaj Maxima Cng', chasisNo: '09505' },
  { sr: 8, loanAcNo: 'RMC-25A174A-005839', customerName: 'BUNTI', fatherName: 'Daya Ram', vehDelDt: '12-04-2025', vehMake: 'Continental Engines Ltd', chasisNo: '61317' },
  { sr: 9, loanAcNo: 'RMC-25J27DD-005923', customerName: 'DEEPAK', fatherName: 'Bhagwati Prasad', vehDelDt: '27-05-2025', vehMake: 'Bajaj Maxima Cng', chasisNo: '06362' },
  { sr: 10, loanAcNo: 'RMC-25M2572-005899', customerName: 'DEEPAK SHARMA', fatherName: 'Shiv Charan Joshi', vehDelDt: '12-05-2025', vehMake: 'Continental Engines Ltd', chasisNo: '61372' },
];

export default function UpdateRegnNo() {
  const [recordsPerPage, setRecordsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('customerName');
  const [sortOrder, setSortOrder] = useState('Ascending');

  const totalRecords = 100; // As per the screenshot
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  return (
    <div className="animate-fade-in-up max-w-7xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
      <h2 className="text-3xl font-extrabold mb-8 text-blue-900 border-b-4 border-teal-200 pb-2 tracking-wider drop-shadow-lg text-left uppercase">
        Update Vehicle Regn No.
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
              <th className="py-3 px-6 text-left">Father's Name</th>
              <th className="py-3 px-6 text-left">Veh Del Dt</th>
              <th className="py-3 px-6 text-left">Veh Make</th>
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
                <td className="py-3 px-6 text-left">{row.fatherName}</td>
                <td className="py-3 px-6 text-left">{row.vehDelDt}</td>
                <td className="py-3 px-6 text-left">{row.vehMake}</td>
                <td className="py-3 px-6 text-left">{row.chasisNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm font-semibold text-blue-800">
        <div>
          <span className="mr-2">First</span>
          <span className="mr-2 cursor-pointer hover:text-blue-600">1</span>
          <span className="mr-2 cursor-pointer hover:text-blue-600">2</span>
          <span className="mr-2">Last</span>
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
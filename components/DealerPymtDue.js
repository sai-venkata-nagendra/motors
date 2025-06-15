import React, { useState } from 'react';

const DealerPymtDue = () => {
  const [recordsPerPage, setRecordsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedBy, setSortedBy] = useState('Customer Name');
  const [sortOrder, setSortOrder] = useState('Ascending');

  const data = [
    { sr: 1, loanAcNo: 'RAM-17A24C9-000195', customerName: 'AADESH KUMAR TOMER', regnNo: 'HHR55AE4824', vehDelDt: '28-08-2017', dealerName: 'RAJHANS AUTOMOBILES', amtDue: '1,90,000.00' },
    { sr: 2, loanAcNo: 'RAM-18M20D9-000538', customerName: 'AADIL ALI', regnNo: 'HR55AD8444', vehDelDt: '19-04-2018', dealerName: 'RAJHANS AUTOMOBILES', amtDue: '1,90,000.00' },
    { sr: 3, loanAcNo: 'RAM-18O1A3D-000706', customerName: 'AAJAM KHAN TEMPO SERVICES', regnNo: 'HR55AF3897', vehDelDt: '12-10-2018', dealerName: 'RAJHANS AUTOMOBILES', amtDue: '1,85,000.00' },
    { sr: 4, loanAcNo: 'RAM-18O1D45-000707', customerName: 'AAJAM KHAN TEMPO SERVICES', regnNo: 'HR55AF8823', vehDelDt: '12-10-2018', dealerName: 'RAJHANS AUTOMOBILES', amtDue: '1,85,000.00' },
    { sr: 5, loanAcNo: 'RAM-17A2DFE-000158', customerName: 'AFJAL(JEETU )', regnNo: 'HR55AB8068', vehDelDt: '26-07-2017', dealerName: 'RAJHANS AUTOMOBILES', amtDue: '1,90,000.00' },
    { sr: 6, loanAcNo: 'RAM-17J3697-000124', customerName: 'AJAY', regnNo: 'HR55AB4972', vehDelDt: '21-07-2017', dealerName: 'RAJHANS AUTOMOBILES', amtDue: '1,70,000.00' },
    { sr: 7, loanAcNo: 'RAM-18D1270-000861', customerName: 'AJAY', regnNo: 'HR55AE0447', vehDelDt: '03-12-2018', dealerName: 'RAJHANS AUTOMOBILES', amtDue: '2,05,000.00' },
    { sr: 8, loanAcNo: 'RAM-18JZEE0-000584', customerName: 'AJAY', regnNo: 'HR55AD5991', vehDelDt: '08-06-2018', dealerName: 'RAJHANS AUTOMOBILES', amtDue: '1,90,000.00' },
    // Add more data as needed
  ];
  
  const totalRecords = 806;
  const totalDealerDues = '1519,72,210.00';

  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  const renderPagination = () => {
    const pages = [];
    const maxPagesToShow = 17;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    if (startPage > 1) {
        pages.push(<button key="first" onClick={() => setCurrentPage(1)} className="px-3 py-1 text-blue-600 hover:underline">First</button>);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-1 rounded-md ${currentPage === i ? 'bg-blue-600 text-white' : 'text-blue-600 hover:underline'}`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
        pages.push(<button key="last" onClick={() => setCurrentPage(totalPages)} className="px-3 py-1 text-blue-600 hover:underline">Last</button>);
        if (currentPage < totalPages) {
            pages.push(<button key="next" onClick={() => setCurrentPage(currentPage + 1)} className="px-3 py-1 text-blue-600 hover:underline">{'Next >>'}</button>);
        }
    }

    return pages;
};


  return (
    <div className="animate-fade-in-up p-8 bg-white shadow-lg rounded-lg mt-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-500 pb-2">Dealer Payment Pending</h1>
        <div className="text-right">
            <p className="text-lg font-semibold text-gray-700">Total Dealer Dues: <span className="text-red-600">{totalDealerDues}</span></p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
            <span>Records / Page:</span>
            <select value={recordsPerPage} onChange={e => setRecordsPerPage(Number(e.target.value))} className="p-1 border border-gray-300 rounded-md">
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select>
            <span>Page: {currentPage}</span>
            <span>Showing Records: 1 - {recordsPerPage} of {totalRecords}</span>
        </div>
        <div className="flex items-center space-x-2">
            <span>Sorted By:</span>
            <select value={sortedBy} onChange={e => setSortedBy(e.target.value)} className="p-1 border border-gray-300 rounded-md">
                <option>Customer Name</option>
                <option>Loan Ac No</option>
                <option>Amt Due</option>
            </select>
            <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className="p-1 border border-gray-300 rounded-md">
                <option>Ascending</option>
                <option>Descending</option>
            </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Sr.</th>
              <th className="px-4 py-2 text-left">Loan Ac No</th>
              <th className="px-4 py-2 text-left">Customer Name</th>
              <th className="px-4 py-2 text-left">Regn No.</th>
              <th className="px-4 py-2 text-left">Veh Del Dt.</th>
              <th className="px-4 py-2 text-left">Dealer Name</th>
              <th className="px-4 py-2 text-right">Amt Due</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.sr} className={`border-b ${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}`}>
                <td className="px-4 py-2">{row.sr}</td>
                <td className="px-4 py-2 text-blue-600 cursor-pointer hover:underline">{row.loanAcNo}</td>
                <td className="px-4 py-2">{row.customerName}</td>
                <td className="px-4 py-2">{row.regnNo}</td>
                <td className="px-4 py-2">{row.vehDelDt}</td>
                <td className="px-4 py-2">{row.dealerName}</td>
                <td className="px-4 py-2 text-right">{row.amtDue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-start items-center space-x-2 text-sm">
        {renderPagination()}
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

export default DealerPymtDue; 
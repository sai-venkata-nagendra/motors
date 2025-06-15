import React, { useState } from 'react';

const CustomerWoCollArea = () => {
  const [recordsPerPage, setRecordsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedBy, setSortedBy] = useState('Customer Name');
  const [sortOrder, setSortOrder] = useState('Ascending');

  const data = [
    { sr: 1, custId: 'B101-CU-002966', customerName: 'AAA', address: 'H NO-452,WARD NO-12,SANJAY GENERAL STORE, VILL-GARHI HARSARU, Gurugram, Haryana [HR]' },
    { sr: 2, custId: 'N101-CU-001260', customerName: 'AAAAA', address: 'H NO-318,WARD NO-1, TAJ NAGAR, Gurugram, Haryana [HR]' },
    { sr: 3, custId: 'A101-CU-000173', customerName: 'AADESH KUMAR TOMER', address: 'H.NO- NEAR MATA MANDIR , BEGUM PUR KHATOLA , Gurugram, Haryana [HR]' },
    { sr: 4, custId: 'A101-CU-000466', customerName: 'AADIL ALI', address: 'H.N. 06 DHUNELA , GURGAON, Gurugram, Haryana [HR]' },
    { sr: 5, custId: 'A101-CU-000602', customerName: 'AAJAM KHAN TEMPO SERVICES', address: 'H N 536 /31 NEAR SHANI MANDIR , LAXMAN VIHAR , Gurugram, Haryana [HR]' },
    { sr: 6, custId: 'A101-CU-004420', customerName: 'AAKASH', address: 'PLOT NO-3,AMAR PARK,ROHTAK ROAD, , New Delhi, Delhi [DL]' },
    { sr: 7, custId: 'A101-CU-004512', customerName: 'AAKASH', address: 'H NO-RZ-13,PREM NAGAR,NAJAFGARH, , South West Delhi, Delhi [DL]' },
    { sr: 8, custId: 'A101-CU-003645', customerName: 'AAKASH', address: 'VPO-BASKUSHLA, , Gurugram, Haryana [HR]' },
    { sr: 9, custId: 'A101-CU-003374', customerName: 'AAKASH', address: 'VILL-BASS KUSHLA, BASKUSHLA, Gurugram, Haryana [HR]' },
    // Add more data as needed
  ];
  
  const totalRecords = 4881;

  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  const renderPagination = () => {
    const pages = [];
    const maxPagesToShow = 20; // Number of pages to show at a time
    let startPage;
    let endPage;

    if (totalPages <= maxPagesToShow) {
        startPage = 1;
        endPage = totalPages;
    } else {
        const maxPagesBeforeCurrent = Math.floor(maxPagesToShow / 2);
        const maxPagesAfterCurrent = Math.ceil(maxPagesToShow / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrent) {
            startPage = 1;
            endPage = maxPagesToShow;
        } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
            startPage = totalPages - maxPagesToShow + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - maxPagesBeforeCurrent;
            endPage = currentPage + maxPagesAfterCurrent;
        }
    }
    
    if (startPage > 1) {
        pages.push(<button key="first" onClick={() => setCurrentPage(1)} className="px-2 py-1 text-blue-600 hover:underline">First</button>);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-2 py-1 rounded-md ${currentPage === i ? 'bg-blue-600 text-white' : 'text-blue-600 hover:underline'}`}
        >
          {i}
        </button>
      );
    }
    
    if (endPage < totalPages) {
        if(currentPage < totalPages) {
          pages.push(<button key="next" onClick={() => setCurrentPage(currentPage + 1)} className="px-2 py-1 text-blue-600 hover:underline">{'Next >>'}</button>);
        }
        pages.push(<button key="last" onClick={() => setCurrentPage(totalPages)} className="px-2 py-1 text-blue-600 hover:underline">Last</button>);
    }

    return pages;
  };


  return (
    <div className="animate-fade-in-up p-8 bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-gray-800 border-b-4 border-gray-300 pb-2 mb-6">
        Customers With No Collection Area
      </h1>

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
            <span>Showing Records: {(currentPage - 1) * recordsPerPage + 1} - {Math.min(currentPage * recordsPerPage, totalRecords)} of {totalRecords}</span>
        </div>
        <div className="flex items-center space-x-2">
            <span>Sorted By:</span>
            <select value={sortedBy} onChange={e => setSortedBy(e.target.value)} className="p-1 border border-gray-300 rounded-md">
                <option>Customer Name</option>
                <option>Cust ID</option>
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
              <th className="px-4 py-2 text-left">Cust ID</th>
              <th className="px-4 py-2 text-left">Customer Name</th>
              <th className="px-4 py-2 text-left">Cust Residence Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.sr} className={`border-b ${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}`}>
                <td className="px-4 py-2">{row.sr}</td>
                <td className="px-4 py-2 text-blue-600 cursor-pointer hover:underline">{row.custId}</td>
                <td className="px-4 py-2">{row.customerName}</td>
                <td className="px-4 py-2">{row.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap justify-start items-center space-x-1 text-sm">
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

export default CustomerWoCollArea; 
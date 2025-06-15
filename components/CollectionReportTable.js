import React, { useState } from 'react';

const CollectionReportTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const data = [
    { sno: 1, loanNo: 'L001', custName: 'Aarav Sharma', collectedAmt: 5200, collectedBy: 'Ramesh Kumar', receiptDate: '2025-06-12', receiptNo: 'R54321' },
    { sno: 2, loanNo: 'L008', custName: 'Diya Patel', collectedAmt: 7500, collectedBy: 'Suresh Singh', receiptDate: '2025-06-12', receiptNo: 'R54322' },
    { sno: 3, loanNo: 'L012', custName: 'Vihaan Reddy', collectedAmt: 4800, collectedBy: 'Ramesh Kumar', receiptDate: '2025-06-12', receiptNo: 'R54323' },
    { sno: 4, loanNo: 'L015', custName: 'Ananya Gupta', collectedAmt: 9100, collectedBy: 'Amit Sharma', receiptDate: '2025-06-12', receiptNo: 'R54324' },
    { sno: 5, loanNo: 'L023', custName: 'Ishaan Verma', collectedAmt: 6300, collectedBy: 'Suresh Singh', receiptDate: '2025-06-12', receiptNo: 'R54325' },
    { sno: 6, loanNo: 'L034', custName: 'Myra Das', collectedAmt: 8200, collectedBy: 'Ramesh Kumar', receiptDate: '2025-06-12', receiptNo: 'R54326' },
    { sno: 7, loanNo: 'L045', custName: 'Kabir Joshi', collectedAmt: 3400, collectedBy: 'Sunita Devi', receiptDate: '2025-06-12', receiptNo: 'R54327' },
    { sno: 8, loanNo: 'L051', custName: 'Saanvi Mehta', collectedAmt: 11200, collectedBy: 'Amit Sharma', receiptDate: '2025-06-12', receiptNo: 'R54328' },
    { sno: 9, loanNo: 'L062', custName: 'Advik Singh', collectedAmt: 5500, collectedBy: 'Suresh Singh', receiptDate: '2025-06-12', receiptNo: 'R54329' },
    { sno: 10, loanNo: 'L077', custName: 'Kiara Rao', collectedAmt: 7800, collectedBy: 'Ramesh Kumar', receiptDate: '2025-06-12', receiptNo: 'R54330' },
    { sno: 11, loanNo: 'L088', custName: 'Reyansh Kumar', collectedAmt: 4900, collectedBy: 'Sunita Devi', receiptDate: '2025-06-12', receiptNo: 'R54331' },
    { sno: 12, loanNo: 'L091', custName: 'Zara Ali', collectedAmt: 9500, collectedBy: 'Amit Sharma', receiptDate: '2025-06-12', receiptNo: 'R54332' },
  ];
  
  const totalCollectedAmt = data.reduce((acc, row) => acc + row.collectedAmt, 0);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="animate-fade-in-up mt-8 max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-10 border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-900">Collection Report for 12-06-2025 at Showroom-Delhi</h2>
        <a href="#" className="text-blue-600 hover:underline font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Export to Excel
        </a>
      </div>
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full bg-white border-2 border-gray-200">
          <thead className="bg-blue-800 text-white uppercase text-sm tracking-wider">
            <tr>
              <th className="py-3 px-4 text-left">S.No.</th>
              <th className="py-3 px-4 text-left">Loan No.</th>
              <th className="py-3 px-4 text-left">Receipt No.</th>
              <th className="py-3 px-4 text-left">Cust. Name</th>
              <th className="py-3 px-4 text-right">Collected Amt.</th>
              <th className="py-3 px-4 text-left">Collected By</th>
              <th className="py-3 px-4 text-left">Receipt Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {currentItems.map((row) => (
              <tr key={row.sno} className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                <td className="py-3 px-4">{row.sno}</td>
                <td className="py-3 px-4 font-medium text-gray-800">{row.loanNo}</td>
                <td className="py-3 px-4">{row.receiptNo}</td>
                <td className="py-3 px-4">{row.custName}</td>
                <td className="py-3 px-4 text-right font-semibold text-green-700">{row.collectedAmt.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4">{row.collectedBy}</td>
                <td className="py-3 px-4">{row.receiptDate}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-100 font-bold text-gray-800">
              <tr>
                <td colSpan="4" className="py-3 px-4 text-right">Page Total:</td>
                <td className="py-3 px-4 text-right text-green-800">{currentItems.reduce((acc, row) => acc + row.collectedAmt, 0).toLocaleString('en-IN')}</td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <td colSpan="4" className="py-3 px-4 text-right">Grand Total:</td>
                <td className="py-3 px-4 text-right text-green-800">{totalCollectedAmt.toLocaleString('en-IN')}</td>
                <td colSpan="2"></td>
              </tr>
          </tfoot>
        </table>
      </div>

       {/* Pagination */}
       <div className="mt-6 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Showing <span className="font-semibold">{indexOfFirstItem + 1}</span> to <span className="font-semibold">{Math.min(indexOfLastItem, data.length)}</span> of <span className="font-semibold">{data.length}</span> results
        </div>
        <nav>
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
              >
                Previous
              </button>
            </li>
            {[...Array(totalPages).keys()].map(number => (
              <li key={number + 1}>
                <button
                  onClick={() => paginate(number + 1)}
                  className={`py-2 px-3 leading-tight border ${currentPage === number + 1 ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-500 border-gray-300 hover:bg-gray-100'}`}
                >
                  {number + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CollectionReportTable; 
import React, { useState } from 'react';

const CancelledReceiptsTable = () => {
  const [recordsPerPage, setRecordsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    { no: 9, rcptNo: '101-EB0-092876', rcptDt: '15-05-25', customerName: 'ANIL KUMAR', loanAcNo: 'RMC-24J26E1-005116', rcptAmt: '11,280.00', reason: 'fwrong id', cancelBy: 'Jaipal.y', cancelDt: '15-05-25' },
    { no: 10, rcptNo: '101-60C-092874', rcptDt: '15-05-25', customerName: 'JAI CHAND', loanAcNo: 'RMC-23M1CA6-004187', rcptAmt: '11,320.00', reason: 'wrong id', cancelBy: 'Jaipal.y', cancelDt: '15-05-25' },
    { no: 11, rcptNo: '101-981-092875', rcptDt: '15-05-25', customerName: 'VIVEK', loanAcNo: 'RMC-23J3122-004505', rcptAmt: '13,000.00', reason: 'wrong id', cancelBy: 'Jaipal.y', cancelDt: '15-05-25' },
    { no: 12, rcptNo: '101-2DA-092758', rcptDt: '12-05-25', customerName: 'WASEEM', loanAcNo: 'RMC-24J2590-005104', rcptAmt: '10,650.00', reason: 'by mistake dounle entry', cancelBy: 'Jaipal.y', cancelDt: '16-05-25' },
    { no: 13, rcptNo: '101-E20-093036', rcptDt: '17-05-25', customerName: 'NARESH KUMAR', loanAcNo: 'RMC-24S1847-005258', rcptAmt: '6,000.00', reason: 'by varun sir', cancelBy: 'Jaipal.y', cancelDt: '17-05-25' },
    { no: 14, rcptNo: '101-DE1-093035', rcptDt: '17-05-25', customerName: 'NARESH KUMAR', loanAcNo: 'RMC-24S1847-005258', rcptAmt: '44,000.00', reason: 'by varun sir', cancelBy: 'Jaipal.y', cancelDt: '17-05-25' },
    { no: 15, rcptNo: '101-15D-092970', rcptDt: '16-05-25', customerName: 'PRIYANKA DEVI', loanAcNo: 'RMC-25F17B4-005617', rcptAmt: '13,870.00', reason: 'by mistake double entry', cancelBy: 'Jaipal.y', cancelDt: '17-05-25' },
    { no: 16, rcptNo: '101-4E8-093191', rcptDt: '20-05-25', customerName: 'AMIT KUMAR', loanAcNo: 'RMC-24D1CA8-005500', rcptAmt: '10,300.00', reason: 'wrong amount', cancelBy: 'Jaipal.y', cancelDt: '20-05-25' },
    { no: 17, rcptNo: '101-A87-093071', rcptDt: '19-05-25', customerName: 'SATYA PARKASH', loanAcNo: 'RMC-25D1240-004794', rcptAmt: '10,790.00', reason: 'wrong emi deduct', cancelBy: 'Jaipal.y', cancelDt: '21-05-25' },
    { no: 18, rcptNo: '101-A88-093457', rcptDt: '26-05-25', customerName: 'NARENDER', loanAcNo: 'RMC-24J2C7B-005113', rcptAmt: '22,560.00', reason: 'qwrong amount', cancelBy: 'Jaipal.y', cancelDt: '26-05-25' },
    { no: 19, rcptNo: '101-99A-093497', rcptDt: '27-05-25', customerName: 'ROHIT', loanAcNo: 'RMC-24F18D6-004921', rcptAmt: '12,950.00', reason: 'Chq Returned Unpaid', cancelBy: 'Satyapal.singh', cancelDt: '30-05-25' },
    { no: 20, rcptNo: '101-504-093808', rcptDt: '01-06-25', customerName: 'VAJID KHAN', loanAcNo: 'RMC-24O17BE-005346', rcptAmt: '19,250.00', reason: 'wrong amount entered', cancelBy: 'Jaipal.y', cancelDt: '02-06-25' },
    { no: 21, rcptNo: '101-542-093986', rcptDt: '06-06-25', customerName: 'INDERJEET', loanAcNo: 'RMC-24N168F-005376', rcptAmt: '13,170.00', reason: 'WRONG AMOUNT', cancelBy: 'Jaipal.y', cancelDt: '06-06-25' },
    { no: 22, rcptNo: '101-D02-093986', rcptDt: '06-06-25', customerName: 'PARDEEP', loanAcNo: 'RMC-24J2A2B-005112', rcptAmt: '20,222.00', reason: 'wrong amount', cancelBy: 'Jaipal.y', cancelDt: '06-06-25' },
  ];

  const totalRecords = data.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <div className="animate-fade-in-up mt-8 max-w-full mx-auto bg-white rounded-3xl shadow-2xl p-6 border border-gray-200 font-sans">
        <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
                <label htmlFor="records-per-page" className="text-sm font-medium text-gray-700">Records Per Page:</label>
                <select 
                    id="records-per-page"
                    value={recordsPerPage} 
                    onChange={(e) => setRecordsPerPage(Number(e.target.value))}
                    className="p-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </div>
            <div className="text-sm font-medium text-gray-700">
                Page: {currentPage} <span className="mx-2">|</span> Showing Records: {indexOfFirstRecord + 1} - {Math.min(indexOfLastRecord, totalRecords)} of {totalRecords}
            </div>
        </div>
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full text-xs border-2 border-gray-200">
          <thead className="bg-blue-800 text-white uppercase tracking-wider">
            <tr>
              <th className="py-2 px-3 text-left">No.</th>
              <th className="py-2 px-3 text-left">Rcpt No</th>
              <th className="py-2 px-3 text-left">Rcpt Dt</th>
              <th className="py-2 px-3 text-left">Customer Name</th>
              <th className="py-2 px-3 text-left">Loan Ac No</th>
              <th className="py-2 px-3 text-right">Rcpt Amt</th>
              <th className="py-2 px-3 text-left">Reason</th>
              <th className="py-2 px-3 text-left">Cancel By</th>
              <th className="py-2 px-3 text-left">Cancel Dt</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {currentRecords.map((row, index) => (
              <tr key={row.no} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50/50'} hover:bg-blue-100 transition-colors`}>
                <td className="py-1 px-3">{row.no}</td>
                <td className="py-1 px-3 font-medium text-blue-700 cursor-pointer hover:underline">{row.rcptNo}</td>
                <td className="py-1 px-3">{row.rcptDt}</td>
                <td className="py-1 px-3">{row.customerName}</td>
                <td className="py-1 px-3">{row.loanAcNo}</td>
                <td className="py-1 px-3 text-right">{row.rcptAmt}</td>
                <td className="py-1 px-3">{row.reason}</td>
                <td className="py-1 px-3">{row.cancelBy}</td>
                <td className="py-1 px-3">{row.cancelDt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Basic Pagination controls can be added here if needed */}
    </div>
  );
};

export default CancelledReceiptsTable; 
import React, { useState } from 'react';

const data = [
  { id: 1, customerName: 'MANOJ', receiptDt: '20-07-2018', receiptNo: '101-C89-003410', chequeNo: '121423', receiptAmt: '14,000.00' },
  { id: 2, customerName: 'RAJBIR', receiptDt: '14-09-2018', receiptNo: '101-43C-004172', chequeNo: '000006', receiptAmt: '9,335.00' },
  { id: 3, customerName: 'DINESH KUMAR', receiptDt: '14-01-2019', receiptNo: '101-492-006369', chequeNo: '531791 SBI', receiptAmt: '10,600.00' },
  { id: 4, customerName: 'AMIN CHAND', receiptDt: '25-02-2020', receiptNo: '101-40B-018841', chequeNo: '455768 CORPO', receiptAmt: '8,750.00' },
  { id: 5, customerName: 'GANGA RAM', receiptDt: '21-05-2025', receiptNo: '101-A6E-093267', chequeNo: '346840 SHGB', receiptAmt: '11,210.00' },
  { id: 6, customerName: 'VISHAL GIRI', receiptDt: '26-05-2025', receiptNo: '101-7FF-093414', chequeNo: '481604', receiptAmt: '11,000.00' },
  { id: 7, customerName: 'SURENDRA SINGH', receiptDt: '27-05-2025', receiptNo: '101-A80-093496', chequeNo: '457854 PNB', receiptAmt: '12,850.00' },
  { id: 8, customerName: 'AJAY', receiptDt: '30-05-2025', receiptNo: '101-6DC-093682', chequeNo: '561432 SBI', receiptAmt: '13,490.00' },
  { id: 9, customerName: 'DEEPAK CONSTARATION ( SUKRITA DEVI )', receiptDt: '31-05-2025', receiptNo: '101-B66-093733', chequeNo: '040379 UNION', receiptAmt: '13,300.00' },
];

export default function ChqsInClearing() {
  const [recordsPerPage, setRecordsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('receiptDate');
  const [sortOrder, setSortOrder] = useState('Ascending');
  const [selectedCheque, setSelectedCheque] = useState(null);

  const totalRecords = 13;

  const handleRowClick = (cheque) => {
    if (selectedCheque && selectedCheque.id === cheque.id) {
      setSelectedCheque(null); 
    } else {
      setSelectedCheque({
        ...cheque,
        custPhone: '9871224817, 880010491',
        loanAcNo: 'RMC-23A18BE-004288',
        vehRegnNo: 'HR55AP0168',
        chequeFor: 'EMI',
        chequeStatus: '',
      });
    }
  };

  const handleCancel = () => {
    setSelectedCheque(null);
  };
  
  const handleUpdate = () => {
    console.log("Updating Cheque:", selectedCheque);
    alert("Cheque status updated!");
    setSelectedCheque(null);
  }

  return (
    <div className="animate-fade-in-up max-w-7xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
      <h2 className="text-3xl font-extrabold mb-8 text-blue-900 border-b-4 border-teal-200 pb-2 tracking-wider drop-shadow-lg text-left uppercase">
        Cheques In Clearing
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
        <div>Showing Records: 1 - {totalRecords} of {totalRecords}</div>
        <div className="flex items-center space-x-2">
          <span>Sorted By:</span>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="input-glass">
            <option value="receiptDate">Receipt Date</option>
            <option value="customerName">Customer Name</option>
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
              <th className="py-3 px-6 text-left">Customer Name</th>
              <th className="py-3 px-6 text-left">Receipt Dt</th>
              <th className="py-3 px-6 text-left">Receipt No</th>
              <th className="py-3 px-6 text-left">Cheque No</th>
              <th className="py-3 px-6 text-right">Receipt Amt</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {data.map((row) => (
              <tr 
                key={row.id} 
                className={`border-b border-gray-200 hover:bg-blue-100 cursor-pointer ${selectedCheque?.id === row.id ? 'bg-green-200' : ''}`}
                onClick={() => handleRowClick(row)}
              >
                <td className="py-3 px-6 text-left">{row.customerName}</td>
                <td className="py-3 px-6 text-left">{row.receiptDt}</td>
                <td className="py-3 px-6 text-left">
                  <span className="font-medium text-blue-600">{row.receiptNo}</span>
                </td>
                <td className="py-3 px-6 text-left">{row.chequeNo}</td>
                <td className="py-3 px-6 text-right font-mono">{row.receiptAmt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-start items-center mt-4 text-sm font-semibold text-blue-800">
          <span className="mr-2 cursor-pointer hover:text-blue-600">First</span>
          <span className="mr-2 cursor-pointer hover:text-blue-600">1</span>
          <span className="mr-2 cursor-pointer hover:text-blue-600">Last</span>
      </div>

      {selectedCheque && (
        <div className="mt-10 p-8 bg-blue-50 rounded-2xl shadow-lg border border-blue-200 animate-fade-in-up">
          <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-base">
            {/* Left Column */}
            <div className="space-y-3">
                <div className="flex"><label className="w-40 font-semibold text-blue-900">Customer Name:</label><span className="font-medium text-gray-800">{selectedCheque.customerName}</span></div>
                <div className="flex"><label className="w-40 font-semibold text-blue-900">Loan Ac No.:</label><span className="font-medium text-gray-800">{selectedCheque.loanAcNo}</span></div>
                <div className="flex"><label className="w-40 font-semibold text-blue-900">Receipt Dt.:</label><span className="font-medium text-gray-800">{selectedCheque.receiptDt}</span></div>
                <div className="flex"><label className="w-40 font-semibold text-blue-900">Receipt Amt:</label><span className="font-medium text-gray-800">{selectedCheque.receiptAmt}</span></div>
                <div className="flex"><label className="w-40 font-semibold text-blue-900">Cheque For:</label><span className="font-medium text-gray-800">{selectedCheque.chequeFor}</span></div>
                <div className="flex items-center"><label className="w-40 font-semibold text-blue-900">Cheque Status:</label>
                    <select 
                        value={selectedCheque.chequeStatus}
                        onChange={(e) => setSelectedCheque(prev => ({...prev, chequeStatus: e.target.value}))}
                        className="input-glass"
                    >
                        <option value="">-- Select --</option>
                        <option value="Cleared">Cleared</option>
                        <option value="Bounced">Bounced</option>
                        <option value="Pending">Pending</option>
                    </select>
                </div>
            </div>
            {/* Right Column */}
            <div className="space-y-3">
                <div className="flex"><label className="w-40 font-semibold text-blue-900">Cust Phone:</label><span className="font-medium text-gray-800">{selectedCheque.custPhone}</span></div>
                <div className="flex"><label className="w-40 font-semibold text-blue-900">Veh Regn No:</label><span className="font-medium text-gray-800">{selectedCheque.vehRegnNo}</span></div>
                <div className="flex"><label className="w-40 font-semibold text-blue-900">Receipt No:</label><span className="font-medium text-gray-800">{selectedCheque.receiptNo}</span></div>
                <div className="flex"><label className="w-40 font-semibold text-blue-900">Cheque No.:</label><span className="font-medium text-gray-800">{selectedCheque.chequeNo}</span></div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-8 mt-8">
              <button 
                onClick={handleUpdate}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-3 rounded-lg shadow-xl border-2 border-blue-700 transition-all duration-200"
              >
                Update
              </button>
              <button 
                onClick={handleCancel}
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold px-10 py-3 rounded-lg shadow-xl border-2 border-gray-500 transition-all duration-200"
              >
                Cancel
              </button>
            </div>
        </div>
      )}
       <style jsx>{`
        .input-glass {
          @apply bg-white/90 border border-blue-200 rounded-lg px-2 py-1 shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all placeholder-blue-300;
        }
      `}</style>
    </div>
  );
} 
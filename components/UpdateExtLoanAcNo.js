import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const data = [
  { loanAcNo: 'RMC-25M2E8B-005888', disbursalDt: '02-05-2025', customerName: 'ALOK MANDAL', fatherName: 'Ram Chandra Mandal', extChqNo: '29160', chasisNo: '', loanAmt: '2,50,000.00', dealerName: 'RAJHANS AUTOMOBILES' },
  { loanAcNo: 'RMC-25J2A81-005925', disbursalDt: '21-05-2025', customerName: 'AMANJEET SINGH', fatherName: 'Daljeet Singh', extChqNo: '03942', chasisNo: '', loanAmt: '3,00,000.00', dealerName: 'RAJHANS AUTOMOBILES' },
  { loanAcNo: 'RMC-25J2BEF-005922', disbursalDt: '28-05-2025', customerName: 'ANUJ KUMAR', fatherName: 'Jagdeesh Chandra', extChqNo: '60852', chasisNo: '', loanAmt: '2,80,000.00', dealerName: 'RAJHANS AUTOMOBILES' },
  { loanAcNo: 'RMC-25J26BD-005918', disbursalDt: '29-05-2025', customerName: 'ARUN KUMAR', fatherName: 'Kallu', extChqNo: '47390', chasisNo: '', loanAmt: '4,50,000.00', dealerName: 'RAJHANS AUTOMOBILES' },
  { loanAcNo: 'RMC-25M13A9-005751', disbursalDt: '04-03-2025', customerName: 'ASLAM KHAN', fatherName: 'Rehmat Khan', extChqNo: '43320', chasisNo: '', loanAmt: '1,80,000.00', dealerName: 'RAJHANS AUTOMOBILES' },
  { loanAcNo: 'RMC-25M279F-005910', disbursalDt: '03-04-2025', customerName: 'BANWARI LAL', fatherName: 'Bhagat Ram', extChqNo: '40644', chasisNo: '', loanAmt: '2,20,000.00', dealerName: 'RAJHANS AUTOMOBILES' },
  { loanAcNo: 'RMC-25M2C52-005902', disbursalDt: '16-05-2025', customerName: 'BHARAT', fatherName: 'Hari Singh', extChqNo: '60175', chasisNo: '', loanAmt: '3,10,000.00', dealerName: 'RAJHANS AUTOMOBILES' },
  { loanAcNo: 'RMC-25M2EC8-005905', disbursalDt: '19-05-2025', customerName: 'BUNISH KUMAR', fatherName: 'Ram Autar Singh', extChqNo: '61370', chasisNo: '', loanAmt: '2,00,000.00', dealerName: 'RAJHANS AUTOMOBILES' },
  { loanAcNo: 'RMC-25J2CD9-005924', disbursalDt: '21-05-2025', customerName: 'BILAL', fatherName: 'Dilshad', extChqNo: '09505', chasisNo: '', loanAmt: '3,50,000.00', dealerName: 'RAJHANS AUTOMOBILES' },
  { loanAcNo: 'RMC-25M2466-005913', disbursalDt: '12-05-2025', customerName: 'CHANDRA PAL', fatherName: 'Ram Swaroop', extChqNo: '36581', chasisNo: '', loanAmt: '2,90,000.00', dealerName: 'RAJHANS AUTOMOBILES' },
];

export default function UpdateExtLoanAcNo() {
  const [recordsPerPage, setRecordsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('customerName');
  const [sortOrder, setSortOrder] = useState('Ascending');
  const [selectedHp, setSelectedHp] = useState('ALL');
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [formState, setFormState] = useState({});

  const totalRecords = 45; // As per the screenshot

  const handleRowClick = (record) => {
    setSelectedRecord(record);
    setFormState({
      extAcNo: 'PENDING',
      firstExtEmiDate: null,
      extChqNo: '',
      chqDate: null,
      extChqAmt: '0',
    });
  };
  
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date, name) => {
    setFormState(prev => ({ ...prev, [name]: date }));
  };

  return (
    <div className="animate-fade-in-up max-w-7xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
      <h2 className="text-3xl font-extrabold mb-4 text-blue-900 border-b-4 border-teal-200 pb-2 tracking-wider drop-shadow-lg text-left uppercase">
        Update Ext Loan Ac No.
      </h2>
      
      <div className="flex justify-start items-center mb-6">
        <label className="font-semibold text-blue-900 mr-2">Select HP:</label>
        <select value={selectedHp} onChange={(e) => setSelectedHp(e.target.value)} className="input-glass w-48">
          <option>ALL</option>
          {/* Add other HP options here if needed */}
        </select>
      </div>

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
            <option value="customerName">Customer Name</option>
            <option value="loanAcNo">Loan Ac No</option>
            <option value="disbursalDt">Disbursal Dt</option>
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
              <th className="py-3 px-6 text-left">Loan Ac No</th>
              <th className="py-3 px-6 text-left">Disbursal Dt</th>
              <th className="py-3 px-6 text-left">Customer Name</th>
              <th className="py-3 px-6 text-left">Father's Name</th>
              <th className="py-3 px-6 text-left">Ext Chq No</th>
              <th className="py-3 px-6 text-left">Chasis No</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {data.map((row) => (
              <tr 
                key={row.loanAcNo} 
                className={`border-b border-gray-200 hover:bg-blue-100 cursor-pointer ${selectedRecord?.loanAcNo === row.loanAcNo ? 'bg-green-200 hover:bg-green-300' : ''}`}
                onClick={() => handleRowClick(row)}
              >
                <td className="py-3 px-6 text-left">
                  <span className="font-medium text-blue-600 hover:underline">{row.loanAcNo}</span>
                </td>
                <td className="py-3 px-6 text-left">{row.disbursalDt}</td>
                <td className="py-3 px-6 text-left">{row.customerName}</td>
                <td className="py-3 px-6 text-left">{row.fatherName}</td>
                <td className="py-3 px-6 text-left">{row.extChqNo}</td>
                <td className="py-3 px-6 text-left">{row.chasisNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-start items-center mt-4 text-sm font-semibold text-blue-800">
          <span className="mr-4 cursor-pointer hover:text-blue-600">First</span>
          <span className="mr-4 cursor-pointer hover:text-blue-600">1</span>
          <span className="cursor-pointer hover:text-blue-600">Last</span>
      </div>

      {selectedRecord && (
        <div className="mt-6 p-6 border-t-2 border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {/* Left side: Display info */}
                <div className="space-y-3 text-sm">
                    <div className="flex">
                        <span className="w-32 font-semibold text-gray-600">Internal Ac No.:</span>
                        <span className="font-bold text-gray-800">{selectedRecord.loanAcNo}</span>
                    </div>
                    <div className="flex">
                        <span className="w-32 font-semibold text-gray-600">Disbursal Dt.:</span>
                        <span className="font-bold text-gray-800">{selectedRecord.disbursalDt}</span>
                    </div>
                    <div className="flex">
                        <span className="w-32 font-semibold text-gray-600">Customer Name:</span>
                        <span className="font-bold text-gray-800">{selectedRecord.customerName}</span>
                    </div>
                    <div className="flex">
                        <span className="w-32 font-semibold text-gray-600">Loan Amt.:</span>
                        <span className="font-bold text-gray-800">{selectedRecord.loanAmt}</span>
                    </div>
                    <div className="flex">
                        <span className="w-32 font-semibold text-gray-600">Dealer Name:</span>
                        <span className="font-bold text-gray-800">{selectedRecord.dealerName}</span>
                    </div>
                </div>

                {/* Right side: Form inputs */}
                <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                        <label className="w-32 font-semibold text-gray-600" htmlFor="extAcNo">Ext Ac No.:</label>
                        <input id="extAcNo" name="extAcNo" type="text" value={formState.extAcNo} onChange={handleFormChange} className="input-field flex-grow bg-yellow-100 border-yellow-300"/>
                        <span className="ml-4 font-semibold text-gray-800">HLFL</span>
                    </div>
                    <div className="flex items-center">
                        <label className="w-32 font-semibold text-gray-600" htmlFor="firstExtEmiDate">1st Ext EMI Date:</label>
                        <DatePicker
                            id="firstExtEmiDate"
                            selected={formState.firstExtEmiDate}
                            onChange={(date) => handleDateChange(date, 'firstExtEmiDate')}
                            dateFormat="dd-MM-yyyy"
                            placeholderText="DD-MM-YYYY"
                            className="input-field flex-grow"
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="w-32 font-semibold text-gray-600" htmlFor="extChqNo">Ext Chq No.:</label>
                        <input id="extChqNo" name="extChqNo" type="text" value={formState.extChqNo} onChange={handleFormChange} className="input-field flex-grow"/>
                    </div>
                    <div className="flex items-center">
                        <label className="w-32 font-semibold text-gray-600" htmlFor="chqDate">Chq Date:</label>
                        <DatePicker
                            id="chqDate"
                            selected={formState.chqDate}
                            onChange={(date) => handleDateChange(date, 'chqDate')}
                            dateFormat="dd-MM-yyyy"
                            placeholderText="DD-MM-YYYY"
                            className="input-field flex-grow"
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="w-32 font-semibold text-gray-600" htmlFor="extChqAmt">Ext Chq Amt.:</label>
                        <input id="extChqAmt" name="extChqAmt" type="text" value={formState.extChqAmt} onChange={handleFormChange} className="input-field flex-grow"/>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    Save
                </button>
                <button onClick={() => setSelectedRecord(null)} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-10 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    Cancel
                </button>
            </div>
        </div>
      )}

       <style jsx>{`
        .input-glass {
          @apply bg-white/90 border border-blue-200 rounded-lg px-2 py-1 shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all placeholder-blue-300;
        }
        .input-field {
          @apply bg-white border border-gray-300 rounded-md px-3 py-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all;
        }
        /* Custom styles for react-datepicker */
        .react-datepicker-wrapper {
          width: 100%;
        }
        .react-datepicker__header {
            background-color: #3b82f6; /* bg-blue-500 */
        }
        .react-datepicker__current-month,
        .react-datepicker-time__header,
        .react-datepicker__day-name {
            color: white;
        }
      `}</style>
    </div>
  );
} 
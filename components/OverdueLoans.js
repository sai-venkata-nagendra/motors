import React from 'react';

const mockData = [
    { sr: 1, customerName: 'AADESH KUMAR TOMER', phone: '9818728873', loanAcNo: 'RAM-17A24C9-000195', ledgerNo: 'RA-200', regnChNo: 'HHR55AE4824--09266', ods: 13, odAmt: '1,41,505.00', notice: 'Final', date: '03-09-20', seized: true },
    { sr: 2, customerName: 'AADIL ALI', phone: '9773784643', loanAcNo: 'RAM-18M20D9-000538', ledgerNo: 'RA-531', regnChNo: 'HR55AD8444--13000', ods: 18, odAmt: '2,10,960.00', notice: 'First', date: '19-03-21', seized: false },
    { sr: 3, customerName: 'AAKASH', phone: '9599542435', loanAcNo: 'RMC-23M2665-004337', ledgerNo: '', regnChNo: 'HR55AQ1206--46837', ods: 6, odAmt: '70,080.00', notice: '', date: '', seized: false },
    { sr: 4, customerName: 'AAKASH', phone: '8285648380', loanAcNo: 'RMC-24D188C-005443', ledgerNo: '', regnChNo: 'DL1LAK9475--22973', ods: 4, odAmt: '57,600.00', notice: '', date: '', seized: false },
    { sr: 5, customerName: 'AAKASH', phone: '6283479846', loanAcNo: 'RMC-24O19D4-005326', ledgerNo: '', regnChNo: 'DL1LAK2440--00404', ods: 6, odAmt: '67,500.00', notice: '', date: '', seized: false },
    { sr: 6, customerName: 'AAMIR', phone: '9999739090', loanAcNo: 'RMC-22O1953-003792', ledgerNo: 'RA-3279', regnChNo: 'DL1LAK0408--41715', ods: 23, odAmt: '2,43,800.00', notice: 'First', date: '01-12-23', seized: true },
    { sr: 7, customerName: 'AARTI', phone: '9818327841', loanAcNo: 'RMC-23J31C4-004463', ledgerNo: '', regnChNo: 'HR55AQ0739--47934', ods: 3, odAmt: '32,610.00', notice: '', date: '', seized: false },
    { sr: 8, customerName: 'AARTI TRADING CO ( MEENA DEVI )', phone: '8744852997', loanAcNo: 'RMC-24A2F98-005216', ledgerNo: '', regnChNo: 'DL1LAK6709--14722', ods: 3, odAmt: '31,350.00', notice: '', date: '', seized: false },
    { sr: 9, customerName: 'AASHISH MINDWAL', phone: '8920271540', loanAcNo: 'RMC-24D197D-005461', ledgerNo: '', regnChNo: 'HR55AV7578--58193', ods: 3, odAmt: '38,550.00', notice: '', date: '', seized: true },
    { sr: 10, customerName: 'ABHAY SINGH', phone: '8059262147', loanAcNo: 'RAM-19N13DA-001804', ledgerNo: 'Ra-1451', regnChNo: 'HR55AH5315--25867', ods: 27, odAmt: '2,60,820.00', notice: 'First', date: '03-10-20', seized: true },
    { sr: 11, customerName: 'ABHISHEK', phone: '9718307467', loanAcNo: 'RAM-19F1F99-001084', ledgerNo: 'Ra-1030', regnChNo: 'HR55AF6143--19265', ods: 3, odAmt: '31,710.00', notice: '', date: '', seized: false },
    { sr: 12, customerName: 'ABHISHEK KUMAR', phone: '7631403645', loanAcNo: 'RMC-23D149A-004807', ledgerNo: '', regnChNo: 'UP14LT1934--40970', ods: 15, odAmt: '1,42,500.00', notice: '', date: '', seized: false },
    { sr: 13, customerName: 'AENUL KUMAR', phone: '9871767271', loanAcNo: 'RMC-24D141D-005461', ledgerNo: '', regnChNo: 'DL1LAK9136--21070', ods: 4, odAmt: '43,880.00', notice: '', date: '', seized: false },
    { sr: 14, customerName: 'AHIBARAN SINGH', phone: '7011119662', loanAcNo: 'RMC-23O1DCB-004686', ledgerNo: '', regnChNo: 'HR55AS6247--96114', ods: 2, odAmt: '25,060.00', notice: '', date: '', seized: false },
    { sr: 15, customerName: 'AJAJ AHAMAD', phone: '8929700783', loanAcNo: 'RAM-19N1577-001776', ledgerNo: 'Ra-1449', regnChNo: 'HR38AA0252--22689', ods: 29, odAmt: '2,80,140.00', notice: '', date: '', seized: true },
];

const Select = ({ label, options, className, wrapperClassName }) => (
    <div className={`flex items-center space-x-2 ${wrapperClassName}`}>
        <label className="text-sm font-medium text-gray-700">{label}:</label>
        <select className={`px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${className}`}>
            {options.map(option => <option key={option}>{option}</option>)}
        </select>
    </div>
);

export default function OverdueLoans() {
    return (
        <div 
            id="overdueLoans" 
            className="animate-fade-in-up max-w-full mx-auto bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-3xl shadow-2xl p-6 mt-4 border border-gray-200"
        >
            <h1 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">List of Overdue Loans</h1>
            
            {/* Filters */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4 p-4 bg-white rounded-lg shadow">
                <Select label="Loan Type" options={['ALL']} className="bg-yellow-100 border-yellow-300" />
                <Select label="Select HP" options={['ALL']} />
                <Select label="Records Per Page" options={[50, 100, 200]} />
                <div className="text-sm font-medium text-gray-600">
                    Page: <span className="font-bold">1</span> &nbsp; Showing Records: <span className="font-bold">1 - 50</span> of <span className="font-bold">1538</span>
                </div>
                <Select label="Sorted By" options={['Customer Name']} />
                <Select label="Order" options={['Ascending', 'Descending']} />
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full text-sm">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="p-3 text-left">Sr.</th>
                            <th className="p-3 text-left">Customer Name</th>
                            <th className="p-3 text-left">Phone</th>
                            <th className="p-3 text-left">Loan Ac No</th>
                            <th className="p-3 text-left">Ledger No</th>
                            <th className="p-3 text-left">Regn-Ch No</th>
                            <th className="p-3 text-left">ODs</th>
                            <th className="p-3 text-left">OD Amt</th>
                            <th className="p-3 text-left">Notice</th>
                            <th className="p-3 text-left">Date</th>
                            <th className="p-3 text-left">Seized</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockData.map((row, index) => (
                            <tr key={row.sr} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                                <td className="p-2">{row.sr}</td>
                                <td className="p-2">{row.customerName}</td>
                                <td className="p-2">{row.phone}</td>
                                <td className="p-2">{row.loanAcNo}</td>
                                <td className="p-2">{row.ledgerNo}</td>
                                <td className="p-2">{row.regnChNo}</td>
                                <td className="p-2 text-center">{row.ods}</td>
                                <td className="p-2 text-right">{row.odAmt}</td>
                                <td className="p-2">{row.notice}</td>
                                <td className="p-2">{row.date}</td>
                                <td className={`p-2 font-semibold ${row.seized ? 'text-red-600' : 'text-gray-400'}`}>{row.seized ? 'True' : ''}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4 text-sm">
                <div className="flex items-center space-x-1 text-blue-600">
                    <a href="#" className="font-bold">First</a>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map(page => (
                        <a href="#" key={page} className="px-2 py-1 rounded hover:bg-blue-100">{page}</a>
                    ))}
                    <a href="#" className="font-bold">Last</a>
                </div>
                <a href="#" className="text-blue-600 font-bold">Next {'>>'}</a>
            </div>
            <style jsx>{`
                @keyframes fade-in-up {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                  animation: fade-in-up 0.4s ease-out;
                }
            `}</style>
        </div>
    );
} 
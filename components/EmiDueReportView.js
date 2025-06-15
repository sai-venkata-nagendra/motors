import React from 'react';

const reportData = [
    { no: 1, customerName: 'KARAMBIR', phone: '9996106686', loanAcNo: 'RMC-24M135B-004958', emiNo: 15, emiDate: '13-06-25', emiAmount: '13,500.00' },
    { no: 2, customerName: 'SUNIL', phone: '8571906804', loanAcNo: 'RMC-22J238B-003451', emiNo: 36, emiDate: '13-06-25', emiAmount: '10,675.00' },
    { no: 3, customerName: 'ASHISH KUMAR', phone: '8851119697', loanAcNo: 'RMC-22J2A67-003457', emiNo: 36, emiDate: '13-06-25', emiAmount: '8,320.00' },
    { no: 4, customerName: 'IMRATI', phone: '9315702688', loanAcNo: 'RMC-24J2531-005128', emiNo: 12, emiDate: '13-06-25', emiAmount: '12,850.00' },
    { no: 5, customerName: 'SURESH SINGH', phone: '8076014402', loanAcNo: 'RMC-23J1FDE-004059', emiNo: 29, emiDate: '13-06-25', emiAmount: '10,600.00' },
    { no: 6, customerName: 'TARUN', phone: '8766249633', loanAcNo: 'RMC-23A1DCF-004294', emiNo: 26, emiDate: '14-06-25', emiAmount: '8,700.00' },
    { no: 7, customerName: 'VIRENDRA SINGH', phone: '9529895859', loanAcNo: 'RMC-22D13AF-003947', emiNo: 31, emiDate: '14-06-25', emiAmount: '9,260.00' },
    { no: 8, customerName: 'LAXMAN', phone: '9812887255', loanAcNo: 'RMC-24O1006-005306', emiNo: 8, emiDate: '14-06-25', emiAmount: '11,480.00' },
    { no: 9, customerName: 'AJIT', phone: '9999133040', loanAcNo: 'RMC-24O1711-005294', emiNo: 8, emiDate: '14-06-25', emiAmount: '12,400.00' },
    { no: 10, customerName: 'SUNIL KUMAR', phone: '8168183130', loanAcNo: 'RMC-25A1EC4-005842', emiNo: 2, emiDate: '14-06-25', emiAmount: '12,850.00' },
];

const totalAmount = "1,10,635.00";

export default function EmiDueReportView({ reportType, onBack }) {
    const today = new Date();
    const formattedDate = `${today.getDate()}-${today.toLocaleString('default', { month: 'short' })}-${today.getFullYear()}`;

  return (
    <div className="bg-white p-8 font-sans text-gray-800">
        <button onClick={onBack} className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Report Options
        </button>

        <header className="flex justify-between items-start mb-4">
            <h1 className="text-2xl font-bold">EMI Due Report</h1>
            <span className="text-lg">{formattedDate}</span>
        </header>

        <section>
            <h2 className="text-xl font-semibold underline mb-4">{reportType}</h2>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="border-b-2 border-gray-500 pb-2">No.</th>
                        <th className="border-b-2 border-gray-500 pb-2">Customer Name</th>
                        <th className="border-b-2 border-gray-500 pb-2">Phone</th>
                        <th className="border-b-2 border-gray-500 pb-2">Loan Ac No.</th>
                        <th className="border-b-2 border-gray-500 pb-2">EMI No.</th>
                        <th className="border-b-2 border-gray-500 pb-2">EMI Date</th>
                        <th className="border-b-2 border-gray-500 pb-2 text-right">EMI Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {reportData.map((row, index) => (
                        <tr key={row.no} className={index % 2 === 1 ? 'bg-gray-100' : ''}>
                            <td className="py-1">{row.no}</td>
                            <td className="py-1">{row.customerName}</td>
                            <td className="py-1">{row.phone}</td>
                            <td className="py-1">{row.loanAcNo}</td>
                            <td className="py-1">{row.emiNo}</td>
                            <td className="py-1">{row.emiDate}</td>
                            <td className="py-1 text-right">{row.emiAmount}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="6" className="text-right font-bold border-t-2 border-gray-500 pt-2">Total:</td>
                        <td className="text-right font-bold border-t-2 border-gray-500 pt-2">{totalAmount}</td>
                    </tr>
                </tfoot>
            </table>
        </section>

        <footer className="mt-8 text-lg font-semibold">
            Rajhans Motor Investment Co.
        </footer>
    </div>
  );
} 
import React from 'react';

const reportData = [
    { no: 1, date: '12-06-2025', noOfEmis: 19, emiAmount: '2,32,295.00' },
];

const totalAmount = "2,32,295.00";

const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = d.toLocaleString('default', { month: 'short' });
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
}

export default function EmiExpectedReportView({ fromDate, toDate, onBack }) {
  return (
    <div className="bg-white p-8 font-sans text-gray-800 relative">
        <button onClick={onBack} className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded no-print">
            Back to Report Options
        </button>

        <header className="mb-8">
            <h1 className="text-3xl font-bold">Expected EMI Report</h1>
        </header>

        <section>
            <h2 className="text-xl font-semibold mb-4">
                EMI Expected From {formatDate(fromDate)} - To - {formatDate(toDate)}
            </h2>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="border-b-2 border-gray-500 pb-2">No.</th>
                        <th className="border-b-2 border-gray-500 pb-2">Date</th>
                        <th className="border-b-2 border-gray-500 pb-2">No Of EMIs</th>
                        <th className="border-b-2 border-gray-500 pb-2 text-right">EMI Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {reportData.map((row) => (
                        <tr key={row.no}>
                            <td className="py-2 border-b border-gray-300">{row.no}</td>
                            <td className="py-2 border-b border-gray-300 text-blue-600 font-semibold">{row.date}</td>
                            <td className="py-2 border-b border-gray-300">{row.noOfEmis}</td>
                            <td className="py-2 border-b border-gray-300 text-right">{row.emiAmount}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-right font-bold border-t-2 border-gray-500 pt-2">Total:</td>
                        <td className="text-right font-bold border-t-2 border-gray-500 pt-2">{totalAmount}</td>
                    </tr>
                </tfoot>
            </table>
        </section>

        <footer className="mt-12 text-lg font-semibold">
            Rajhans Motor Investment Co.
        </footer>
    </div>
  );
} 
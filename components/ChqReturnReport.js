import React from 'react';

const reportData = [
  { no: 1, customerName: 'DEBU NASKAR', phone: '8587835725', loanAcNo: 'RAM-18M1763-000497', ledgerNo: 'RA-484', regnNo: '', chqNo: '079708 AB', receiptNo: '101-7D6-004847', receiptDate: '24-10-18', returnDate: '15-11-2018', chqAmt: '81,000.00', type: 'EMI' },
  { no: 2, customerName: 'MINTU PRASAD', phone: '8800375236, 9891373733', loanAcNo: 'RAM-18S1D8B-000639', ledgerNo: 'RA-622', regnNo: '', chqNo: '047759 BANK', receiptNo: '101-A96-005177', receiptDate: '16-11-18', returnDate: '06-12-2018', chqAmt: '10,600.00', type: 'EMI' },
  { no: 3, customerName: 'LAXMAN SINGH', phone: '7065488439,', loanAcNo: 'RAM-18S1E5B-000624', ledgerNo: 'RA-612', regnNo: 'HR55AD8858', chqNo: '051278', receiptNo: '101-A64-006722', receiptDate: '29-01-19', returnDate: '31-01-2019', chqAmt: '21,200.00', type: 'EMI' },
  { no: 4, customerName: 'LAXMAN SINGH', phone: '7065488439,', loanAcNo: 'RAM-18A22A2-000608', ledgerNo: 'Rb-25', regnNo: 'HR55Y4019', chqNo: '051278 THE', receiptNo: '101-1C3-006723', receiptDate: '29-01-19', returnDate: '31-01-2019', chqAmt: '21,640.00', type: 'EMI' },
  { no: 5, customerName: 'AJAY', phone: '9999764616,', loanAcNo: 'RAM-18D1270-000861', ledgerNo: 'RA-835', regnNo: 'HR55AE0447', chqNo: '000183 ICIC', receiptNo: '101-AAA-008816', receiptDate: '19-04-19', returnDate: '23-04-2019', chqAmt: '20,000.00', type: 'EMI' },
  { no: 6, customerName: 'AMIT', phone: '9466660104,', loanAcNo: 'RAM-17O1CFB-000245', ledgerNo: 'RA-259', regnNo: '', chqNo: '390465 SBI', receiptNo: '101-6F8-009584', receiptDate: '20-05-19', returnDate: '23-05-2019', chqAmt: '60,000.00', type: 'EMI' },
  { no: 7, customerName: 'AMIT', phone: '9466660104,', loanAcNo: 'RAM-17O1CFB-000245', ledgerNo: 'RA-259', regnNo: 'HR55Y4019', chqNo: '390465 SBI', receiptNo: '101-6F8-009584', receiptDate: '20-05-19', returnDate: '23-05-2019', chqAmt: '60,000.00', type: 'EMI' },
  { no: 8, customerName: 'HIMANSHU RAGHAV', phone: '9810689495,', loanAcNo: 'RAM-17J2AB3-000082', ledgerNo: 'RA-88', regnNo: '', chqNo: '933243 SBI', receiptNo: '101-5D3-009945', receiptDate: '01-06-19', returnDate: '03-06-2019', chqAmt: '81,100.00', type: 'EMI' },
  { no: 9, customerName: 'AADIL ALI', phone: '9773784643,', loanAcNo: 'RAM-18M20D9-000538', ledgerNo: 'RA-531', regnNo: 'HR55AD8444', chqNo: '036117 IDBI', receiptNo: '101-39B-009942', receiptDate: '01-06-19', returnDate: '03-06-2019', chqAmt: '1,26,240.00', type: 'EMI' },
  { no: 10, customerName: 'VAKIL', phone: '9650913002,', loanAcNo: 'RAM-18M23B3-000567', ledgerNo: 'RB-20', regnNo: 'HHR55AB0287', chqNo: '002964 OBC', receiptNo: '101-033-009939', receiptDate: '01-06-19', returnDate: '03-06-2019', chqAmt: '2,47,850.00', type: 'EMI' },
  { no: 11, customerName: 'PRIYANKA', phone: '7065488439,', loanAcNo: 'RAM-18A1EE5-000522', ledgerNo: 'RB-18', regnNo: 'HHR55AB2452', chqNo: '256826 PNB', receiptNo: '101-033-009939', receiptDate: '01-06-19', returnDate: '03-06-2019', chqAmt: '99,220.00', type: 'EMI' },
  { no: 12, customerName: 'SANJAY KUMAR', phone: '9876543210', loanAcNo: 'RAM-19C2AB1-000999', ledgerNo: 'RA-777', regnNo: 'HR26DA1234', chqNo: '123456 HDFC', receiptNo: '102-XYZ-001122', receiptDate: '15-06-19', returnDate: '18-06-2019', chqAmt: '55,000.00', type: 'EMI' },
  { no: 13, customerName: 'RITU SHARMA', phone: '8765432109', loanAcNo: 'RAM-19D3BC2-001001', ledgerNo: 'RA-888', regnNo: 'DL1CA4321', chqNo: '654321 AXIS', receiptNo: '103-ABC-002233', receiptDate: '20-07-19', returnDate: '23-07-2019', chqAmt: '32,500.00', type: 'EMI' },
  { no: 14, customerName: 'VIKAS MEHTA', phone: '7654321098', loanAcNo: 'RAM-20E4CD3-001234', ledgerNo: 'RB-30', regnNo: '', chqNo: '112233 PNB', receiptNo: '104-DEF-003344', receiptDate: '01-08-19', returnDate: '04-08-2019', chqAmt: '48,000.00', type: 'EMI' },
  { no: 15, customerName: 'POOJA', phone: '6543210987', loanAcNo: 'RAM-20F5DE4-001567', ledgerNo: 'RB-45', regnNo: 'UP14A5678', chqNo: '445566 KOTAK', receiptNo: '105-GHI-004455', receiptDate: '10-09-19', returnDate: '13-09-2019', chqAmt: '75,100.00', type: 'EMI' },
];


export default function ChqReturnReport() {
    const today = new Date();
    const formattedDate = `12-Jun-2025`; // As per screenshot

  return (
    <div className="bg-white p-8 font-sans text-gray-800">
        <header className="flex justify-between items-start mb-4">
            <h1 className="text-2xl font-bold">Cheque Return Report</h1>
            <span className="text-lg">{formattedDate}</span>
        </header>

        <section>
            <table className="w-full text-left border-collapse text-sm">
                <thead>
                    <tr>
                        <th className="border-b-2 border-gray-500 pb-2">No.</th>
                        <th className="border-b-2 border-gray-500 pb-2">Customer Name</th>
                        <th className="border-b-2 border-gray-500 pb-2">Loan Ac No.</th>
                        <th className="border-b-2 border-gray-500 pb-2">Ledger No.</th>
                        <th className="border-b-2 border-gray-500 pb-2">Regn No.</th>
                        <th className="border-b-2 border-gray-500 pb-2">Chq No.</th>
                        <th className="border-b-2 border-gray-500 pb-2">Return Date</th>
                        <th className="border-b-2 border-gray-500 pb-2 text-right">Chq Amt.</th>
                    </tr>
                </thead>
                <tbody>
                    {reportData.map((row, index) => (
                        <tr key={row.no} className={index % 2 === 1 ? 'bg-gray-100' : ''}>
                            <td className="py-2 align-top">{row.no}</td>
                            <td className="py-2 align-top">
                                <div className='font-bold'>{row.customerName}</div>
                                <div className='text-xs'>Ph- {row.phone}</div>
                            </td>
                            <td className="py-2 align-top">{row.loanAcNo}</td>
                            <td className="py-2 align-top">{row.ledgerNo}</td>
                            <td className="py-2 align-top">{row.regnNo}</td>
                            <td className="py-2 align-top">
                                <div className='font-bold'>{row.chqNo}</div>
                                <div className='text-xs'>Rcpt No - {row.receiptNo}</div>
                                <div className="text-xs">Dt - {row.receiptDate}</div>
                            </td>
                            <td className="py-2 align-top">{row.returnDate}</td>
                            <td className="py-2 align-top text-right">
                                <div className="font-bold">{row.chqAmt}</div>
                                <div className="text-xs">{row.type}</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    </div>
  );
} 
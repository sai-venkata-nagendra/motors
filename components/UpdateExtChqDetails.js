import React from 'react';

const data = [
  { loanAcNo: 'RAM-17J284F-000024', customerName: 'DHARMENDER', fatherName: 'Rajpal', disbursalDt: '26-04-2017', extAcNo: 'RMI1706RA4', chasisNo: '07989', ledgerNo: 'Ra-4' },
  { loanAcNo: 'RAM-17J2005-000038', customerName: 'RAM NIWAS', fatherName: 'Kartar Singh', disbursalDt: '07-05-2017', extAcNo: 'RMI170605', chasisNo: '07987', ledgerNo: 'RA-5' },
  { loanAcNo: 'RAM-17M2CF2-000012', customerName: 'DEVENDER', fatherName: 'Rampal Singh', disbursalDt: '08-05-2017', extAcNo: 'RMI1706', chasisNo: '07990', ledgerNo: 'RA-9' },
  { loanAcNo: 'RAM-17M292A-000016', customerName: 'PAWAN', fatherName: 'Naresh Singh', disbursalDt: '10-05-2017', extAcNo: 'NOTREQD.', chasisNo: '33561', ledgerNo: 'RA-7' },
  { loanAcNo: 'RAM-17M2415-000014', customerName: 'MAHESH PANDEY', fatherName: 'Ramjanan Pandey', disbursalDt: '11-05-2017', extAcNo: 'RMI170617', chasisNo: '', ledgerNo: 'RA-17' },
  { loanAcNo: 'RAM-17M2548-000010', customerName: 'BRAHAM PRAKASH', fatherName: 'Ram Pal', disbursalDt: '11-05-2017', extAcNo: 'RMI170610', chasisNo: '07140', ledgerNo: 'RA-10' },
  { loanAcNo: 'RAM-17J2DA8-000041', customerName: 'RAJIV MAHTO', fatherName: 'Natho Mahto', disbursalDt: '11-05-2017', extAcNo: 'RMI170606', chasisNo: '07887', ledgerNo: 'RA-6' },
  { loanAcNo: 'RAM-17J2459-000043', customerName: 'DURGESH SINGH', fatherName: 'Shyam Singh', disbursalDt: '16-05-2017', extAcNo: 'RMI170611', chasisNo: '08032', ledgerNo: 'RA-11' },
  { loanAcNo: 'RAM-17M2DB9-000009', customerName: 'NAVEEN KUMAR', fatherName: 'Hari Om', disbursalDt: '16-05-2017', extAcNo: 'RMI170612', chasisNo: '08067', ledgerNo: 'RA-12' },
  { loanAcNo: 'RAM-17M2E3F-000013', customerName: 'BASANT LAL', fatherName: 'Ram Singh', disbursalDt: '17-05-2017', extAcNo: 'RMI170615', chasisNo: '08033', ledgerNo: 'RA-15' },
];

export default function UpdateExtChqDetails() {
  return (
    <div className="animate-fade-in-up max-w-7xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
      <h2 className="text-3xl font-extrabold mb-8 text-blue-900 border-b-4 border-teal-200 pb-2 tracking-wider drop-shadow-lg text-left uppercase">
        Update Ext Cheque
      </h2>
      
      <div className="overflow-x-auto rounded-lg shadow-md border border-blue-200">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-800 text-white uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Loan Ac No</th>
              <th className="py-3 px-6 text-left">Customer Name</th>
              <th className="py-3 px-6 text-left">Father's Name</th>
              <th className="py-3 px-6 text-left">Disbursal Dt</th>
              <th className="py-3 px-6 text-left">Ext Ac No.</th>
              <th className="py-3 px-6 text-left">Chasis No</th>
              <th className="py-3 px-6 text-left">Ledger No</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {data.map((row, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-blue-100">
                <td className="py-3 px-6 text-left">
                  <span className="font-medium text-blue-600 hover:text-blue-800 cursor-pointer">{row.loanAcNo}</span>
                </td>
                <td className="py-3 px-6 text-left">{row.customerName}</td>
                <td className="py-3 px-6 text-left">{row.fatherName}</td>
                <td className="py-3 px-6 text-left">{row.disbursalDt}</td>
                <td className="py-3 px-6 text-left">{row.extAcNo}</td>
                <td className="py-3 px-6 text-left">{row.chasisNo}</td>
                <td className="py-3 px-6 text-left">{row.ledgerNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 
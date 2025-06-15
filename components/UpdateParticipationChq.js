import React from 'react';

const data = [
  { loanAcNo: 'RAM-17M27CE-000001', customerName: 'DHANI RAM', disbursalDt: '21-04-2017', extAcNo: 'Not Reqd.', chasisNo: '07953', ledgerNo: 'RA-1' },
  { loanAcNo: 'RAM-17J2005-000038', customerName: 'RAM NIWAS', disbursalDt: '07-05-2017', extAcNo: 'RMI170605', chasisNo: '07987', ledgerNo: 'RA-5' },
  { loanAcNo: 'RAM-17J2DA8-000041', customerName: 'RAJIV MAHTO', disbursalDt: '11-05-2017', extAcNo: 'RMI170606', chasisNo: '07887', ledgerNo: 'RA-6' },
  { loanAcNo: 'RAM-17J2459-000043', customerName: 'DURGESH SINGH', disbursalDt: '16-05-2017', extAcNo: 'RMI170611', chasisNo: '08032', ledgerNo: 'RA-11' },
  { loanAcNo: 'RAM-17M22E2-000006', customerName: 'KRISHAN KUMAR', disbursalDt: '22-05-2017', extAcNo: 'RMI170618', chasisNo: '08086', ledgerNo: 'RA-18' },
  { loanAcNo: 'RAM-17M21C9-000005', customerName: 'KUNAL KUMAR', disbursalDt: '22-05-2017', extAcNo: 'RMI170619', chasisNo: '07973', ledgerNo: 'RA-19' },
  { loanAcNo: 'RAM-17J2232-000026', customerName: 'DINESH', disbursalDt: '22-05-2017', extAcNo: 'RMI170630', chasisNo: '08090', ledgerNo: 'RA-20' },
  { loanAcNo: 'RAM-17J2007-000045', customerName: 'DILIP KR MISHRA', disbursalDt: '29-05-2017', extAcNo: 'NFLLOANRMI0056', chasisNo: '08178', ledgerNo: 'RA-38' },
  { loanAcNo: 'RAM-17J23B0-000039', customerName: 'SHIV KUMAR YADAV', disbursalDt: '03-06-2017', extAcNo: 'DELF20708020001', chasisNo: '08101', ledgerNo: 'RA-34' },
  { loanAcNo: 'RAM-17J2A50-000035', customerName: 'BIKRAM', disbursalDt: '03-06-2017', extAcNo: 'DELF20707310003', chasisNo: '08273', ledgerNo: 'RA-39' },
];

export default function UpdateParticipationChq() {
  return (
    <div className="animate-fade-in-up max-w-7xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
      <h2 className="text-3xl font-extrabold mb-8 text-blue-900 border-b-4 border-teal-200 pb-2 tracking-wider drop-shadow-lg text-left uppercase">
        Update Participation Cheque
      </h2>
      
      <div className="overflow-x-auto rounded-lg shadow-md border border-blue-200">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-800 text-white uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Loan Ac No</th>
              <th className="py-3 px-6 text-left">Customer Name</th>
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
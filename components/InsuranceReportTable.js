import React from 'react';

const InsuranceReportTable = () => {
  const reportData = [
    { no: 1, customerName: 'ANIK PAL', phoneNo: '8510853139, 8076147249', loanAcNo: 'RMC-24J12A2-004864', regnNo: 'DL1LAK4854', insValidUpto: '28-05-1996' },
    { no: 2, customerName: 'DHANI RAM', phoneNo: '9717731156,', loanAcNo: 'RAM-17M27CE-000001', regnNo: 'HR55AB3965', insValidUpto: '21-04-2017' },
    { no: 3, customerName: 'PINTI', phoneNo: '8587829798, 9711094994', loanAcNo: 'RAM-17M2F0D-000004', regnNo: 'HHR55AB8078', insValidUpto: '24-04-2018' },
    { no: 4, customerName: 'PAWAN', phoneNo: '9958191714,', loanAcNo: 'RAM-17M292A-000016', regnNo: 'HONDACITY', insValidUpto: '09-05-2018' },
    { no: 5, customerName: 'RAJEEV YADAV', phoneNo: '8800248050,', loanAcNo: 'RAM-17M2E81-000011', regnNo: 'HR55AB1170', insValidUpto: '21-05-2018' },
    { no: 6, customerName: 'RAVI KUMAR', phoneNo: '8587983865, 8447934568', loanAcNo: 'RAM-17M23BB-000018', regnNo: 'HHR55AB6681', insValidUpto: '21-05-2018' },
    { no: 7, customerName: 'DINESH', phoneNo: '9650335012,', loanAcNo: 'RAM-17J2232-000026', regnNo: 'HHR55AB9371', insValidUpto: '21-05-2018' },
    { no: 8, customerName: 'DHEERAJ KUMAR YADAV', phoneNo: '9717573748,', loanAcNo: 'RAM-17M2214-000008', regnNo: 'HR55AB3358', insValidUpto: '24-05-2018' },
    { no: 9, customerName: 'BIKRAM', phoneNo: '9312888344,', loanAcNo: 'RAM-17J2A95-000048', regnNo: 'HHR55AB3267', insValidUpto: '02-06-2018' },
    { no: 10, customerName: 'SARJEET', phoneNo: '9711850682,', loanAcNo: 'RAM-17J2CA8-000040', regnNo: 'HHR55AB9525', insValidUpto: '02-06-2018' },
    { no: 11, customerName: 'NARENDER', phoneNo: '8377838378,', loanAcNo: 'RAM-20F123F-002209', regnNo: 'HR55AB0364', insValidUpto: '02-06-2018' },
    { no: 12, customerName: 'SUNIL KUMAR', phoneNo: '8950095131,', loanAcNo: 'RMC-22M2C61-003267', regnNo: 'HR55AC6064', insValidUpto: '02-06-2018' },
    { no: 13, customerName: 'INDRAJ', phoneNo: '9312804522,', loanAcNo: 'RAM-17J26D4-000020', regnNo: 'HR55AB1303', insValidUpto: '04-06-2018' },
    { no: 14, customerName: 'RAMESH', phoneNo: '8750802770,', loanAcNo: 'RAM-17J2E38-000028', regnNo: 'HR55AB2012', insValidUpto: '05-06-2018' },
    { no: 15, customerName: 'GEETA DEVI', phoneNo: '8587032960, 9999210507', loanAcNo: 'RMC-21A1537-002562', regnNo: 'HR55AB4446', insValidUpto: '08-06-2018' },
    { no: 16, customerName: 'SONU YADAV', phoneNo: '9212000062,', loanAcNo: 'RAM-17J2CF8-000037', regnNo: 'HR55AB5048', insValidUpto: '09-06-2018' },
    { no: 17, customerName: 'VIRU', phoneNo: '9540410590, 9212219118', loanAcNo: 'RAM-17O159E-000252', regnNo: 'HR55T4334', insValidUpto: '09-06-2018' },
    { no: 18, customerName: 'INDERJEET', phoneNo: '9718154150,', loanAcNo: 'RAM-17J2CC2-000068', regnNo: 'HHR55AB1129', insValidUpto: '14-06-2018' },
    { no: 19, customerName: 'SHAIRUN NISHA', phoneNo: '7503802097,', loanAcNo: 'RAM-17J244D-000056', regnNo: 'HR55AD4917', insValidUpto: '15-06-2018' },
    { no: 20, customerName: 'DINESH KUMAR', phoneNo: '9971906742, 8383065380', loanAcNo: 'RAM-17J2497-000055', regnNo: 'HR55AB3850', insValidUpto: '15-06-2018' },
    { no: 21, customerName: 'POOJA', phoneNo: '9716279034, 8383880783', loanAcNo: 'RAM-17J2B0A-000060', regnNo: 'HR55AB1345', insValidUpto: '16-06-2018' },
  ];

  return (
    <div className="animate-fade-in-up p-8 bg-white shadow-lg rounded-lg mt-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Insurance Due Report</h1>
          <p className="text-center font-semibold text-gray-700 mt-2">All Insurance Due Upto 12-Jun-2025</p>
        </div>
        <p className="text-gray-600">12-06-2025</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-sm">
          <thead className="border-t-2 border-b-2 border-gray-400">
            <tr>
              <th className="px-4 py-2 text-left font-bold text-gray-700">No.</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Customer Name</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Phone No.</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Loan Ac No.</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Regn No.</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Ins Valid Upto</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((row, index) => (
              <tr key={row.no} className={`border-b ${index % 2 === 1 ? 'bg-gray-100' : ''}`}>
                <td className="px-4 py-2">{row.no}</td>
                <td className="px-4 py-2">{row.customerName}</td>
                <td className="px-4 py-2">{row.phoneNo}</td>
                <td className="px-4 py-2">{row.loanAcNo}</td>
                <td className="px-4 py-2">{row.regnNo}</td>
                <td className="px-4 py-2">{row.insValidUpto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-right text-sm text-gray-600">Application</div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default InsuranceReportTable; 
import React from 'react';

const customers = [
    { no: 1, customerId: 'V101-CU-000550', customerName: 'VIRENDER SINGH' },
    { no: 2, customerId: 'S101-CU-003331', customerName: 'SANTOSH' },
    { no: 3, customerId: 'N101-CU-003851', customerName: 'NP TRADERS-NARENDRA SINGH' },
    { no: 4, customerId: 'A101-CU-002838', customerName: 'AKHTAR' },
    { no: 5, customerId: 'P101-CU-000186', customerName: 'PRADEEP KUMAR' },
    { no: 6, customerId: 'R101-CU-002567', customerName: 'RAKESH KUMAR' },
    { no: 7, customerId: 'U101-CU-002608', customerName: 'UMA SHANKAR' },
    { no: 8, customerId: 'A101-CU-004535', customerName: 'ARIF' },
    { no: 9, customerId: 'P101-CU-002971', customerName: 'PAWAN KUMAR' },
    { no: 10, customerId: 'D101-CU-002236', customerName: 'DALBEER' },
    { no: 11, customerId: 'S101-CU-004364', customerName: 'SARFARAJ KHAN' },
    { no: 12, customerId: 'M101-CU-000825', customerName: 'MUKESH' },
    { no: 13, customerId: 'N101-CU-001250', customerName: 'AAAAA' },
    { no: 14, customerId: 'B101-CU-002966', customerName: 'AAA' },
    { no: 15, customerId: 'N101-CU-001865', customerName: 'NARESH KUMAR' },
    { no: 16, customerId: 'M101-CU-001912', customerName: 'MAHIPAL SINGH' },
    { no: 17, customerId: 'S101-CU-002241', customerName: 'SAVITA' },
    { no: 18, customerId: 'P101-CU-000243', customerName: 'PARVEEN SINGH' },
    { no: 19, customerId: 'V101-CU-000637', customerName: 'VARUN' },
];

export default function CustomerWOLoan() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white font-sans">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Customers Without Loans</h1>
        <span className="text-gray-600">12-Jun-2025</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="border-b-2 border-gray-800">
            <tr>
              <th className="py-2 px-4 text-left font-semibold text-gray-700">No.</th>
              <th className="py-2 px-4 text-left font-semibold text-gray-700">Customer ID</th>
              <th className="py-2 px-4 text-left font-semibold text-gray-700">Customer Name</th>
              <th className="py-2 px-4 text-left font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={customer.no} className={index % 2 === 0 ? '' : 'bg-gray-100'}>
                <td className="py-2 px-4 border-b">{customer.no}</td>
                <td className="py-2 px-4 border-b">{customer.customerId}</td>
                <td className="py-2 px-4 border-b">{customer.customerName}</td>
                <td className="py-2 px-4 border-b">
                  <a href="#" className="text-blue-600 hover:underline mr-4">Add Loan</a>
                  <a href="#" className="text-blue-600 hover:underline">Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-gray-700 font-semibold">
        <p>Rajhans Motor Investment Co.</p>
      </div>
    </div>
  );
} 
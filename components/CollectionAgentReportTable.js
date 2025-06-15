import React from 'react';

const CollectionAgentReportTable = () => {
  const data = [
    { no: 1, agentName: 'Vp Motors-Narnaul', exptdCollection: 647660.00, actualCollection: 28315.00 },
    { no: 2, agentName: 'Bajaj Ranjeet Gurgaon', exptdCollection: 699665.00, actualCollection: 87019.00 },
    { no: 3, agentName: 'Vp Dharuhera', exptdCollection: 115590.00, actualCollection: 9260.00 },
    { no: 4, agentName: 'Pataudi', exptdCollection: 1967310.00, actualCollection: 331510.00 },
    { no: 5, agentName: 'Showroom-Delhi', exptdCollection: 7002270.00, actualCollection: 1507535.00 },
    { no: 6, agentName: 'Showroom', exptdCollection: 12185400.00, actualCollection: 3146076.00 },
    { no: 7, agentName: 'Royal Motors-Faridabad', exptdCollection: 483870.00, actualCollection: 34115.00 },
    { no: 8, agentName: 'Mandal Jabbar', exptdCollection: 10220.00, actualCollection: 10220.00 },
    { no: 9, agentName: 'Prem Motors-Sonipat', exptdCollection: 147750.00, actualCollection: 26670.00 },
    { no: 10, agentName: 'Krishna Automobiles-Rohtak', exptdCollection: 324585.00, actualCollection: 10470.00 },
  ];

  const formatNumber = (num) => num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const totalExptd = data.reduce((acc, item) => acc + item.exptdCollection, 0);
  const totalActual = data.reduce((acc, item) => acc + item.actualCollection, 0);
  const totalPercentage = totalExptd > 0 ? (totalActual / totalExptd) * 100 : 0;

  return (
    <div className="animate-fade-in-up mt-8 max-w-7xl mx-auto bg-white p-10 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Agent Target Vs Collection</h1>
        <p className="text-sm text-gray-600 mt-1">Collection Agent Report For Jun-25 - To - Jun-25</p>
      </div>
      <div className="text-right mb-4 text-sm font-medium text-gray-700">
        12-Jun-2025
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b-2 border-black">
              <th className="py-2 px-3 text-left font-bold">No.</th>
              <th className="py-2 px-3 text-left font-bold">Agent Name</th>
              <th className="py-2 px-3 text-right font-bold">Exptd Collection</th>
              <th className="py-2 px-3 text-right font-bold">Actual Collection</th>
              <th className="py-2 px-3 text-right font-bold">%Age Collection</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              const percentage = row.exptdCollection > 0 ? (row.actualCollection / row.exptdCollection) * 100 : 0;
              return (
                <tr key={row.no} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-3">{row.no}</td>
                  <td className="py-2 px-3">{row.agentName}</td>
                  <td className="py-2 px-3 text-right">{formatNumber(row.exptdCollection)}</td>
                  <td className="py-2 px-3 text-right">{formatNumber(row.actualCollection)}</td>
                  <td className="py-2 px-3 text-right">{percentage.toFixed(2)}%</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-black font-bold">
              <td colSpan="2" className="py-2 px-3 text-right">Total:</td>
              <td className="py-2 px-3 text-right">{formatNumber(totalExptd)}</td>
              <td className="py-2 px-3 text-right">{formatNumber(totalActual)}</td>
              <td className="py-2 px-3 text-right">{totalPercentage.toFixed(2)}%</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="mt-4 text-sm font-medium text-gray-800">
        Rajhans Motor Investment Co.
      </div>
    </div>
  );
};

export default CollectionAgentReportTable; 
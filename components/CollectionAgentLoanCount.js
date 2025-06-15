import React from 'react';

const CollectionAgentLoanCount = () => {
  const agentData = [
    { no: 1, agentId: '3W 0015CA', agentName: '3w Automobiles-Faridabad', loanCount: 8 },
    { no: 2, agentId: 'ANI0001CA', agentName: 'Anil Bhardwaj', loanCount: 192 },
    { no: 3, agentId: 'ANS0018CA', agentName: 'Anshul', loanCount: 1 },
    { no: 4, agentId: 'DAY0024CA', agentName: 'Bajaj Ranjeet Gurgaon', loanCount: 66 },
    { no: 5, agentId: 'DEE0008CA', agentName: 'Deepak Panchal', loanCount: 31 },
    { no: 6, agentId: 'DEE0010CA', agentName: 'Deepak Sain', loanCount: 14 },
    { no: 7, agentId: 'KRI0017CA', agentName: 'Krishna Automobiles-Rohtak', loanCount: 51 },
    { no: 8, agentId: 'KVE0013CA', agentName: 'Kvell-Rewari', loanCount: 10 },
    { no: 9, agentId: 'MAN0011CA', agentName: 'Mantosh', loanCount: 1 },
    { no: 10, agentId: 'MAN0019CA', agentName: 'Mandal Jabbar', loanCount: 3 },
    { no: 11, agentId: 'PAR0004CA', agentName: 'Pardeep', loanCount: 0 },
    { no: 12, agentId: 'PAT0006CA', agentName: 'Pataudi', loanCount: 525 },
    { no: 13, agentId: 'PAV0002CA', agentName: 'Pavitar', loanCount: 84 },
    { no: 14, agentId: 'RAN0025CA', agentName: 'Ranjeet Deepak Gurgaon', loanCount: 0 },
    { no: 15, agentId: 'ROY0021CA', agentName: 'Royal Motors-Faridabad', loanCount: 61 },
    { no: 16, agentId: 'SAN0009CA', agentName: 'Sandeep', loanCount: 4 },
    { no: 17, agentId: 'SAT0012CA', agentName: 'Satish', loanCount: 178 },
    { no: 18, agentId: 'SHI0022CA', agentName: 'Shiv Shakti Motors-Bahadurgarh', loanCount: 9 },
    { no: 19, agentId: 'SHO0005CA', agentName: 'Showroom', loanCount: 2987 },
    { no: 20, agentId: 'SHO0020CA', agentName: 'Showroom-Delhi', loanCount: 761 },
    { no: 21, agentId: 'SOH0007CA', agentName: 'Sohna', loanCount: 53 },
    { no: 22, agentId: 'SON0014CA', agentName: 'Prem Motors-Sonipat', loanCount: 33 },
    { no: 23, agentId: 'VIJ0003CA', agentName: 'Vijay', loanCount: 99 },
    { no: 24, agentId: 'VP 0016CA', agentName: 'Vp Motors-Narnaul', loanCount: 89 },
  ];

  return (
    <div className="animate-fade-in-up max-w-5xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
      <h1 className="text-3xl font-extrabold text-blue-900 tracking-wider drop-shadow-lg uppercase border-b-4 border-teal-200 pb-4 mb-8">
        Collection Agent Loan Count
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-sm rounded-lg shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-3 text-left font-bold text-gray-700 uppercase">No.</th>
              <th className="px-4 py-3 text-left font-bold text-gray-700 uppercase">Agent ID</th>
              <th className="px-4 py-3 text-left font-bold text-gray-700 uppercase">Agent Name</th>
              <th className="px-4 py-3 text-left font-bold text-gray-700 uppercase">Loan Count</th>
            </tr>
          </thead>
          <tbody>
            {agentData.map((agent, index) => (
              <tr key={agent.no} className={`border-b hover:bg-blue-50 transition-colors`}>
                <td className="px-4 py-2">{agent.no}</td>
                <td className="px-4 py-2 text-blue-600 font-semibold">{agent.agentId}</td>
                <td className="px-4 py-2">{agent.agentName}</td>
                <td className="px-4 py-2 font-medium">{agent.loanCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
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

export default CollectionAgentLoanCount; 
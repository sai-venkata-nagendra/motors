import React from 'react';

const ReportRow = ({ data, isHeader = false, isTotal = false }) => {
    const textColors = {
        Running: 'text-green-600',
        OverDue: 'text-red-600',
        Recalled: 'text-red-600',
        Settled: 'text-green-600',
        Closed: 'text-green-600',
        Total: 'text-blue-600',
    };
    
    const getTextColor = (key, value) => {
        if (isHeader || value === 0 || value === '0') return 'text-black';
        return textColors[key] || 'text-black';
    };
    
    return (
        <div className={`grid grid-cols-8 text-center ${isHeader ? 'font-bold bg-gray-100' : ''} ${isTotal ? 'font-bold' : ''}`}>
            {Object.entries(data).map(([key, value]) => (
                <div key={key} className={`border border-black px-2 py-1 ${getTextColor(key, value)}`}>
                    {value}
                </div>
            ))}
        </div>
    );
};

const ReportSection = ({ title, data, summary, expiredCount }) => (
    <div className="mb-8">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <div className="border border-black">
            <ReportRow data={{ Running: 'Running', OverDue: 'OverDue', Recalled: 'Recalled', Legal: 'Legal', Settled: 'Settled', Closed: 'Closed', 'Pre-Paid': 'Pre-Paid', Total: 'Total' }} isHeader />
            <ReportRow data={data} isTotal />
            
            {/* Summary Rows */}
            <div className="grid grid-cols-8 text-center font-bold">
                <div className="col-span-1 border border-black py-1 text-blue-600">{summary.runningOverdue}</div>
                <div className="col-start-3 col-span-1 border border-black py-1 text-red-600">{data.Recalled}</div>
                <div className="col-start-6 col-span-1 border border-black py-1 text-green-600">{summary.closedPrepaid}</div>
            </div>
            <div className="grid grid-cols-8 text-center font-bold">
                <div className="col-start-2 col-span-1 border border-black py-1 text-red-600">{data.OverDue}</div>
            </div>
        </div>
        
        {/* Expired Loan Count */}
        <div className="flex items-center mt-2 gap-2">
            <div className="bg-red-500 text-white font-bold px-4 py-1 border border-black">ALERT =&gt;&gt;&gt;</div>
            <div className="flex items-center border border-black">
                <span className="px-4 font-bold">Expired Loan Count :</span>
                <span className="px-4 py-1 border-l border-black text-red-600 font-bold">{expiredCount}</span>
            </div>
            <div className="border border-black px-4 py-1 font-semibold">
                Loans Which Should Have Been Closed Or Settled By Now.
            </div>
        </div>
    </div>
);

const newVehicleData = { Running: 946, OverDue: 1302, Recalled: 0, Legal: 0, Settled: 127, Closed: 1537, 'Pre-Paid': 75, Total: 3987 };
const usedVehicleData = { Running: 251, OverDue: 235, Recalled: 0, Legal: 0, Settled: 58, Closed: 376, 'Pre-Paid': 29, Total: 949 };
const personalLoanData = { Running: 14, OverDue: 1, Recalled: 15, Legal: 0, Settled: 2, Closed: 5, 'Pre-Paid': 1, Total: 20 };
const allLoanData = { Running: 1211, OverDue: 1538, Recalled: 0, Legal: 0, Settled: 187, Closed: 1915, 'Pre-Paid': 105, Total: 4956 };

export default function LoanStatusReport() {
    return (
        <div className="p-6 bg-white max-w-7xl mx-auto font-sans">
            <h1 className="text-2xl font-bold mb-4">Status-wise Loan Count</h1>
            
            <ReportSection 
                title="New Vehicle Loan" 
                data={newVehicleData}
                summary={{ runningOverdue: 2248, closedPrepaid: 1739 }}
                expiredCount={800}
            />
            
            <ReportSection 
                title="Used Vehicle Loan" 
                data={usedVehicleData}
                summary={{ runningOverdue: 486, closedPrepaid: 463 }}
                expiredCount={138}
            />
            
            <ReportSection 
                title="Personal Loan" 
                data={personalLoanData}
                summary={{ runningOverdue: 15, closedPrepaid: 5 }}
                expiredCount={3}
            />
            
            <ReportSection 
                title="Count for All Loan Types" 
                data={allLoanData}
                summary={{ runningOverdue: 2749, closedPrepaid: 2207 }}
                expiredCount={941}
            />
        </div>
    );
} 
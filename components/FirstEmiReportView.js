import React from 'react';

const mockData = [
    { no: 1, customerName: 'MD NEHAL', loanAcNo: 'RMC-25M25AC-005863', regnNo: 'DL1LAP3038', emiDate: '05-06-25', recdDate: '', emiAmount: '11,200.00' },
    { no: 2, customerName: 'GURU PRASAD KUSHWAH', loanAcNo: 'RMC-25M29A3-005874', regnNo: '', emiDate: '05-06-25', recdDate: '', emiAmount: '11,100.00' },
    { no: 3, customerName: 'VINAY KUMAR CHAURASIYA', loanAcNo: 'RMC-25M2370-005894', regnNo: '', emiDate: '05-06-25', recdDate: '', emiAmount: '11,040.00' },
    { no: 4, customerName: 'DEEPU', loanAcNo: 'RMC-25M2D47-005876', regnNo: '', emiDate: '05-06-25', recdDate: '', emiAmount: '10,970.00' },
    { no: 5, customerName: 'RANJEET SINGH', loanAcNo: 'RMC-25M2D08-005848', regnNo: '', emiDate: '05-06-25', recdDate: '', emiAmount: '9,400.00' },
    { no: 6, customerName: 'TIKA NAND SAH', loanAcNo: 'RMC-25M2F52-005885', regnNo: 'HR55AMB8701', emiDate: '08-06-25', recdDate: '', emiAmount: '10,590.00' },
    { no: 7, customerName: 'VIRENDER', loanAcNo: 'RMC-25M260B-005886', regnNo: 'DL1LAK1139', emiDate: '08-06-25', recdDate: '', emiAmount: '8,500.00' },
    { no: 8, customerName: 'SHANKAR BAGRIYA', loanAcNo: 'RMC-25M2324-005884', regnNo: '', emiDate: '15-06-25', recdDate: '', emiAmount: '12,850.00' },
    { no: 9, customerName: 'SHAMBHU KUMAR THAKUR', loanAcNo: 'RMC-25M2CA4-005879', regnNo: '', emiDate: '15-06-25', recdDate: '', emiAmount: '11,280.00' },
    { no: 10, customerName: 'PRATAP SINGH', loanAcNo: 'RMC-25M2B02-005900', regnNo: '', emiDate: '15-06-25', recdDate: '', emiAmount: '12,450.00' },
    { no: 11, customerName: 'VIKRAM SINGH', loanAcNo: 'RMC-25M218F-005893', regnNo: '', emiDate: '15-06-25', recdDate: '', emiAmount: '12,850.00' },
    { no: 12, customerName: 'AMANJEET SINGH', loanAcNo: 'RMC-25J2A81-005925', regnNo: '', emiDate: '15-06-25', recdDate: '', emiAmount: '11,040.00' },
    { no: 13, customerName: 'BHARAT', loanAcNo: 'RMC-25M2C52-005902', regnNo: '', emiDate: '16-06-25', recdDate: '', emiAmount: '11,280.00' },
    { no: 14, customerName: 'RATAN LAL', loanAcNo: 'RMC-25M236F-005898', regnNo: '', emiDate: '17-06-25', recdDate: '', emiAmount: '12,850.00' },
    { no: 15, customerName: 'DINESH', loanAcNo: 'RMC-25M2F5C-005904', regnNo: '', emiDate: '19-06-25', recdDate: '', emiAmount: '11,280.00' },
    { no: 16, customerName: 'RAVINDER', loanAcNo: 'RMC-25M2408-005908', regnNo: '', emiDate: '20-06-25', recdDate: '', emiAmount: '11,280.00' },
    { no: 17, customerName: 'SHARAFAT', loanAcNo: 'RMC-25M2348-005896', regnNo: '', emiDate: '20-06-25', recdDate: '', emiAmount: '11,200.00' },
    { no: 18, customerName: 'CHANDRA PAL', loanAcNo: 'RMC-25M2466-005913', regnNo: 'HR55AK9509', emiDate: '20-06-25', recdDate: '', emiAmount: '10,250.00' },
    { no: 19, customerName: 'DEEPAK SHARMA', loanAcNo: 'RMC-25M2572-005899', regnNo: '', emiDate: '20-06-25', recdDate: '', emiAmount: '15,710.00' },
    { no: 20, customerName: 'TEJ SINGH', loanAcNo: 'RMC-25M2898-005887', regnNo: '', emiDate: '20-06-25', recdDate: '', emiAmount: '10,575.00' },
    { no: 21, customerName: 'SUDHIR KUMAR', loanAcNo: 'RMC-25M21F4-005897', regnNo: '', emiDate: '20-06-25', recdDate: '', emiAmount: '11,280.00' },
];

const ReportTable = ({ data, reportTitle, dateRange, reportDate, onBack }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in-up">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800">{reportTitle}</h1>
                <span className="text-sm font-semibold text-gray-600">{reportDate}</span>
            </div>
            <div className="text-center mb-6">
                <h2 className="text-lg font-semibold text-gray-700">{dateRange}</h2>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b-2 border-gray-300">No.</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b-2 border-gray-300">Customer Name</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b-2 border-gray-300">Loan Ac No.</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b-2 border-gray-300">Regn. No.</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b-2 border-gray-300">EMI Date</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b-2 border-gray-300">Recd Date</th>
                            <th className="px-4 py-2 text-right text-sm font-semibold text-gray-700 uppercase tracking-wider border-b-2 border-gray-300">EMI Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {data.map((row, index) => (
                            <tr key={row.no} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100'}>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">{row.no}</td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">{row.customerName}</td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">{row.loanAcNo}</td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">{row.regnNo}</td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">{row.emiDate}</td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">{row.recdDate}</td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800 text-right">{row.emiAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                <button 
                    onClick={onBack}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-200"
                >
                    Back to Form
                </button>
                <div className="text-sm text-gray-600">
                    <p>Report generated on: {new Date().toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

const FirstEmiReportView = ({ reportType, fromMonth, fromYear, toMonth, toYear, onBack }) => {
    const reportTitle = reportType === 'first-emi-report' ? 'First EMI Report' : 'Last EMI Report';
    const dateRange = `From ${fromMonth}-${fromYear} - To - ${toMonth}-${toYear}`;
    const reportDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/ /g, '-');
    
    return <ReportTable data={mockData} reportTitle={reportTitle} dateRange={dateRange} reportDate={reportDate} onBack={onBack} />;
};

export default FirstEmiReportView; 
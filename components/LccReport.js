import React, { useState } from 'react';

const initialState = {
    reportType: 'quick-lcc',
    loanType: 'vehicle-loan',
    hpFilter: 'hinduja-leyland',
    codeType: 'all',
    filterBy: 'collection-area',
    collectionArea: 'all',
    includeAllData: false,
};

export default function LccReport() {
    const [form, setForm] = useState(initialState);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleClearAll = () => {
        setForm(initialState);
    };

    const FormRow = ({ label, children }) => (
        <div className="flex items-center">
            <label className="w-48 text-lg font-semibold text-blue-900 shrink-0">{label}</label>
            {children}
        </div>
    );

    return (
        <div 
            id="lccReport" 
            className="animate-fade-in-up max-w-4xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80"
        >
            <h2 className="text-3xl font-extrabold mb-10 text-blue-900 border-b-4 border-teal-200 pb-4 tracking-wider drop-shadow-lg text-center uppercase">
                LCC Report
            </h2>

            <div className="space-y-8">
                <div className="bg-white/80 rounded-2xl shadow-lg p-8 border border-blue-100 space-y-6">
                    {/* Report Type */}
                    <div className="flex items-center gap-6">
                        <label className="text-lg font-semibold text-blue-900 shrink-0">Report Type:</label>
                        <div className="flex items-center space-x-6">
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" name="reportType" value="quick-lcc" checked={form.reportType === 'quick-lcc'} onChange={handleInputChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                                <span className={`ml-2 font-semibold ${form.reportType === 'quick-lcc' ? 'text-red-600' : 'text-gray-800'}`}>Quick LCC</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" name="reportType" value="filtered-lcc" checked={form.reportType === 'filtered-lcc'} onChange={handleInputChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                                <span className="ml-2 font-medium text-gray-800">Filtered LCC</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" name="reportType" value="closed-loan-list" checked={form.reportType === 'closed-loan-list'} onChange={handleInputChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                                <span className="ml-2 font-medium text-gray-800">Closed Loan List</span>
                            </label>
                        </div>
                    </div>

                    {/* Form Grid */}
                    <div className="grid grid-cols-1 gap-y-5 pt-6 border-t border-blue-200">
                        <FormRow label="Select Loan Type:">
                            <select name="loanType" value={form.loanType} onChange={handleInputChange} className="flex-1 p-2 border border-blue-200 rounded-lg bg-white shadow-sm">
                                <option value="vehicle-loan">Vehicle Loan</option>
                                <option value="personal-loan">Personal Loan</option>
                            </select>
                        </FormRow>
                        
                        <FormRow label="Select HP Filter:">
                            <select name="hpFilter" value={form.hpFilter} onChange={handleInputChange} className="flex-1 p-2 border border-blue-200 rounded-lg bg-white shadow-sm">
                                <option value="hinduja-leyland">Hinduja Leyland Finance Limited, Gurgaon</option>
                                <option value="other-finance">Other Finance Corp</option>
                            </select>
                        </FormRow>

                        <FormRow label="Code Type:">
                            <select name="codeType" value={form.codeType} onChange={handleInputChange} className="flex-1 p-2 border border-blue-200 rounded-lg bg-white shadow-sm">
                                <option value="all">ALL</option>
                                <option value="fixed">Fixed</option>
                                <option value="variable">Variable</option>
                            </select>
                        </FormRow>

                        <FormRow label="Filter By Area / Agent:">
                            <select name="filterBy" value={form.filterBy} onChange={handleInputChange} className="flex-1 p-2 border border-blue-200 rounded-lg bg-white shadow-sm">
                                <option value="collection-area">Collection Area</option>
                                <option value="agent">Agent</option>
                            </select>
                        </FormRow>

                        <FormRow label="Collection Area:">
                            <select name="collectionArea" value={form.collectionArea} onChange={handleInputChange} className="flex-1 p-2 border border-blue-200 rounded-lg bg-white shadow-sm">
                                <option value="all">ALL</option>
                                <option value="area-1">Area 1</option>
                                <option value="area-2">Area 2</option>
                            </select>
                        </FormRow>

                        <FormRow label="">
                            <label className="flex items-center cursor-pointer">
                                <input type="checkbox" name="includeAllData" checked={form.includeAllData} onChange={handleInputChange} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <span className="ml-3 font-medium text-gray-800">Include ALL Loans Data</span>
                            </label>
                        </FormRow>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-between pt-6 border-t border-teal-200">
                    <button type="button" className="text-blue-700 hover:text-blue-900 font-bold transition-colors">
                        Export to Excel
                    </button>
                    <button
                        type="button"
                        onClick={handleClearAll}
                        className="bg-gradient-to-r from-gray-100 to-blue-100 hover:from-gray-200 hover:to-blue-200 text-blue-700 font-bold px-8 py-3 rounded-xl shadow-lg border-2 border-blue-300 transition-all duration-200 text-lg"
                    >
                        Clear All
                    </button>
                </div>
            </div>
            <style jsx>{`
                @keyframes fade-in-up {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                  animation: fade-in-up 0.4s ease-out;
                }
            `}</style>
        </div>
    );
} 
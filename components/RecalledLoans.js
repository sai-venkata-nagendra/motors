import React, { useState } from 'react';

export default function RecalledLoans() {
    const [loanType, setLoanType] = useState('all');
    const [hp, setHp] = useState('all');

    return (
        <div 
            id="recalledLoans" 
            className="animate-fade-in-up max-w-4xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80"
        >
            <h2 className="text-3xl font-extrabold mb-10 text-blue-900 border-b-4 border-teal-200 pb-4 tracking-wider drop-shadow-lg text-center uppercase">
                List of Recalled Loans
            </h2>

            <div className="bg-white/80 rounded-2xl shadow-lg p-8 border border-blue-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {/* Loan Type Dropdown */}
                    <div className="flex items-center space-x-3">
                        <label htmlFor="loanType" className="text-lg font-semibold text-blue-900 w-32">
                            Loan Type:
                        </label>
                        <select
                            id="loanType"
                            name="loanType"
                            value={loanType}
                            onChange={(e) => setLoanType(e.target.value)}
                            className="flex-1 p-2 border border-yellow-400 rounded-lg bg-yellow-50 shadow-sm"
                        >
                            <option value="all">ALL</option>
                            <option value="vehicle">Vehicle Loan</option>
                            <option value="personal">Personal Loan</option>
                        </select>
                    </div>

                    {/* Select HP Dropdown */}
                    <div className="flex items-center space-x-3">
                        <label htmlFor="hp" className="text-lg font-semibold text-blue-900 w-32">
                            Select HP:
                        </label>
                        <select
                            id="hp"
                            name="hp"
                            value={hp}
                            onChange={(e) => setHp(e.target.value)}
                            className="flex-1 p-2 border border-blue-200 rounded-lg bg-white shadow-sm"
                        >
                            <option value="all">ALL</option>
                            <option value="hp1">HP Filter 1</option>
                            <option value="hp2">HP Filter 2</option>
                        </select>
                    </div>
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
import React, { useState } from 'react';
import CustomerSearchModal from './CustomerSearchModal';

export default function AddOtherCharges() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const handleSearch = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSelectCustomer = (customer) => {
        setSelectedCustomer(customer);
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="animate-fade-in-up max-w-5xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
                <div className="flex justify-between items-center mb-6 border-b-4 border-teal-200 pb-4">
                    <h1 className="text-2xl font-extrabold text-blue-900 tracking-wider drop-shadow-lg uppercase">Add Other Charges</h1>
                    <button
                        onClick={handleSearch}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-8 rounded-lg shadow-md transition-colors border border-gray-400"
                    >
                        Search
                    </button>
                </div>

                <div className={`transition-opacity duration-500 ${selectedCustomer ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="loan-ac-no" className="block text-sm font-bold text-gray-700 mb-2">Loan A/C No.</label>
                            <input
                                type="text"
                                id="loan-ac-no"
                                className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
                                value={selectedCustomer ? selectedCustomer.loanNo : ''}
                                readOnly
                            />
                        </div>
                        <div>
                            <label htmlFor="customer-name" className="block text-sm font-bold text-gray-700 mb-2">Customer Name</label>
                            <input
                                type="text"
                                id="customer-name"
                                className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
                                value={selectedCustomer ? selectedCustomer.name : ''}
                                readOnly
                            />
                        </div>
                        <div>
                            <label htmlFor="charge-type" className="block text-sm font-bold text-gray-700 mb-2">Charge Type</label>
                            <select id="charge-type" disabled={!selectedCustomer} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                <option>Select Charge Type</option>
                                <option>Bounce Charges</option>
                                <option>Late Fine</option>
                                <option>Foreclosure Charges</option>
                                <option>Document Charges</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="charge-amount" className="block text-sm font-bold text-gray-700 mb-2">Amount</label>
                            <input
                                type="number"
                                id="charge-amount"
                                disabled={!selectedCustomer}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter amount"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="remarks" className="block text-sm font-bold text-gray-700 mb-2">Remarks</label>
                            <textarea
                                id="remarks"
                                rows="3"
                                disabled={!selectedCustomer}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter remarks"
                            ></textarea>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button disabled={!selectedCustomer} className="bg-green-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-green-700 transition-colors shadow-md disabled:bg-gray-400">
                            Save
                        </button>
                    </div>
                </div>
                {!selectedCustomer && (
                    <div className="text-center text-gray-500 mt-10">
                        <p>Search for a customer to add other charges.</p>
                    </div>
                )}
            </div>
            {isModalOpen && (
                <CustomerSearchModal
                    onClose={handleCloseModal}
                    onSelectCustomer={handleSelectCustomer}
                />
            )}
            <style jsx>{`
                @keyframes fade-in-up {
                from { opacity: 0; transform: translateY(40px); }
                to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                animation: fade-in-up 0.5s cubic-bezier(0.4,0,0.2,1);
                }
            `}</style>
        </>
    );
}

import React, { useState } from 'react';
import CustomerSearchModal from './CustomerSearchModal';

export default function LoanAcStatement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleSearch = () => {
    setIsModalOpen(true);
  };

  const handleClearAll = () => {
    setSelectedCustomer(null);
    // You might want to reset the loan account number dropdown as well
    const loanAcNoDropdown = document.getElementById('loanAcNo');
    if (loanAcNoDropdown) {
      loanAcNoDropdown.selectedIndex = 0;
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(false);
  };

  return (
    <div id="loanAcStatement" className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300">Loan Account Statement</h1>
        <button
          onClick={handleSearch}
          className="bg-white text-gray-800 font-semibold py-1 px-4 rounded-md border border-gray-400 shadow-sm hover:bg-gray-100 transition duration-150"
        >
          Search
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
          {/* Row 1 */}
          <div className="flex items-center">
            <label className="w-32 text-gray-700 font-semibold" htmlFor="customerName">Customer Name:</label>
            <input
              type="text"
              id="customerName"
              value={selectedCustomer ? selectedCustomer.name : ''}
              readOnly
              className="flex-grow p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>
          <div className="flex items-center">
            <label className="w-32 text-gray-700 font-semibold" htmlFor="loanAcNo">Loan Ac No:</label>
            <select id="loanAcNo" className="flex-grow p-2 border border-gray-300 rounded-md bg-white">
              <option>Select Loan A/c No</option>
              {/* Add loan account numbers here */}
            </select>
          </div>
          
          {/* Row 2 */}
          <div className="flex items-center">
            <label className="w-32 text-gray-700 font-semibold">Customer ID:</label>
            <span className="flex-grow text-gray-800 font-medium">{selectedCustomer ? selectedCustomer.id : ''}</span>
          </div>
          <div className="flex items-center">
            <label className="w-32 text-gray-700 font-semibold">Ext Ac No:</label>
            <span className="flex-grow text-gray-800 font-medium">{selectedCustomer ? selectedCustomer.extAcNo : ''}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-8">
          <div>
            <a href="#" className="text-blue-600 hover:underline font-semibold">Export to Excel</a>
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-150">
              Get Report
            </button>
            <button 
              onClick={handleClearAll}
              className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-150"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <CustomerSearchModal
          onClose={handleCloseModal}
          onSelectCustomer={handleSelectCustomer}
        />
      )}
    </div>
  );
} 
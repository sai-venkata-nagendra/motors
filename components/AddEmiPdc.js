import React, { useState } from 'react';
import CustomerSearchModal from './CustomerSearchModal';

export default function AddEmiPdc() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    customerId: '',
    disbursalDate: '',
    loanAmount: '',
    emisLeft: '',
    pdcsGiven: false,
    internalAcNo: '',
    extAcNo: '',
    ledgerFolio: '',
    noOfEmis: '',
    lastEmiDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSearch = () => {
    setIsModalOpen(true);
  };

  const handleSave = () => {
    console.log('Saving PDC:', formData);
    alert('PDC Saved!');
  };

  const handleCancel = () => {
    setFormData({
      customerName: '',
      customerId: '',
      disbursalDate: '',
      loanAmount: '',
      emisLeft: '',
      pdcsGiven: false,
      internalAcNo: '',
      extAcNo: '',
      ledgerFolio: '',
      noOfEmis: '',
      lastEmiDate: '',
    });
  };

  return (
    <>
      <div className="animate-fade-in-up max-w-5xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
        <div className="flex justify-between items-center border-b-4 border-teal-200 pb-2 mb-8">
          <h2 className="text-3xl font-extrabold text-blue-900 tracking-wider drop-shadow-lg uppercase">
            Add PDC
          </h2>
          <button 
              onClick={handleSearch}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-lg shadow-md border border-blue-700 transition-all duration-200"
          >
            Search
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-x-16 gap-y-6 text-lg">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center"><label className="w-40 font-semibold text-blue-900">Customer Name:</label><input type="text" name="customerName" value={formData.customerName} onChange={handleInputChange} className="input-field" /></div>
            <div className="flex items-center"><label className="w-40 font-semibold text-blue-900">Customer ID:</label><input type="text" name="customerId" value={formData.customerId} onChange={handleInputChange} className="input-field" /></div>
            <div className="flex items-center"><label className="w-40 font-semibold text-blue-900">Disbursal Date:</label><input type="text" name="disbursalDate" value={formData.disbursalDate} onChange={handleInputChange} className="input-field" /></div>
            <div className="flex items-center"><label className="w-40 font-semibold text-blue-900">Loan Amount:</label><input type="text" name="loanAmount" value={formData.loanAmount} onChange={handleInputChange} className="input-field" /></div>
            <div className="flex items-center"><label className="w-40 font-semibold text-blue-900">EMIs Left:</label><input type="text" name="emisLeft" value={formData.emisLeft} onChange={handleInputChange} className="input-field" /></div>
            <div className="flex items-center"><label className="w-40 font-semibold text-blue-900">PDCs Given?</label><input type="checkbox" name="pdcsGiven" checked={formData.pdcsGiven} onChange={handleInputChange} className="w-5 h-5" /></div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center"><label className="w-40 font-semibold text-blue-900">Internal A/C No.:</label><select name="internalAcNo" value={formData.internalAcNo} onChange={handleInputChange} className="input-field"><option value="">-- Select --</option></select></div>
            <div className="flex items-center"><label className="w-40 font-semibold text-blue-900">Ext. A/C No.:</label><input type="text" name="extAcNo" value={formData.extAcNo} onChange={handleInputChange} className="input-field" /></div>
            <div className="flex items-center"><label className="w-40 font-semibold text-blue-900">Ledger Folio:</label><input type="text" name="ledgerFolio" value={formData.ledgerFolio} onChange={handleInputChange} className="input-field" /></div>
            <div className="flex items-center"><label className="w-40 font-semibold text-blue-900">No. Of EMIs:</label><input type="text" name="noOfEmis" value={formData.noOfEmis} onChange={handleInputChange} className="input-field" /></div>
            <div className="flex items-center"><label className="w-40 font-semibold text-blue-900">Last EMI Date:</label><input type="text" name="lastEmiDate" value={formData.lastEmiDate} onChange={handleInputChange} className="input-field" /></div>
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-12">
          <button 
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-3 rounded-lg shadow-xl border-2 border-blue-700 transition-all duration-200"
          >
            Save
          </button>
          <button 
            onClick={handleCancel}
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold px-10 py-3 rounded-lg shadow-xl border-2 border-gray-500 transition-all duration-200"
          >
            Cancel
          </button>
        </div>

        <style jsx>{`
          .input-field {
            @apply flex-grow bg-white/90 border border-blue-300 rounded-lg px-4 py-2 shadow-inner focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all;
          }
        `}</style>
      </div>
      <CustomerSearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
} 
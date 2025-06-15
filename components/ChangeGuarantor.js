import React, { useState } from 'react';

const initialState = {
  customerName: '',
  ledgerNo: '',
  loanAmount: '',
  presentGuar: '',
  internalAcNo: '',
  extAcNo: '',
  vehRegnNo: '',
  newGuarName: '',
  removeGuar: false,
  file: null,
};

export default function ChangeGuarantor() {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  const handleClear = () => {
    setForm(initialState);
    setFile(null);
  };

  return (
    <div className="animate-fade-in-up max-w-3xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-3xl font-extrabold text-blue-900 tracking-wider drop-shadow-lg uppercase">Change Guarantor</h2>
        <input type="text" placeholder="Search..." className="ml-6 border border-blue-300 rounded-lg px-4 py-2 bg-white/80 text-blue-900 font-semibold shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all placeholder-blue-300 w-56" />
        <button className="ml-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow transition-all duration-200 border border-blue-700">Search</button>
      </div>
      <div className="text-blue-700 text-sm mb-6 font-semibold bg-blue-50 rounded-lg px-4 py-2 border-l-4 border-blue-400 shadow-sm">
        Please Note: You can change guarantor only if you have added another guarantor for the customer. If not, please click on this message to add a guarantor.
      </div>
      <form className="space-y-8">
        <div className="grid grid-cols-3 gap-8 items-end">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Customer Name</label>
            <input name="customerName" value={form.customerName} onChange={handleInput} className="input-glass" placeholder="Customer Name" />
            <label className="font-semibold text-blue-900 mt-4">Ledger No / HP</label>
            <input name="ledgerNo" value={form.ledgerNo} onChange={handleInput} className="input-glass" placeholder="Ledger No / HP" />
            <label className="font-semibold text-blue-900 mt-4">Loan Amount</label>
            <input name="loanAmount" value={form.loanAmount} onChange={handleInput} className="input-glass" placeholder="Loan Amount" />
            <label className="font-semibold text-blue-900 mt-4">Present Guar.</label>
            <input name="presentGuar" value={form.presentGuar} onChange={handleInput} className="input-glass" placeholder="Present Guarantor" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Internal Ac No.</label>
            <select name="internalAcNo" value={form.internalAcNo} onChange={handleInput} className="input-glass">
              <option value="">Select</option>
              <option>Ac 1</option>
              <option>Ac 2</option>
            </select>
            <label className="font-semibold text-blue-900 mt-4">Ext Ac No.</label>
            <input name="extAcNo" value={form.extAcNo} onChange={handleInput} className="input-glass" placeholder="Ext Ac No." />
            <label className="font-semibold text-blue-900 mt-4">Veh Regn No.</label>
            <input name="vehRegnNo" value={form.vehRegnNo} onChange={handleInput} className="input-glass" placeholder="Veh Regn No." />
            <label className="font-semibold text-blue-900 mt-4">New Guar Name</label>
            <select name="newGuarName" value={form.newGuarName} onChange={handleInput} className="input-glass">
              <option value="">Select</option>
              <option>Guar 1</option>
              <option>Guar 2</option>
            </select>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-28 h-32 bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300 rounded-xl flex items-center justify-center shadow-inner">
              {file ? <img src={URL.createObjectURL(file)} alt="Preview" className="w-full h-full object-cover rounded-xl" /> : <span className="text-blue-300">No Image</span>}
            </div>
            <input type="file" onChange={handleFile} className="text-xs mt-2" />
          </div>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <input type="checkbox" name="removeGuar" checked={form.removeGuar} onChange={handleInput} className="h-5 w-5 text-red-600 border-red-400 focus:ring-2 focus:ring-red-400" />
          <label className="text-red-600 font-semibold cursor-pointer select-none">Remove Guarantor From Loan Ac.</label>
        </div>
        <div className="flex flex-wrap gap-6 justify-center mt-8">
          <button type="button" className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-700 text-white font-bold px-12 py-4 rounded-2xl shadow-2xl transition-all duration-200 border-2 border-blue-700 text-xl tracking-wider">Save</button>
          <button type="button" onClick={handleClear} className="bg-gradient-to-r from-gray-100 to-blue-100 hover:from-gray-200 hover:to-blue-200 text-blue-700 font-bold px-10 py-3 rounded-xl shadow-lg border-2 border-blue-300 transition-all duration-200 text-lg">Clear</button>
        </div>
      </form>
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .input-glass {
          @apply bg-white/90 border border-blue-200 rounded-lg px-4 py-2 shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all placeholder-blue-300;
        }
      `}</style>
    </div>
  );
} 
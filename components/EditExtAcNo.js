import React, { useState } from 'react';

const initialState = {
  customerName: '',
  customerId: '',
  vehRegnNo: '',
  loanDate: '',
  firstEmiDate: '',
  loanAcNo: '',
  extAcNo: '',
  firstExtEmiDate: '',
  extPartyName: '',
};

export default function EditExtAcNo() {
  const [form, setForm] = useState(initialState);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleClear = () => {
    setForm(initialState);
  };

  return (
    <div className="animate-fade-in-up max-w-3xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-3xl font-extrabold text-blue-900 tracking-wider drop-shadow-lg uppercase">Edit Ext Ac No</h2>
        <input type="text" placeholder="Search..." className="ml-6 border border-blue-300 rounded-lg px-4 py-2 bg-white/80 text-blue-900 font-semibold shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all placeholder-blue-300 w-56" />
        <button className="ml-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow transition-all duration-200 border border-blue-700">Search</button>
      </div>
      <form className="space-y-8">
        <div className="grid grid-cols-2 gap-8 items-end">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Customer Name</label>
            <input name="customerName" value={form.customerName} onChange={handleInput} className="input-glass" placeholder="Customer Name" />
            <label className="font-semibold text-blue-900 mt-4">Customer ID</label>
            <input name="customerId" value={form.customerId} onChange={handleInput} className="input-glass" placeholder="Customer ID" />
            <label className="font-semibold text-blue-900 mt-4">Veh Regn No.</label>
            <input name="vehRegnNo" value={form.vehRegnNo} onChange={handleInput} className="input-glass" placeholder="Veh Regn No." />
            <label className="font-semibold text-blue-900 mt-4">Loan Date</label>
            <input name="loanDate" value={form.loanDate} onChange={handleInput} className="input-glass" placeholder="Loan Date" />
            <label className="font-semibold text-blue-900 mt-4">First EMI Date</label>
            <input name="firstEmiDate" value={form.firstEmiDate} onChange={handleInput} className="input-glass" placeholder="First EMI Date" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Loan Ac No.</label>
            <select name="loanAcNo" value={form.loanAcNo} onChange={handleInput} className="input-glass">
              <option value="">Select</option>
              <option>Loan 1</option>
              <option>Loan 2</option>
            </select>
            <label className="font-semibold text-blue-900 mt-4">Ext Ac No.</label>
            <input name="extAcNo" value={form.extAcNo} onChange={handleInput} className="input-glass" placeholder="Ext Ac No." />
            <label className="font-semibold text-blue-900 mt-4">First Ext EMI Date</label>
            <input name="firstExtEmiDate" value={form.firstExtEmiDate} onChange={handleInput} className="input-glass" placeholder="DD-MM-YYYY" />
            <label className="font-semibold text-blue-900 mt-4">Ext Party Name</label>
            <input name="extPartyName" value={form.extPartyName} onChange={handleInput} className="input-glass" placeholder="Ext Party Name" />
          </div>
        </div>
        <div className="flex flex-wrap gap-6 justify-center mt-8">
          <button type="button" className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-700 text-white font-bold px-12 py-4 rounded-2xl shadow-2xl transition-all duration-200 border-2 border-blue-700 text-xl tracking-wider">Update</button>
          <button type="button" onClick={handleClear} className="bg-gradient-to-r from-gray-100 to-blue-100 hover:from-gray-200 hover:to-blue-200 text-blue-700 font-bold px-10 py-3 rounded-xl shadow-lg border-2 border-blue-300 transition-all duration-200 text-lg">Cancel</button>
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
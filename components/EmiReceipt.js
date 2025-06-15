import React, { useState } from 'react';

const initialState = {
  customerName: '',
  customerId: '',
  vehRegnNo: '',
  loanAcNo: '',
  extAcNo: '',
  ledgerNo: '',
  branch: '',
  emi: '',
  chq: '',
  chqType: '',
};

const EmiReceipt = () => {
  const [form, setForm] = useState(initialState);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="animate-fade-in-up max-w-4xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-8 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
      <h2 className="text-3xl font-extrabold mb-8 text-blue-900 border-b-4 border-teal-200 pb-3 tracking-wider drop-shadow-lg text-center uppercase">EMI Receipt</h2>
      <form className="space-y-8">
        <div className="grid grid-cols-5 gap-6 bg-white/80 rounded-2xl shadow-lg p-6 border border-blue-100 items-end">
          <div className="col-span-2 flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Customer Name</label>
            <input name="customerName" value={form.customerName} onChange={handleInput} className="bg-white border border-blue-300 rounded-lg px-4 py-2 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition-all" placeholder="Customer Name" />
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Loan Ac No</label>
            <select name="loanAcNo" value={form.loanAcNo} onChange={handleInput} className="bg-white border border-blue-300 rounded-lg px-4 py-2 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition-all">
              <option>Select</option>
              <option>Loan 1</option>
              <option>Loan 2</option>
            </select>
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Ext. Ac No</label>
            <input name="extAcNo" value={form.extAcNo} onChange={handleInput} className="bg-white border border-blue-300 rounded-lg px-4 py-2 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition-all" placeholder="Ext. Ac No" />
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Ledger No</label>
            <input name="ledgerNo" value={form.ledgerNo} onChange={handleInput} className="bg-white border border-blue-300 rounded-lg px-4 py-2 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition-all" placeholder="Ledger No" />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Customer ID</label>
            <input name="customerId" value={form.customerId} onChange={handleInput} className="bg-white border border-blue-300 rounded-lg px-4 py-2 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition-all" placeholder="Customer ID" />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Veh Regn No</label>
            <input name="vehRegnNo" value={form.vehRegnNo} onChange={handleInput} className="bg-white border border-blue-300 rounded-lg px-4 py-2 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition-all" placeholder="Veh Regn No" />
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Branch</label>
            <input name="branch" value={form.branch} onChange={handleInput} className="bg-white border border-blue-300 rounded-lg px-4 py-2 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition-all" placeholder="Branch" />
          </div>
          <div className="col-span-5 flex gap-4 items-end">
            <div className="flex flex-col gap-2 w-24">
              <label className="font-semibold text-blue-900">EMI</label>
              <input name="emi" value={form.emi} onChange={handleInput} className="bg-white border border-blue-300 rounded-lg px-4 py-2 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition-all" placeholder="EMI" />
            </div>
            <div className="flex flex-col gap-2 w-24">
              <label className="font-semibold text-blue-900">Chq</label>
              <input name="chq" value={form.chq} onChange={handleInput} className="bg-white border border-blue-300 rounded-lg px-4 py-2 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition-all" placeholder="Chq" />
            </div>
            <div className="flex flex-col gap-2 w-32">
              <label className="font-semibold text-blue-900">Chq Type</label>
              <select name="chqType" value={form.chqType} onChange={handleInput} className="bg-white border border-blue-300 rounded-lg px-4 py-2 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition-all">
                <option>Select</option>
                <option>Type 1</option>
                <option>Type 2</option>
              </select>
            </div>
            <div className="flex-1 flex justify-end">
              <button type="button" className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-700 text-white font-bold px-8 py-3 rounded-2xl shadow-2xl transition-all duration-200 border-2 border-blue-700 text-lg tracking-wider">Search Customer</button>
            </div>
          </div>
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
          @apply bg-white border border-blue-300 rounded-lg px-4 py-2 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition-all;
        }
      `}</style>
    </div>
  );
};

export default EmiReceipt; 
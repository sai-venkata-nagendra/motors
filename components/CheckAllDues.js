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
  emiDue: '',
  lateFine: '',
  chqRet: '',
  extraAmt: '',
  totalDue: '',
};

const CheckAllDues = () => {
  const [form, setForm] = useState(initialState);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-6 bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl border border-blue-200 backdrop-blur-xl bg-opacity-90 animate-fade-in-up">
      <h2 className="text-3xl font-extrabold mb-8 text-blue-900 border-b-4 border-teal-200 pb-3 tracking-wider drop-shadow-lg text-center uppercase">No Dues Check</h2>
      {/* Top Search Form */}
      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 bg-white/80 rounded-2xl shadow-lg p-6 border border-blue-100 items-end">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Customer Name</label>
            <input name="customerName" value={form.customerName} onChange={handleInput} className="bg-white/90 border-2 border-blue-300 rounded-lg px-4 py-2 shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all placeholder-blue-300" placeholder="Customer Name" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Loan Ac No</label>
            <input name="loanAcNo" value={form.loanAcNo} onChange={handleInput} className="bg-white/90 border-2 border-blue-300 rounded-lg px-4 py-2 shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all placeholder-blue-300" placeholder="Loan Ac No" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Customer ID</label>
            <input name="customerId" value={form.customerId} onChange={handleInput} className="bg-white/90 border-2 border-blue-300 rounded-lg px-4 py-2 shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all placeholder-blue-300" placeholder="Customer ID" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Ext. Ac No</label>
            <input name="extAcNo" value={form.extAcNo} onChange={handleInput} className="bg-white/90 border-2 border-blue-300 rounded-lg px-4 py-2 shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all placeholder-blue-300" placeholder="Ext. Ac No" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Ledger No</label>
            <input name="ledgerNo" value={form.ledgerNo} onChange={handleInput} className="bg-white/90 border-2 border-blue-300 rounded-lg px-4 py-2 shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all placeholder-blue-300" placeholder="Ledger No" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Veh Regn No</label>
            <input name="vehRegnNo" value={form.vehRegnNo} onChange={handleInput} className="bg-white/90 border-2 border-blue-300 rounded-lg px-4 py-2 shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all placeholder-blue-300" placeholder="Veh Regn No" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Branch</label>
            <input name="branch" value={form.branch} onChange={handleInput} className="bg-white/90 border-2 border-blue-300 rounded-lg px-4 py-2 shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all placeholder-blue-300" placeholder="Branch" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">EMI</label>
            <input name="emi" value={form.emi} onChange={handleInput} className="bg-white/90 border-2 border-blue-300 rounded-lg px-4 py-2 shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all placeholder-blue-300" placeholder="EMI" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Chq</label>
            <input name="chq" value={form.chq} onChange={handleInput} className="bg-white/90 border-2 border-blue-300 rounded-lg px-4 py-2 shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all placeholder-blue-300" placeholder="Chq" />
          </div>
          <div className="flex flex-col gap-2 md:col-span-1 md:justify-end md:items-end">
            <button type="button" className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-700 text-white font-bold px-8 py-3 rounded-2xl shadow-2xl transition-all duration-200 border-2 border-blue-700 text-lg tracking-wider mt-6">Search Customer</button>
          </div>
        </div>
      </form>
      <div className="flex flex-col md:flex-row gap-8 mt-10">
        {/* Left Panel */}
        <div className="bg-white/80 rounded-2xl shadow-xl border border-blue-100 p-6 flex flex-col gap-4 backdrop-blur-md min-w-[340px] max-w-md mx-auto md:mx-0">
          <div className="mb-2">
            <div className="font-bold text-blue-800 border-b-2 border-teal-200 pb-1 mb-2">Down Payment Balance</div>
            <div className="flex gap-2 mb-2">
              <input className="bg-white/90 border-2 border-blue-200 rounded-lg px-3 py-1 text-sm flex-1 shadow-inner" disabled />
              <button className="ml-2 px-4 py-1 bg-gradient-to-r from-blue-400 to-teal-400 text-white rounded-lg shadow hover:from-blue-500 hover:to-teal-500 font-semibold text-sm">Clear Balance</button>
            </div>
          </div>
          <div className="mb-2">
            <div className="font-bold text-blue-800 border-b-2 border-teal-200 pb-1 mb-2">Previous Late Fine/Chq Ret Chgs Balance</div>
            <div className="flex gap-2 mb-2">
              <input className="bg-white/90 border-2 border-blue-200 rounded-lg px-3 py-1 text-sm flex-1 shadow-inner" disabled />
              <button className="ml-2 px-4 py-1 bg-gradient-to-r from-blue-400 to-teal-400 text-white rounded-lg shadow hover:from-blue-500 hover:to-teal-500 font-semibold text-sm">Details</button>
            </div>
          </div>
          <div className="mb-2">
            <div className="font-bold text-blue-800 border-b-2 border-teal-200 pb-1 mb-2">Legal & Other Chgs Balance</div>
            <div className="flex gap-2 mb-2">
              <input className="bg-white/90 border-2 border-blue-200 rounded-lg px-3 py-1 text-sm flex-1 shadow-inner" disabled />
              <button className="ml-2 px-4 py-1 bg-gradient-to-r from-blue-400 to-teal-400 text-white rounded-lg shadow hover:from-blue-500 hover:to-teal-500 font-semibold text-sm">Details</button>
            </div>
          </div>
          <div className="mb-2">
            <div className="font-bold text-blue-800">EMI Amount Due As On Date</div>
            <input name="emiDue" value={form.emiDue} onChange={handleInput} className="bg-white/90 border-2 border-blue-200 rounded-lg px-3 py-1 text-sm w-full mb-1 shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all placeholder-blue-300" />
          </div>
          <div className="mb-2 flex gap-2 items-center">
            <div className="flex-1">
              <div className="font-bold text-blue-800">Late Fine On Unpaid EMIs</div>
              <input name="lateFine" value={form.lateFine} onChange={handleInput} className="bg-white/90 border-2 border-blue-200 rounded-lg px-3 py-1 text-sm w-full mb-1 shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all placeholder-blue-300" />
            </div>
            <span className="text-lg font-bold text-blue-400">+</span>
          </div>
          <div className="mb-2 flex gap-2 items-center">
            <div className="flex-1">
              <div className="font-bold text-blue-800">Chq. Ret. Charges For Unpaid EMIs</div>
              <input name="chqRet" value={form.chqRet} onChange={handleInput} className="bg-white/90 border-2 border-blue-200 rounded-lg px-3 py-1 text-sm w-full mb-1 shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all placeholder-blue-300" />
            </div>
            <span className="text-lg font-bold text-blue-400">+</span>
          </div>
          <div className="mb-2">
            <div className="font-bold text-blue-800">Extra Amt As On Date</div>
            <input name="extraAmt" value={form.extraAmt} onChange={handleInput} className="bg-white/90 border-2 border-blue-200 rounded-lg px-3 py-1 text-sm w-full mb-1 shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all placeholder-blue-300" />
          </div>
          <div className="mb-2">
            <div className="font-bold text-blue-900 text-lg">Total Amt Due As On Date</div>
            <input name="totalDue" value={form.totalDue} onChange={handleInput} className="bg-white/90 border-2 border-blue-400 rounded-lg px-3 py-1 text-base w-full mb-1 shadow-inner focus:ring-2 focus:ring-blue-400 focus:border-blue-600 transition-all placeholder-blue-400 font-bold" />
          </div>
          <div className="mb-2">
            <input className="bg-white/90 border-2 border-blue-100 rounded-lg px-3 py-1 text-sm w-full shadow-inner" disabled />
          </div>
        </div>
        {/* Right Side (empty for now) */}
        <div className="flex-1"></div>
      </div>
      {/* Bottom Buttons */}
      <div className="flex flex-wrap gap-6 justify-center mt-10">
        <button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold px-8 py-3 rounded-2xl shadow-xl border-2 border-blue-700 text-lg tracking-wider transition-all">View Receipt History</button>
        <button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold px-8 py-3 rounded-2xl shadow-xl border-2 border-blue-700 text-lg tracking-wider transition-all">View Loan Ledger</button>
        <button className="bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-blue-900 font-bold px-8 py-3 rounded-2xl shadow-xl border-2 border-blue-200 text-lg tracking-wider transition-all">Clear All</button>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
};

export default CheckAllDues; 
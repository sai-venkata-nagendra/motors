import React, { useState } from 'react';

const initialState = {
  loanSearch: '',
};

export default function EditLoan() {
  const [form, setForm] = useState(initialState);
  const [showModal, setShowModal] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleClear = () => {
    setForm(initialState);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="animate-fade-in-up max-w-2xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
      <h2 className="text-3xl font-extrabold mb-8 text-blue-900 border-b-4 border-teal-200 pb-2 tracking-wider drop-shadow-lg text-left uppercase">Select Loan To Edit...</h2>
      <form className="space-y-8" onSubmit={handleSearch}>
        <div className="flex gap-4 items-center mb-8">
          <input
            type="text"
            name="loanSearch"
            value={form.loanSearch}
            onChange={handleInput}
            placeholder="Enter Loan No. or Customer Name"
            className="flex-1 border border-blue-200 rounded px-4 py-2 bg-white/80 text-blue-900 font-semibold shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all placeholder-blue-300"
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded shadow transition-all duration-200 border border-blue-700 ml-2">Search</button>
          <button type="button" onClick={handleClear} className="bg-gradient-to-r from-gray-100 to-blue-100 hover:from-gray-200 hover:to-blue-200 text-blue-700 font-bold px-8 py-2 rounded shadow-lg border-2 border-blue-300 transition-all duration-200 ml-2">Clear All</button>
        </div>
      </form>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 transition-opacity">
          <div className="relative flex flex-col items-stretch w-[900px] h-[420px] bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl border-2 border-blue-200 backdrop-blur-xl animate-fade-in overflow-hidden">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-2 p-6 pt-14 pb-0">
                <span className="font-semibold text-lg mr-4 text-blue-900">Search Customer</span>
                <label className="text-sm font-semibold mr-2 text-blue-800">Search By:</label>
                <select className="border border-blue-300 rounded-lg px-3 py-2 text-sm bg-white/80 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all">
                  <option>Customer Name</option>
                  <option>Account No.</option>
                  <option>Mobile</option>
                </select>
                <label className="text-sm font-semibold ml-6 mr-2 text-blue-800">Search Text:</label>
                <input type="text" className="border border-blue-300 rounded-lg px-3 py-2 text-sm w-72 bg-white/80 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all placeholder-blue-300" placeholder="Type And Press 'Enter'" />
              </div>
              <div className="flex-1 flex items-center justify-center">
                {/* Large empty area for results */}
              </div>
              <div className="flex justify-center gap-6 pb-8">
                <button className="bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-bold px-10 py-3 rounded-xl shadow-lg border-2 border-blue-700 transition-all duration-200 text-lg">Select</button>
                <button className="bg-gradient-to-r from-gray-100 to-blue-100 hover:from-gray-200 hover:to-blue-200 text-blue-700 font-bold px-10 py-3 rounded-xl shadow-lg border-2 border-blue-300 transition-all duration-200 text-lg" onClick={handleClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
} 
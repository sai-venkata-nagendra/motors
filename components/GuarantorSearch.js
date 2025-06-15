import React, { useState } from 'react';

const GuarantorSearch = () => {
  const [form, setForm] = useState({
    searchBy: 'Guarantor Name',
    searchText: '',
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setForm({ searchBy: 'Guarantor Name', searchText: '' });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-bold mb-8 text-blue-900 border-b pb-2 tracking-wide">Guarantor Search</h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end" onSubmit={handleSearch}>
          <div className="md:col-span-1">
            <label className="block text-gray-700 font-semibold mb-1">Search By</label>
            <select
              name="searchBy"
              value={form.searchBy}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition bg-white"
            >
              <option>Guarantor Name</option>
              <option>Account No.</option>
              <option>Mobile</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-1">Search Text</label>
            <input
              type="text"
              name="searchText"
              value={form.searchText}
              onChange={handleChange}
              className="w-full border border-yellow-200 bg-yellow-50 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition placeholder-yellow-600"
              placeholder="Type And Press 'Enter'"
            />
          </div>
          <div className="md:col-span-3 flex justify-center gap-6 mt-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded shadow transition-all duration-200 border border-blue-700"
            >
              Search
            </button>
            <button
              type="button"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-2 rounded shadow border border-gray-400 transition-all duration-200"
              onClick={handleClear}
            >
              Clear All
            </button>
          </div>
        </form>
      </div>
      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
          <div className="bg-gray-100 rounded-2xl shadow-2xl p-8 w-full max-w-2xl border-2 border-blue-300 relative animate-fade-in">
            <h3 className="text-xl font-bold text-blue-900 mb-6 underline">Search Guarantor</h3>
            <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
              <div className="w-full md:w-1/3">
                <label className="block text-gray-700 font-semibold mb-1">Search By</label>
                <select
                  name="searchBy"
                  value={form.searchBy}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition bg-white"
                >
                  <option>Guarantor Name</option>
                  <option>Account No.</option>
                  <option>Mobile</option>
                </select>
              </div>
              <div className="w-full md:w-2/3">
                <label className="block text-gray-700 font-semibold mb-1">Search Text</label>
                <input
                  type="text"
                  name="searchText"
                  value={form.searchText}
                  onChange={handleChange}
                  className="w-full border border-yellow-200 bg-yellow-50 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition placeholder-yellow-600"
                  placeholder="Type And Press 'Enter'"
                />
              </div>
            </div>
            {/* Results area (placeholder) */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded shadow p-6 min-w-[200px] min-h-[60px] flex items-center justify-center text-2xl text-gray-700 border border-gray-200">
                {/* Result content will go here */}
              </div>
            </div>
            <div className="flex justify-center gap-8 mt-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded shadow border border-blue-700 transition-all duration-200"
                onClick={() => setShowModal(false)}
              >
                Select
              </button>
              <button
                className="bg-white hover:bg-gray-100 text-blue-700 font-semibold px-8 py-2 rounded shadow border border-blue-400 transition-all duration-200"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
              onClick={handleClose}
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <style jsx>{`
            @keyframes fade-in {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
            }
            .animate-fade-in {
              animation: fade-in 0.2s ease;
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default GuarantorSearch; 
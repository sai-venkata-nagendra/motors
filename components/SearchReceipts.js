import React, { useState } from 'react';

const SearchReceipts = () => {
  const [form, setForm] = useState({
    searchBy: 'Chq / Trxn No.',
    searchText: '',
    last4: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleClear = () => {
    setForm({ searchBy: 'Chq / Trxn No.', searchText: '', last4: true });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-8">
      <h2 className="text-2xl font-bold mb-8 text-blue-900 border-b pb-2 tracking-wide">Search Receipts</h2>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end" onSubmit={handleSearch}>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Search By</label>
          <select
            name="searchBy"
            value={form.searchBy}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition bg-white"
          >
            <option>Chq / Trxn No.</option>
            <option>Receipt No.</option>
            <option>Account No.</option>
          </select>
        </div>
        <div>
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
        <div className="flex flex-col gap-2">
          <label className="inline-flex items-center mt-6">
            <input
              type="checkbox"
              name="last4"
              checked={form.last4}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700 font-semibold">Search Last 4 Digits</span>
          </label>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded shadow transition-all duration-200 border border-blue-700 mt-2"
          >
            New Search
          </button>
        </div>
      </form>
      {/* Results area (placeholder) */}
      <div className="bg-white rounded shadow p-6 min-w-[200px] min-h-[60px] flex items-center justify-center text-2xl text-gray-700 border border-gray-200 mt-8">
        {/* Result content will go here */}
      </div>
    </div>
  );
};

export default SearchReceipts; 
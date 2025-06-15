import React, { useState } from 'react';

const EmiCalculator = () => {
  const [form, setForm] = useState({
    interestType: 'Flat',
    loanDate: '',
    loanAmount: '',
    interestRate: '13.5',
    tenure: '11',
    intPeriod: '12',
    type: 'Normal',
    emiPattern: 'Even',
  });
  const [emi, setEmi] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleClear = () => {
    setForm({
      interestType: 'Flat',
      loanDate: '',
      loanAmount: '',
      interestRate: '13.5',
      tenure: '11',
      intPeriod: '12',
      type: 'Normal',
      emiPattern: 'Even',
    });
    setEmi('');
    setError('');
  };

  const isFormValid = () => {
    return (
      form.loanDate &&
      form.loanAmount &&
      form.interestRate &&
      form.tenure &&
      form.intPeriod &&
      form.type &&
      form.emiPattern
    );
  };

  const handleCalculate = () => {
    if (!isFormValid()) {
      setError('Please fill all fields.');
      return;
    }
    const principal = parseFloat(form.loanAmount);
    const rate = parseFloat(form.interestRate);
    const tenure = parseInt(form.tenure);
    if (isNaN(principal) || isNaN(rate) || isNaN(tenure) || principal <= 0 || rate < 0 || tenure <= 0) {
      setError('Please enter valid numeric values.');
      return;
    }
    // Flat interest EMI calculation
    const totalInterest = (principal * rate * tenure) / 1200;
    const totalAmount = principal + totalInterest;
    const emiValue = totalAmount / tenure;
    setEmi(emiValue.toFixed(2));
    setError('');
  };

  return (
    <div
      className="max-w-2xl mx-auto rounded-lg shadow-lg p-8 mt-6 relative"
    >
      <div className="bg-white bg-opacity-90 rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-900 border-b pb-2">EMI Calculator</h2>
        <form className="grid grid-cols-1 gap-6" onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <label className="font-semibold text-gray-700">Interest Type:
              <select name="interestType" value={form.interestType} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400">
                <option value="Flat">Flat</option>
                <option value="Reducing">Reducing</option>
              </select>
            </label>
            <label className="font-semibold text-gray-700">Loan Date:
              <input type="date" name="loanDate" value={form.loanDate} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400" />
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <label className="font-semibold text-gray-700">Loan Amount:
              <input type="number" name="loanAmount" value={form.loanAmount} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2 bg-yellow-50 focus:ring-2 focus:ring-blue-400" />
            </label>
            <label className="font-semibold text-gray-700">Interest Rate:
              <div className="flex items-center">
                <input type="number" name="interestRate" value={form.interestRate} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400" step="0.01" />
                <span className="ml-2">%</span>
              </div>
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <label className="font-semibold text-gray-700">Tenure In Mths:
              <input type="number" name="tenure" value={form.tenure} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400" />
            </label>
            <label className="font-semibold text-gray-700">Int. Period:
              <input type="number" name="intPeriod" value={form.intPeriod} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400" />
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <label className="font-semibold text-gray-700">Type:
              <select name="type" value={form.type} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400">
                <option value="Normal">Normal</option>
                <option value="Special">Special</option>
              </select>
            </label>
            <label className="font-semibold text-gray-700">EMI Pattern:
              <select name="emiPattern" value={form.emiPattern} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400">
                <option value="Even">Even</option>
                <option value="Odd">Odd</option>
              </select>
            </label>
          </div>
          {error && <div className="text-red-600 font-semibold">{error}</div>}
          <div className="flex gap-4 mt-4">
            <button type="button" className={`flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded shadow ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleCalculate} disabled={!isFormValid()}>Calculate EMI</button>
            <button type="button" className="flex-1 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 rounded shadow" onClick={handleClear}>Clear All</button>
          </div>
        </form>
        <hr className="my-8 border-t-2 border-dashed" />
        <div className="space-y-2 text-gray-700">
          <div>EMI: <span className="font-semibold">{emi && `₹ ${emi}`}</span></div>
          <div>IRR %: <span className="font-semibold">-</span></div>
          <div>Adv. EMI Amt.: <span className="font-semibold">-</span></div>
          <div>EMIs To Pay: <span className="font-semibold">-</span></div>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator; 
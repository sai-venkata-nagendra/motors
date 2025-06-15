import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const InputField = ({ label, placeholder, type = "text", value, onChange, name, containerClassName = "" }) => (
  <div className={containerClassName}>
    <label className="text-xs text-gray-600 block mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder || label}
      className="w-full p-1.5 border border-gray-300 rounded-md text-sm"
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options, containerClassName = "" }) => (
  <div className={containerClassName}>
    <label className="text-xs text-gray-600 block mb-1">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-1.5 border border-gray-300 rounded-md text-sm bg-white"
    >
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

const DateField = ({ label, selected, onChange, containerClassName = "" }) => (
  <div className={containerClassName}>
    <label className="text-xs text-gray-600 block mb-1">{label}</label>
    <DatePicker
      selected={selected}
      onChange={onChange}
      className="w-full p-1.5 border border-gray-300 rounded-md text-sm"
      placeholderText="dd-mm-yyyy"
      dateFormat="dd-MM-yyyy"
    />
  </div>
);

export default function LoanEntry() {
  const [disbursalDate, setDisbursalDate] = useState(null);
  const [extChqDate, setExtChqDate] = useState(null);
  const [extEmiDate, setExtEmiDate] = useState(null);
  const [formData, setFormData] = useState({
      customerName: '',
      guarantorName: '',
      customerId: '',
      guarantorId: '',
      loanNo: 'RML-25M/SAL-005689',
      salesAgent: 'DIRECT',
      extLoanNo: '',
      collAgent: 'Select',
      branchName: 'Showroom-Delhi',
      vehicleUse: 'Commercial',
      ledgerFile: '',
      yourChqNo: '',
      extChqNo1: '',
      extChqNo2: '',
      hpTo: '',
      location: '',
      codeType: 'Fixed Code',
      loanAmount: '',
      dpAmount: '',
      outAmount: '',
      extAmount: '',
      dpBal: '',
      dpAtDealer: '',
      dpAtDealerDetails: '',
      dpAmtReqd: '',
      dpAmtPaid: '',
      interestRate: '12.5',
      tenure: '',
      intPeriod: '12',
      fileCharges: '',
      perInsAmt: '',
      fiCharges: '',
      bankName: '',
      bankAcNo: '',
      pdcGiven: false,
  });

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleClear = () => {
    // A more robust reset might be needed depending on initial state logic
    setFormData({
      customerName: '',
      guarantorName: '',
      customerId: '',
      guarantorId: '',
      loanNo: 'RML-25M/SAL-005689',
      salesAgent: 'DIRECT',
      extLoanNo: '',
      collAgent: 'Select',
      branchName: 'Showroom-Delhi',
      vehicleUse: 'Commercial',
      ledgerFile: '',
      yourChqNo: '',
      extChqNo1: '',
      extChqNo2: '',
      hpTo: '',
      location: '',
      codeType: 'Fixed Code',
      loanAmount: '',
      dpAmount: '',
      outAmount: '',
      extAmount: '',
      dpBal: '',
      dpAtDealer: '',
      dpAtDealerDetails: '',
      dpAmtReqd: '',
      dpAmtPaid: '',
      interestRate: '12.5',
      tenure: '',
      intPeriod: '12',
      fileCharges: '',
      perInsAmt: '',
      fiCharges: '',
      bankName: '',
      bankAcNo: '',
      pdcGiven: false,
    });
    setDisbursalDate(null);
    setExtChqDate(null);
    setExtEmiDate(null);
  };


  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-xl font-bold text-center text-blue-900 mb-6 uppercase tracking-wider">
        LOAN ENTRY - <span className="text-green-600">NEW VEHICLE</span>
      </h2>
      
      <div className="flex gap-6">
        {/* Main form */}
        <div className="flex-grow space-y-4">
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            <InputField label="Customer Name" name="customerName" value={formData.customerName} onChange={handleInput} />
            <InputField label="Guarantor Name" name="guarantorName" value={formData.guarantorName} onChange={handleInput} />
            <InputField label="Customer ID" name="customerId" value={formData.customerId} onChange={handleInput} />
            <InputField label="Guarantor ID" name="guarantorId" value={formData.guarantorId} onChange={handleInput} />
            <InputField label="Loan No." name="loanNo" value={formData.loanNo} onChange={handleInput} />
            <SelectField label="Sales Agent" name="salesAgent" value={formData.salesAgent} onChange={handleInput} options={['DIRECT']} />
            <InputField label="Ext. Loan No." name="extLoanNo" value={formData.extLoanNo} onChange={handleInput} />
            <SelectField label="Coll. Agent" name="collAgent" value={formData.collAgent} onChange={handleInput} options={['Select']} />
            <DateField label="Disbursal Date" selected={disbursalDate} onChange={setDisbursalDate} />
            <InputField label="Branch Name" name="branchName" value={formData.branchName} onChange={handleInput} />
            <SelectField label="Vehicle Use" name="vehicleUse" value={formData.vehicleUse} onChange={handleInput} options={['Commercial', 'Personal']} />
            <InputField label="Ledger File" name="ledgerFile" value={formData.ledgerFile} onChange={handleInput} />
            <InputField label="Your Chq No." name="yourChqNo" value={formData.yourChqNo} onChange={handleInput}/>
            <InputField label="Ext. Chq No." name="extChqNo1" value={formData.extChqNo1} onChange={handleInput}/>
            <DateField label="Chq Date" selected={extChqDate} onChange={setExtChqDate} />
            <InputField label="Ext. Chq No." name="extChqNo2" value={formData.extChqNo2} onChange={handleInput} />
            <DateField label="Ext. Chq Date" selected={extEmiDate} onChange={setExtEmiDate} />
            <InputField label="HP To" name="hpTo" value={formData.hpTo} onChange={handleInput} />
            <InputField label="Location" name="location" value={formData.location} onChange={handleInput} />
            <SelectField label="Code Type" name="codeType" value={formData.codeType} onChange={handleInput} options={['Fixed Code']} />
          </div>

          <div className="bg-white/80 p-4 rounded-lg shadow-inner">
            <div className="grid grid-cols-3 gap-x-6 gap-y-3">
              <InputField label="Loan Amount" name="loanAmount" value={formData.loanAmount} onChange={handleInput} />
              <InputField label="DP Amount" name="dpAmount" value={formData.dpAmount} onChange={handleInput} />
              <InputField label="Out Amount" name="outAmount" value={formData.outAmount} onChange={handleInput} />
              <InputField label="Ext. Amount" name="extAmount" value={formData.extAmount} onChange={handleInput} />
              <InputField label="DP Bal" name="dpBal" value={formData.dpBal} onChange={handleInput} />
              <InputField label="DP at Dealer" name="dpAtDealer" value={formData.dpAtDealer} onChange={handleInput} />
              <InputField label="DP at Dealer Details" name="dpAtDealerDetails" value={formData.dpAtDealerDetails} onChange={handleInput} />
              <InputField label="DP Amt Reqd" name="dpAmtReqd" value={formData.dpAmtReqd} onChange={handleInput} />
              <InputField label="DP Amt Paid" name="dpAmtPaid" value={formData.dpAmtPaid} onChange={handleInput} />
              <InputField label="Interest Rate" name="interestRate" value={formData.interestRate} onChange={handleInput} />
              <InputField label="Tenure in Mth" name="tenure" value={formData.tenure} onChange={handleInput} />
              <InputField label="Int. Period" name="intPeriod" value={formData.intPeriod} onChange={handleInput} />
              <InputField label="File Charges" name="fileCharges" value={formData.fileCharges} onChange={handleInput} />
              <InputField label="Per. Ins. Amt" name="perInsAmt" value={formData.perInsAmt} onChange={handleInput} />
              <InputField label="FI Charges" name="fiCharges" value={formData.fiCharges} onChange={handleInput} />
              <InputField label="Bank Name" name="bankName" value={formData.bankName} onChange={handleInput} />
              <InputField label="Bank AC No." name="bankAcNo" value={formData.bankAcNo} onChange={handleInput} />
              <div className="flex items-center pt-4">
                <input type="checkbox" id="pdc-given" name="pdcGiven" checked={formData.pdcGiven} onChange={handleInput} className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label htmlFor="pdc-given" className="ml-2 block text-sm text-gray-900">PDC's Given?</label>
              </div>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-1/4 flex-shrink-0">
          <div className="bg-white/80 p-4 rounded-lg shadow-inner flex flex-col items-center text-center">
            <div 
              onClick={handleImageClick}
              className="w-32 h-32 border-2 bg-gray-50 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-100 mb-2"
            >
              No Image
            </div>
            <label className="text-xs text-blue-600 hover:underline cursor-pointer mb-4">
              Choose File
              <input type="file" ref={fileInputRef} className="hidden" />
            </label>
            <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-blue-700 transition-colors w-full">
              Search Customer
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center gap-4 mt-6">
        <button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold py-2 px-10 rounded-md shadow-md hover:opacity-90 transition-opacity">
          Calculate EMIs
        </button>
        <button onClick={handleClear} className="bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-10 rounded-md shadow-md hover:bg-gray-100 transition-colors">
          Clear All
        </button>
      </div>
    </div>
  );
} 
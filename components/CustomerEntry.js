import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ChevronRight } from 'lucide-react';

const AddressBox = ({ title, onCopy, showCopyButton = false }) => (
    <div className="bg-white/80 p-3 rounded-lg shadow-inner space-y-2">
        <div className="flex justify-between items-center mb-1">
            <h3 className="font-semibold text-blue-800 text-sm">{title}</h3>
            {showCopyButton && (
                <button onClick={onCopy} className="p-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                    <ChevronRight size={14} />
                </button>
            )}
        </div>
        <input type="text" placeholder="Address 1" className="w-full p-1.5 border border-gray-300 rounded-md text-xs" />
        <input type="text" placeholder="Address 2" className="w-full p-1.5 border border-gray-300 rounded-md text-xs" />
        <select className="w-full p-1.5 border border-gray-300 rounded-md text-xs">
            <option>Select</option>
        </select>
        <input type="text" placeholder="PIN" className="w-full p-1.5 border border-gray-300 rounded-md text-xs" />
    </div>
);

const initialState = {
  customerType: 'New',
  customerTitle: 'Mr.',
  customerName: '',
  fatherName: '',
  motherName: '',
  dob: '',
  present: { address1: '', address2: '', state: '', city: '', pin: '' },
  permanent: { address1: '', address2: '', state: '', city: '', pin: '' },
  office: { address1: '', address2: '', state: '', city: '', pin: '' },
  ref1Name: '',
  ref1Ph: '',
  ref2Name: '',
  ref2Ph: '',
  customerMobile1: '',
  customerMobile2: '',
  customerEmail: '',
  collectionArea: '',
};

const states = ['Select', 'State 1', 'State 2'];
const cities = ['Select', 'City 1', 'City 2'];

const CustomerEntry = () => {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [dob, setDob] = useState(null);
  const fileInputRef = useRef(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleAddress = (type, field, value) => {
    setForm({ ...form, [type]: { ...form[type], [field]: value } });
  };
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  const handleClear = () => {
    setForm(initialState);
    setFile(null);
  };
  const handleCopyAddress = () => {
    setForm({ ...form, permanent: { ...form.present } });
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-xl font-bold text-center text-blue-900 mb-6 uppercase tracking-wider">New Customer Entry</h2>
      
      <div className="space-y-6">
        {/* Top Section */}
        <div className="grid grid-cols-5 gap-6">
          {/* Image Upload */}
          <div className="col-span-1 flex flex-col items-center justify-start pt-4">
            <div 
              onClick={handleImageClick}
              className="w-28 h-32 border-2 bg-gray-50 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-100"
            >
              {file ? <img src={URL.createObjectURL(file)} alt="Preview" className="w-full h-full object-cover rounded-xl" /> : 'No Image'}
            </div>
            <label htmlFor="file-upload" className="text-sm mt-2 text-blue-600 hover:underline cursor-pointer">
              Choose File
              <input id="file-upload" type="file" ref={fileInputRef} onChange={handleFile} className="hidden" />
            </label>
          </div>

          {/* Customer Info */}
          <div className="col-span-4 grid grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-600">Customer ID</label>
              <input type="text" readOnly value="101-CU-004837" className="mt-1 w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-sm" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600">Customer Type</label>
              <select name="customerType" value={form.customerType} onChange={handleInput} className="mt-1 w-full p-2 border border-gray-300 rounded-md text-sm">
                <option>New</option>
                <option>Existing</option>
              </select>
            </div>
            <div className="col-span-2 grid grid-cols-8 gap-2 items-end">
              <select name="customerTitle" value={form.customerTitle} onChange={handleInput} className="col-span-1 mt-1 w-full p-2 border border-gray-300 rounded-md text-sm">
                <option>Mr.</option>
                <option>Mrs.</option>
                <option>Ms.</option>
              </select>
              <div className="col-span-7">
                <label className="block text-xs font-medium text-gray-600">Customer Name</label>
                <input name="customerName" value={form.customerName} onChange={handleInput} className="mt-1 w-full p-2 border border-gray-300 rounded-md text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600">S/O Father's Name</label>
              <input name="fatherName" value={form.fatherName} onChange={handleInput} className="mt-1 w-full p-2 border border-gray-300 rounded-md text-sm" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600">Mother's Name</label>
              <input name="motherName" value={form.motherName} onChange={handleInput} className="mt-1 w-full p-2 border border-gray-300 rounded-md text-sm" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600">DoB</label>
              <DatePicker selected={dob} onChange={(date) => setDob(date)} className="mt-1 w-full p-2 border border-gray-300 rounded-md text-sm" placeholderText="dd-mm-yyyy" dateFormat="dd-MM-yyyy" />
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="grid grid-cols-3 gap-4">
          <AddressBox title="Present Address" />
          <AddressBox title="Permanent Address" showCopyButton={true} />
          <AddressBox title="Office Address" />
        </div>

        {/* Reference Section */}
        <div className="grid grid-cols-4 gap-4">
          <input type="text" placeholder="Ref 1 Name" value={form.ref1Name} onChange={e => setForm({ ...form, ref1Name: e.target.value })} className="w-full p-2 border border-gray-300 rounded-md text-sm" />
          <input type="text" placeholder="Ref 1 Ph No" value={form.ref1Ph} onChange={e => setForm({ ...form, ref1Ph: e.target.value })} className="w-full p-2 border border-gray-300 rounded-md text-sm" />
          <input type="text" placeholder="Ref 2 Name" value={form.ref2Name} onChange={e => setForm({ ...form, ref2Name: e.target.value })} className="w-full p-2 border border-gray-300 rounded-md text-sm" />
          <input type="text" placeholder="Ref 2 Ph No" value={form.ref2Ph} onChange={e => setForm({ ...form, ref2Ph: e.target.value })} className="w-full p-2 border border-gray-300 rounded-md text-sm" />
          <input type="text" placeholder="Customer Mobile 1" value={form.customerMobile1} onChange={e => setForm({ ...form, customerMobile1: e.target.value })} className="w-full p-2 border border-gray-300 rounded-md text-sm" />
          <input type="text" placeholder="Customer Mobile 2" value={form.customerMobile2} onChange={e => setForm({ ...form, customerMobile2: e.target.value })} className="w-full p-2 border border-gray-300 rounded-md text-sm" />
          <input type="email" placeholder="Customer Email" value={form.customerEmail} onChange={e => setForm({ ...form, customerEmail: e.target.value })} className="w-full p-2 border border-gray-300 rounded-md text-sm" />
          <select value={form.collectionArea} onChange={e => setForm({ ...form, collectionArea: e.target.value })} className="w-full p-2 border border-gray-300 rounded-md text-sm">
            <option value="">Assign Collection Area</option>
            <option value="Area 1">Area 1</option>
            <option value="Area 2">Area 2</option>
          </select>
        </div>

        {/* Button Section */}
        <div className="flex flex-col items-center gap-3 pt-4">
            <div className="flex flex-wrap justify-center gap-3">
                <button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:opacity-90 transition-opacity">Save</button>
                <button className="bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-100 transition-colors">Clear All</button>
                <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition-colors">Save and Go to Document Entry</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
                <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition-colors">Save and Go to Co-Borrower Entry</button>
                <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition-colors">Save and Go to Guarantor Entry</button>
            </div>
            <div className="flex justify-center">
                <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition-colors">Save and Go to Loan Entry</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerEntry; 
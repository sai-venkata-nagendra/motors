import React, { useState } from 'react';

const initialState = {
  customerId: '',
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
  file: null,
};

export default function EditCustomer() {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);

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

  return (
    <div className="animate-fade-in-up max-w-6xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
      <h2 className="text-4xl font-extrabold mb-10 text-blue-900 border-b-4 border-teal-200 pb-4 tracking-wider drop-shadow-lg text-center uppercase">Edit Customer</h2>
      <form className="space-y-10">
        <div className="grid grid-cols-12 gap-6 items-end">
          {/* Image and upload */}
          <div className="col-span-2 flex flex-col items-center gap-2">
            <div className="w-28 h-32 bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300 rounded-xl flex items-center justify-center mb-2 shadow-inner">
              {file ? <img src={URL.createObjectURL(file)} alt="Preview" className="w-full h-full object-cover rounded-xl" /> : <span className="text-blue-300">No Image</span>}
            </div>
            <input type="file" onChange={handleFile} className="text-xs" />
            <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow transition-all duration-200 border border-blue-700 mt-2">New Image</button>
          </div>
          {/* Form fields */}
          <div className="col-span-10 grid grid-cols-10 gap-4 items-end">
            <div className="col-span-2">
              <label className="block text-blue-900 font-semibold mb-1">Customer ID</label>
              <input type="text" value={form.customerId} onChange={handleInput} name="customerId" className="w-full border border-blue-200 rounded px-3 py-2 bg-blue-50 text-blue-900 font-bold" />
            </div>
            <div className="col-span-1">
              <label className="block text-blue-900 font-semibold mb-1">Title</label>
              <select name="customerTitle" value={form.customerTitle} onChange={handleInput} className="w-full border border-blue-200 rounded px-2 py-2">
                <option>Mr.</option>
                <option>Ms.</option>
                <option>Mrs.</option>
              </select>
            </div>
            <div className="col-span-3">
              <label className="block text-blue-900 font-semibold mb-1">Customer Name</label>
              <input name="customerName" value={form.customerName} onChange={handleInput} placeholder="Customer Name" className="w-full border border-blue-200 rounded px-3 py-2" />
            </div>
            <div className="col-span-1 flex flex-col justify-end">
              <span className="block text-blue-700 font-bold text-center mb-1">S/O</span>
            </div>
            <div className="col-span-3">
              <label className="block text-blue-900 font-semibold mb-1">Father's Name</label>
              <input name="fatherName" value={form.fatherName} onChange={handleInput} placeholder="Father's Name" className="w-full border border-blue-200 rounded px-3 py-2" />
            </div>
            <div className="col-span-5">
              <label className="block text-blue-900 font-semibold mb-1">Mother's Name</label>
              <input name="motherName" value={form.motherName} onChange={handleInput} className="w-full border border-blue-200 rounded px-3 py-2" />
            </div>
            <div className="col-span-5">
              <label className="block text-blue-900 font-semibold mb-1">DoB</label>
              <input type="date" name="dob" value={form.dob} onChange={handleInput} className="w-full border border-blue-200 rounded px-3 py-2" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {/* Present Address */}
          <div className="bg-white rounded-xl p-5 border-2 border-blue-100 shadow-md">
            <h3 className="font-bold text-blue-700 mb-2">Present Address</h3>
            <input placeholder="Address 1" value={form.present.address1} onChange={e => handleAddress('present', 'address1', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2" />
            <input placeholder="Address 2" value={form.present.address2} onChange={e => handleAddress('present', 'address2', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2" />
            <select value={form.present.state} onChange={e => handleAddress('present', 'state', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2">
              <option>Select State</option>
              <option>State 1</option>
              <option>State 2</option>
            </select>
            <select value={form.present.city} onChange={e => handleAddress('present', 'city', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2">
              <option>Select City</option>
              <option>City 1</option>
              <option>City 2</option>
            </select>
            <input placeholder="PIN" value={form.present.pin} onChange={e => handleAddress('present', 'pin', e.target.value)} className="w-full border border-blue-200 rounded px-3 py-2" />
          </div>
          {/* Permanent Address */}
          <div className="bg-white rounded-xl p-5 border-2 border-blue-100 shadow-md">
            <h3 className="font-bold text-blue-700 mb-2">Permanent Address</h3>
            <input placeholder="Address 1" value={form.permanent.address1} onChange={e => handleAddress('permanent', 'address1', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2" />
            <input placeholder="Address 2" value={form.permanent.address2} onChange={e => handleAddress('permanent', 'address2', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2" />
            <select value={form.permanent.state} onChange={e => handleAddress('permanent', 'state', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2">
              <option>Select State</option>
              <option>State 1</option>
              <option>State 2</option>
            </select>
            <select value={form.permanent.city} onChange={e => handleAddress('permanent', 'city', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2">
              <option>Select City</option>
              <option>City 1</option>
              <option>City 2</option>
            </select>
            <input placeholder="PIN" value={form.permanent.pin} onChange={e => handleAddress('permanent', 'pin', e.target.value)} className="w-full border border-blue-200 rounded px-3 py-2" />
          </div>
          {/* Office Address */}
          <div className="bg-white rounded-xl p-5 border-2 border-blue-100 shadow-md">
            <h3 className="font-bold text-blue-700 mb-2">Office Address</h3>
            <input placeholder="Address 1" value={form.office.address1} onChange={e => handleAddress('office', 'address1', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2" />
            <input placeholder="Address 2" value={form.office.address2} onChange={e => handleAddress('office', 'address2', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2" />
            <select value={form.office.state} onChange={e => handleAddress('office', 'state', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2">
              <option>Select State</option>
              <option>State 1</option>
              <option>State 2</option>
            </select>
            <select value={form.office.city} onChange={e => handleAddress('office', 'city', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2">
              <option>Select City</option>
              <option>City 1</option>
              <option>City 2</option>
            </select>
            <input placeholder="PIN" value={form.office.pin} onChange={e => handleAddress('office', 'pin', e.target.value)} className="w-full border border-blue-200 rounded px-3 py-2" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <input placeholder="Ref 1 Name" value={form.ref1Name} onChange={e => setForm({ ...form, ref1Name: e.target.value })} className="border border-blue-200 rounded px-3 py-2" />
          <input placeholder="Ref 1 Ph No" value={form.ref1Ph} onChange={e => setForm({ ...form, ref1Ph: e.target.value })} className="border border-blue-200 rounded px-3 py-2" />
          <input placeholder="Ref 2 Name" value={form.ref2Name} onChange={e => setForm({ ...form, ref2Name: e.target.value })} className="border border-blue-200 rounded px-3 py-2" />
          <input placeholder="Ref 2 Ph No" value={form.ref2Ph} onChange={e => setForm({ ...form, ref2Ph: e.target.value })} className="border border-blue-200 rounded px-3 py-2" />
        </div>
        <div className="grid grid-cols-4 gap-6">
          <input placeholder="Customer Mobile 1" value={form.customerMobile1} onChange={e => setForm({ ...form, customerMobile1: e.target.value })} className="border border-blue-200 rounded px-3 py-2" />
          <input placeholder="Customer Mobile 2" value={form.customerMobile2} onChange={e => setForm({ ...form, customerMobile2: e.target.value })} className="border border-blue-200 rounded px-3 py-2" />
          <input placeholder="Customer Email" value={form.customerEmail} onChange={e => setForm({ ...form, customerEmail: e.target.value })} className="border border-blue-200 rounded px-3 py-2" />
          <select value={form.collectionArea} onChange={e => setForm({ ...form, collectionArea: e.target.value })} className="border border-blue-200 rounded px-3 py-2">
            <option value="">Assign Collection Area</option>
            <option value="Area 1">Area 1</option>
            <option value="Area 2">Area 2</option>
          </select>
        </div>
        <div className="flex flex-wrap gap-6 justify-center mt-10">
          <button type="button" className="bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-600 hover:to-blue-400 text-white font-bold px-10 py-3 rounded-xl shadow-lg border-2 border-blue-700 transition-all duration-200 text-lg">Switch To Edit Mode</button>
          <button type="button" className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-700 text-white font-bold px-12 py-4 rounded-2xl shadow-2xl transition-all duration-200 border-2 border-blue-700 text-xl tracking-wider">Save</button>
          <button type="button" onClick={handleClear} className="bg-gradient-to-r from-gray-100 to-blue-100 hover:from-gray-200 hover:to-blue-200 text-blue-700 font-bold px-10 py-3 rounded-xl shadow-lg border-2 border-blue-300 transition-all duration-200 text-lg">Clear All</button>
        </div>
        <div className="text-xs text-blue-500 mt-4">Last Edited By:</div>
      </form>
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
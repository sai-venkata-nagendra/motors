import React, { useState } from 'react';

const initialState = {
  customerName: '',
  customerType: 'New',
  guarantorTitle: 'Mr.',
  guarantorName: '',
  fatherName: '',
  motherName: '',
  dob: '',
  present: { address1: '', address2: '', state: '', city: '', pin: '' },
  permanent: { address1: '', address2: '', state: '', city: '', pin: '' },
  office: { address1: '', address2: '', state: '', city: '', pin: '' },
  customerMobile1: '',
  customerMobile2: '',
  customerEmail: '',
  vehReg: '',
};

const states = ['Select', 'State 1', 'State 2'];
const cities = ['Select', 'City 1', 'City 2'];

const GuarantorEntry = () => {
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
  const handleCopyAddress = () => {
    setForm({ ...form, permanent: { ...form.present } });
  };
  return (
    <div className="animate-fade-in-up max-w-5xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
      <h2 className="text-4xl font-extrabold mb-10 text-blue-900 border-b-4 border-teal-200 pb-4 tracking-wider drop-shadow-lg text-center uppercase">New Guarantor Entry</h2>
      <form className="space-y-10">
        <div className="flex flex-wrap gap-10 items-end">
          <div className="flex flex-col items-center gap-2">
            <div className="w-28 h-32 bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300 rounded-xl flex items-center justify-center mb-2 shadow-inner">
              {file ? <img src={URL.createObjectURL(file)} alt="Preview" className="w-full h-full object-cover rounded-xl" /> : <span className="text-blue-300">No Image</span>}
            </div>
            <input type="file" onChange={handleFile} className="text-xs" />
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-blue-900 font-semibold mb-1">Guarantor ID</label>
              <input type="text" value="101-GR-004149" disabled className="w-full border border-blue-200 rounded px-3 py-2 bg-blue-50 text-blue-900 font-bold" />
            </div>
            <div className="flex items-end gap-2">
              <input name="customerName" value={form.customerName} onChange={handleInput} placeholder="Customer Name" className="w-full border border-blue-200 rounded px-3 py-2" />
              <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow transition-all duration-200 border border-blue-700 ml-2">Search Customer</button>
            </div>
            <div>
              <label className="block text-blue-900 font-semibold mb-1">Customer Type</label>
              <select name="customerType" value={form.customerType} onChange={handleInput} className="w-full border border-blue-200 rounded px-3 py-2">
                <option>New</option>
                <option>Existing</option>
              </select>
            </div>
            <div className="col-span-2 flex gap-2">
              <select name="guarantorTitle" value={form.guarantorTitle} onChange={handleInput} className="border border-blue-200 rounded px-2 py-2">
                <option>Mr.</option>
                <option>Ms.</option>
                <option>Mrs.</option>
              </select>
              <input name="guarantorName" value={form.guarantorName} onChange={handleInput} placeholder="Guarantor Name" className="flex-1 border border-blue-200 rounded px-3 py-2" />
              <span className="self-center text-blue-700 font-bold">S/O</span>
              <input name="fatherName" value={form.fatherName} onChange={handleInput} placeholder="Father's Name" className="flex-1 border border-blue-200 rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-blue-900 font-semibold mb-1">Mother's Name</label>
              <input name="motherName" value={form.motherName} onChange={handleInput} className="w-full border border-blue-200 rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-blue-900 font-semibold mb-1">DoB</label>
              <input type="date" name="dob" value={form.dob} onChange={handleInput} className="w-full border border-blue-200 rounded px-3 py-2" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {/* Present Address */}
          <div className="bg-white rounded-xl p-5 border-2 border-blue-100 shadow-md">
            <h3 className="font-bold text-blue-700 mb-2">Present Address</h3>
            <input placeholder="Address 1" value={form.present.address1} onChange={e => handleAddress('present', 'address1', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2" />
            <input placeholder="Address 2" value={form.present.address2} onChange={e => handleAddress('present', 'address2', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2" />
            <select value={form.present.state} onChange={e => handleAddress('present', 'state', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2">
              {states.map(s => <option key={s}>{s}</option>)}
            </select>
            <select value={form.present.city} onChange={e => handleAddress('present', 'city', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2">
              {cities.map(c => <option key={c}>{c}</option>)}
            </select>
            <input placeholder="PIN" value={form.present.pin} onChange={e => handleAddress('present', 'pin', e.target.value)} className="w-full border border-blue-200 rounded px-3 py-2" />
          </div>
          {/* Permanent Address */}
          <div className="bg-white rounded-xl p-5 border-2 border-blue-100 shadow-md relative flex flex-col justify-between">
            <h3 className="font-bold text-blue-700 mb-2">Permanent Address</h3>
            <input placeholder="Address 1" value={form.permanent.address1} onChange={e => handleAddress('permanent', 'address1', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2" />
            <input placeholder="Address 2" value={form.permanent.address2} onChange={e => handleAddress('permanent', 'address2', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2" />
            <select value={form.permanent.state} onChange={e => handleAddress('permanent', 'state', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2">
              {states.map(s => <option key={s}>{s}</option>)}
            </select>
            <select value={form.permanent.city} onChange={e => handleAddress('permanent', 'city', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2">
              {cities.map(c => <option key={c}>{c}</option>)}
            </select>
            <input placeholder="PIN" value={form.permanent.pin} onChange={e => handleAddress('permanent', 'pin', e.target.value)} className="w-full border border-blue-200 rounded px-3 py-2" />
            <button type="button" onClick={handleCopyAddress} className="absolute top-2 right-2 bg-gradient-to-br from-blue-200 to-blue-400 hover:from-blue-300 hover:to-blue-500 text-blue-900 px-3 py-1 rounded-full text-xs shadow-lg border border-blue-300 transition-all flex items-center gap-1">
              <span className="font-bold">{'>>'}</span>
              <span className="hidden md:inline">Copy Present</span>
            </button>
          </div>
          {/* Office Address */}
          <div className="bg-white rounded-xl p-5 border-2 border-blue-100 shadow-md">
            <h3 className="font-bold text-blue-700 mb-2">Office Address</h3>
            <input placeholder="Address 1" value={form.office.address1} onChange={e => handleAddress('office', 'address1', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2" />
            <input placeholder="Address 2" value={form.office.address2} onChange={e => handleAddress('office', 'address2', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2" />
            <select value={form.office.state} onChange={e => handleAddress('office', 'state', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2">
              {states.map(s => <option key={s}>{s}</option>)}
            </select>
            <select value={form.office.city} onChange={e => handleAddress('office', 'city', e.target.value)} className="mb-2 w-full border border-blue-200 rounded px-3 py-2">
              {cities.map(c => <option key={c}>{c}</option>)}
            </select>
            <input placeholder="PIN" value={form.office.pin} onChange={e => handleAddress('office', 'pin', e.target.value)} className="w-full border border-blue-200 rounded px-3 py-2" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <input placeholder="Customer Mobile 1" value={form.customerMobile1} onChange={e => setForm({ ...form, customerMobile1: e.target.value })} className="border border-blue-200 rounded px-3 py-2" />
          <input placeholder="Customer Mobile 2" value={form.customerMobile2} onChange={e => setForm({ ...form, customerMobile2: e.target.value })} className="border border-blue-200 rounded px-3 py-2" />
          <input placeholder="Customer Email" value={form.customerEmail} onChange={e => setForm({ ...form, customerEmail: e.target.value })} className="border border-blue-200 rounded px-3 py-2" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <input placeholder="Guarantor Veh Regn." value={form.vehReg} onChange={e => setForm({ ...form, vehReg: e.target.value })} className="border border-blue-200 rounded px-3 py-2" />
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <button type="button" className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-700 text-white font-bold px-12 py-4 rounded-2xl shadow-2xl transition-all duration-200 border-2 border-blue-700 text-xl tracking-wider">Save</button>
          <button type="button" onClick={handleClear} className="bg-gradient-to-r from-gray-100 to-blue-100 hover:from-gray-200 hover:to-blue-200 text-blue-700 font-bold px-10 py-3 rounded-xl shadow-lg border-2 border-blue-300 transition-all duration-200 text-lg">Clear All</button>
          <button type="button" className="bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-600 hover:to-blue-400 text-white font-bold px-8 py-3 rounded-xl shadow-lg border-2 border-blue-700 transition-all duration-200 text-lg">Save and Go to Document Entry</button>
          <button type="button" className="bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-600 hover:to-blue-400 text-white font-bold px-8 py-3 rounded-xl shadow-lg border-2 border-blue-700 transition-all duration-200 text-lg">Save and Go to Loan Entry</button>
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
};

export default GuarantorEntry; 
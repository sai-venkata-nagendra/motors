import React, { useState } from 'react';

const initialState = {
  customerName: '',
  loanAcNo: '',
  customerId: '',
  extAcNo: '',
  deliveryDate: '',
  dealerName: '',
  bookingNo: '',
  tempRegnNo: '',
  regnNo: '',
  regnAuthority: '',
  vehicleColor: '',
  vehType: '',
  manufacturer: '',
  vehMake: '',
  modelMm: '',
  modelYear: '',
  exShPrice: '',
  engineNo: '',
  chasisNo: '',
  insuranceUpto: '',
  insuranceCo: '',
  policyNo: '',
  regnBy: '',
  docsStatus: '',
};

export default function EditVehicle() {
  const [form, setForm] = useState(initialState);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleClear = () => {
    setForm(initialState);
  };

  return (
    <div className="animate-fade-in-up max-w-5xl mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
      <h2 className="text-3xl font-extrabold mb-8 text-blue-900 border-b-4 border-teal-200 pb-2 tracking-wider drop-shadow-lg text-left uppercase flex items-center gap-4">
        Edit Vehicle Details
        <input type="text" placeholder="Search..." className="ml-6 border border-blue-300 rounded-lg px-4 py-2 bg-white/80 text-blue-900 font-semibold shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all placeholder-blue-300 w-56" />
        <button className="ml-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow transition-all duration-200 border border-blue-700">Search</button>
      </h2>
      <form className="space-y-10">
        <div className="grid grid-cols-3 gap-8 bg-white/80 rounded-2xl shadow-lg p-8 border border-blue-100">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Customer Name</label>
            <input name="customerName" value={form.customerName} onChange={handleInput} className="input-glass" placeholder="Customer Name" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Loan Ac No</label>
            <input name="loanAcNo" value={form.loanAcNo} onChange={handleInput} className="input-glass" placeholder="Loan Ac No" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Ext. Ac No</label>
            <input name="extAcNo" value={form.extAcNo} onChange={handleInput} className="input-glass" placeholder="Ext. Ac No" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Customer ID</label>
            <input name="customerId" value={form.customerId} onChange={handleInput} className="input-glass" placeholder="Customer ID" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Delivery Date</label>
            <input type="date" name="deliveryDate" value={form.deliveryDate} onChange={handleInput} className="input-glass" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Dealer Name</label>
            <input name="dealerName" value={form.dealerName} onChange={handleInput} className="input-glass" placeholder="Dealer Name" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Booking No</label>
            <input name="bookingNo" value={form.bookingNo} onChange={handleInput} className="input-glass" placeholder="Booking No" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Temp Regn No</label>
            <input name="tempRegnNo" value={form.tempRegnNo} onChange={handleInput} className="input-glass" placeholder="Temp Regn No" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Regn No</label>
            <input name="regnNo" value={form.regnNo} onChange={handleInput} className="input-glass" placeholder="Regn No" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Regn Authority</label>
            <input name="regnAuthority" value={form.regnAuthority} onChange={handleInput} className="input-glass" placeholder="Regn Authority" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Vehicle Color</label>
            <input name="vehicleColor" value={form.vehicleColor} onChange={handleInput} className="input-glass" placeholder="Vehicle Color" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Veh. Type</label>
            <input name="vehType" value={form.vehType} onChange={handleInput} className="input-glass" placeholder="Veh. Type" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Manufacturer</label>
            <input name="manufacturer" value={form.manufacturer} onChange={handleInput} className="input-glass" placeholder="Manufacturer" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Veh. Make</label>
            <input name="vehMake" value={form.vehMake} onChange={handleInput} className="input-glass" placeholder="Veh. Make" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Model MM</label>
            <input name="modelMm" value={form.modelMm} onChange={handleInput} className="input-glass" placeholder="Model MM" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Year</label>
            <input name="modelYear" value={form.modelYear} onChange={handleInput} className="input-glass" placeholder="Year" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Ex. Sh. Price</label>
            <input name="exShPrice" value={form.exShPrice} onChange={handleInput} className="input-glass" placeholder="Ex. Sh. Price" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Engine No</label>
            <input name="engineNo" value={form.engineNo} onChange={handleInput} className="input-glass" placeholder="Engine No" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Chasis No</label>
            <input name="chasisNo" value={form.chasisNo} onChange={handleInput} className="input-glass" placeholder="Chasis No" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Insurance Upto</label>
            <input type="date" name="insuranceUpto" value={form.insuranceUpto} onChange={handleInput} className="input-glass" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Insurance Co</label>
            <input name="insuranceCo" value={form.insuranceCo} onChange={handleInput} className="input-glass" placeholder="Insurance Co" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Policy No.</label>
            <input name="policyNo" value={form.policyNo} onChange={handleInput} className="input-glass" placeholder="Policy No." />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Regn By</label>
            <input name="regnBy" value={form.regnBy} onChange={handleInput} className="input-glass" placeholder="Regn By" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Docs Status</label>
            <input name="docsStatus" value={form.docsStatus} onChange={handleInput} className="input-glass" placeholder="Docs Status" />
          </div>
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
        .input-glass {
          @apply bg-white/90 border border-blue-200 rounded-lg px-4 py-2 shadow-inner focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all placeholder-blue-300;
        }
      `}</style>
    </div>
  );
} 
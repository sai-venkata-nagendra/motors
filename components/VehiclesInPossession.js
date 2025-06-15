import React from 'react';

const VehiclesInPossession = () => {

  const vehicle = {
    delDate: '16-07-2017',
    custName: 'VIKRAM',
    loanAcNo: 'RAM-17A21DC-000165',
    regnNo: 'HR55AB2452',
    chNo: 'MCS3E8P25JAG087',
    enNo: 'A7F1103716',
    modelColor: '7-2017, Green / Yellow',
    vehMake: 'Baxy Express G Cng',
    resiAdd: 'H.NO-383-K VILL SIKOHPUR, TEH SOHNA GURGAON, Gurugram, Haryana [HR]',
    phNo: '9015715346,',
    loanAmt: '1,90,000.00',
    overdueAmt: '2,25,720.00',
    totalDueAmt: '2,25,720.00',
    seizedOn: '21-03-2018',
    remarks: 'SALE TO PRIYANKA W/O MANOJ YADAV RB--18',
  };

  return (
    <div className="p-8 bg-white font-sans animate-fade-in-up">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-800">Re-Possessed Vehicles List</h1>
        <p className="text-gray-600">12-Jun-2025</p>
      </div>

      {/* Vehicle List */}
      <div className="space-y-8 mt-6">
        {/* Single Vehicle Item */}
        <div className="flex items-start space-x-6">
          <div className="w-8 text-lg font-semibold text-gray-700">1</div>
          <div className="flex-1 border-b pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-2 text-sm">
                <div className="flex"><p className="font-bold w-28">Del. Date:</p><p>{vehicle.delDate}</p></div>
                <div className="flex"><p className="font-bold w-28">Cust Name:</p><p>{vehicle.custName}</p></div>
                <div className="flex"><p className="font-bold w-28">Loan Ac No:</p><p>{vehicle.loanAcNo}</p></div>
                <div className="flex"><p className="font-bold w-28">Regn. No:</p><p>{vehicle.regnNo}</p></div>

                <div className="flex"><p className="font-bold w-28">Ch. No.:</p><p>{vehicle.chNo}</p></div>
                <div className="flex"><p className="font-bold w-28">En. No.:</p><p>{vehicle.enNo}</p></div>
                <div className="flex"><p className="font-bold w-28">Model/Color:</p><p>{vehicle.modelColor}</p></div>
                <div className="flex"><p className="font-bold w-28">Veh Make:</p><p>{vehicle.vehMake}</p></div>
                
                <div className="col-span-1 md:col-span-2 lg:col-span-3 flex"><p className="font-bold w-28">Resi Add:</p><p>{vehicle.resiAdd}</p></div>
                <div className="flex"><p className="font-bold w-28">Ph. No.:</p><p>{vehicle.phNo}</p></div>

                <div className="flex"><p className="font-bold w-28">Loan Amt.:</p><p>{vehicle.loanAmt}</p></div>
                <div className="flex"><p className="font-bold w-28">OverDue Amt.:</p><p>{vehicle.overdueAmt}</p></div>
                <div className="flex"><p className="font-bold w-28">Total Due Amt.:</p><p>{vehicle.totalDueAmt}</p></div>
                <div className="flex"><p className="font-bold w-28">Seized On:</p><p>{vehicle.seizedOn}</p></div>
                
                <div className="col-span-1 md:col-span-2 lg:col-span-4 flex"><p className="font-bold w-28">Remarks:</p><p>{vehicle.remarks}</p></div>
            </div>

            <div className="mt-4 flex space-x-8 text-blue-600 font-semibold">
              <button className="hover:underline">Re-Print Notice</button>
              <button className="hover:underline">Outright Sale</button>
              <button className="hover:underline">Loan Transfer</button>
              <button className="hover:underline">Loan Settlement</button>
            </div>
          </div>
        </div>
        {/* End Single Vehicle Item */}
      </div>
       <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default VehiclesInPossession; 
// components/DashboardMetrics.js
import React from 'react';

export default function DashboardMetrics({ dashboardData = {} }) {
  // Default values to prevent undefined errors
  const defaultData = {
    netEntryPending: 0,
    acNoDraft: 0,
    dpBalance: 0,
    overdueLoans: 0,
    insPolicyPending: 0,
    pddPdaAmt: 0,
    regNoPending: 0,
    vehInvoicePending: 0,
    chqsInClearing: 0,
    nocsToBeGiven: 0,
    nocsAwaited: 0
  };

  // Merge provided data with defaults
  const data = { ...defaultData, ...dashboardData };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'decimal',
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    }).format(value);
  };

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="flex">
        <div className="w-40 text-gray-600">Net Entry Pending</div>
        <div className="text-blue-600 font-medium">: {data.netEntryPending}</div>
      </div>
      <div className="flex">
        <div className="w-40 text-gray-600">Ac No. Not Read</div>
        <div className="text-blue-600 font-medium">: {data.acNoDraft}</div>
      </div>
      <div className="flex">
        <div className="w-40 text-gray-600">DP Balance</div>
        <div className="text-red-600 font-medium">: {formatCurrency(data.dpBalance)}</div>
      </div>
      
      <div className="flex">
        <div className="w-40 text-gray-600">Overdue Loans</div>
        <div className="text-blue-600 font-medium">: {data.overdueLoans}</div>
      </div>
      <div className="flex">
        <div className="w-40 text-gray-600">Ins Policy Pending</div>
        <div className="text-blue-600 font-medium">: {data.insPolicyPending}</div>
      </div>
      <div className="flex">
        <div className="w-40 text-gray-600">Pdd PDA Amt</div>
        <div className="text-red-600 font-medium">: {formatCurrency(data.pddPdaAmt)}</div>
      </div>
      
      <div className="flex">
        <div className="w-40 text-gray-600">Regn No Pending</div>
        <div className="text-blue-600 font-medium">: {data.regNoPending}</div>
      </div>
      <div className="flex">
        <div className="w-40 text-gray-600">Veh Invoice Pending</div>
        <div className="text-blue-600 font-medium">: {data.vehInvoicePending}</div>
      </div>
      <div className="flex">
        <div className="w-40 text-gray-600">Chqs in Clearing</div>
        <div className="text-red-600 font-medium">: {formatCurrency(data.chqsInClearing)}</div>
      </div>
      
      <div className="col-span-1"></div>
      <div className="flex">
        <div className="w-40 text-gray-600">NOCs To Be Given</div>
        <div className="text-blue-600 font-medium">: {data.nocsToBeGiven}</div>
      </div>
      <div className="flex">
        <div className="w-40 text-gray-600">NOCs Awaited</div>
        <div className="text-blue-600 font-medium">: {data.nocsAwaited}</div>
      </div>
    </div>
  );
}
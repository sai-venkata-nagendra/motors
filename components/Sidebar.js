import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

export default function Sidebar({ currentPage, onPageChange, isOpen, setIsOpen }) {
  const [openSubmenus, setOpenSubmenus] = useState({});
  
  const navItems = [
    { id: 'dashboard', label: 'DASHBOARD' },
    { id: 'EMI-calc', label: 'EMI CALC' },
    { id: 'search', label: 'SEARCH',
      submenu: [
        { id: 'search-customers', label: 'SEARCH CUSTOMERS' },
        { id: 'search-guarantors', label: 'SEARCH GUARANTORS' },
        { id: 'search-receipts', label: 'SEARCH RECEIPTS' },
      ]
    },
    { id: 'entries', label: 'ENTRIES',
      submenu: [
        { id: 'customer-entry', label: 'CUSTOMER ENTRY' },
        { id: 'co-borrower-entry', label: 'CO-BORROWER ENTRY' },
        { id: 'guarantor-entry', label: 'GUARANTOR ENTRY' },
        { id: 'loan-entry', label: 'LOAN ENTRY' },
        { id: 'vehicle-entry', label: 'VEHICLE ENTRY' },
        { id: 'new-call-note', label: 'NEW CALL NOTE' },
        { id: 'new-task', label: 'NEW TASK' },
      ]
    },
    { id: 'receipts', label: 'Transactions',
      submenu: [
        { id: 'emi-receipt', label: 'EMI Receipt' },
        { id: 'dp-balance', label: 'DP Balance Receipt' },
        { id: 'add-dp-balance', label: 'Add DP Balance' },
        { id: 'add-other-charges', label: 'Add Other Charges' },
        { id: 'other-charges-bal', label: 'Other Charges Bal. Receipt' },
        { id: 'check-all-dues', label: 'Check All Dues' },
        { id: 'loan-settlement', label: 'Loan Settlement' },
      ]
    },
    { id: 'updates', label: 'UPDATES',
      submenu: [
        { id: 'update', label: 'UPDATE',
          submenu: [
            { id: 'update-regn-no', label: 'UPDATE REGN NO.' },
            { id: 'participation-chq', label: 'PARTICIPATION CHQ.' },
            { id: 'ext-loan-ac-no', label: 'EXT LOAN AC NO.' },
            { id: 'ext-chq-details', label: 'EXT CHQ DETAILS' },
            { id: 'ext-emi-date', label: 'EXT. EMI DATE' },
            { id: 'update-ins-details', label: 'UPDATE INS DETAILS' },
            { id: 'save-ins-policy', label: 'SAVE INS POLICY' },
            { id: 'save-veh-invoice', label: 'SAVE VEH INVOICE' },
            { id: 'track-veh-docs', label: 'TRACK VEH DOCUMENTS' },
            { id: 'chqs-in-clearing', label: 'CHQS IN CLEARING' },
            { id: 'emi-pdc', label: 'EMI PDC',
              submenu: [
                { id: 'add-emi-pdc', label: 'ADD EMI PDC' },
                { id: 'update-emi-pdc', label: 'UPDATE EMI PDC' },
                { id: 'spoiled-pdc', label: 'SPOILED PDC' },
              ]
            },
          ]
        },
        { id: 'add', label: 'ADD',
          submenu: [
            { id: 'add-dp-balance', label: 'ADD DP BALANCE' },
            { id: 'add-other-charges', label: 'ADD OTHER CHARGES' },
          ]
        },
      ]
    },
    { id: 'edit', label: 'EDIT',
      submenu: [
        { id: 'edit-customer', label: 'EDIT CUSTOMER' },
        { id: 'edit-co-borrower', label: 'EDIT CO-BORROWER' },
        { id: 'edit-guarantor', label: 'EDIT GUARANTOR' },
        { id: 'edit-loan', label: 'EDIT LOAN' },
        { id: 'restructure-loan', label: 'RESTRUCTURE LOAN' },
        { id: 'edit-vehicle', label: 'EDIT VEHICLE' },
        { id: 'change-guarantor', label: 'CHANGE GUARANTOR' },
        { id: 'change-hp', label: 'CHANGE HP' },
        { id: 'change-emi-date', label: 'CHANGE EMI DATE' },
        { id: 'edit-ext-ac-no', label: 'EDIT EXT AC NO' },
      ]
    },
    {
      id: 'reports',
      label: 'Reports',
      submenu: [
        { 
          id: 'emi-related', 
          label: 'EMI Related',
          submenu: [
            { id: 'emi-due-report', label: 'EMI Due Report' },
            { id: 'emi-history', label: 'EMI History' },
            { id: 'receipt-history', label: 'Receipt History' },
            { id: 'loan-ledger', label: 'Loan Ledger' },
            { id: 'emi-expected', label: 'EMI Expected' },
            { id: 'emi-schedule', label: 'EMI Schedule' },
            { id: 'chq-return-report', label: 'Chq. Return Report' }
          ]
        },
        { 
          id: 'loan-related', 
          label: 'LOAN RELATED',
          submenu: [
            { id: 'customerWOLoan', label: 'CUSTOMER W/O LOAN' },
            { id: 'loanAcStatement', label: 'LOAN AC STATEMENT' },
            { id: 'firstLastEmiReport', label: 'FIRST / LAST EMI REPORT' },
            { id: 'loansGiven', label: 'LOANS GIVEN' },
            { id: 'loanStatusReport', label: 'LOAN STATUS REPORT' },
            { id: 'lccReport', label: 'LCC REPORT' },
            { id: 'bucketList', label: 'BUCKET LIST' },
            { id: 'overdueLoans', label: 'OVERDUE LOANS' },
            { id: 'recalledLoans', label: 'RECALLED LOANS' },
          ]
        },
        { 
          id: 'vehicle-related', 
          label: 'Vehicle Related',
          submenu: [
            { id: 'vehicles-delivered', label: 'VEHICLES DELIVERED' },
            { id: 'dealer-wise-vehicle', label: 'DEALER-WISE VEHICLE' },
            { id: 'dealer-pymt-due', label: 'DEALER PYMT DUE' },
            { id: 'dealer-pymt-report', label: 'DEALER PYMT REPORT' },
            { id: 'insurance-due-report', label: 'INSURANCE DUE REPORT' },
            { id: 'vehicles-in-pessession', label: 'VEHICLES IN PESSESSION' },
          ]
        },
        { 
          id: 'misc-reports', 
          label: 'Misc. Reports',
          submenu: [
            { id: 'collection-ag-loan-count', label: 'COLLECTION AG. LOAN COUNT' },
            { id: 'customer-wo-coll-area', label: 'CUSTOMER W/O COLL. AREA' },
            { id: 'customer-list', label: 'CUSTOMER LIST' },
            { id: 'dealer-list', label: 'DEALER LIST' },
          ]
        }
      ]
    },
    { id: 'accounts', label: 'ACCOUNTS',
      submenu: [
        {
          id: 'account-reports',
          label: 'REPORTS',
          submenu: [
            { id: 'collection-report', label: 'COLLECTION REPORT' },
            { id: 'collection-agent-report', label: 'COLLECTION AGENT REPORT' },
            { id: 'collection-and-pymt-sent', label: 'COLLECTION AND PYMT SENT' },
            { id: 'receipt-wise-collection', label: 'RECEIPT-WISE COLLECTION' },
            { id: 'dp-collection', label: 'DP COLLECTION' },
            { id: 'other-chgs-collection', label: 'OTHER CHGS. COLLECTION' },
            { id: 'cancelled-receipts', label: 'CANCELLED RECEIPTS' },
            { id: 'money-in-market', label: 'MONEY IN MARKET' }
          ]
        }
      ]
    },
    { id: 'setup', label: 'SETUP',
      submenu: [
        { id: 'update-od-loans', label: 'UPDATE OD LOANS' },
        { id: 'external-resources', label: 'EXTERNAL RESOURCES',
          submenu: [
            { id: 'sales-team', label: 'SALES TEAM' },
            { id: 'sales-agents', label: 'SALES AGENTS' },
            { id: 'registration-agents', label: 'REGISTRATION AGENTS' },
            { id: 'collection-agents', label: 'COLLECTION AGENTS' },
            { id: 'collection-area', label: 'COLLECTION AREA' },
            { id: 'dealers', label: 'DEALERS' },
          ]
        },
        { id: 'users', label: 'USERS' }
      ]
    }
  ];

  const handleToggleSubmenu = (id) => {
    setOpenSubmenus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePageSelect = (pageId) => {
    onPageChange(pageId);
    setIsOpen(false); // Close sidebar on page selection
  };

  const renderMenuItems = (items, level = 0) => {
    return items.map((item, index) => {
      const hasSubmenu = item.submenu && item.submenu.length > 0;
      const isOpen = openSubmenus[item.id];

      const handleItemClick = () => {
        if (hasSubmenu) {
          handleToggleSubmenu(item.id);
        } else {
          handlePageSelect(item.id);
        }
      };

      const itemStyle = {
        paddingLeft: `${1 + level * 0.8}rem`,
      };

      const isActive = currentPage === item.id;

      return (
        <React.Fragment key={item.id}>
          <div className="relative">
            <button
              className={`w-full text-left flex items-center justify-between rounded-md shadow-sm focus:outline-none transition-all duration-200
                ${level > 0 ? 'py-2 px-4' : 'p-4'}
                ${isActive ? 'bg-blue-900/90 border-l-4 border-yellow-300' : 'hover:bg-blue-700/80'}`
              }
              style={itemStyle}
              onClick={handleItemClick}
            >
              <span className={`text-white tracking-wide ${level > 0 ? 'font-semibold' : 'text-lg font-extrabold'}`}>
                {item.label}
              </span>
              {hasSubmenu && (
                <span className="ml-2 text-white transform transition-transform duration-200">
                  {isOpen ? '▼' : '▶'}
                </span>
              )}
            </button>
            {hasSubmenu && isOpen && (
              <div className="mt-1 animate-fade-in bg-blue-900/20 rounded-md">
                {renderMenuItems(item.submenu, level + 1)}
              </div>
            )}
          </div>
          {level === 0 && index < navItems.length - 1 && <hr className="border-t border-blue-600 my-1 mx-4" />}
        </React.Fragment>
      );
    });
  };

  const sidebarRef = useRef();

  // Close sidebar on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-b from-blue-700 to-blue-500 shadow-2xl z-30 transform transition-transform md:relative md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-blue-600 md:hidden">
              <h2 className="text-white text-lg font-bold">Menu</h2>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 py-2 overflow-y-auto">
              {renderMenuItems(navItems)}
            </nav>
            <div className="p-4 text-xs text-blue-100 bg-blue-900/80 text-center">
              © {new Date().getFullYear()} Rajhans Motor Investment Co.<br />All rights reserved.
              <hr className="my-2 border-blue-500" />
              developed by Alpixn Technologies Private Limited
            </div>
        </div>
      </aside>
    </>
  );
}
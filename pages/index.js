import Head from 'next/head';
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DashboardMetrics from '../components/DashboardMetrics';
import EmiCalculator from '../components/EmiCalculator';
import CustomerSearch from '../components/CustomerSearch';
import GuarantorSearch from '../components/GuarantorSearch';
import SearchReceipts from '../components/SearchReceipts';
import CustomerEntry from '../components/CustomerEntry';
import GuarantorEntry from '../components/GuarantorEntry';
import CoBorrowerEntry from '../components/CoBorrowerEntry';
import LoanEntry from '../components/LoanEntry';
import VehicleEntry from '../components/VehicleEntry';
import EmiReceipt from '../components/EmiReceipt';
import DpBalance from '../components/DpBalance';
import OtherChargesBalance from '../components/OtherChargesBalance';
import CheckAllDues from '../components/CheckAllDues';
import LoanSettlement from '../components/LoanSettlement';
import EditCustomer from '../components/EditCustomer';
import EditCoBorrower from '../components/EditCoBorrower';
import EditGuarantor from '../components/EditGuarantor';
import EditLoan from '../components/EditLoan';
import EditVehicle from '../components/EditVehicle';
import ChangeGuarantor from '../components/ChangeGuarantor';
import ChangeHP from '../components/ChangeHP';
import ChangeEmiDate from '../components/ChangeEmiDate';
import EditExtAcNo from '../components/EditExtAcNo';
import UpdateRegnNo from '../components/UpdateRegnNo';
import UpdateParticipationChq from '../components/UpdateParticipationChq';
import UpdateExtLoanAcNo from '../components/UpdateExtLoanAcNo';
import UpdateExtChqDetails from '../components/UpdateExtChqDetails';
import UpdateExtEmiDate from '../components/UpdateExtEmiDate';
import UpdateInsDetails from '../components/UpdateInsDetails';
import SaveInsPolicy from '../components/SaveInsPolicy';
import SaveVehInvoice from '../components/SaveVehInvoice';
import TrackVehDocs from '../components/TrackVehDocs';
import ChqsInClearing from '../components/ChqsInClearing';
import AddEmiPdc from '../components/AddEmiPdc';
import SpoiledPdc from '../components/SpoiledPdc';
import SuccessModal from '../components/SuccessModal';
import AddDpBalance from '../components/AddDpBalance';
import AddOtherCharges from '../components/AddOtherCharges';
import EmiDueReport from '../components/EmiDueReport';
import EmiHistory from '../components/EmiHistory';
import ReceiptHistory from '../components/ReceiptHistory';
import LoanLedger from '../components/LoanLedger';
import EmiExpected from '../components/EmiExpected';
import EmiSchedule from '../components/EmiSchedule';
import ChqReturnReport from '../components/ChqReturnReport';
import CustomerWOLoan from '../components/CustomerWOLoan';
import LoanAcStatement from '../components/LoanAcStatement';
import FirstLastEmiReport from '../components/FirstLastEmiReport';
import LoansGiven from '../components/LoansGiven';
import LoanStatusReport from '../components/LoanStatusReport';
import LccReport from '../components/LccReport';
import BucketList from '../components/BucketList';
import OverdueLoans from '../components/OverdueLoans';
import RecalledLoans from '../components/RecalledLoans';
import VehiclesDelivered from '../components/VehiclesDelivered';
import DealerWiseVehicle from '../components/DealerWiseVehicle';
import DealerPymtDue from '../components/DealerPymtDue';
import DealerPymtReport from '../components/DealerPymtReport';
import InsuranceDueReport from '../components/InsuranceDueReport';
import VehiclesInPossession from '../components/VehiclesInPossession';
import CollectionAgentLoanCount from '../components/CollectionAgentLoanCount';
import CustomerWoCollArea from '../components/CustomerWoCollArea';
import CollectionReport from '../components/CollectionReport';
import CollectionAgentReport from '../components/CollectionAgentReport';
import CollectionAndPymtSent from '../components/CollectionAndPymtSent';
import ReceiptWiseCollection from '../components/ReceiptWiseCollection';
import DpCollection from '../components/DpCollection';
import OtherChgsCollection from '../components/OtherChgsCollection';
import CancelledReceipts from '../components/CancelledReceipts';
import MoneyInMarket from '../components/MoneyInMarket';
import UpdateOdLoans from '../components/UpdateOdLoans';
import ExternalResources from '../components/ExternalResources';
import Users from '../components/Users';
import SalesTeam from '../components/SalesTeam';
import SalesAgents from '../components/SalesAgents';
import RegistrationAgents from '../components/RegistrationAgents';
import CollectionAgents from '../components/CollectionAgents';
import CollectionArea from '../components/CollectionArea';
import Dealers from '../components/Dealers';
import { useRouter } from 'next/router';
import { useAuth } from '../components/AuthContext';

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    // If not authenticated, redirect to signin
    if (!isAuthenticated()) {
      router.push('/signin');
    }
  }, [isAuthenticated, router]);

  const handlePageChange = (page) => {
    if (page === 'update-emi-pdc') {
      setIsSuccessModalOpen(true);
    } else {
      setCurrentPage(page);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'EMI-calc':
        return <EmiCalculator />;
      case 'search-customers':
        return <CustomerSearch />;
      case 'search-guarantors':
        return <GuarantorSearch />;
      case 'search-receipts':
        return <SearchReceipts />;
      case 'customer-entry':
        return <CustomerEntry />;
      case 'guarantor-entry':
        return <GuarantorEntry />;
      case 'co-borrower-entry':
        return <CoBorrowerEntry />;
      case 'loan-entry':
        return <LoanEntry />;
      case 'vehicle-entry':
        return <VehicleEntry />;
      case 'emi-receipt':
        return <EmiReceipt />;
      case 'dp-balance':
        return <DpBalance />;
      case 'add-dp-balance':
        return <AddDpBalance />;
      case 'add-other-charges':
        return <AddOtherCharges />;
      case 'other-charges-bal':
        return <OtherChargesBalance />;
      case 'check-all-dues':
        return <CheckAllDues />;
      case 'loan-settlement':
        return <LoanSettlement />;
      case 'edit-customer':
        return <EditCustomer />;
      case 'edit-co-borrower':
        return <EditCoBorrower />;
      case 'edit-guarantor':
        return <EditGuarantor />;
      case 'edit-loan':
        return <EditLoan />;
      case 'edit-vehicle':
        return <EditVehicle />;
      case 'change-guarantor':
        return <ChangeGuarantor />;
      case 'change-hp':
        return <ChangeHP />;
      case 'change-emi-date':
        return <ChangeEmiDate />;
      case 'edit-ext-ac-no':
        return <EditExtAcNo />;
      case 'update-regn-no':
        return <UpdateRegnNo />;
      case 'participation-chq':
        return <UpdateParticipationChq />;
      case 'ext-loan-ac-no':
        return <UpdateExtLoanAcNo />;
      case 'ext-chq-details':
        return <UpdateExtChqDetails />;
      case 'ext-emi-date':
        return <UpdateExtEmiDate />;
      case 'update-ins-details':
        return <UpdateInsDetails />;
      case 'save-ins-policy':
        return <SaveInsPolicy />;
      case 'save-veh-invoice':
        return <SaveVehInvoice />;
      case 'track-veh-docs':
        return <TrackVehDocs />;
      case 'chqs-in-clearing':
        return <ChqsInClearing />;
      case 'add-emi-pdc':
        return <AddEmiPdc />;
      case 'spoiled-pdc':
        return <SpoiledPdc />;
      case 'emi-due-report':
        return <EmiDueReport />;
      case 'emi-history':
        return <EmiHistory />;
      case 'receipt-history':
        return <ReceiptHistory />;
      case 'loan-ledger':
        return <LoanLedger />;
      case 'emi-expected':
        return <EmiExpected />;
      case 'emi-schedule':
        return <EmiSchedule />;
      case 'chq-return-report':
        return <ChqReturnReport />;
      case 'customerWOLoan':
        return <CustomerWOLoan />;
      case 'loanAcStatement':
        return <LoanAcStatement />;
      case 'firstLastEmiReport':
        return <FirstLastEmiReport />;
      case 'loansGiven':
        return <LoansGiven />;
      case 'loanStatusReport':
        return <LoanStatusReport />;
      case 'lccReport':
        return <LccReport />;
      case 'bucketList':
        return <BucketList />;
      case 'overdueLoans':
        return <OverdueLoans />;
      case 'recalledLoans':
        return <RecalledLoans />;
      case 'vehiclesDelivered':
        return <VehiclesDelivered />;
      case 'dealerWiseVehicle':
        return <DealerWiseVehicle />;
      case 'dealerPymtDue':
        return <DealerPymtDue />;
      case 'dealerPymtReport':
        return <DealerPymtReport />;
      case 'insuranceDueReport':
        return <InsuranceDueReport />;
      case 'vehiclesInPossession':
        return <VehiclesInPossession />;
      case 'collectionAgentLoanCount':
        return <CollectionAgentLoanCount />;
      case 'customerWoCollArea':
        return <CustomerWoCollArea />;
      case 'collectionReport':
        return <CollectionReport />;
      case 'collectionAgentReport':
        return <CollectionAgentReport />;
      case 'collectionAndPymtSent':
        return <CollectionAndPymtSent />;
      case 'receiptWiseCollection':
        return <ReceiptWiseCollection />;
      case 'dpCollection':
        return <DpCollection />;
      case 'otherChgsCollection':
        return <OtherChgsCollection />;
      case 'cancelledReceipts':
        return <CancelledReceipts />;
      case 'moneyInMarket':
        return <MoneyInMarket />;
      case 'updateOdLoans':
        return <UpdateOdLoans />;
      case 'externalResources':
        return <ExternalResources />;
      case 'users':
        return <Users />;
      case 'salesTeam':
        return <SalesTeam />;
      case 'salesAgents':
        return <SalesAgents />;
      case 'registrationAgents':
        return <RegistrationAgents />;
      case 'collectionAgents':
        return <CollectionAgents />;
      case 'collectionArea':
        return <CollectionArea />;
      case 'dealers':
        return <Dealers />;
      default:
        return <DashboardMetrics />;
    }
  };

  // If not authenticated, don't render anything (redirect will happen)
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <Head>
        <title>Rajhans Dashboard</title>
        <meta name="description" content="Rajhans Motors Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
        isOpen={isSidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden" style={{ minWidth: '1024px' }}>
        <Header user={user} onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
        
        <main 
          className="flex-1 overflow-y-auto flex"
        >
          <div className="container mx-auto px-6 py-8 max-w-7xl flex-1">
            {renderPage()}
          </div>
        </main>
      </div>
      
      {isSuccessModalOpen && (
        <SuccessModal 
          isOpen={isSuccessModalOpen}
          onClose={() => setIsSuccessModalOpen(false)}
          message="EMI PDC updated successfully!"
        />
      )}
    </div>
  );
}
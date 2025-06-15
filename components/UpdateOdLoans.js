import React, { useState } from 'react';
import SuccessModal from './SuccessModal';

const UpdateOdLoans = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdate = () => {
    setIsUpdating(true);
    // Simulate an API call for the update process
    setTimeout(() => {
      setIsUpdating(false);
      setIsModalOpen(true);
    }, 2000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="animate-fade-in-up max-w-lg mx-auto bg-gradient-to-br from-blue-100 via-white to-teal-100 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-200 relative backdrop-blur-xl bg-opacity-80">
        <h1 className="text-3xl font-extrabold text-blue-900 tracking-wider drop-shadow-lg uppercase border-b-4 border-teal-200 pb-4 mb-8 text-center">
          Overdue Loan Update
        </h1>
        <div className="flex flex-col items-center justify-center space-y-6 pt-6">
          <button
            onClick={handleUpdate}
            disabled={isUpdating}
            className="px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
          >
            {isUpdating ? 'Updating...' : 'Update Now'}
          </button>
        </div>
      </div>
      <SuccessModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Success"
        message="Overdue Loan Update Completed Successfully."
      />
    </>
  );
};

export default UpdateOdLoans; 
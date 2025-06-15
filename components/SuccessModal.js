import React from 'react';

export default function SuccessModal({ isOpen, onClose, title, message }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-center items-center animate-fade-in">
      <div className="bg-green-200 p-8 rounded-lg shadow-xl border-2 border-green-300 text-center w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 underline">{title}</h2>
        <p className="text-gray-700 mb-6 text-base">{message}</p>
        <button
          onClick={onClose}
          className="bg-gray-200 text-gray-800 font-semibold py-2 px-10 rounded-md shadow-md hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
        >
          OK
        </button>
      </div>
       <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
} 
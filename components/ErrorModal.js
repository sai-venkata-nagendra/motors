import React from 'react';

export default function ErrorModal({ isOpen, onClose, title, message }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center animate-fade-in">
      <div className="bg-red-100 p-8 rounded-lg shadow-2xl border-2 border-red-300 text-center w-full max-w-sm transform transition-all duration-300 scale-95 hover:scale-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 underline">{title}</h2>
        <p className="text-gray-700 mb-8 text-lg">{message}</p>
        <button
          onClick={onClose}
          className="bg-white text-red-700 font-bold py-2 px-8 rounded-lg shadow-md hover:bg-red-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
        >
          OK
        </button>
      </div>
       <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
} 
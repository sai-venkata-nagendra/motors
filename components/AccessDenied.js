import React from 'react';
import { Ban } from 'lucide-react';

const AccessDenied = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
      <Ban className="w-24 h-24 text-red-500 mb-4" />
      <h1 className="text-2xl font-bold text-red-500">Sorry!!</h1>
      <p className="text-lg text-red-500 mt-2">You do not have access to this page.</p>
    </div>
  );
};

export default AccessDenied; 
import React from 'react';

const bucketData = [
    { size: '1', count: 343 },
    { size: '2', count: 180 },
    { size: '3', count: 143 },
    { size: '4', count: 87 },
    { size: '5', count: 61 },
    { size: '6', count: 61 },
    { size: 'Above 6', count: 1981 },
];

export default function BucketList() {
    return (
        <div 
            id="bucketList" 
            className="animate-fade-in-up max-w-7xl mx-auto bg-gradient-to-br from-gray-100 via-white to-blue-100 rounded-3xl shadow-2xl p-8 mt-8 border border-gray-200"
        >
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-extrabold text-gray-800 inline-block drop-shadow-md">
                    Bucket Size Details
                </h1>
                <div className="w-40 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-4 border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-700 underline decoration-blue-300 decoration-2 underline-offset-4">
                    Current Bucket-Wise Loan Count (Size - Count)
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-x-12 sm:gap-x-16 gap-y-6 pt-6">
                    {bucketData.map((item) => (
                        <div key={item.size} className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl shadow-md border border-gray-200 w-32 h-28 transition-transform hover:scale-105 hover:shadow-xl">
                            <span className="text-xl font-bold text-gray-800">{item.size}</span>
                            <span className="text-3xl font-bold text-red-600 drop-shadow-sm mt-2">{item.count}</span>
                        </div>
                    ))}
                </div>
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
} 
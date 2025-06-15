import React, { useState, useEffect } from 'react';

export default function MongoDBStatus() {
  const [status, setStatus] = useState('checking');
  
  useEffect(() => {
    const checkMongoDBStatus = async () => {
      try {
        const response = await fetch('/api/health');
        const data = await response.json();
        
        if (response.ok && data.mongodb) {
          setStatus('connected');
        } else {
          setStatus('error');
        }
      } catch (error) {
        console.error('Error checking MongoDB status:', error);
        setStatus('error');
      }
    };
    
    checkMongoDBStatus();
  }, []);
  
  if (status === 'checking') {
    return (
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <div className="animate-pulse h-2 w-2 rounded-full bg-yellow-500"></div>
        <span>Checking MongoDB connection...</span>
      </div>
    );
  }
  
  if (status === 'error') {
    return (
      <div className="flex items-center space-x-2 text-sm text-red-500">
        <div className="h-2 w-2 rounded-full bg-red-500"></div>
        <span>MongoDB not connected. Check your .env.local file.</span>
      </div>
    );
  }
  
  return (
    <div className="flex items-center space-x-2 text-sm text-green-500">
      <div className="h-2 w-2 rounded-full bg-green-500"></div>
      <span>MongoDB connected</span>
    </div>
  );
} 
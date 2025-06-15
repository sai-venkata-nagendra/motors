import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

export default function UserProfile() {
  const { user, getToken } = useAuth();
  const [userData, setUserData] = useState({
    userId: '',
    name: '',
    loginId: '',
    role: '',
    mobile: '',
    email: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (!user) return;
        
        // For now, we'll just use the user data from AuthContext
        setUserData({
          userId: user.userId || 'RAM0000U',
          name: user.name || '',
          loginId: user.loginId || '',
          role: user.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : '',
          mobile: user.mobile || '',
          email: user.email || ''
        });
      } catch (err) {
        setError('Failed to load user profile');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      setLoading(true);
      
      // In a real implementation, you would update the user profile here
      // For now, we'll just show a success message
      
      setTimeout(() => {
        setSuccess('Profile updated successfully');
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError(err.message || 'Failed to update profile');
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading && !userData.userId) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-6">User Profile</h1>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          {success}
        </div>
      )}
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">User ID:</label>
          <div className="mt-1 text-lg">{userData.userId}</div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">User Name:</label>
          <div className="mt-1 text-lg">{userData.name}</div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Login ID:</label>
          <div className="mt-1 text-lg">{userData.loginId}</div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">User Role:</label>
          <div className="mt-1 text-lg">{userData.role}</div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Mobile No.:</label>
          <input
            type="tel"
            name="mobile"
            value={userData.mobile}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
      
      <div className="mt-6 flex items-center">
        <a href="#" className="text-blue-500 hover:text-blue-700 mr-6">Change Password</a>
        
        <button
          type="button"
          onClick={handleUpdate}
          disabled={loading}
          className="ml-auto inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {loading ? 'Updating...' : 'Update'}
        </button>
      </div>
    </div>
  );
} 
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './AuthContext';

export default function SignupForm() {
  const router = useRouter();
  const { login } = useAuth();
  const fileInputRef = useRef(null);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [previewImage, setPreviewImage] = useState(null);
  
  const [formData, setFormData] = useState({
    userId: `RAM${Math.floor(1000 + Math.random() * 9000)}U`,
    name: '',
    loginId: '',
    role: 'User',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
    presentAddress: {
      address1: '',
      address2: '',
      city: '',
      state: '',
      pincode: ''
    },
    permanentAddress: {
      address1: '',
      address2: '',
      city: '',
      state: '',
      pincode: ''
    },
    officeAddress: {
      address1: '',
      address2: '',
      city: '',
      state: '',
      pincode: ''
    },
    profileImage: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        profileImage: file
      }));
      
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSameAsPresent = (e) => {
    if (e.target.checked) {
      setFormData(prev => ({
        ...prev,
        permanentAddress: { ...prev.presentAddress }
      }));
    }
  };

  const clearForm = () => {
    setFormData({
      userId: `RAM${Math.floor(1000 + Math.random() * 9000)}U`,
      name: '',
      loginId: '',
      role: 'User',
      mobile: '',
      email: '',
      password: '',
      confirmPassword: '',
      presentAddress: {
        address1: '',
        address2: '',
        city: '',
        state: '',
        pincode: ''
      },
      permanentAddress: {
        address1: '',
        address2: '',
        city: '',
        state: '',
        pincode: ''
      },
      officeAddress: {
        address1: '',
        address2: '',
        city: '',
        state: '',
        pincode: ''
      },
      profileImage: null
    });
    setPreviewImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      setLoading(true);
      
      // For now, we'll use the regular signup endpoint
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role.toLowerCase(),
          userId: formData.userId,
          loginId: formData.loginId,
          mobile: formData.mobile,
          addresses: {
            present: formData.presentAddress,
            permanent: formData.permanentAddress,
            office: formData.officeAddress
          }
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      // Log the user in with the returned token and user data
      login(data.user, data.token);
      
      setSuccess('Account created successfully! Redirecting to dashboard...');
      
      // Redirect to dashboard after a short delay
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-gray-100"
      style={{ 
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-6xl mx-auto p-6 md:p-10 bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl">
        <h1 className="text-2xl md:text-4xl font-extrabold uppercase tracking-wider text-blue-900 border-b-4 border-teal-200 pb-2 mb-8 drop-shadow-lg">
          User Registration
        </h1>
        
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        
        {success && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {success}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left column with image upload */}
            <div className="md:col-span-3">
              <div className="flex flex-col items-center space-y-4">
                <div 
                  onClick={triggerFileInput}
                  className="w-28 h-32 bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 rounded-lg flex items-center justify-center cursor-pointer shadow-inner overflow-hidden"
                >
                  {previewImage ? (
                    <img src={previewImage} alt="Profile Preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-gray-400 text-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Upload Photo
                    </div>
                  )}
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
                <p className="text-xs text-gray-500">Click to upload profile photo</p>
              </div>
            </div>
            
            {/* Right column with basic info */}
            <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="userId" className="block text-sm font-semibold text-blue-900">
                  User ID
                </label>
                <input
                  type="text"
                  id="userId"
                  name="userId"
                  value={formData.userId}
                  readOnly
                  className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-blue-200 rounded text-gray-700 font-bold"
                />
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-blue-900">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-blue-200 rounded"
                />
              </div>
              
              <div>
                <label htmlFor="loginId" className="block text-sm font-semibold text-blue-900">
                  Login ID
                </label>
                <input
                  type="text"
                  id="loginId"
                  name="loginId"
                  value={formData.loginId}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-blue-200 rounded"
                />
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-blue-900">
                  User Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-blue-200 rounded"
                >
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                  <option value="Supervisor">Supervisor</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="mobile" className="block text-sm font-semibold text-blue-900">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="mt-1 block w-full px-3 py-2 border border-blue-200 rounded"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-blue-900">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-blue-200 rounded"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-blue-900">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  className="mt-1 block w-full px-3 py-2 border border-blue-200 rounded"
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-blue-900">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-blue-200 rounded"
                />
              </div>
            </div>
          </div>
          
          {/* Address Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-blue-800 border-b-2 border-teal-200 pb-2">Address Information</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Present Address */}
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-900">Present Address</h3>
                <input name="presentAddress.address1" value={formData.presentAddress.address1} onChange={handleChange} placeholder="Address Line 1" className="input-glass" />
                <input name="presentAddress.address2" value={formData.presentAddress.address2} onChange={handleChange} placeholder="Address Line 2" className="input-glass" />
                <input name="presentAddress.city" value={formData.presentAddress.city} onChange={handleChange} placeholder="City" className="input-glass" />
                <input name="presentAddress.state" value={formData.presentAddress.state} onChange={handleChange} placeholder="State" className="input-glass" />
                <input name="presentAddress.pincode" value={formData.presentAddress.pincode} onChange={handleChange} placeholder="Pincode" className="input-glass" />
              </div>

              {/* Permanent Address */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-blue-900">Permanent Address</h3>
                  <label htmlFor="sameAsPresent" className="flex items-center text-xs text-gray-600">
                    <input type="checkbox" id="sameAsPresent" onChange={handleSameAsPresent} className="mr-1 h-3 w-3" />
                    Same as Present
                  </label>
                </div>
                <input name="permanentAddress.address1" value={formData.permanentAddress.address1} onChange={handleChange} placeholder="Address Line 1" className="input-glass" />
                <input name="permanentAddress.address2" value={formData.permanentAddress.address2} onChange={handleChange} placeholder="Address Line 2" className="input-glass" />
                <input name="permanentAddress.city" value={formData.permanentAddress.city} onChange={handleChange} placeholder="City" className="input-glass" />
                <input name="permanentAddress.state" value={formData.permanentAddress.state} onChange={handleChange} placeholder="State" className="input-glass" />
                <input name="permanentAddress.pincode" value={formData.permanentAddress.pincode} onChange={handleChange} placeholder="Pincode" className="input-glass" />
              </div>
              
              {/* Office Address */}
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-900">Office Address</h3>
                <input name="officeAddress.address1" value={formData.officeAddress.address1} onChange={handleChange} placeholder="Address Line 1" className="input-glass" />
                <input name="officeAddress.address2" value={formData.officeAddress.address2} onChange={handleChange} placeholder="Address Line 2" className="input-glass" />
                <input name="officeAddress.city" value={formData.officeAddress.city} onChange={handleChange} placeholder="City" className="input-glass" />
                <input name="officeAddress.state" value={formData.officeAddress.state} onChange={handleChange} placeholder="State" className="input-glass" />
                <input name="officeAddress.pincode" value={formData.officeAddress.pincode} onChange={handleChange} placeholder="Pincode" className="input-glass" />
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-end gap-4 pt-6 border-t border-gray-300">
            <button
              type="button"
              onClick={clearForm}
              className="px-6 py-3 bg-gradient-to-r from-red-400 to-red-500 text-white font-medium rounded-lg shadow-md hover:from-red-500 hover:to-red-600 transition-all"
            >
              Clear All
            </button>
            
            <button
              type="submit"
              disabled={loading}
              className="px-10 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold text-lg rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-500 transition-all tracking-wide"
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </div>
        </form>
        
        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          form {
            animation: fade-in-up 0.5s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
}

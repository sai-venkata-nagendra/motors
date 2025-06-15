import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

// Create the context
const AuthContext = createContext();

// Provider component that wraps the app and makes auth object available to any child component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Load user from localStorage on initial render
  useEffect(() => {
    const loadUserFromStorage = async () => {
      try {
        // Check if we're on the client-side
        if (typeof window === 'undefined') {
          setLoading(false);
          return;
        }
        
        const token = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        
        if (token && storedUser) {
          // Set user from localStorage first for quick UI update
          setUser(JSON.parse(storedUser));
          
          // Then validate token with backend
          try {
            const response = await fetch('/api/auth/user', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });

            if (response.ok) {
              const data = await response.json();
              setUser(data.user);
            } else {
              // If token is invalid, clear localStorage
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              setUser(null);
            }
          } catch (error) {
            console.error('Error validating token:', error);
            // Clear localStorage on error
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setUser(null);
          }
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserFromStorage();
  }, []);

  // Login function
  const login = (userData, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return !!user;
  };

  // Get auth token
  const getToken = () => {
    return typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  };

  // Context value
  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated,
    getToken
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 
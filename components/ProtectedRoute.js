import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './AuthContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Check if we're on the client-side
    if (typeof window !== 'undefined') {
      // If not loading and not authenticated, redirect to signin
      if (!loading && !isAuthenticated()) {
        router.push('/signin');
      }
    }
  }, [loading, isAuthenticated, router]);

  // Show nothing while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // If authenticated, show the children (the protected page)
  return isAuthenticated() ? children : null;
} 
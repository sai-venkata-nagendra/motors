// pages/_app.js
import '../styles/globals.css'
import 'react-datepicker/dist/react-datepicker.css'
import { AuthProvider } from '../components/AuthContext'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </AuthProvider>
  )
}

function AppWrapper({ children }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // Check if we're on the client-side
    if (typeof window !== 'undefined') {
      const publicPages = ['/signin', '/signup']
      const path = router.pathname
      
      // If not on a public page, check for token
      if (!publicPages.includes(path)) {
        const token = localStorage.getItem('token')
        
        // If no token, redirect to signin
        if (!token) {
          router.push('/signin')
          return
        }
      }
      
      setIsLoading(false)
    }
  }, [router.pathname])
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }
  
  return children
}

export default MyApp
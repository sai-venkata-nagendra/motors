import React from 'react';

/**
 * ResponsiveTable - A wrapper component to make tables horizontally scrollable on smaller screens
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The table element to be rendered
 * @param {string} props.className - Optional additional CSS classes
 */
export default function ResponsiveTable({ children, className = '' }) {
  return (
    <div className={`w-full overflow-x-auto shadow rounded-lg ${className}`}>
      {children}
    </div>
  );
} 
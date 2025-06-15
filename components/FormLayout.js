import React from 'react';

/**
 * FormLayout - A layout component for forms
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The form elements
 * @param {string} props.className - Optional additional CSS classes
 * @param {number} props.columns - Number of columns (default: 2)
 * @param {string} props.gap - Gap between form elements (default: 'gap-6')
 * @param {string} props.title - Optional form title
 */
export default function FormLayout({ 
  children, 
  className = '', 
  columns = 2, 
  gap = 'gap-6',
  title
}) {
  // Determine grid columns class based on provided columns
  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4'
  }[columns] || 'grid-cols-2';

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      {title && (
        <h2 className="text-xl font-bold text-blue-800 mb-6">{title}</h2>
      )}
      <div className={`grid grid-cols-1 md:grid-cols-2 ${gap}`}>
        {children}
      </div>
    </div>
  );
} 
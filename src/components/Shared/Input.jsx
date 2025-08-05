import React from 'react';

const Input = ({
  label,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const inputClasses = `
    input-field
    ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''}
    ${disabled ? 'bg-gray-700 cursor-not-allowed opacity-50' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-bold text-white">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClasses}
        {...props}
      />
      {error && (
        <div className="text-sm text-red-400 bg-red-900/30 p-2 rounded-lg border border-red-500/30 font-medium">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;

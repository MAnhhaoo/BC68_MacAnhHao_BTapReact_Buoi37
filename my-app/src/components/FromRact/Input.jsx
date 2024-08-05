import React from 'react'

const Input = ({ type, name, placeholder, value, onChange, contentlabel, onBlur, error, touched }) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">{contentlabel}</label>
      <input
        type={type}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {touched && error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  )
}

export default Input

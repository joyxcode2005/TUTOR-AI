import React from 'react'

interface InputFieldProps {
  label: string;
  placeholder: string;
}


const InputField = ({label, placeholder} : InputFieldProps) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input id={label} placeholder={placeholder} className='border p-2 rounded-md' />
    </div>
  )
}

export default InputField

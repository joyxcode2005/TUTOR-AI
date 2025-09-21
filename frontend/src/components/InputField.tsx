import React from 'react'

interface InputFieldProps {
  label: string;
  placeholder: string;
}


const InputField = ({ label, placeholder }: InputFieldProps) => {
  return (
    <div className='flex flex-col w-[60%] gap-2'>
      <label htmlFor={label}>{label}</label>
      <input id={label} placeholder={placeholder} className=' p-2 rounded-[15px] bg-[#D9D9D9] text-[#9F9F9F] h-12 text-[0.85rem]' />
    </div>
  )
}

export default InputField

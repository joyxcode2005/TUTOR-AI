import React from 'react'

interface InputFieldProps {
  label: string;
  placeholder: string;
}


const InputField = ({ label, placeholder }: InputFieldProps) => {
  return (
    <div className='flex flex-col w-[60%] gap-2'>
      <label htmlFor={label} className='font-[productsans] text-[1.1rem]'>{label}</label>
      <input id={label} placeholder={placeholder} className=' p-2 pl-5 rounded-[15px] bg-[#D9D9D9] text-[#9F9F9F] h-12 text-[0.85rem] font-[productsans]' />
    </div>
  )
}

export default InputField

import React from 'react'
import { Search } from 'lucide-react'

export const SearchBox = () => {
  return (
    <div className='flex bg-[#F4F4F4] rounded-full w-[40%] h-[5vh] justify-center items-center'>

      <Search className='text-[#A4A4A4]'/>
      <input type="search" placeholder='Search' className='text-center font-[productsans] text-[#535353] font-medium rounded-full'/>
    </div>
  )
}

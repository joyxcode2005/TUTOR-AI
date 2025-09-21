import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'


const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="grid grid-cols-[280px_1fr]">
      <Sidebar />
     <div>
        <Navbar />
        {children}
     </div>
    </div>
  )
}

export default layout
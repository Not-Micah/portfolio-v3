import React from 'react'

const Versify = () => {
  return (
    <div
      className="
      project-card-container
      bg-[#FFFBF6] flex flex-col gap-y-8"
    >
        <div className='w-[50%] h-[5%] bg-black rounded-lg shadow-sm' />
        <div className="w-full h-[20%] flex gap-x-2">
            <div className='w-[80%] h-full bg-black/20 rounded-lg shadow-sm' />
            <div className='w-[20%] h-full bg-[#E5E7EB] rounded-lg shadow-sm' />
        </div>
        <div className='w-[70%] h-[10%] bg-[#F1EFEE] rounded-lg shadow-sm
        flex flex-col justify-center items-end p-1'>
            <div className="w-[8px] h-[8px] bg-black/40 rounded-full shadow-sm" />
        </div>
    </div>
  )
}

export default Versify
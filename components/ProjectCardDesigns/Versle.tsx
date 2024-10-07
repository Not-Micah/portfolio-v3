import React from 'react'

const Versle = () => {
  return (
    <div
      className="
      project-card-container
      bg-white flex flex-col gap-y-2"
    >
        <div className='h-[30%] w-[90%] self-center bg-black/20 rounded-lg shadow-sm' />
        {
          Array.from({ length: 5 }).map((_, index) => (
            <div className={`h-[10%] w-full rounded-lg shadow-sm
                ${index === 0 || index === 4 ? "bg-[#5A594E]" : "bg-[#EFEFE6]"}`} />
          ))
        }
    </div>
  )
}

export default Versle
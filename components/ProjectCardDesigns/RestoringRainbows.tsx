import React from 'react'

const RestoringRainbows = () => {
  return (
    <div
      className="
      project-card-container
      bg-white flex flex-col gap-y-2"
    >
        <div className="h-[30%] w-full bg-[#E2F1FD] rounded-lg shadow-sm" />
        {
          Array.from({ length: 5 }).map((_, index) => (
            <div className="h-[5%] w-full bg-black/[4.5%] rounded-lg shadow-sm" />
          ))
        }
    </div>
  )
}

export default RestoringRainbows
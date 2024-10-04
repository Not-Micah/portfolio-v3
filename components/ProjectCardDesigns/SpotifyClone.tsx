import React from 'react'

const SpotifyClone = () => {
  return (
    <div
      className="
      project-card-container
      bg-black grid grid-cols-2 gap-x-2"
    >
      <div className="flex flex-col gap-y-2">
        <div className="h-[30%] w-full bg-[#171717] rounded-lg shadow-sm
        flex flex-col p-2">
            <div className="h-[10px] w-[10px] self-end bg-[#9A9A9A] rounded-full shadow-sm" />
        </div>
        <div className="h-full w-full bg-[#171717] rounded-lg shadow-sm" />
      </div>
      <div className="h-full w-full bg-[#171717] rounded-lg shadow-sm
      flex flex-col p-2">
        <div className="h-[20%] w-full bg-[#2A3A36] rounded-lg shadow-sm" />
      </div>
    </div>
  )
}

export default SpotifyClone
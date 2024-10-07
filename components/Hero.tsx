import React from 'react'

const Hero = () => {
  return (
    <div className="max-w-[1200px] py-52 px-8
    flex flex-col justify-start items-start relative">
        <svg viewBox="0 0 52 24" fill="#FFFFFF" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-emerald-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
                <pattern id="d0d83814-78b6-480f-9a5f-7f637616b267" x="0" y="0" width=".135" height=".30">
                    <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
            </defs>
            <rect fill="url(#d0d83814-78b6-480f-9a5f-7f637616b267)" width="52" height="24">
            </rect>
        </svg>
        <h3 className='text-6xl text-white font-semibold'>Hi, I'm Micah. A web developer based in Indonesia. 👋</h3>
    </div>
  )
}

export default Hero
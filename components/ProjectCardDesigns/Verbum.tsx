import React from "react";

const Verbum = () => {
  return (
    <div
      className="
      project-card-container
      bg-[#FEFDFC] grid grid-cols-2 gap-x-2"
    >
      <div className="flex flex-col gap-y-2">
        <div className="h-[20%] w-full bg-[#FFC61C] rounded-lg shadow-sm" />
        {
            Array.from({ length: 2 }).map((_, index) => (
                <div className="h-[15%] w-full bg-[#98C3FF] rounded-lg shadow-sm
                flex justify-end items-center p-2">
                    <div className="rounded-full h-[10px] w-[10px] bg-[#7597C4]" />
                </div>
            ))
        }
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="h-[10%] w-full bg-[#F3F4F6] rounded-full shadow-sm" />
        {
            Array.from({ length: 3 }).map((_, index) => (
                <div className="h-[30%] w-full bg-white rounded-lg shadow-sm" />
            ))
        }
      </div>
    </div>
  );
};

export default Verbum;
